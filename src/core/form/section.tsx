import React from 'react';

import { cn } from '@/lib/utils';

import type { IFormSectionProps } from './types';

const FormSection: React.FC<IFormSectionProps> = ({ children, className, title, extraHeader }) => {
	if (title) {
		return (
			<div className='overflow-hidden rounded-md shadow-xs'>
				<div className='bg-primary flex flex-col justify-between gap-1 py-2 pr-2 pl-4 sm:flex-row sm:items-center'>
					<h3 className='text-primary-foreground text-lg font-medium'>{title}</h3>
					{extraHeader}
				</div>
				<div
					className={cn(
						'bg-base grid grid-cols-1 gap-2.5 rounded-b-md border p-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3',
						className
					)}
				>
					{children}
				</div>
			</div>
		);
	}
	return (
		<div
			className={cn(
				'bg-base grid grid-cols-1 gap-2.5 rounded-md border p-4 shadow-xs sm:grid-cols-2 sm:gap-4 lg:grid-cols-3',
				className
			)}
		>
			{children}
		</div>
	);
};

export default FormSection;
