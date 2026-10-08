"use client"
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:IBook}) => {
    const {readBook,setReadBook} = useContext(BooksContext)
   
    const headleReadBook =()=>{
        console.log( 'read book btn',book);
        setReadBook([...readBook,book]);
        toast.success(`You Have Read "${book.bookName}" `)
    }
    return (
         <button className="btn flex-1 bg-green-600 text-white hover:bg-green-700" 
         onClick={()=>headleReadBook()}>
            Read
          </button>
    );
};

export default ReadButton;