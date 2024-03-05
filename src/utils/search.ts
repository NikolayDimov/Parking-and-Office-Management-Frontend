import { useState, useEffect } from 'react';

interface UseFilterProps<T> {
    items: T[];
    initialItems?: T[];
    searchQuery?: string;
}

interface UseFilterResult<T> {
    filteredItems: T[];
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const useFilter = <T>({ items, initialItems }: UseFilterProps<T>): UseFilterResult<T> => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<T[]>(initialItems || items);

    useEffect(() => {
        const filterItems = () => {
            const filtered = items.filter((item) =>
                JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase()),
            );
            if (!arraysAreEqual(filtered, filteredItems)) {
                setFilteredItems(filtered);
            }
        };

        filterItems();
    }, [items, searchQuery, filteredItems]);

    return { filteredItems, setSearchQuery };
};

const arraysAreEqual = <T>(array1: T[], array2: T[]): boolean => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
};

export default useFilter;
