import { rankItem } from '@tanstack/match-sorter-utils';
import type { FilterFn } from '@tanstack/react-table';

export const fuzzyFilter: FilterFn<unknown> = (row, columnId, value, addMeta) => {
	// Rank the item
	const itemRank = rankItem(row.getValue(columnId), value);

	// Store the itemRank info
	addMeta({
		itemRank,
	});

	// Return if the item should be filtered in/out
	return itemRank.passed;
};
