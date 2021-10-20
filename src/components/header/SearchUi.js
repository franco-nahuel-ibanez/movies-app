import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import { ModalResults } from './ModalReults';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            '&:focus':{
                width: '30ch',
            }
        },
    },
}));


export const SearchUi = () => {

    const [inputValue, setInputValue] = useState({title: ''})

    const [openModal, setOpenModal] = useState(false)

    const {title} = inputValue;

    const handleOpenModal = () => {
        if(title.length > 3) {
            setOpenModal(true)
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        resetForm()
    }

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue, 
            [e.target.name] :e.target.value
        })
    }
    
    const resetForm = () => {
        setInputValue({ 
            title : ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleOpenModal()
    }


    const classes = useStyles();

    return (
        <>
            <div>
                <form className={classes.search} onSubmit={ handleSubmit }>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        name="title"
                        onChange={ handleInputChange }
                        value={title}
                    />
                    
                    <IconButton variant="outline" type="submit">
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
            <ModalResults 
                openModal={openModal} 
                handleCloseModal={handleCloseModal}
                resetForm={resetForm}
                title={title}
            />
        </>
    );
}