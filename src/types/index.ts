export type IStartEndDateProps = {
	start_date: Date | undefined;
	end_date: Date | undefined;
};

export type IAuthResponse = {
	status: number;
	type: string;
	message: string;
	token: string;
	user: IUser;
	can_access: { [key: string]: string };
};

export type IUser = {
	uuid: string;
	name: string;
};

export type IToast = {
	status: number;
	type: 'create' | 'insert' | 'delete' | 'error' | 'warning' | 'update' | string;
	message: string;
};

export type IResponse<T> = {
	toast: IToast;
	data: T;
	pagination: IPagination;
};

export type IPagination = {
	total_record: number;
	current_page: number;
	total_page: number;
	next_page: number | null;
	prev_page: number | null;
};

export type ITableAdvanceFilter = {
	state: boolean | undefined;
	label: string;
	onStateChange: () => void;
	clear: () => void;
};

export type ITableFacetedFilter = {
	id: string;
	title: string;
	options: {
		label: string;
		value: string;
		icon?: React.ComponentType<{ className?: string }>;
	}[];
};

export type IToolbarOptions =
	| 'all'
	| 'all-filter'
	| 'view'
	| 'date-range'
	| 'faceted-filter'
	| 'advance-filter'
	| 'export-csv'
	| 'export-pdf'
	| 'refresh'
	| 'new-entry';
