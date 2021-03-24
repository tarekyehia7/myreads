import { BookType, TransformedTableBookType } from './api';

export type SearchListProps = {
    books: BookType[];
    transformedBooks: TransformedTableBookType[];
    onShelfChanged: () => void;
}