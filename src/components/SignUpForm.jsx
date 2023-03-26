import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"

import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import "./styles.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",

    "& .MuiTextField-root": {
      margin: "20px",
      width: "90%",
    },
    "& .MuiButtonBase-root": {
      margin: "20px",
    },
  },
}))

const SignUpForm = ({ handleClose, open }) => {
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClose()
  }

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Sign Up
      </BootstrapDialogTitle>
      <form className={classes.root} onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField type="text" label="Email" variant="outlined" required />
          <TextField label="Password" variant="outlined" type="password" required />
          <TextField label="Confirm Password" variant="outlined" type="password" required />
        </DialogContent>
        <DialogActions>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Create Account
            </Button>
          </div>
        </DialogActions>
      </form>
    </BootstrapDialog>
  )
}

export default SignUpForm
