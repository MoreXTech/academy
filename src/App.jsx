import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CoursesPage from '@/pages/CoursesPage';
import ResourcesPage from '@/pages/ResourcesPage';
import BlogPage from '@/pages/BlogPage';
import HireMePage from '@/pages/HireMePage';
import ShahbazProfilePage from '@/pages/ShahbazProfilePage';
import OurMentorsPage from '@/pages/OurMentorsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Layout from '@/components/Layout';
import { Toaster } from '@/components/ui/toaster';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courses", element: <CoursesPage /> },
      { path: "/resources", element: <ResourcesPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/hire-me", element: <HireMePage /> },
      { path: "/our-mentors", element: <OurMentorsPage /> },
      { path: "/our-mentors/shahbaz", element: <ShahbazProfilePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;