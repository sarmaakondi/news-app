const PinnedArticles = ({ pinned, onUnPin }) => {
    return (
        <div>
            <h2>Pinned Articles</h2>
            {pinned.map((article) => (
                <div key={article.id}>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {article.title}
                    </a>
                    <button onClick={() => onUnPin(article)}>Unpin</button>
                </div>
            ))}
        </div>
    );
};

export default PinnedArticles;
