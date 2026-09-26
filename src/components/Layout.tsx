import React from 'react'
import ContactSection from './ContactSection'
import { defaultContact } from '../data'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen w-full bg-bg  text-text ">
      <div className="w-full max-w-7xl mx-auto  p-4  md:p-8 " > 
        {children}
        <ContactSection contact={defaultContact} />
      </div>
    </div>
  )
}

export default Layout


