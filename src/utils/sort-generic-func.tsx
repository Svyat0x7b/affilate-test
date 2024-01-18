type SortableType = {
    [key: string]: number | string;
};

type GenericType<T extends SortableType> = T[];

export function sortAndPaginate<T extends SortableType>(
    slice: GenericType<T>,
    sortKey: keyof T,
    sortOrder: string,
): T[] {
    return slice
        .sort((a, b) => {
            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
            } else if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortOrder === 'asc'
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            } else {
                return 0;
            }
        })
        .slice(0, 5);
}
