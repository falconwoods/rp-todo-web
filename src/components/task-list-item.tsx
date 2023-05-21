import React, { ReactNode } from 'react';
import ButtonTrash from './button-trash';
import SvgIcon from './svg-icon';

type MyComponentProps = {
    label: string;
    taskListId: number;
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
    // children: ReactNode;
};

const TaskListItem: React.FC<MyComponentProps> = ({ label, taskListId, onClick, onDelete }) => {

    const onSelectList = () => {
        onClick(taskListId);
        console.log('list ' + taskListId);
    }

    const onDeleteList = () => {
        onDelete(taskListId);
        console.log('delete list ' + taskListId);
    }

    return (
        <li className='flex justify-between rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
            <div onClick={onSelectList} className="flex-1 flex items-center p-2 text-gray-900 ">
                <SvgIcon icon='list'></SvgIcon>
                 <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
            </div>
            <button onClick={onDeleteList}><SvgIcon icon='trash' /></button>
        </li>
    );
};

export default TaskListItem;
