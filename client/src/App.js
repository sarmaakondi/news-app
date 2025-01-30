import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import PinnedArticles from "./components/PinnedArticles";

import "./App.css";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="App">
            <h1>News Search</h1>
            <SearchBar onSearch={setSearchResults} />
            <ArticleList articles={searchResults} />
            <PinnedArticles />
        </div>
    );
}

export default App;
