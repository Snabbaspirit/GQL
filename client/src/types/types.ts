import {
    ApplicantIndividualCompanyPositionPaginator,
    ApplicantIndividualCompanyRelationPaginator
} from '../../../server/src/generated/graphql';

export type TPositionsQueryData = {
    applicantIndividualCompanyPositions: ApplicantIndividualCompanyPositionPaginator;
};

export type TRelationsQueryData = {
    applicantIndividualCompanyRelations: ApplicantIndividualCompanyRelationPaginator;
};

export type TDefaultOption = { name: string };
export type TDefaultOptions = Array<TDefaultOption>;

export enum SelectActions {
    SET_NEW_VALUE = 'SET_NEW_VALUE',
    SET_SELECTED_VALUE = 'SET_SELECTED_VALUE',
    SET_AUTOCOMPLETE_OPTIONS = 'SET_AUTOCOMPLETE_OPTIONS',
    SET_IS_INPUT_ERROR = 'SET_IS_INPUT_ERROR',
    SET_IS_SUBMITTING = 'SET_IS_SUBMITTING'
}
