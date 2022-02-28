interface ArticleSourcee {
    id: string | null,
    name: string | null
}

export interface Article {
    source: ArticleSourcee
    author: string | null,
    title: string | null,
    description: string | null,
    url: string,
    urlToImage: string,
    publishedAt: Date,
    content: string | null,
}