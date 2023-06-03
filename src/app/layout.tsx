'use client';

import { ThemeProvider } from '@mui/material'
import './globals.css'
import { Inter } from 'next/font/google'
import theme from '@/styles/theme'
import { useState } from 'react'
import AppContext from '@/context/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children, }: { children: React.ReactNode }) {

  const [sharedData, setSharedData] = useState({});

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{ sharedData, setSharedData }}>
            <ToastContainer/>
            {children}
          </AppContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
