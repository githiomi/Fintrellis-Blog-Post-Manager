import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';

// Custom Router Setup
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      <Route index element={<HomePage />} />

    </Route>
  )
);

function App() {

  return <RouterProvider router={appRouter} />

}

export default App
