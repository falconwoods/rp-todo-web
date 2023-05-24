import React, { ReactNode } from 'react';
import ButtonTrash from './button-trash';
import SvgIcon from './svg-icon';
import {PencilSquareIcon} from '@heroicons/react/24/outline'

type MyComponentProps = {
    label: string;
    taskListId: number;
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, label:string) => void;
    // children: ReactNode;
};

const TaskListItem: React.FC<MyComponentProps> = ({ label, taskListId, onClick, onDelete, onEdit }) => {

    const onSelectList = () => {
        onClick(taskListId);
    }

    const onDeleteList = () => {
        onDelete(taskListId);
    }

    const onEditList = () => {
        onEdit(taskListId, label);
    }

    return (
        <li className='flex justify-between cursor-pointer rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
            <div onClick={onSelectList} className="flex-1 flex items-center p-2 text-gray-900 ">
                <SvgIcon icon='list'></SvgIcon>
                 <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
            </div>
            
            <button onClick={onEditList} className='mx-2'><PencilSquareIcon width={20} height={20}></PencilSquareIcon></button>
            <button onClick={onDeleteList}><SvgIcon icon='trash' /></button>
        </li>
    );
};

export default TaskListItem;
