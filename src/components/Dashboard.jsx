import React, { useState } from "react"
import me from "./../assets/me.png"
import chair from "./../assets/chair.jpeg"
import heartRate from "./../assets/heartRate.png"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import driverTile from "./../assets/driver-window.png"
import couponTile from "./../assets/coupon-window.png"
import sosTile from "./../assets/sos-window.png"
import progressScore from "./../assets/progressScore.png"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import StarIcon from "@mui/icons-material/Star"

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
  const [openTile1, setOpenTile1] = React.useState(false)
  const [openTile2, setOpenTile2] = React.useState(false)
  const [openTile3, setOpenTile3] = React.useState(false)

  const handleClickOpen = () => {
    setOpenTile1(true)
  }

  const handleClickCoupon = () => {
    setOpenTile2(true)
  }

  const handleClickSOS = () => {
    setOpenTile3(true)
  }
  const handleClose = (value) => {
    setOpenTile1(false)
    setOpenTile2(false)
    setOpenTile3(false)
  }

  return (
    <div name="dashboard" id="dashboard" className="w-full h-screen bg-[#fff] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full mb-4">
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 text-black" style={{ borderColor: "#d5c6ff" }}>
                Dashboard
              </p>
            </div>
          </div>
          <div className="dashboard-section max-w-[1000px] w-full px-4">
            <div className="dashboard-section-one">
              <div>
                <img
                  src={me}
                  alt="my profile"
                  className="rounded-2xl mx-auto w-2/3 md:w-full"
                  style={{
                    border: "10px solid #D8C410",
                    borderRadius: "50%",
                    width: "165px",
                  }}
                />
                <StarIcon className="star-icon" />
                <p className="text-center">CID: cust000002</p>
                <p className="text-center"> John Doe</p>
                <Button>Loyalty Voucher</Button>
                <Button>Car Insurance Plans</Button>
                <Button>Privacy</Button>
                <Button>Feedback</Button>
              </div>
            </div>
            <div className="dashboard-section-two">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flexGrow: 2 }}>
                  <p>Your Score - 750</p>
                  <img src={progressScore} alt="Progress Score" />
                  {/* <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" width={250} value={75} />
                  </Box> */}
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickOpen} />
                  <DriverWindow open={openTile1} onClose={handleClose} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={chair} style={{ width: "120px", height: "120px", borderRadius: "10px" }} />
                </div>
                <div style={{ margin: "10px" }}>
                  <p>Customization Available</p>
                  <h3 style={{ textAlign: "center", color: "black" }}> 50 % OFF</h3>
                  <Button style={{ color: "white", background: "red" }}>Shop Now</Button>
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickCoupon} />
                  <CouponWindow open={openTile2} onClose={handleClose} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <img src={heartRate} style={{ width: "240px", height: "120px", borderRadius: "10px" }} />
                </div>
                <div style={{ margin: "0px" }}>
                  <p style={{ color: "red" }}>HIGH Heart Rate !</p>
                  <p style={{ color: "red", fontWeight: "normal", fontSize: "13px" }}> Your heart rate increased abnormally during driving.Visit nearby hospital for check up</p>
                </div>
                <div style={{ margin: "auto" }}>
                  {" "}
                  <ArrowForwardIcon onClick={handleClickSOS} />
                  <SOSWindow open={openTile3} onClose={handleClose} />
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
