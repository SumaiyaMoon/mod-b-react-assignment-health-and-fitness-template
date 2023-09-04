import { Typography } from "@mui/material";
import ButtonComp from "../../component/button";
import Footer from "../layout/footer";
import Header from "../layout/header";
import contactImg from "../../assets/contact_form.png"


export default function Contact(){
    return(
        <>
                <Header headerValue="Contact Us" />

    {/* Contact Form Start */}
<div className="row container-fluid bg-light">

<div className="col">
  <img src={contactImg} className="w-100 h-100"/>
</div>
<div className="col p-5">
<div className="text-start" >
<Typography variant="h5" className="text-danger" >
---- OUR TIME SCHEDULE
    </Typography>
    <Typography variant="h4" gutterBottom className=" fw-bolder ">
    SELECT THE PERFECT <br/> TIME YOU NEED NOW
    </Typography>


</div>
<form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" />
      </div>
      
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12">
       
      </div>
      <div className="col-12">
      <ButtonComp btnType={"text"} btnValue={"Send Message"}  />
      </div>
    </form>
</div>
</div>
{/* Contact Form End */}

<Footer/>


        </>
    )
}