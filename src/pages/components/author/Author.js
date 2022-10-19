import React from 'react';
import './Author.css'
import {FaShareAlt} from 'react-icons/fa';
import { BsBookmark} from 'react-icons/bs';

const Author = ({author}) => {
  const { name, img, published_date } = author;
  return (
    <div className='d-flex align-items-center justify-content-between py-4 px-3 border-bottom'>
      <div className='d-flex align-items-center'>
        <div>
          <img className='author-img' src={img} alt="" />
        </div>
        <div>
          <p className='m-0 ms-2 fw-bold'>{name}</p>
          <p className='m-0 ms-2'>{published_date}</p>
        </div>
      </div>
      <div>
        <BsBookmark className='me-2' />
        <FaShareAlt/>
      </div>
    </div>
  );
};

export default Author;