import React from "react"
import Dialog from "@mui/material/Dialog"
import SignInForm from "./SignInForm"

const SignIn = ({ open, handleClose }) => {
  return (
    <div name="signin">
      <Dialog open={open} onClose={handleClose}>
        <SignInForm handleClose={handleClose} open={open} />
      </Dialog>
    </div>
  )
}

export default SignIn
