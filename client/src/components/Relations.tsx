import { useQuery } from '@apollo/react-hooks';
import { QUERY_TYPE, useQueryRequest } from '../hooks/useQueryRequest';
import { CustomSelect } from './CustomSelect';
import { ApplicantIndividualCompanyRelation } from '../../../server/src/generated/graphql';
import { TRelationsQueryData } from '../types/types';

export const Relations = () => {
    const relationsQueryRequest = useQueryRequest({
        pageID: 1,
        type: QUERY_TYPE.RELATIONS
    });

    const { data } = useQuery<TRelationsQueryData>(relationsQueryRequest);

    return (
        <CustomSelect<ApplicantIndividualCompanyRelation[]>
            options={data?.applicantIndividualCompanyRelations.data ?? []}
        />
    );
};
