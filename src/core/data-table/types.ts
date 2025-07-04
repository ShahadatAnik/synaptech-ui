import * as React from 'react';
import type { IToolbarOptions } from '@/types';
import type { Column, ColumnDef, Table } from '@tanstack/react-table';
import type { DateRange } from 'react-day-picker';

interface TStartEndDate {
	start_date: Date | string | undefined;
	end_date: Date | string | undefined;
}

export type TTableExportCSV = TStartEndDate & {
	isEntry?: boolean;
	title: string;
	table: Table<any>;
};

export type TTableDateRange<T> = TStartEndDate & {
	table: Table<T>;
	onUpdate: (({ range }: { range: DateRange }) => void) | undefined;
	onClear?: () => void;
	isClear?: boolean;
	isSSR?: boolean;
};

export interface IDataTableEntryProps<TData, TValue> {
	title: string;
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	toolbarOptions?: 'none' | IToolbarOptions[];
}

interface TDefaultColumn<TData, TValue> {
	column: Column<TData, TValue>;
}

export interface TableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	isSSR?: boolean;
}

export type IFilterProps<TData, TValue> = TDefaultColumn<TData, TValue> & {
	showLabel?: boolean;
};

export interface TableFacetedFilterProps<TData, TValue> {
	column?: Column<TData, TValue>;
	title?: string;
	options: {
		label: string;
		value: string;
		icon?: React.ComponentType<{ className?: string }>;
	}[];
}
