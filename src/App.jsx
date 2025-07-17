import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header } from './components/Index/Header';
import { Footer } from './components/Index/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  const [loding, setLoading] = useState( true );
  const dispatch = useDispatch();

  useEffect( () => {
    authService.getCurrentUser()
      .then( ( userData ) => {
        if ( userData ) {
          dispatch( login( { userData } ) )
        } else {
          dispatch( logout() )
        }
      } )
      .finally( () => {
        setLoading( false );
      } )
  }, [] );
  console.log( import.meta.env.VITE_APPWRITE_URL );
  return !loding ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 text-center'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : ( null )
}
export default App
