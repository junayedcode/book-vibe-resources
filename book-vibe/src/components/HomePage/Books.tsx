import React from "react";
import BookCard from "../Shaerd/BookCard";
import { IBook } from "@/type/books.type";

const getBooks = async () => {
  try {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const bookData = await getBooks();

  console.log(bookData, "BookData");

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-600">
          Book Collection
        </span>

        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          Explore Our Books
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover amazing books from different genres and find your
          next favorite read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {bookData.slice(0, 6).map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;