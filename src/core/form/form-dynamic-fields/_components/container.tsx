import React from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { type DynamicFieldsProps } from '../types';

interface IProps extends Pick<DynamicFieldsProps, 'handleAdd' | 'extraHeader' | 'title'> {
	children: React.ReactNode;
}

const DynamicFieldContainer: React.FC<IProps> = ({ title, extraHeader, handleAdd, children }) => {
	return (
		<div className='overflow-hidden rounded-md shadow-xs'>
			<div className='bg-primary flex items-center justify-between py-2 pr-2 pl-4'>
				<h3 className='text-primary-foreground text-lg font-medium'>{title || 'Dynamic Fields'}</h3>

				<div className='flex items-center gap-4'>
					{extraHeader}
					{handleAdd && (
						<Button
							onClick={handleAdd}
							type='button'
							variant={'gradient-accent'}
							size={'xs'}
							className='gap-1 rounded'
						>
							<Plus className='size-4' />
							New
						</Button>
					)}
				</div>
			</div>

			{children}
		</div>
	);
};

export default DynamicFieldContainer;
