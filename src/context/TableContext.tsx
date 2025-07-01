import { createContext } from 'react';
import type { IResponse, ITableAdvanceFilter, ITableFacetedFilter, IToolbarOptions } from '@/types';
import type { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import type { Row, Table } from '@tanstack/react-table';
import type { DateRange } from 'react-day-picker';

export interface ITableContext<TData> {
	title: string;
	subtitle?: string;
	isEntry?: boolean;
	table: Table<TData>;
	isLoading?: boolean;
	handleCreate?: () => void;
	handleUpdate?: (row: Row<TData>) => void;
	handleDelete?: (row: Row<TData>) => void;
	handleRefetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<IResponse<any>, Error>>;
	handleDeleteAll?: (rows: Row<TData>[]) => void;
	initialDateRange: [Date | string, Date | string];
	globalFilterValue?: string;
	facetedFilters?: ITableFacetedFilter[];
	advanceFilters?: ITableAdvanceFilter[];
	toolbarOptions?: 'none' | IToolbarOptions[];
	enableRowSelection?: boolean;
	enableDefaultColumns?: boolean;
	start_date?: Date | string;
	end_date?: Date | string;
	onUpdate?: ({ range }: { range: DateRange }) => void;
	onClear?: () => void;
	isClear?: boolean;
}

const TableContext = createContext(null as ITableContext<any> | null);

export default TableContext;
