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

const SignInForm = ({ handleClose, open }) => {
  const classes = useStyles()
  // create state variables for each input
  const [customerId, setCustomerId] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    handleClose()
    console.log(customerId, password, localStorage.getItem("authenticated"))

    if (customerId === "cust000001" && password === "password@123") {
      console.log(customerId, password)
      console.log(localStorage.getItem("authenticated"))
      setAuthenticated(true)
      localStorage.setItem("authenticated", true)
      window.location.href = "/dashboard"
    } else {
      setAuthenticated(false)
      localStorage.setItem("authenticated", false)
      alert("Incorrect details")

      window.location.href = "/"
    }
  }

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Sign In
      </BootstrapDialogTitle>
      <form className={classes.root} onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField type="number" label="CustomerId" variant="outlined" required value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
          <TextField label="Password" variant="outlined" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <div>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </DialogActions>
      </form>
    </BootstrapDialog>
  )
}

export default SignInForm
