export class Book
{
    constructor(
        public _id: string = '',
        public title: string = '',
        public category: string[] | null = null,
        public author: string[] | null = null,
        public publisher: string[] | null = null,
        public publishDate: string | null = null,
        public overview: string = '',
        public numberOfPages: number = 0,
        public images: string[] | null = null,

    )
    {
        if (!images)
            images = ['https://dummyimage.com/400x600/dddddd/aaa&text=No+image'];
    }
}