import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({book} :{book:IBook}) => {
    return (
          <div 
                       
                         className="flex w-full items-center gap-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                       >
                         {/* Book Image */}
                         <div className="flex h-28 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-gray-100">
                           <Image
                             src={book.image}
                             alt={book.bookName}
                             width={80}
                             height={112}
                             className="h-full w-full object-contain"
                           />
                         </div>
       
                         {/* Book Information */}
                         <div className="min-w-0 flex-1">
                           <h2 className="truncate text-sm font-bold text-gray-800">
                             {book.bookName}
                           </h2>
       
                           <p className="text-xs text-gray-600">
                             By: {book.author}
                           </p>
       
                           <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px]">
                             <span className="font-semibold text-gray-600">
                               Tag:
                             </span>
       
                             <span className="rounded-full bg-green-50 px-2 py-1 text-green-600">
                               Young Adult
                             </span>
       
                             <span className="rounded-full bg-green-50 px-2 py-1 text-green-600">
                               Mystery
                             </span>
       
                             <span className="text-gray-500">
                               👁 Year of Publishing: {book.yearOfPublishing}
                             </span>
                           </div>
       
                           <div className="mt-1 text-[10px] text-gray-500">
                             🏷 Publisher: {book.publisher}
                           </div>
       
                           <div className="text-[10px] text-gray-500">
                             📄 Pages: {book.totalPages}
                           </div>
       
                           {/* Bottom Buttons */}
                           <div className="mt-2 flex items-center gap-2">
                             <span className="rounded-full bg-blue-50 px-3 py-1 text-[9px] text-blue-500">
                               Category: {book.category}
                             </span>
       
                             <span className="rounded-full bg-orange-50 px-3 py-1 text-[9px] text-orange-500">
                               ⭐ {book.rating}
                             </span>
       
                             <Link
                               href={`/books/${book.bookId}`}
                               className="rounded-full bg-green-500 px-3 py-1 text-[9px] font-semibold text-white hover:bg-green-600"
                             >
                               View Details
                             </Link>
                           </div>
                         </div>
                       </div>
    );
};

export default ListedBooksCard;