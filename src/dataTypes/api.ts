export type BookType = {
    title: string;
    subtitle: string;
    allowAnonLogging: boolean;
    authors: string[];
    averageRating: number;
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    id: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    industryIdentifiers: {
        type: string;
        identifier: string;
    }[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
        containsEpubBubbles: boolean; 
        containsImageBubbles: boolean;
    }[];
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    ratingsCount: number;
    readingModes: {text: boolean, image: boolean};
    shelf: string; // TODO => change this to enum
};

export type TransformedTableBookType = {
    [key: string]: BookType;
};