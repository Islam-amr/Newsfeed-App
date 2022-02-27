interface ArticlesSourcee {
    id: string | null,
    name: string | null
}

export interface Articles {
    source: ArticlesSourcee
    author: string | null,
    title: string | null,
    description: string | null,
    url: string,
    urlToImage: string,
    publishedAt: Date,
    content: string | null,
}