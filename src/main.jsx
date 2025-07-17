import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AllPosts from './pages/AllPost.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';
import { AuthLayout, Login, Signup } from './components/index.js';

// Define proper routes
const router = createBrowserRouter( [
  {
    path: '/',
    element: <Home />, // Home page (must contain <Outlet /> if it has children)
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: 'signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: 'all-posts',
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: 'add-posts',
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: 'edit-posts/:slug',
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: 'post/:slug',
        element: (
          <AuthLayout authentication>
            <Post />
          </AuthLayout>
        )
      },
    ]
  }
] );

// Render the app
createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
