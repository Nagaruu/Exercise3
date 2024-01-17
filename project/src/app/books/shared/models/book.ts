export interface Book {
    id: number;
    coverImage: string;
    title: string;
    author: string;
    price: number;
    quantity: number;
    description: string;
    genre: string[];
    publicationYear: number;
    ratings: Rating[];
  }
  
  export interface Rating {
    username: string;
    score: number;
  }
  