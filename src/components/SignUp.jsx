import React from "react"
import Dialog from "@mui/material/Dialog"
import SignUpForm from "./SignUpForm"

const SignUp = ({ register, handleClose }) => {
  return (
    <div name="signup">
      <Dialog open={register} onClose={handleClose}>
        <SignUpForm handleClose={handleClose} open={register} />
      </Dialog>
    </div>
  )
}

export default SignUp
