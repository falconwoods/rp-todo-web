import React, { useState } from 'react';
import SvgIcon from './svg-icon';

interface MyComponentProps {
    taskName: string;
    taskId: number;
    taskStatus: boolean;
    onChangeStatus: (taskId: number, val: boolean) => void;
    onClick: (taskId: number) => void;
    onDel: (taskId: number) => void;
}

const TaskItem: React.FC<MyComponentProps> = ({ taskName, taskId, taskStatus, onChangeStatus, onClick, onDel }) => {

    let [completed, setCompleted] = useState(taskStatus);

    const onClickCheckbox = (e: any) => {
        setCompleted(e.target.checked);
        onChangeStatus(taskId, completed);
    }

    const onClickDel = (e: any) => {
        e.stopPropagation();
        onDel(taskId);
    }

    return (
        <div onClick={(e) => { onClick(taskId) }} className="flex items-center justify-between cursor-pointer p-3 space-x-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <input type="checkbox" checked={completed} onChange={onClickCheckbox} className="mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
            <div className="flex-1">{taskName}</div>

            <button onClick={onClickDel} className="detailFooter-trash" aria-label="Delete task">
                <SvgIcon icon='trash'></SvgIcon>
            </button>
        </div>
    );
};

export default TaskItem;