
import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/wishlistButton';
import { IBook } from '@/type/books.type';
import Image from 'next/image';

interface IBookDetailsPage{
    params: Promise<{
        Id:string
    }>
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  const data = await res.json();

  return data;
};
const BookDetailsPage = async ({params}:IBookDetailsPage) => {
    const {Id} =await params
 const booksData = await getBooks();
 const book = booksData.find((book:IBook) =>String(book.bookId) === String(Id),)as IBook;

 console.log(book,'book');
  
return (
  <div className="container mx-auto px-4 py-12">
    <div className="card lg:card-side overflow-hidden bg-white shadow-xl">

      {/* Book Image */}
      <figure className="bg-gray-100 p-6 lg:w-1/2">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="h-105 w-full object-contain transition duration-300 hover:scale-105"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body justify-center lg:w-1/2 lg:p-10">

        <span className="mb-2 w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
          {book.category}
        </span>

        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          {book.bookName}
        </h2>

        <p className="mt-1 text-gray-500">
          by <span className="font-semibold text-gray-700">{book.author}</span>
        </p>

        <div className="my-5 h-px bg-gray-200"></div>

        <p className="leading-7 text-gray-600">
          {book.review}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-5">
          <div>
            <p className="text-sm text-gray-400">Rating</p>
            <p className="mt-1 text-lg font-bold text-gray-800">
              ⭐ {book.rating}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Pages</p>
            <p className="mt-1 text-lg font-bold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Publisher</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        <div className="card-actions mt-6 flex gap-3">
      <ReadButton book={book} />
       <WishlistButton book={book} />
        </div>

      </div>
    </div>
  </div>
);

};

export default BookDetailsPage;
