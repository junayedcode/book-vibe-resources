
"use client";
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { toast } from "react-toastify";


const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const headlewishlistButton = () => {
    console.log("wish book btn", book);

   setWishlist([...wishlist, book]);

    toast.success(`You Have Added "${book.bookName}" to Wishlist`);
  };

  return (
    <button
      className="btn flex-1 bg-green-600 text-white hover:bg-green-700"
      onClick={headlewishlistButton}
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
