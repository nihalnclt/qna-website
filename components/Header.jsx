import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiLock, FiMenu, FiChevronDown, FiBell } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { logoImg, avatarImg } from '../public/images';
import { updateSigninBox, updateSignupBox } from '../redux/slices/layoutSlice';
import { headerNavLinks } from '../utils/constants';
import { LoginCard, SignupCard, AskQuestionPopup, MobileSidebar } from './';

const styles = {
    wrapper: `w-[100%] h-[70px] lg:h-[100px] bg-primaryColor`,
    container: `max-w-[750px] lg:max-w-[1500px] px-[15px] lg:px-[30px] mx-auto h-[100%] grid grid-cols-[1fr] lg:grid-cols-[15%,auto,22%] items-center gap-[20px]`,
    headerLeft: `flex justify-between items-center h-[100%]`,
    imgWrapper: `flex items-center gap-[10px] xl:gap-[20px] hover:translate-y-[-2px] transition-transform h-[100%]`,
    logoImg: `w-[45px] lg:w-[50px] xl:w-[55px]`,
    logoTxt: `text-[#fff] text-2xl lg:text-3xl font-bold`,
    menuIcon: `text-white text-2xl transition-colors hover:text-secondaryColor lg:hidden`,
    navbar: `hidden lg:flex items-center xl:justify-between w-[100%] h-[100%] xl:border-l border-[#33353c] xl:pl-[20px]`,
    navList: `flex items-center mx-[auto] xl:mx-[0] gap-[10px]`,
    navListItem: `text-white font-bold text-base hover:bg-[#1a1c21] rounded-sm px-[10px] py-[5px]`,
    navListItemActive: `bg-[#1a1c21]`,
    searchWrapper: `hidden xl:flex items-center bg-[#202228] h-[35px] max-w-[280px] w-[100%] px-[15px] rounded-sm`,
    searchInput: `w-[100%] bg-transparent outline-none border-none text-sm text-grayColor`,
    searchIcon: `text-white`,
    headerRight: `relative hidden lg:flex items-center justify-between gap-[1.3em] lg:border-x border-[#33353c] h-[100%] px-[20px]`,
    button: `w-[100%] h-[35px] text-white font-bold transition-colors hover:bg-[#f05555] rounded-sm`,
    signinBtn: 'bg-secondaryColor',
    signupBtn: 'bg-grayColor',
    accountWrapper: `w-[100%] h-[100%] relative`,
    accountInfo: `w-[100%] h-[100%] flex items-center justify-between cursor-pointer`,
    accountContentWrapper: `relative flex items-center gap-[12px]`,
    avatarImg: `relative w-[40px] h-[40px] rounded-full overflow-hidden`,
    welcomeTxt: `text-grayColor text-[15px] font-medium`,
    accountName: `text-white font-semibold`,
    accountIcons: `flex items-center`,
    accountDropdownIcon: `text-white bg-grayColor rounded-sm`,
    accountBellIcon: `text-grayColor border-l border-grayColor pl-[0.8em] text-[22px]`,
    accountDropdown: `absolute w-[250px] bg-[#0f0] right-[0] top-[100%] overflow-hidden max-h-[0px] transition-all z-10`,
    accountDropdownActive: `max-h-[500px]`,
};

const IS_LOGGEDIN = false;

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSIdebarOpen] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);

    return (
        <div className={styles.wrapper}>
            <SignupCard />
            <LoginCard />
            <MobileSidebar
                isSidebarOpen={isSidebarOpen}
                setIsSIdebarOpen={setIsSIdebarOpen}
            />
            {/* <AskQuestionPopup /> */}

            <div className={styles.container}>
                <div className={styles.headerLeft}>
                    <button
                        className={styles.menuIcon}
                        onClick={() => {
                            setIsSIdebarOpen(true);
                        }}
                    >
                        <FiMenu />
                    </button>
                    <Link href='/'>
                        <a className={styles.imgWrapper}>
                            <div className={styles.logoImg}>
                                <Image src={logoImg} alt='' objectFit='cover' />
                            </div>
                            <h1 className={styles.logoTxt}>QNA</h1>
                        </a>
                    </Link>
                    <button className={styles.menuIcon}>
                        <FiLock />
                    </button>
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        {headerNavLinks.map(({ name, url }, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        styles.navListItem +
                                        ` ${
                                            router.pathname === url &&
                                            styles.navListItemActive
                                        }`
                                    }
                                >
                                    <Link href={url}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <form className={styles.searchWrapper}>
                        <input
                            type='text'
                            placeholder='Type Search Words'
                            className={styles.searchInput}
                        />
                        <button type='submit'>
                            <BsSearch className={styles.searchIcon} />
                        </button>
                    </form>
                </nav>
                <div className={styles.headerRight}>
                    {user ? (
                        <>
                            <div className={styles.accountWrapper}>
                                <div
                                    className={styles.accountInfo}
                                    onClick={() => {
                                        setIsDropdownOpen(!isDropdownOpen);
                                    }}
                                >
                                    <div
                                        className={styles.accountContentWrapper}
                                    >
                                        <div className={styles.avatarImg}>
                                            <Image
                                                src={avatarImg}
                                                alt=''
                                                objectFit='cover'
                                                layout='fill'
                                            />
                                        </div>
                                        <div>
                                            <span className={styles.welcomeTxt}>
                                                Welcome
                                            </span>
                                            <div className={styles.accountName}>
                                                {user?.username}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.accountDropdownIcon}
                                    >
                                        <FiChevronDown />
                                    </button>
                                </div>
                                <div
                                    className={
                                        isDropdownOpen
                                            ? styles.accountDropdown +
                                              ' ' +
                                              styles.accountDropdownActive
                                            : styles.accountDropdown
                                    }
                                >
                                    <ul>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                        <li>Profile Info</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.accountIcons}>
                                <button className={styles.accountBellIcon}>
                                    <FiBell />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <button
                                className={
                                    styles.button + ' ' + styles.signinBtn
                                }
                                onClick={() => {
                                    dispatch(updateSigninBox(true));
                                }}
                            >
                                Sign In
                            </button>
                            <button
                                className={
                                    styles.button + ' ' + styles.signupBtn
                                }
                                onClick={() => {
                                    dispatch(updateSignupBox(true));
                                }}
                            >
                                Sign Up
                            </button>
                            {/* <SignupCard /> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
