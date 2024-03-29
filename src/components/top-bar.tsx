'use client';

import { Button, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CleanHands from '@mui/icons-material/CleanHands'
import ClearIcon from '@mui/icons-material/Clear';
import React, { useContext, useRef } from 'react';
import AppContext from '@/context/AppContext';
import { destroyCookie } from 'nookies';
import { getAPI } from '@/utils/api';
import { useRouter } from "next/navigation"
import MenuIcon from '@mui/icons-material/Menu';

const TopBar: React.FC = () => {
    const router = useRouter();
    const { sharedData, setSharedData } = useContext(AppContext);
    const searchRef = useRef<HTMLInputElement>(null);

    const onClearSearch = () => {
        if (searchRef.current)
            searchRef.current.value = '';
        setSharedData((pre: any) => {
            return { ...pre, search: '' }
        })
    }

    const onSearchChange = (e: any) => {
        setSharedData((pre: any) => {
            return { ...pre, search: e.target.value }
        })
        console.log(e.target.value);
    }

    const onLogout = async () => {
        // destroyCookie(null, 'jwtToken');
        await getAPI('/users/logout');
        router.push('/user/signin');
    }

    const handleDrawerToggle = () => {
        setSharedData((pre: any) => {
            return { ...pre, mobileOpen: !pre.mobileOpen }
        })
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-blue-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button> */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <a className="flex ml-2 md:mr-24">
                            <img src="/todo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-white text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">ToDo</span>
                        </a>
                    </div>
                    <div>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', height: 30, display: 'flex', alignItems: 'center', width: 250 }}
                        >
                            <InputBase inputRef={searchRef} onChange={onSearchChange}
                                sx={{ ml: 1, flex: 1, }}
                                placeholder="Search tasks by name"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton onClick={onClearSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                                <ClearIcon />
                            </IconButton>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            <div onClick={onLogout} className='text-white cursor-pointer'>
                                Logout
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
