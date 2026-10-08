import Books from '@/components/HomePage/Books';
import HomePage from '@/components/HomePage/page';
import React from 'react';

const page = () => {
  return (
    <div>
      Home Page
         <HomePage></HomePage>
         <Books></Books>
    </div>
  );
};

export default page;