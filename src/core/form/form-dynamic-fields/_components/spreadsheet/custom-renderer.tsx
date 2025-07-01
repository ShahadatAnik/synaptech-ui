import { type FieldDef } from '@/core/form/form-dynamic-fields/types';
import { ErrorMessage } from '@hookform/error-message';
import Handsontable from 'handsontable';
import { ChevronDown } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

interface ICustomRendererProps {
	TD?: HTMLTableCellElement;
	value?: string | number;
	row?: number;
	col?: number;
	cellProperties?: Handsontable.CellProperties;
	field: FieldDef;
	fieldName: string;
}

// Custom renderer Component
const CustomRenderer = (props: ICustomRendererProps) => {
	const {
		watch,
		formState: { errors },
	} = useFormContext();

	if (props.field.isLoading) {
		return <Skeleton className='h-6 w-full' />;
	}
	return (
		<div className='bg-gradient'>
			{props.field.type === 'custom' && (
				<div className='flex h-full min-h-6 items-center bg-transparent px-2'>
					{props.field.component(props.row || 0)}
				</div>
			)}
			{props.field.type === 'select' && (
				<div className='bg-gradient flex h-full min-h-6 justify-between bg-transparent px-3 py-2 text-sm'>
					{props.field.options.find((option) => option.value === props.value)?.label}
					<ChevronDown className='text-secondary/50 size-5' />
				</div>
			)}

			{(props.field.type === 'text' || props.field.type === 'number') && (
				<div
					className={cn(
						'bg-gradient text-foreground block h-full min-h-6 w-full px-3 py-2 text-sm font-normal'
					)}
				>
					{watch(`${props.fieldName}.${props.row}.${props.field.accessorKey}`)}
				</div>
			)}
			<ErrorMessage
				errors={errors}
				name={`${props.fieldName}.${props.row}.${props.field.accessorKey}`}
				render={({ message }) => <p className='text-destructive pb-2 pl-3 text-sm font-medium'>{message}</p>}
			/>
		</div>
	);
};

export default CustomRenderer;
