import React, { ReactNode, useState, useEffect, useRef, useContext } from 'react';
import ButtonTrash from './button-trash';
import SvgIcon from './svg-icon';
import { getAPI, getData, postAPI } from '@/utils/api';
import TaskItem from './task-item';
import { Button } from '@mui/material'
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline'
import EditTaskDialog, { EditTaskDialogRef } from './edit-task-dialog';
import AppContext from '@/context/AppContext';

type MyComponentProps = {
    listName: string;
    listId: number;
    // children: ReactNode;
};

const Tasks: React.FC<MyComponentProps> = ({ listName, listId }) => {
    const { sharedData, setSharedData } = useContext(AppContext);
    const [tasks, setTasks] = useState([]);
    const [sortType, setSortType] = useState('default');
    const dialogRef = useRef<EditTaskDialogRef>(null);

    let requestTasks = async () => {
        let ret = await getAPI(`/tasks/bylist`, { listId });
        ret.data = ret.data.filter((item:any)=>{
            if(sharedData.search == '' || sharedData.search == undefined)
                return true;
            return item.name.includes(sharedData.search);
        })
        if (sortType == 'due') {
            ret.data.sort((a: any, b: any) => {
                return a.due > b.due ? 1 : -1;
            });
        }
        setTasks(ret.data);
    }

    useEffect(() => {
        requestTasks();
        console.log('search', sharedData.search)
    }, [listId, sortType, sharedData.search]);

    const onSort = (val: string): void => {
        if (val == sortType) return;

        setSortType(val);
    };

    const onClickTaskItem = (task: any) => {
        if (dialogRef.current)
            dialogRef.current.handleClickOpen(task);
    }

    const onTaskItemChangeState = async (task: any) => {
        let ret = await postAPI('/tasks/update', task);
        requestTasks();
    }

    const onTaskItemDel = async (taskId: number) => {
        console.log('del task', taskId);
        let ret = await postAPI('/tasks/delete', { id: taskId });
        console.log(ret);
        requestTasks();
    }

    const onStar = async (task:any, value:boolean) =>{
        task.important = value;
        await postAPI('/tasks/update', task);
        requestTasks()
    }

    const onNewtask = async () => {
        dialogRef.current?.handleClickOpen({
            name: '', note: '', due: null, completed: false, important: false
        });
    }

    const onEditTaskOk = async (task: any) => {
        let ret = null;
        if (task.id == null) {
            task.listId = listId;
            ret = await postAPI('/tasks/create', task)
        }
        else {
            ret = await postAPI('/tasks/update', task);
        }
        console.log(task, ret);
        requestTasks()
    }

    return (
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
            <EditTaskDialog ref={dialogRef} onOk={onEditTaskOk} />
            <div className="flex justify-between w-full text-xl text-blue-500 font-medium my-2">
                <div className="flex items-center space-x-2">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5a1 1 0 100-2 1 1 0 000 2zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h11a.5.5 0 000-1h-11zm-2.5.5a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"></path></svg>
                    <span>{listName}</span>
                </div>
                <div className="flex items-center text-xs">

                    {(listId >= 0) && <Button onClick={onNewtask} variant='outlined' sx={{ fontSize: '8px', padding: '3px 6px', marginRight: '0.5rem', fontWeight: 'bolder' }}>new task</Button>}
                    <Button onClick={() => { onSort('default') }} variant='outlined' sx={{ fontSize: '8px', padding: '3px 6px', marginRight: '0.5rem', fontWeight: 'bolder' }}>sort by default</Button>
                    <Button onClick={() => { onSort('due') }} variant='outlined' sx={{ fontSize: '8px', padding: '3px 6px', marginRight: '0.5rem', fontWeight: 'bolder' }}>sort by due</Button>
                    {/* <div onClick={() => onSort('create-time')} className="flex justify-center cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        <svg aria-hidden="true" className="pt-0.5 flex-shrink-0 w-3 h-3 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
                        <span>sort by due</span>
                    </div>
                    <div onClick={() => onSort('due-date')} className="flex justify-center cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        <svg aria-hidden="true" className="pt-0.5 font-medium flex-shrink-0 w-3 h-3 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z" fill="currentColor"></path></svg>
                        <span>due date</span>
                    </div> */}
                </div>
            </div>

            <div className="space-y-2">
                {
                    tasks.map((item: any) => {
                        return <TaskItem key={item.id} task={item} onStar={onStar} onClick={onClickTaskItem} onChangeStatus={onTaskItemChangeState} onDel={onTaskItemDel}></TaskItem>
                    })
                }

            </div>

        </div>
    );
};

export default Tasks;
