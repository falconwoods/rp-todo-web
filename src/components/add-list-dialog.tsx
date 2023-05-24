import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react'

export type AddListDialogRef = {
    handleClickOpen: () => void;
};

interface AddListDialogProps {
    onOk: (name:string)=>void;
}

const AddListDialog = React.forwardRef<AddListDialogRef,AddListDialogProps>((props:AddListDialogProps, ref) => {
    const [open, setOpen] = React.useState(false);
    const textFieldRef = useRef<HTMLInputElement>(null);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('handleClickOpen')
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = ()=>{
        if (textFieldRef.current) {
            const textFieldValue = textFieldRef.current.value;
            if(textFieldValue.length == 0)
                return;
            props.onOk(textFieldValue);
            handleClose();
          }
    }

    React.useImperativeHandle(ref, () => ({
        handleClickOpen: handleClickOpen,
    }));

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add List</DialogTitle>
                <DialogContent>
                    <Box py={3}>
                        <TextField inputRef={textFieldRef} required label="list name" variant="outlined" />
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

export default AddListDialog;