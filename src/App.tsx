import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/RootLayout';
import AboutPage from './pages/AboutPage';
import LoginPage, { createAction } from './pages/LoginPage';
import PostPage from './pages/PostPage';
import { allBlogPostLoader, singleBlogPostLoader } from './services/postsLoader';
import AuthLayout from './layouts/AuthLayout';
import ErrorPage from './pages/ErrorPage';

// Custom Router Setup
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path='/' element={<MainLayout />}>
        <Route path='/posts' element={<HomePage />} loader={allBlogPostLoader} action={createAction} />
        <Route path='/posts/:id' element={<PostPage />} loader={singleBlogPostLoader} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>

      <Route path='/auth' element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path='*' element={<ErrorPage />} />

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App
