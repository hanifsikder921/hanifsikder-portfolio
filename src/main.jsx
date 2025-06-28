import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { RouterProvider } from 'react-router';
import router from './routes/router.jsx';

// ✅ Import AOS and AOS styles
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Initialize AOS before app renders
AOS.init({
  duration: 800,
  once: false,
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
