import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import { allBlogPostLoader, singleBlogPostLoader } from './services/postsLoader';

// Custom Router Setup
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      <Route index element={<LoginPage />} />
      <Route path='/posts' element={<HomePage />} loader={allBlogPostLoader} />
      <Route path='/posts/:id' element={<PostPage />} loader={singleBlogPostLoader} />
      <Route path='/about' element={<AboutPage />} />

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App
