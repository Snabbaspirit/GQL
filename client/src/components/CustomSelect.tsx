import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { selectReducer } from '../reducer/selectReducer';
import { TDefaultOption, TDefaultOptions } from '../types/types';
import {
    setAutocompleteOptions,
    setIsInputError,
    setIsSubmitting,
    setNewValue,
    setSelectedValue
} from '../actions/actions';

const REGEX_PATTERN = /^[A-Za-z]+$/i;
const ERROR_TEXT = 'Only characters allowed';

const defaultSelectState = {
    newValue: { name: '' },
    selectedValue: null,
    autocompleteOptions: [],
    isInputError: false,
    isSubmitting: false
};

export const CustomSelect = <T extends TDefaultOptions>({
    options
}: {
    options: T;
}) => {
    const [state, dispatch] = React.useReducer(
        selectReducer,
        defaultSelectState
    );

    React.useEffect(() => {
        if (options.length !== 0) {
            dispatch(setAutocompleteOptions(options));
        }
    }, [options]);

    const handleSetSelectedValue = (
        event: React.SyntheticEvent<Element, Event>,
        value: TDefaultOption | null
    ) => {
        dispatch(setSelectedValue(value));
    };

    const handleSetNewValue = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = e.target.value;
        if (
            value.length > 0 &&
            !value.replace(/\s/g, '').match(REGEX_PATTERN)
        ) {
            dispatch(setIsInputError(true));
        } else {
            dispatch(setIsInputError(false));
        }
        dispatch(setNewValue({ name: value }));
    };

    const handleAddNewValue = () => {
        dispatch(setIsSubmitting(true));
        if (state.newValue.name.length === 0) {
            return;
        }

        if (!state.isInputError && !(state.newValue.name === ERROR_TEXT)) {
            dispatch(setSelectedValue(state.newValue));
            dispatch(setNewValue({ name: '' }));
            dispatch(
                setAutocompleteOptions([
                    ...state.autocompleteOptions,
                    state.newValue
                ])
            );
        } else {
            dispatch(setNewValue({ name: ERROR_TEXT }));
            return;
        }
    };

    return (
        <SelectWrapper>
            <Autocomplete
                value={state.selectedValue}
                options={state.autocompleteOptions}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                onChange={handleSetSelectedValue}
                renderInput={(params) => {
                    return <TextField {...params} label="Select a value..." />;
                }}
            />
            <label>Add new value</label>
            <StyledInput
                isError={state.isInputError && state.isSubmitting}
                value={state.newValue.name}
                onChange={handleSetNewValue}
            />
            <Button variant="outlined" onClick={handleAddNewValue}>
                Add element
            </Button>
        </SelectWrapper>
    );
};

const StyledInput = styled.input<{ isError: boolean }>`
    height: 30px;
    width: 300px;
    border: 1px solid ${({ isError }) => (isError ? 'red' : 'gray')};
    color: ${({ isError }) => (isError ? 'red' : 'gray')};
    &:focus {
        outline: none;
        box-shadow: ${({ isError }) => (isError ? '0px 0px 2px red' : 'none')};
    }
`;

const SelectWrapper = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
