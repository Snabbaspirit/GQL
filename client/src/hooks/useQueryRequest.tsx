import gql from 'graphql-tag';

export enum QUERY_TYPE {
    POSITINOS = 'ApplicantIndividualCompanyPositions',
    RELATIONS = 'ApplicantIndividualCompanyRelations'
}

type TUseQueryRequest = {
    pageID: number;
    type: QUERY_TYPE;
};

export const useQueryRequest = (requestData: TUseQueryRequest) => {
    const { type, pageID } = requestData;

    const firstSymbolToLowerCase = type[0].toLocaleLowerCase();
    const requestByQuery = firstSymbolToLowerCase + type.substring(1);

    return gql`
        query ${type} {
            ${requestByQuery}(page: ${pageID}) {
                data {
                    id
                    name
                }
                paginatorInfo {
                    currentPage
                    count
                    lastPage
                    perPage
                    total
                    hasMorePages
                }
            }
        }
    `;
};
