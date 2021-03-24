import { BookType } from '../dataTypes/api';

export const useShelfesDistribution = (books: BookType[]): BookType[][] => {
    if (!books) return [[], [], []];
    const currentlyReadingBooks: BookType[] = [];
    const wantToReadBooks: BookType[] = [];
    const readBooks: BookType[] = [];
  
    books.map(e => {
      switch(e.shelf) {
        case 'currentlyReading': 
          currentlyReadingBooks.push(e);
          break;
        case 'wantToRead':
          wantToReadBooks.push(e);
          break;
        case 'read':
          readBooks.push(e);
          break;
        default:
            return null;
      };
      return e;
    });
  
    return [currentlyReadingBooks, wantToReadBooks, readBooks];
  }