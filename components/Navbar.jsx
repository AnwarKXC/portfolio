'use client'




import Image from "next/image"
import Link from "next/link"
import { styles } from "../pages/styles"
import { logo, menu, close } from "../assets"
import { useState } from "react"





const Navbar = () => {
  const [ active, setActive ] = useState( "" );
  const [ toggle, setToggle ] = useState( false )

  return (
    <nav className={ ` ${ styles.paddingX }
    w-full flex fixed  justify-between py-5 top-0 z-20 bg-primary items-center    `
    }>
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href={ "/" } className="flex items-center gap-2" onClick={ () => {
          setActive( "" );
          window.scrollTo( 0, 0 );
        } } >
          <Image width={ 100 } height={ 100 } quality={ 100 } src={ logo } alt=" logo" className=" object-contain brightness-150 contrast-150" />
          <p className=" text-white  text-[18px]  font-bold cursor-pointer"> Anwar <span className=" sm:block hidden">| FrontEnd Developer</span></p>

        </Link >
        <ul className="list-none hidden md:flex gap-10">
          <li onClick={ () => { setActive( "About" ) } } className={ `${ active === "About" ? "text-white" : " text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer` }>
            <Link href="#About">About</Link>
          </li>
          <li onClick={ () => { setActive( "Work" ) } } className={ `${ active === "Work" ? "text-white" : " text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer` }>
            <Link href="#Work" >Work</Link>
          </li>
          <li className={ `${ active === "Contact" ? "text-white" : " text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer` }
            onClick={ () => { setActive( "Contact" ) } }
          >
            <Link href="#Contact" >Contact</Link>
          </li>
        </ul>
        <div className=" md:hidden justify-end items-center flex flex-1">
          <Image src={ toggle ? close : menu } width={ 28 } height={ 28 } alt="menu" className=" object-contain cursor-pointer" onClick={ () => { setToggle( !toggle ) } } />
          <div className={ `${ !toggle ? "hidden" : "flex" } p-6 top-28 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl  black-gradient absolute` }>

            <ul className="list-none flex justify-end items-start  flex-col gap-10">
              <li onClick={ () => {
                setToggle(!toggle)
                setActive( "About" )
              } } className={ `${ active === "About" ? "text-white" : " text-secondary" } hover:text-white text-[16px] font-medium  font-poppins cursor-pointer` }>
                <Link href="#About">About</Link>
              </li>
              <li onClick={ () => {
                setToggle( !toggle )
                setActive( "Work" )
              } } className={ `${ active === "Work" ? "text-white" : " text-secondary" } hover:text-white text-[16px] font-medium  font-poppins cursor-pointer` }>
                <Link href="#Work" >Work</Link>
              </li>
              <li className={ `${ active === "Contact" ? "text-white" : " text-secondary" } hover:text-white text-[16px] font-medium  font-poppins cursor-pointer` }
                onClick={ () => {
                  setToggle( !toggle )
                  setActive( "Contact" )
                } }
              >
                <Link href="#Contact" >Contact</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar