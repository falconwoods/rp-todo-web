import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Checkbox, FormControlLabel } from '@mui/material';
import dayjs from 'dayjs';

export type EditTaskDialogRef = {
    handleClickOpen: (task: any) => void;
};

interface EditListDialogProps {
    onOk: (task: any) => void;
}

const EditTaskDialog = React.forwardRef<EditTaskDialogRef, EditListDialogProps>((props: EditListDialogProps, ref) => {
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = useState({ name: '', note: '', due: '', completed: false, listId: null });

    const handleClickOpen = (task: any) => {
        setOpen(true);
        setTask(task);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        props.onOk(task);
        handleClose();
    }


    React.useImperativeHandle(ref, () => ({
        handleClickOpen: handleClickOpen,
    }));

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit List</DialogTitle>
                <DialogContent>
                    <Box py={3} gap={2} display={'flex'} flexDirection={'column'}>
                        <TextField required value={task.name}
                            onChange={(e) => {
                                setTask(pre => {
                                    pre.name = e.target.value;
                                    return pre;
                                })
                            }}
                            label="task name" variant="outlined"
                        />
                        <TextField required value={task.name}
                            onChange={(e) => {
                                setTask(pre => {
                                    pre.note = e.target.value;
                                    return pre;
                                })
                            }}
                            label="task note" variant="outlined"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Due" defaultValue={dayjs(task.due)}
                                onChange={(val) => {
                                    const formattedDate = dayjs(val).format('YYYY-MM-DD');
                                    setTask(pre => {
                                        pre.due = formattedDate;
                                        return pre;
                                    })
                                }
                                }
                            />
                        </LocalizationProvider>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                />
                            }
                            label="Completed"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                />
                            }
                            label="Important"
                        />
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

export default EditTaskDialog;