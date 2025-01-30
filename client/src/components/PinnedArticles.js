const PinnedArticles = ({ pinned, onUnPin }) => {
    return (
        <div className="pinned">
            <h2>Pinned Articles</h2>
            {pinned.map((article) => (
                <div key={article.id} className="pinned-article">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {article.title}
                    </a>
                    <button
                        onClick={() => onUnPin(article)}
                        className="unpin-button"
                    >
                        Unpin
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PinnedArticles;
