import {ReactComponent as Logo} from "../../assets/logo.svg";
import {ReactComponent as LogoMobile} from "../../assets/logo-mobile.svg";
import {ReactComponent as ChevronDown} from "../../assets/chevron-down.svg";
import {ReactComponent as CloseIcon} from "../../assets/close.svg";
import HeaderBlock from "../HeaderBlock";
import AuthBlock from "../AuthBlock";
import {ReactComponent as SettingsIcon} from "../../assets/options.svg";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import React, {useEffect, useState} from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileHeaderMenu from "../MobileHeaderMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
        if (isOpen && isDesktop) {
            setIsOpen(false);
        }
    }, [isDesktop, isOpen])

    return (
        <header className='flex w-full h-10 items-center justify-between px-2  text-xs sticky w-full z-50 left-0 top-0 bg-back-dark'>
            <div className='header__left'>
                <div className='pr-4 flex items-center text-white'>
                    <a href='/'>{isDesktop ? <Logo/> : <span className='h-6 w-6 p-1'><LogoMobile /></span>}</a>
                </div>
                <div className='cursor-pointer inline-flex items-center text-smart-blue font-bold pr-5 whitespace-nowrap' onClick={() => console.log('select currency')}>
                    {' BTC / USD '}
                    <ChevronDown />
                </div>
                <div className='text-sm font-bold mr-4 inline-flex items-center'>
                    {!isDesktop ? <span className='text-gray-500 pr-1 text-xs font-normal'>USD</span> : '$'}
                    19,598
                </div>
                <div className='hidden md:grid gap-4 grid-cols-4-auto'>
                    <HeaderBlock title='24h Change' value='+4,32%' className='text-buy' />
                    <HeaderBlock title='24h High' value='19,770' />
                    <HeaderBlock title='24h Low' value='18,560' />
                    <HeaderBlock title='24h Volume' value='2,854.41 BTC' />
                </div>
            </div>
            <div className='header__right'>
                <div className='hidden md:flex'>
                    <AuthBlock />
                    <div className='mx-2 flex items-center cursor-pointer text-gray-300 w-5 h-full hover:text-white'>
                        <SettingsIcon />
                    </div>
                </div>
                <div
                    onClick={() => setIsOpen(prevState => !prevState)}
                    className='cursor-pointer inline-block inline-flex items-center md:hidden'
                >
                    {isOpen ? <CloseIcon/> : <MenuIcon/>}
                </div>
            </div>
            {isOpen && <MobileHeaderMenu />}
        </header>
    )
}

export default Header;
