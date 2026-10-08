
import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IBookCardProps{
    book:IBook
}

const BookCard = ({ book }:IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

            {/* Image Section */}
            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 p-6">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-auto object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    {book.category}
                </span>

            </div>


            {/* Content */}
            <div className="p-5">

                {/* Rating */}
                <div className="mb-2 flex items-center gap-2">
                    <span className="text-yellow-400">
                        ★★★★★
                    </span>

                    <span className="text-sm font-semibold text-gray-600">
                        {book.rating}
                    </span>
                </div>


                {/* Book Name */}
                <h2 className="text-xl font-bold text-gray-900 transition group-hover:text-green-600">
                    {book.bookName}
                </h2>


                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    By{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>


                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


                {/* Book Information */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">

                    <div>
                        <p className="text-xs text-gray-400">
                            Pages
                        </p>

                        <p className="font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Published
                        </p>

                        <p className="font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>


                {/* Button */}
              <Link href={`/books/${book.bookId}`}>
                <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-green-600">
                    View Details →
                </button></Link>

            </div>

        </div>
    );
};

export default BookCard;

