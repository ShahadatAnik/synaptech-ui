import { useContext } from 'react';
import { TableContext } from '@/context';
import type { ITableContext } from '@/context/TableContext';

function useTable<T>(): ITableContext<T> {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error('useTable must be used within a TableProvider');
	}

	return context;
}

export default useTable;
