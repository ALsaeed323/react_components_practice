import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue) {
    try {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
        console.error(`Error parsing localStorage value for key '${key}':`, error);
        return initialValue;
    }
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error storing value to localStorage for key '${key}':`, error);
        }
    }, [key, value]);

    return [value, setValue];
}
