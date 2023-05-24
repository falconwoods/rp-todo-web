import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react'

export type EditListDialogRef = {
    handleClickOpen: (taskId:number, name:string) => void;
};

interface EditListDialogProps {
    onOk: (id:number, name:string)=>void;
}

const EditListDialog = React.forwardRef<EditListDialogRef,EditListDialogProps>((props:EditListDialogProps, ref) => {
    const [open, setOpen] = React.useState(false);
    const textFieldRef = useRef<HTMLInputElement>(null);
    const [listId, setListId] = useState(0);
    const [listName, setListName] = useState('')

    const handleClickOpen = (taskId:number, name:string) => {
        setOpen(true);
        setListId(taskId);
        setListName(name);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = ()=>{
        if (textFieldRef.current) {
            const textFieldValue = textFieldRef.current.value;
            if(textFieldValue.length == 0)
                return;
            props.onOk(listId, textFieldValue);
            handleClose();
          }
    }

    React.useImperativeHandle(ref, () => ({
        handleClickOpen: handleClickOpen,
    }));

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit List</DialogTitle>
                <DialogContent>
                    <Box py={3}>
                        <TextField inputRef={textFieldRef} required value={listName} onChange={(e)=>{setListName(e.target.value)}} label="list name" variant="outlined" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleCreate}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})

export default EditListDialog;