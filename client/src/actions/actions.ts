import { SelectActions, TDefaultOption, TDefaultOptions } from '../types/types';

export const setAutocompleteOptions = (options: TDefaultOptions) =>
    <const>{
        type: SelectActions.SET_AUTOCOMPLETE_OPTIONS,
        payload: options
    };

export const setSelectedValue = (value: TDefaultOption | null) =>
    <const>{
        type: SelectActions.SET_SELECTED_VALUE,
        payload: value
    };

export const setIsInputError = (isError: boolean) =>
    <const>{
        type: SelectActions.SET_IS_INPUT_ERROR,
        payload: isError
    };

export const setNewValue = (value: TDefaultOption) =>
    <const>{
        type: SelectActions.SET_NEW_VALUE,
        payload: value
    };

export const setIsSubmitting = (isSubmitting: boolean) =>
    <const>{
        type: SelectActions.SET_IS_SUBMITTING,
        payload: isSubmitting
    };
