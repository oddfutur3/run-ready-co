'use client'

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import NavLogo from "./NavLogo"
import NavClient from "./NavClient"

export default function NavBarFixed ({navMenu = true}) {
  const [scrollY, setScrollY] = useState(0)
  let barPosn = scrollY > 650 && scrollY < 962 ? (scrollY - 962) / 4 : 0
  
  
  const onScroll = useCallback((event) => {
    //console.log(window.pageYOffset);
    setScrollY(window.pageYOffset)
  }, [])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true })
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])

  return (
    <nav
          className={
            'top-0 z-20 bg-white/80 border-b-[0.5px] border-gray-200 backdrop-blur-sm ' +
            (scrollY > 650 ? 'fixed' : 'hidden')
          }
          style={{
            top: `${barPosn}px`,
            left: '0px',
            opacity: `${(barPosn + 78) / 78}`,
            width: `100%`,
          }}
        >
          <div className="mx-auto flex items-center justify-between py-[0.5rem] px-[1.5rem] max-w-[90rem]">
            <NavLogo />
            {navMenu && (
              <ul className="hidden xl:block [&>*]:inline-block space-x-[3rem]">
                <li className="" id="menu-women">
                  <Link legacyBehavior href="/retail">
                    <a className="hover:text-[#1d2530]">Women</a>
                  </Link>
                </li>
                <li className="" id="menu-men">
                  <Link legacyBehavior href="/health">
                    <a className="hover:text-[#1d2530]">Men</a>
                  </Link>
                </li>
                <li className="" id="menu-accessories">
                  <Link legacyBehavior href="/missions">
                    <a className="hover:text-[#1d2530]">Accessories</a>
                  </Link>
                </li>
                <li className="" id="menu-run-to-play">
                  <Link legacyBehavior href="/shop">
                    <a className="hover:text-[#1d2530]">Run to Play</a>
                  </Link>
                </li>
                <li className="" id="menu-run-better">
                  <Link legacyBehavior href="/blog">
                    <a className="hover:text-[#1d2530]">Run Better</a>
                  </Link>
                </li>
              </ul>
            )}
                <NavClient />
            {/* <div
              className="cursor-pointer xl:hidden"
              onClick={() => toggleMenu(true)}
            >
              <div className="bm-burger-button flex items-center justify-center">
                <span className="p-[7px] w-[18px] h-[15px] relative">
                  <span className="absolute w-full h-[20%] left-0 right-0 top-0 opacity-100 bg-black"></span>
                  <span className="absolute w-full h-[20%] left-0 right-0 top-[40%] opacity-100 bg-black"></span>
                  <span className="absolute w-full h-[20%] left-0 right-0 top-[80%] opacity-100 bg-black"></span>
                </span>
              </div>
            </div> */}
          </div>
        </nav>
  )
}