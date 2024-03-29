'use client';

import SvgIcon from "@/components/svg-icon";
import TaskItem from "@/components/task-item";
import TaskListCategoryItem from "@/components/task-list-category-item";
import TaskListItem from "@/components/task-list-item";
import { Box, Button, CssBaseline, Drawer } from "@mui/material";
import AddListDialog, { AddListDialogRef } from "@/components/add-list-dialog";
import { useContext, useEffect, useRef } from "react";
import AppContext from "@/context/AppContext";
import { getAPI, postAPI } from "@/utils/api";
import EditListDialog, { EditListDialogRef } from "@/components/edit-list-dialog";
import Tasks from "@/components/tasks";
import * as React from 'react';
import { useState } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline'

export default function Home() {
    const { sharedData, setSharedData } = useContext(AppContext);
    const dialogRef = useRef<AddListDialogRef>(null);
    const dialogEditListRef = useRef<EditListDialogRef>(null);
    let [curList, setCurList] = useState({ id: -1, name: 'All Tasks' });
    const drawerWidth = 240;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        updateTasklists();
    }, [])

    const updateTasklists = async () => {
        let ret = await getAPI('/lists/all');
        console.log('updateTasklists', ret);
        setSharedData((preState: any) => ({
            ...preState,
            tasklists: ret.data
        }));
    }

    const onDeleteList = async (id: number) => {
        let ret = await postAPI('/lists/delete', { id });
        console.log(ret);
        updateTasklists();
    }

    const onEditList = async (id: number, label: string) => {
        console.log('edit', id);
        dialogEditListRef.current?.handleClickOpen(id, label);
    }

    const onNewList = () => {
        if (dialogRef.current)
            dialogRef.current.handleClickOpen();
    };

    const onDialogCreateList = async (name: string) => {
        let ret = await postAPI('/lists/create', { name });
        updateTasklists();
    }

    const onDialogEditList = async (id: number, name: string) => {
        console.log(id, name);
        let ret = await postAPI('/lists/update', { id, name });
        updateTasklists();
    }

    const onClickListItem = (listId: number, name: string) => {
        setCurList({ id: listId, name });
    }

    const handleDrawerToggle = () => {
        setSharedData((pre: any) => {
            return { ...pre, mobileOpen: !pre.mobileOpen }
        })
    };

    const drawer = (
        // <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <aside >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <TaskListCategoryItem label="All Tasks" onClick={() => { onClickListItem(-1, 'All Tasks') }}>
                        <SvgIcon icon="home"></SvgIcon>
                    </TaskListCategoryItem>

                    <TaskListCategoryItem label="Important" onClick={() => { onClickListItem(-2, 'Important') }}>
                        <SvgIcon icon="star"></SvgIcon>
                    </TaskListCategoryItem>

                    <TaskListCategoryItem label="Planned" onClick={() => { onClickListItem(-3, 'Planned') }}>
                        <SvgIcon icon="calendar"></SvgIcon>
                    </TaskListCategoryItem>

                    <TaskListCategoryItem label="Complted" onClick={() => { onClickListItem(-4, 'Complted') }}>
                        <SvgIcon icon="calendar"></SvgIcon>
                    </TaskListCategoryItem>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    {
                        sharedData.tasklists?.map((item: any) => {
                            return <TaskListItem
                                key={item.id} label={item.name} taskListId={item.id}
                                onClick={() => { onClickListItem(item.id, item.name) }}
                                onDelete={onDeleteList}
                                onEdit={onEditList}></TaskListItem>
                        })
                    }

                    <Button onClick={onNewList} variant="outlined" fullWidth={true}>New List</Button>
                </ul>
            </div>
        </aside>
    );

    return (
        <Box bgcolor="white" sx={{ display: 'flex', height: '100vh', }}>
            <CssBaseline />

            {/* <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar> */}

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Box height="100vh" sx={{
                    borderRight: 1,
                    borderColor: 'grey.200',
                    display: { xs: 'none', sm: 'block' },
                    marginTop: '3.5rem',
                }}>
                    {drawer}
                </Box>

                <Drawer
                    variant="temporary"
                    open={sharedData.mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <AddListDialog ref={dialogRef} onOk={onDialogCreateList}></AddListDialog>
                <EditListDialog ref={dialogEditListRef} onOk={onDialogEditList}></EditListDialog>
                <div className="p-4">
                    <Tasks listId={curList.id} listName={curList.name}></Tasks>
                </div>
            </Box>
        </Box>
    );

}