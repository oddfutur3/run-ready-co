'use client'

import { createContext, useContext, useState } from "react"

const MobileNavContext = createContext(false)

export function useMobileNav () {
  return useContext(MobileNavContext)
}

export function MobileNavProvider ({children}) {

  const [isMobileNavOpen, toggleMobileNav] = useState(false)

  const value = {
    isMobileNavOpen,
    toggleMobileNav
  }

  return <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>
}