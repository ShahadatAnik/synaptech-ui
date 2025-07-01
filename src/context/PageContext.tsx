import { createContext } from 'react';

export interface IPageContext {
	pageName: string;
	readAccess: boolean;
	createAccess: boolean;
	updateAccess: boolean;
	deleteAccess: boolean;
}

const PageContext = createContext({} as IPageContext);

export default PageContext;
