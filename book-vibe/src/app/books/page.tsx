import { IBook } from "@/type/books.type";
import BookCard from "@/components/Shaerd/BookCard"; 

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Errorrrrrrrrr", error);
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
          Explore All Books
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover amazing books from different genres and find your
          next favorite read.
        </p>
      </div>


      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

        {bookData.map((book:IBook,ind:number) => {
        
           return <BookCard key={ind} book ={book}/>
            
                    
        })}
      </div>
    </section>
  );
};

export default Books;