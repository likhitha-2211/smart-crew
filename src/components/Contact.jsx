import React from "react"
import { Box, Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import "./styles.css"

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  console.log(errors)
  return (
    <div name="contact" className="w-full h-screen bg-[#fff] flex justify-center items-center p-4">
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 text-black" style={{ borderColor: "#d5c6ff" }}>
            Contact
          </p>
          <p className="text-black py-4">Get in touch, we’re happy to help</p>
        </div>
        <form className="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              variant="outlined"
              label="Email"
              name="email"
              type="text"
              placeholder="jhonny@email.com"
              InputProps={{
                required: true,
              }}
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 3, width: "55ch" },
            }}
          >
            <TextField id="firstname" variant="outlined" label="Firstname" name="firstname" type="text" placeholder="First name" className="input-field" />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 3, width: "55ch" },
            }}
          >
            <TextField id="lastname" variant="outlined" label="Lastname" name="lastname" type="text" placeholder="Last name" className="input-field" />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 3, width: "55ch" },
            }}
          >
            <TextField
              id="phonenumber"
              variant="outlined"
              label="Phone number"
              name="phonenumber"
              type="number"
              placeholder="Phone number"
              className="input-field"
              InputProps={{
                required: true,
                minLength: 10,
              }}
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 3, width: "55ch" },
            }}
          >
            <TextField
              id="additionalInfo"
              variant="outlined"
              label="Additional Info"
              name="additionalInfo"
              InputProps={{
                maxRows: 3,
              }}
              placeholder="Additional information"
              className="input-field"
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 2, p: 2 },
            }}
          >
            <Button color="primary" type="submit" variant="contained" className="submit-button">
              Let's Collaborate
            </Button>
          </Box>
        </form>
      </div>
    </div>
  )
}
export default Contact
