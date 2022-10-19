import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../components/SingleNews/SingleNews';

const AllNews = () => {
  const allNews = useLoaderData();
  return (
   
    <div>
      {
        allNews.map(news=><SingleNews news={news} key={news._id}></SingleNews>)
      }
    </div>
  );
 
};

export default AllNews;