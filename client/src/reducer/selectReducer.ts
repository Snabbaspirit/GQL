import { SelectActions, TDefaultOption, TDefaultOptions } from '../types/types';

export type TDefaultSelectState = {
    newValue: TDefaultOption;
    selectedValue: TDefaultOption | null;
    autocompleteOptions: TDefaultOptions;
    isInputError: boolean;
    isSubmitting: boolean;
};

export const selectReducer = (
    state: TDefaultSelectState,
    action: {
        type: SelectActions;
        payload: TDefaultOption | null | TDefaultOptions | boolean;
    }
) => {
    switch (action.type) {
        case SelectActions.SET_NEW_VALUE: {
            return {
                ...state,
                newValue: action.payload as TDefaultOption
            };
        }
        case SelectActions.SET_SELECTED_VALUE: {
            return {
                ...state,
                selectedValue: action.payload as TDefaultOption
            };
        }
        case SelectActions.SET_AUTOCOMPLETE_OPTIONS: {
            return {
                ...state,
                autocompleteOptions: action.payload as TDefaultOptions
            };
        }
        case SelectActions.SET_IS_INPUT_ERROR: {
            return {
                ...state,
                isInputError: action.payload as boolean
            };
        }
        case SelectActions.SET_IS_SUBMITTING: {
            return {
                ...state,
                isSubmitting: action.payload as boolean
            };
        }
    }
};
