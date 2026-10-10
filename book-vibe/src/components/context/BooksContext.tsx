
"use client";

import { createContext, useState, ReactNode } from "react";
import { IBook } from "@/type/books.type";

interface IBooksContext {
  readBook: IBook[];
  wishlist: IBook[];
  setReadBook: (books: IBook[]) => void;
  setWishlist: (books: IBook[]) => void;
}

export const BooksContext = createContext<IBooksContext>({
  readBook: [],
  wishlist: [],
  setReadBook: () => {},
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const contextValue: IBooksContext = {
    readBook,
    wishlist,
    setReadBook,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
