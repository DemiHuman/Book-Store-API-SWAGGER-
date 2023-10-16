export interface UserResponse {
    userID?: string,
    userId?: string,
    username: string,
    books: Book[]
}

export interface Book {
    isbn: string
    title: string
    subTitle: string
    author: string
    publish_date: string
    publisher: string
    pages: number
    description: string
    website: string
}

export interface TokenResponse {
    token: string
    expires: string
    status: string
    result: string
}

