import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import {
  
  RouterProvider,
} from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './contexts/authContext/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-7xl mx-auto'>
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
    </div>
     
  </StrictMode>,
)
