type SearchableType = {
    [key: string]: string | number;
};

type GenericSearchableType<T extends SearchableType> = T;

export function filterBySearchTerm<T extends SearchableType>(
    items: GenericSearchableType<T>[],
    searchTerm: string,
    searchableFields: string[],
): GenericSearchableType<T>[] {
    return items.filter((item) => {
        return searchableFields.some((field) => {
            const fieldValue = item[field];
            return fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
    });
}
