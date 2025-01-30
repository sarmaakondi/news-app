import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import PinnedArticles from "./components/PinnedArticles";

import "./App.css";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [pinned, setPinned] = useState([]);

    const handlePin = (article) => {
        if (!pinned.some((a) => a.id === article.id)) {
            setPinned([...pinned, article]);
        }
    };

    const handleUnPin = (article) => {
        setPinned(pinned.filter((a) => a.id !== article.id));
    };

    return (
        <div className="App">
            <h1>News Search</h1>
            <SearchBar onSearch={setSearchResults} />
            <ArticleList articles={searchResults} onPin={handlePin} />
            <PinnedArticles pinned={pinned} onUnPin={handleUnPin} />
        </div>
    );
}

export default App;
