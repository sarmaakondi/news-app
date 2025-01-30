import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import PinnedArticles from "./components/PinnedArticles";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>News Search</h1>
            <SearchBar />
            <ArticleList />
            <PinnedArticles />
        </div>
    );
}

export default App;
