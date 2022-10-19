
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AllNews from '../../pages/AllNews/AllNews';
import NewsDetails from '../../pages/components/NewsDetails/NewsDetails';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/categories/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
        element: <AllNews></AllNews>
      },
      {
        path: '/newsDetails',
        element:<NewsDetails></NewsDetails>
      }
    ]
  }
])

