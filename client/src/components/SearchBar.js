import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const debouncedSearch = debounce(async (searchTerm) => {
        console.log(process.env.REACT_APP_API_URL);
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL, {
                params: {
                    q: searchTerm,
                },
            });
            onSearch(response.data);
        } catch (error) {
            console.error("Search error:", error);
            onSearch([], error);
        }
    }, 500);

    useEffect(() => {
        if (query) {
            debouncedSearch(query);
        }
        return () => debouncedSearch.cancel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;
