import StreamVideoProvider from '@/providers/StreamClienetProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "ConferX",
  description: "Conferencing App",
  icons:{
    icon: '/icons/logo.svg',
  }
};

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
