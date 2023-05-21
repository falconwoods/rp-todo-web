'use client'

import SvgIcon from "@/components/svg-icon";
import TaskListCategoryItem from "@/components/task-list-category-item";
import TaskListItem from "@/components/task-list-item";
import { Card, Badge } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

export default function Home() {

    const onSort = (val: string): void => {
        console.log(val);
    };

    return (
        <>

            <nav className="fixed top-0 z-50 w-full bg-blue-500 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                                <img src="/todo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                                <span className="self-center text-white text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">ToDo</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
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

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <TaskListCategoryItem label="All Tasks" onClick={()=>{}}>
                            <SvgIcon icon="home"></SvgIcon>
                        </TaskListCategoryItem>

                        <TaskListCategoryItem label="Important" onClick={()=>{}}>
                            <SvgIcon icon="star"></SvgIcon>
                        </TaskListCategoryItem>

                        <TaskListCategoryItem label="Planned" onClick={()=>{}}>
                            <SvgIcon icon="calendar"></SvgIcon>
                        </TaskListCategoryItem>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <TaskListItem label="School" taskListId={1} onClick={()=>{}} onDelete={()=>{}}></TaskListItem>
                        <TaskListItem label="Work" taskListId={1} onClick={()=>{}} onDelete={()=>{}}></TaskListItem>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 ">

                <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
                    <div className="flex justify-between w-full text-xl text-blue-500 font-medium my-2">
                        <div className="flex items-center space-x-2">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5a1 1 0 100-2 1 1 0 000 2zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h11a.5.5 0 000-1h-11zm-2.5.5a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"></path></svg>
                            <span>List Title</span>
                        </div>
                        <div className="flex items-center text-xs">
                            <div onClick={() => onSort('create-time')} className="flex justify-center cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                <svg aria-hidden="true" className="pt-0.5 flex-shrink-0 w-3 h-3 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
                                <span>create time</span>
                            </div>
                            <div onClick={() => onSort('due-date')} className="flex justify-center cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                <svg aria-hidden="true" className="pt-0.5 font-medium flex-shrink-0 w-3 h-3 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
                                <span>due date</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 space-x-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800">
                            <input type="checkbox" value="" className="mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex-1">aa</div>
                            <button className="detailFooter-trash" aria-label="Delete task">
                                <svg className="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-3 space-x-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800">
                            <input type="checkbox" value="" className="mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
                            <div className="flex-1">aa</div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}