import { Box, Typography } from "@mui/material";
import Header from "../layout/header";
import ButtonComp from "../../component/button";
import Footer from "../layout/footer";

export default function Schedule(){
    return(
        <>
                <Header headerValue="Schedule" />


{/* Schedule Start */}
<div className="container">
<div className="row d-flex align-items-center justify-content-center flex-column text-center">
  <div className="col-12 col-md-6 flex-column" >
  <Typography variant="h5" className="text-danger" >
  ---- OUR TIME SCHEDULE
      </Typography>
      <Typography variant="h4" gutterBottom className=" fw-bolder ">
      SELECT THE PERFECT <br/> TIME YOU NEED NOW
      </Typography>

  </div>
  <div className="col-12 col-md-6 "  >
  <ButtonComp btnType={"text"} btnValue={"More Services"}  />  </div>
</div>
</div>



{/* Weekly Schedule Start  */}
<Box
 className="container d-flex align-items-center justify-content-center  my-5" >
  <div className="row flex-column gap-3">
    <div className="col bg-light  text-center">
<ul className="d-flex align-items-center justify-content-between gap-5 list-unstyled p-2">
  <li>Saturday</li>
  <li>Sunday</li>
  <li>Monday</li>
  <li>Tuesday</li>
  <li>Wednesday</li>
  <li>Thursday</li>
  <li>Friday</li>
</ul>
    </div>
    <div className="col text-center">
      <ul className="d-flex align-items-center justify-content-between gap-3 list-unstyled ">
        <li className="bg-light p-3 py-5">
          <button className="btn btn-dark rounded-0 my-2">6am-8am</button>
          <Typography variant="h6" className="fw-bolder py-2">Kick Boxing</Typography>
          <Typography variant="body1" gutterBottom className="py-2">by Jhous Kosam</Typography>
        </li>
        <li className="bg-light p-3 py-5">
          <button className="btn btn-dark rounded-0 my-2">6am-8am</button>
          <Typography variant="h6" className="fw-bolder py-2">Kick Boxing</Typography>
          <Typography variant="body1" gutterBottom className="py-2">by Jhous Kosam</Typography>
        </li>
        <li className="bg-light p-3 py-5">
          <button className="btn btn-dark rounded-0 my-2">6am-8am</button>
          <Typography variant="h6" className="fw-bolder py-2">Kick Boxing</Typography>
          <Typography variant="body1" gutterBottom className="py-2">by Jhous Kosam</Typography>
        </li>
        <li className="bg-light p-3 py-5">
          <button className="btn btn-dark rounded-0 my-2">6am-8am</button>
          <Typography variant="h6" className="fw-bolder py-2">Kick Boxing</Typography>
          <Typography variant="body1" gutterBottom className="py-2">by Jhous Kosam</Typography>
        </li>
        <li className="bg-light p-3 py-5">
          <button className="btn btn-dark rounded-0 my-2">6am-8am</button>
          <Typography variant="h6" className="fw-bolder py-2">Kick Boxing</Typography>
          <Typography variant="body1" gutterBottom className="py-2">by Jhous Kosam</Typography>
        </li>
      </ul>
    </div>
  </div>
</Box>
{/* Weekly Schedule End  */}


{/* Schedule End */}     

<Footer/>
   </>
    )
}