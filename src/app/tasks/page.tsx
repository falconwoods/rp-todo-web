'use client'

import SvgIcon from "@/components/svg-icon";
import TaskItem from "@/components/task-item";
import TaskListCategoryItem from "@/components/task-list-category-item";
import TaskListItem from "@/components/task-list-item";
import TopBar from "@/components/top-bar";
import { Card, Badge } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

export default function Home() {

    const onSort = (val: string): void => {
        console.log(val);
    };

    const onClickTaskItem = (taskId: number) =>{
        console.log(taskId);
    }

    const onTaskItemChangeState = (taskId:number, val:boolean)=>{
        console.log(taskId, val);
    }

    const onTaskItemDel = (taskId: number) =>{
        console.log('del task', taskId);
    }

    return (
        <>
            <TopBar></TopBar>

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
                        <TaskItem taskName="asg1" taskId={1} taskStatus={true} onClick={onClickTaskItem} onChangeStatus={onTaskItemChangeState} onDel={onTaskItemDel}></TaskItem>
                    </div>

                </div>
            </div>

        </>

    )
}