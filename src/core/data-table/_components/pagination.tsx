import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useTable } from '@/hooks';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import PaginateButtons from '../_helpers/paginate-buttons';

export function TablePagination() {
	const { table, enableRowSelection } = useTable();

	return (
		<div className='bg-base sticky right-0 bottom-0 left-0 z-50 shadow-lg'>
			<div className='border-secondary/10 flex w-full items-center justify-between overflow-hidden border-t px-6 py-3'>
				{enableRowSelection === true ? (
					<div className='text-muted-foreground flex-1 text-sm'>
						{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{' '}
						row(s) selected.
					</div>
				) : null}
				<div className='flex flex-1 items-center justify-between space-x-6 lg:space-x-8'>
					<div className='flex items-center space-x-2'>
						<p className='text-sm font-medium'>Rows per page</p>
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => {
								table.setPageSize(Number(value));
							}}
						>
							<SelectTrigger aria-label='Rows per page' className='h-8 w-[70px]'>
								<SelectValue placeholder={table.getState().pagination.pageSize} />
							</SelectTrigger>
							<SelectContent side='top'>
								{[10, 20, 30, 40, 50].map((pageSize) => (
									<SelectItem key={pageSize} value={`${pageSize}`}>
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<PaginateButtons
						onChange={(index) => {
							table.setPageIndex(index);
						}}
						currentPage={table.getState().pagination.pageIndex}
						totalPages={table.getPageCount()}
					/>
					<div className='flex items-center space-x-2'>
						<Button
							aria-label='Go to first page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<span className='sr-only'>Go to first page</span>
							<DoubleArrowLeftIcon className='h-4 w-4' />
						</Button>
						<Button
							aria-label='Go to previous page'
							variant='outline'
							className='h-8 w-8 p-0'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<span className='sr-only'>Go to previous page</span>
							<ChevronLeftIcon className='h-4 w-4' />
						</Button>
						<Button
							aria-label='Go to next page'
							variant='outline'
							className='h-8 w-8 p-0'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<span className='sr-only'>Go to next page</span>
							<ChevronRightIcon className='h-4 w-4' />
						</Button>
						<Button
							aria-label='Go to last page'
							variant='outline'
							className='hidden h-8 w-8 p-0 lg:flex'
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							<span className='sr-only'>Go to last page</span>
							<DoubleArrowRightIcon className='h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
