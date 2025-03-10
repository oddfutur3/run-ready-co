'use client'

import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react'
import NavClient from './NavClient'
import NavLogo from './NavLogo'


export default function NavBarMobile () {
  const [menuOpen, toggleMenu] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const styles = {
    bmCrossButton: {
      height: '30px',
      width: '30px',
      top: '148px',
      right: '25px',
    },
  }

  return (
    <div className="xl:hidden">
          <Menu
            right
            width={'100%'}
            isOpen={menuOpen}
            customCrossIcon={
              <img src="/images/cross-icon.svg" className="p-[7px]" />
            }
            customBurgerIcon={
              <div className="flex items-center justify-center">
                <span className="p-[7px] w-[18px] h-[15px] relative">
                  <span
                    className={
                      'bm-burger-bars absolute w-full h-[20%] left-0 right-0 top-0 opacity-100 bg-black'
                    }
                  ></span>
                  <span
                    className={
                      'bm-burger-bars absolute w-full h-[20%] left-0 right-0 top-[40%] opacity-100 bg-black'
                    }
                  ></span>
                  <span
                    className={
                      'bm-burger-bars absolute w-full h-[20%] left-0 right-0 top-[80%] opacity-100 bg-black'
                    }
                  ></span>
                </span>
              </div>
            }
            onOpen={() => toggleMenu(true)}
            onClose={() => toggleMenu(false)}
            styles={styles}
          >
            <div className="border-b border-gray-200 px-8 py-3 leading-4">
              <NavClient />
              <NavLogo />
            </div>
            <div className="px-8 py-8 space-y-8">
              <Link legacyBehavior href="/retail">
                <a className="block w-fit text-[1.5rem] text-gray-800">
                  Retail
                </a>
              </Link>
              <Link legacyBehavior href="/health">
                <a className="block w-fit text-[1.5rem] text-gray-800">
                  Health
                </a>
              </Link>
              <Link legacyBehavior href="/missions">
                <a className="block w-fit text-[1.5rem] text-gray-800">
                  Missions
                </a>
              </Link>
              <Link legacyBehavior href="/shop">
                <a className="block w-fit text-[1.5rem] text-gray-800">
                  Shop
                </a>
              </Link>
              <Link legacyBehavior href="/blog">
                <a className="block w-fit text-[1.5rem] text-gray-800">
                  Blog
                </a>
              </Link>
              <NavClient />
            </div>
          </Menu>
        </div>
  )
}