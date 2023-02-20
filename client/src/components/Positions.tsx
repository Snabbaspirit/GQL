import { useQuery } from '@apollo/react-hooks';
import { ApplicantIndividualCompanyPosition } from '../../../server/src/generated/graphql';
import { QUERY_TYPE, useQueryRequest } from '../hooks/useQueryRequest';
import { CustomSelect } from './CustomSelect';
import { TPositionsQueryData } from '../types/types';

export const Positions = () => {
    const positionsQueryRequest = useQueryRequest({
        pageID: 1,
        type: QUERY_TYPE.POSITINOS
    });

    const { data } = useQuery<TPositionsQueryData>(positionsQueryRequest);

    return (
        <CustomSelect<ApplicantIndividualCompanyPosition[]>
            options={data?.applicantIndividualCompanyPositions.data ?? []}
        />
    );
};
