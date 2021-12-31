import Home from './components/pages/Home';
import PostDetail from './components/pages/PostDetail';
import Posts from './components/pages/Posts';
import Card from './components/base/Card';
import About from './components/pages/About';
import PostSearch from './components/pages/PostSearch';

const routes = [
  { title: 'HomePage', path: '/', element: Home, isNav: true },
  { title: 'About', path: 'about', element: About, isNav: true },
  { title: 'Products', path: 'posts', element: Posts, isNav: true },
  {
    title: 'ProductDetail',
    path: 'posts/:postId',
    element: PostDetail,
    isNav: true,
  },
  {title:"Card", path:"/card", element:Card, isNav: false},
  
  { title: 'ProductSearch', path: 'arama', element: PostSearch, isNav: true },
];

export default routes;