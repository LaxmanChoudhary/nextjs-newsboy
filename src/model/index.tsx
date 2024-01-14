export interface INewsSource {
  id?: string
  name: string
}

export interface IArticle {
  source: INewsSource
  author: string
  title: string
  description: string
  url: string
  urlToImage?: string
  publishedAt: string
  content: string
}

export interface IPaginationOptions {
  page?: number
  pageSize?: number
}

export interface IFilterOptions { 
  country?: "ae" | "in" | "us" | "rs" | "ru" | "sg" | "jp",
  category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology"
}