//
import React from 'react';
import type { CheckboxProps } from '@radix-ui/react-checkbox';
import type { DayPicker } from 'react-day-picker';
import type { ControllerFieldState, ControllerRenderProps, UseFormReturn, UseFormStateReturn } from 'react-hook-form';

type CalendarProps = React.ComponentProps<typeof DayPicker>;

interface InputProps extends React.ComponentProps<'input'> {
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
}

interface TextareaProps extends React.ComponentProps<'textarea'> {
	rows?: number;
}

// * form-textarea
export interface FormTextareaProps extends TextareaProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	placeholder?: string;
	optional?: boolean;
	disableLabel?: boolean;
}

// * form-select
export interface IFormSelectOption {
	label: string;
	value: string | number;
}

export interface FormSelectProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	placeholder?: string;
	optional?: boolean;
	options: IFormSelectOption[];
	isDisabled?: boolean;
	disableLabel?: boolean;
	valueType?: 'string' | 'number';
}

// * form-section
export interface IFormSectionProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
	extraHeader?: React.ReactNode;
}

// * form-react-select
export interface IFormSelectOption {
	label: string;
	value: string | number;
}

export interface FormReactSelectProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	placeholder?: string;
	optional?: boolean;
	options: IFormSelectOption[];
	isDisabled?: boolean;
	disableLabel?: boolean;
	isMulti?: boolean;
	menuPortalTarget?: any;
	valueType?: 'string' | 'number';
}

// * form-multi-select
export interface IFormSelectOption {
	label: string;
	value: string | number;
}

export interface FormMultiSelectProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	placeholder?: string;
	optional?: boolean;
	options: IFormSelectOption[];
	isDisabled?: boolean;
	disableLabel?: boolean;
}

// * form-join-input-unit
export interface FormJoinInputUnitProps extends InputProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	subLabel?: string;
	placeholder?: string;
	optional?: boolean;
	icon?: React.ReactNode;
	unit: string;
	disableLabel?: boolean;
}

// * form-join-input-select
export interface FormJoinInputSelectProps extends InputProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	subLabel?: string;
	placeholder?: string;
	optional?: boolean;
	icon?: React.ReactNode;
	selectField: {
		name: string;
		options: IFormSelectOption[];
		isDisabled?: boolean;
	};
}

// * form-input
export interface FormInputProps extends InputProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	subLabel?: string;
	placeholder?: string;
	optional?: boolean;
	icon?: React.ReactNode;
	disableLabel?: boolean;
}

// * form-date-picker
export interface FormDatePickerProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	subLabel?: string;
	placeholder?: string;
	optional?: boolean;
	icon?: React.ReactNode;
	disableLabel?: boolean;
	className?: string;
	calendarProps?: CalendarProps;
}

// * form-checkbox
export interface FormCheckboxProps extends CheckboxProps {
	field: ControllerRenderProps<any, any>;
	fieldState: ControllerFieldState;
	formState: UseFormStateReturn<any>;
	label?: string;
	placeholder?: string;
	optional?: boolean;
	icon?: React.ReactNode;
	disableLabel?: boolean;
	labelClassName?: string;
	isBoxed?: boolean;
}

// * form-add-edit-wrapper
export interface IFormAddEditWrapperProps {
	children: React.ReactNode;
	form: UseFormReturn<any, any, any>;
	onSubmit(values: any): void;
	title?: string;
}
