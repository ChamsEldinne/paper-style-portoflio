import React from 'react'
import ContactSection from './ContactSection'
import { defaultContact } from '../data'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen w-full bg-bg  text-text ">
      <div className="w-full max-w-7xl mx-auto  p-8 sm:p-12 " > 
        {children}
        <ContactSection contact={defaultContact} />
      </div>
    </div>
  )
}

export default Layout


