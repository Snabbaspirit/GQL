import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { GraphQLError } from "graphql";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { readFileSync } from "fs";

import {
  ApplicantIndividualCompanyPositionPaginator,
  ApplicantIndividualCompanyRelationPaginator,
} from "./src/generated/graphql";

const PORT = 6006;
const GENERATED_LENGTH = 103;
const RECORDS_PER_PAGE = 20;
const typeDefs = readFileSync("./schema.graphql", { encoding: "utf8" });

const generateSimpleID = () => Math.random().toString(36).slice(2);

const generateSimpleMockWithLength = (length: number) =>
  Array.from(Array(length)).map((_, id) => ({
    id: generateSimpleID(),
    name: `Name of person ${id + 1}`,
  }));

class PageCoursorOutOfBounds extends GraphQLError {
  constructor(details: { availablePages: { first: number; last: number } }) {
    super(
      "Failed to find requested page. Out of bounds. Check extentions.details",
      {
        extensions: { details },
      }
    );
  }
}

export class ApplicantService {
  private static readonly perPage = RECORDS_PER_PAGE;
  private static readonly dataMock =
    generateSimpleMockWithLength(GENERATED_LENGTH);
  private static readonly lastPage = Math.ceil(
    this.dataMock.length / this.perPage
  );

  private static slicePageData(page: number = 1) {
    return this.dataMock.slice((page - 1) * this.perPage, page * this.perPage);
  }

  private static checkHasMorePages(pageLength: number) {
    const pageIsFull = pageLength === this.perPage;
    const hasExtras = this.dataMock.length % this.perPage !== 0;

    return pageIsFull && hasExtras;
  }

  private static getMockedDataWithPaginator(page: number = 1) {
    if (page < 1) {
      throw new PageCoursorOutOfBounds({
        availablePages: { first: 1, last: this.lastPage },
      });
    }

    const pageSlice = this.slicePageData(page);

    return {
      data: pageSlice,
      paginatorInfo: {
        currentPage: page,
        count: this.dataMock.length,
        lastPage: this.lastPage,
        perPage: this.perPage,
        total: this.dataMock.length,
        hasMorePages: this.checkHasMorePages(pageSlice.length),
      },
    };
  }

  getAllPositions(page: number): ApplicantIndividualCompanyPositionPaginator {
    return ApplicantService.getMockedDataWithPaginator(page);
  }

  getAllRelatiions(page: number): ApplicantIndividualCompanyRelationPaginator {
    return ApplicantService.getMockedDataWithPaginator(page);
  }
}

const makeResolvers = () => {
  const applicantSerivce = new ApplicantService();

  return {
    Query: {
      applicantIndividualCompanyPositions: (_parent, args) => {
        return applicantSerivce.getAllPositions(args.page);
      },
      applicantIndividualCompanyRelations: (_parent, args) => {
        return applicantSerivce.getAllRelatiions(args.page);
      },
    },
  };
};

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers: makeResolvers(),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
  });
}

startApolloServer();