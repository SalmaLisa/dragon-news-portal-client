
import { Link } from 'react-router-dom';
import Author from '../author/Author';


const SingleNews = ({ news }) => {
  console.log(news)
  const { author, title, image_url,details
,    thumbnail_url, rating, total_view } = news;
  
  const miniDetails = details.slice(0, 300);
  console.log(miniDetails)
  
  return (
    <div className='shadow m-4 rounded bg-white'>
      <Author author={author}></Author>
      <div>
        <h4 className='text-center mt-3'>{title}</h4>
        <div className='p-3'>
          <img className='img-fluid' src={image_url} alt="" />
        </div>
        <p className='p-3'>{miniDetails}...<Link className='text-decoration-none' to='/newsDetails'>Read More</Link></p>
      </div>
    </div>
  );
};

export default SingleNews;