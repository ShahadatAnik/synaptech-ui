import { useCallback } from 'react';
import { SearchIcon } from 'lucide-react';
import { useTable } from '@/hooks';

import DebouncedInput from '@/components/ui/debounce-input';

import TableTitle from '.';

const TableTitleHeader = () => {
	const { title, globalFilterValue, table } = useTable();

	// Memoize the callback for setting global filter
	const setGlobalFilter = useCallback((value: string | number) => table.setGlobalFilter(value), [table]);

	return (
		<div className='bg-primary flex items-center justify-between gap-2 rounded-t-md px-4 py-3'>
			<TableTitle
				title={title}
				titleClassName='text-2xl font-semibold capitalize leading-tight text-primary-foreground md:text-3xl'
			/>
			<DebouncedInput
				icon={<SearchIcon className='size-5 text-white/50' />}
				value={globalFilterValue ?? ''}
				onChange={setGlobalFilter}
				className='border-accent/10 from-accent/20! to-accent/30! h-10 w-full max-w-[200px] bg-linear-to-r text-white lg:max-w-[300px]'
				placeholder='Search...'
			/>
		</div>
	);
};

export default TableTitleHeader;
