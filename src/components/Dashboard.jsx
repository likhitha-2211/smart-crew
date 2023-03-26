import React, { useState } from "react"
import me from "./../assets/me.png"
import coupons from "./../assets/coupons.png"
import heartRate from "./../assets/heartRate.png"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import driverTile from "./../assets/driver-window.png"
import couponTile from "./../assets/coupon-window.png"
import sosTile from "./../assets/sos-window.png"

import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"

function DriverWindow(props) {
  const { onClose, selectedValue, open } = props
  const handleClose = () => {
    onClose(selectedValue)
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Drive Score</DialogTitle>
      <hr />
      <img src={driverTile} alt="Drive Score" />
    </Dialog>
  )
}

function CouponWindow(props) {
  const { onClose, selectedValue, open } = props
  const handleClose = () => {
    onClose(selectedValue)
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Coupons</DialogTitle>
      <hr />
      <img src={couponTile} alt="Coupons" />
    </Dialog>
  )
}

function SOSWindow(props) {
  const { onClose, selectedValue, open } = props
  const handleClose = () => {
    onClose(selectedValue)
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>SOS</DialogTitle>
      <hr />
      <img src={sosTile} alt="SOS" />
    </Dialog>
  )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  margin: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#52D060" : "#308fe8",
  },
}))

const Dashboard = () => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickCoupon = () => {
    setOpen(true)
  }

  const handleClickSOS = () => {
    setOpen(true)
  }
  const handleClose = (value) => {
    setOpen(false)
  }

  return (
    <div name="dashboard" id="dashboard" className="w-full h-screen bg-[#6fc2b0] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full mb-4">
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Dashboard</p>
            </div>
          </div>
          <div className="dashboard-section max-w-[1000px] w-full px-4">
            <div className="dashboard-section-one">
              <div>
                <img src={me} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                <p>Customer Id: XXXX</p>
                <p> Jane Doe</p>
                <Button>Loyalty Voucher</Button>
                <Button>Car Insurance Plans</Button>
                <Button>Privacy</Button>
                <Button>Feedback</Button>
              </div>
            </div>
            <div className="dashboard-section-two">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flexGrow: 2 }}>
                  <p>Your Score - 750/1000</p>

                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" width={250} value={75} />
                  </Box>
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickOpen} />
                  <DriverWindow open={open} onClose={handleClose} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={coupons} style={{ width: "100px", height: "120px", borderRadius: "10px" }} />
                </div>
                <div style={{ margin: "10px" }}>
                  <p>Customization Available</p>
                  <h3 style={{ textAlign: "center", color: "black" }}> 50 % OFF</h3>
                  <Button>Shop Now</Button>
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickCoupon} />
                  <CouponWindow open={open} onClose={handleClose} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={heartRate} style={{ width: "200px", height: "120px", borderRadius: "10px" }} />
                </div>
                <div style={{ margin: "0px" }}>
                  <p style={{ color: "maroon" }}>HIGH Heart Rate !</p>
                  <p style={{ color: "maroon", fontWeight: "normal", fontSize: "11px" }}> Your heart rate increased abnormally during driving.Visit nearby hospital for check up</p>
                  <Button>Shop Now</Button>
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickSOS} />
                  <SOSWindow open={open} onClose={handleClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
