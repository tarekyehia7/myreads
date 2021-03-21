
export const useShelfesDistribution = (books) => {
    if (!books) return [null, null, null];
    const currentlyReadingBooks = [];
    const wantToReadBooks = [];
    const readBooks = [];
  
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