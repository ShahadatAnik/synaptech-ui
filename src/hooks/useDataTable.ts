import { useContext } from 'react';
import { TableContext } from '@/context';

export const useDataTable = () => {
	const context = useContext(TableContext);

	if (!context) {
		throw new Error('useDataTable must be used within an TableProvider');
	}

	return context;
};
