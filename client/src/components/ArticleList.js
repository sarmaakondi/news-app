import formatDate from "../utils";

const ArticleList = ({ articles }) => {
    const groupedArticles = articles.reduce((acc, article) => {
        const section = article.section || "Uncategorized";
        acc[section] = acc[section] || [];
        acc[section].push(article);
        return acc;
    }, {});

    return (
        <div>
            {Object.entries(groupedArticles).map(([section, items]) => (
                <div key={section}>
                    <h2>{section}</h2>
                    {items.map((article) => (
                        <div key={article.id}>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {article.title}
                            </a>
                            <p>
                                {formatDate(article.date).toLocaleDateString(
                                    "en-GB"
                                )}
                            </p>
                            <button>Pin</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
