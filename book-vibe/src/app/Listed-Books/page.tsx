"use client";
import { BooksContext } from "@/components/context/BooksContext";
import ListedBooksCard from "@/components/Shaerd/ListedBooksCard";
import { IBook } from "@/type/books.type";
import { useContext } from "react";

const ListedBooks = () => {
  const { readBook, wishlist } = useContext(BooksContext);

  console.log(readBook, wishlist, "readbooks");

  return (
    <div className="container mx-auto py-5">
      <h1 className="my-4 rounded-3xl bg-amber-100 py-16 text-center text-4xl font-bold">
        Listed Books
      </h1>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        {/* ================= Read Books Tab ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBook.length})`}
        />

        <div className="tab-content space-y-3 border-base-300 bg-base-100 p-6">
          {readBook.length > 0 ? (
            readBook.map((book: IBook) => {
              return (
             <ListedBooksCard  key={book.bookId}  book={book}/>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No Read Books Found
            </p>
          )}
        </div>

        {/* ================= Wishlist Tab ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />

        <div className="tab-content space-y-3 border-base-300 bg-base-100 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return (
              <ListedBooksCard
  key={book.bookId}
  book={book}
/>
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No Wishlist Books Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;