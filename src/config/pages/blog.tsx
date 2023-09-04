import { Box, Paper, Typography } from "@mui/material"
import Footer from "../layout/footer"
import Header from "../layout/header"
import ButtonComp from "../../component/button"
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"

export default function Blog(){
    return(
        <>
        <Header headerValue="Blog" />
           
        {/* Last section start */}
<div className="container">
<div className="row d-flex align-items-center justify-content-center flex-column text-center">
  <div className="col-12 col-md-6 flex-column" >
  <Typography variant="h5" className="text-danger" >
  RECENT NEWS FORM BLOG
      </Typography>
      <Typography variant="h4" gutterBottom className=" fw-bolder ">
      GYM TIPS NEWS FOR YOU <br/> THAT SELECTED BY US
      </Typography>

  </div>
  <div className="col-12 col-md-6 "  >
  <ButtonComp btnType={"text"} btnValue={"More Services"}  />  </div>
</div>
</div>

<div className="container text-center">
  <div className="row mt-5 d-flex align-items-center justify-content-center">
  <div className="col-md-6 col-12">
      <Paper className="bg-light text-start">
      <img src={blog1} className="w-100"/>
      <Box className="p-2">
      <Typography variant="h6" className="p-2 "> -------- Creative derector</Typography>
      <Typography variant="h5" className="fw-bold">Footprints in Time is perfect House in Kurashiki</Typography>
      </Box>
      </Paper>
      </div>
    <div className="col-md-6 col-12">
      <Paper className="bg-light text-start">
      <img src={blog2} className="w-100"/>
      <Box className="p-2">
      <Typography variant="h6" className="p-2 "> -------- Creative derector</Typography>
      <Typography variant="h5" className="fw-bold">Footprints in Time is perfect House in Kurashiki</Typography>
      </Box>
      </Paper>
      </div>
  </div>
</div>

{/* Last section end */}

<Footer/>
        </>
    )
}