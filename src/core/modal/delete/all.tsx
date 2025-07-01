import { useState } from 'react';
import type { IResponse } from '@/types';
import { ReloadIcon } from '@radix-ui/react-icons';
import { AxiosError } from 'axios';
import { useTable } from '@/hooks';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

import type { IDeleteAllModalProps } from '../types';

const DeleteAllModal: React.FC<IDeleteAllModalProps> = ({ deleteItems, setDeleteItems, url, deleteData, onClose }) => {
	const { table } = useTable();
	const [isLoading, setIsLoading] = useState(false);
	const handleConfirm = async () => {
		try {
			setIsLoading(true);
			const response = deleteItems
				?.filter((item) => item.checked)
				.map((item) => {
					return deleteData.mutate({
						url: `${url}/${item?.id}`,
						isOnCloseNeeded: false,
					});
				});

			if (response) {
				await Promise.all(response);
				onClose?.();
			}
		} catch (error: AxiosError<IResponse<any> | any> | any) {
			console.log({ error });
		} finally {
			setIsLoading(false);
			setDeleteItems(null);
			table.resetRowSelection();
		}
	};

	return (
		<AlertDialog open={!!deleteItems?.length}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure you want to delete the following items?</AlertDialogTitle>
					<AlertDialogDescription className='sr-only'>This action cannot be undone.</AlertDialogDescription>

					<ul className='space-y-3 pt-2'>
						{deleteItems !== null &&
							deleteItems.map((item) => (
								<li
									key={item.id}
									className='border-destructive/10 bg-destructive/5 text-destructive flex items-center gap-2 rounded-sm border px-3 py-2'
								>
									<Checkbox
										id={'item' + item.id}
										checked={item.checked}
										onCheckedChange={() => {
											const newItems = deleteItems?.map((e) =>
												e.id === item.id
													? {
															...e,
															checked: !e.checked,
														}
													: e
											);
											setDeleteItems(newItems);
										}}
										className='border-destructive text-destructive data-[state=checked]:bg-destructive size-4'
									/>
									<Label
										htmlFor={'item' + item.id}
										className={cn('text-sm', !item.checked && 'line-through')}
									>
										{item.name}
									</Label>
								</li>
							))}
					</ul>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => setDeleteItems(null)}>Cancel</AlertDialogCancel>
					<AlertDialogAction
						disabled={isLoading || !deleteItems?.filter((item) => item.checked).length}
						onClick={handleConfirm}
					>
						{isLoading && <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />}
						{isLoading ? 'Please wait...' : 'Confirm'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteAllModal;
