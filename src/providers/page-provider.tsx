import { useEffect, useMemo } from 'react';
import { PageContext } from '@/context';
import type { IPageContext } from '@/context/PageContext';

interface IPageProviderProps {
	pageName: string;
	pageTitle: string;
	children: React.ReactNode;
	pageAccess: string[];
}

const PageProvider: React.FC<IPageProviderProps> = ({ children, pageName, pageTitle, pageAccess }) => {
	const readAccess = pageAccess.includes('read');
	const createAccess = pageAccess.includes('create');
	const updateAccess = pageAccess.includes('update');
	const deleteAccess = pageAccess.includes('delete');

	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	const value = useMemo(
		(): IPageContext => ({
			pageName,
			readAccess,
			createAccess,
			updateAccess,
			deleteAccess,
		}),
		[pageName, readAccess, createAccess, updateAccess, deleteAccess]
	);
	return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageProvider;
