export type CurrentlyReadingProps = {
    books: any[];
    onShelfChange: (id: string, shelf: string) => void;
}

export type ReadProps = {
    books: any[];
    onShelfChange: (id: string, shelf: string) => void;
}

export type WantToReadProps = {
    books: any[];
    onShelfChange: (id: string, shelf: string) => void;
}