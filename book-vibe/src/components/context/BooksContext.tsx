"use client"
// import React, { useState } from 'react';
import React, { createContext, useState } from 'react';
export const BooksContext = createContext({});
const BooksProvider = ({children} :{children:React.ReactNode}) => {
    const [readBook,setReadBook] =useState([]);
    const [wishlist,setWishlist] =useState([]);
    const shardData ={
     readBook,
     setReadBook,
     wishlist,
     setWishlist,
    };


   return <BooksContext.Provider value={shardData}>
    {children}
</BooksContext.Provider>
    
};

export default BooksProvider;