import React, { ReactNode } from 'react';
import ButtonTrash from './button-trash';

type MyComponentProps = {
    label: string;
    onClick: (label: string) => void;
    children: ReactNode;
};

const TaskListCategoryItem: React.FC<MyComponentProps> = ({ label, onClick,children }) => {

    const onSelectList = () => {
        onClick(label);
        console.log('list ' + label);
    }

    return (
        <li className='flex justify-between cursor-pointer rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
            <div onClick={onSelectList} className="flex-1 flex items-center p-2 text-gray-900 ">
                {children}
                <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
            </div>
        </li>
    );
};

export default TaskListCategoryItem;
