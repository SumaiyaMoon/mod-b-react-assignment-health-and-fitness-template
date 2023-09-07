import ButtonComp from "../../component/button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import about1 from "../../assets/about.png"
import about2 from "../../assets/about2.png"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Gallerycomp from "../../component/gallery";
import NavBar from "../layout/navbar";
import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"
import contactImg from "../../assets/contact_form.png"
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import Footer from "../layout/footer";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Home(){


    return(
        <>

<div className="bg_img">
<NavBar/>
    <div className="container">
<div className="row h-100 d-flex  justify-content-start align-items-center ">
    <div className="col-8 py-5 mt-4">
        <h2 className="text-danger">----- With Patrick Potter</h2>
        <h1 className="text-start">
        BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.
        </h1>
        <div className="mt-5">
        <ButtonComp btnType={"text"} btnValue={"Became a member"}/>
        </div>
        </div>
        {/* <div className="col-4">
<PlayCircleFilledWhiteIcon className="playIconStyle"/>
        </div> */}
        </div>
</div>
</div>
<div className="container my-5 py-5">
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} sm={12} lg={6} >
         
            <img src={about1} className="w-100" />
          
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} >
        <Typography variant="h5" gutterBottom className="my-3 text-danger">
        ---About Our Gym
      </Typography>
        
            <Typography variant="h5" component="h4" className="fw-bolder blue_text" >
            SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
</Typography>
<Typography variant="h6" gutterBottom className="my-3">
Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
      Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.
      </Typography>
            <div className="mt-5">
      <ButtonComp btnType={"text"} btnValue={"Became a member"}  />
      </div>
        </Grid>
      </Grid>
    </Box>
    </div>
    
<div className="section_bg_img mt-5 p-5">
<Box>
<Grid container spacing={5} className="mt-5 p-5">
  <Grid item xs={12} md={6} sm={12} lg={6} >
  <Typography variant="h5" gutterBottom className="p-2 text-danger">
  ---- OUR SERVICES FOR YOU
      </Typography>
      <Typography variant="h5" gutterBottom className="p-2 fw-bolder ">
      PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
      </Typography>

  </Grid>
  <Grid item xs={12} md={6} sm={12} lg={6} className="text-start" >
  <ButtonComp btnType={"text"} btnValue={"More Services"}  />  </Grid>
</Grid>
</Box>

<Grid container spacing={3} className=" p-5 d-flex align-items-center justify-content-center flex-wrap" >
  <Grid item xs={12} md={4} sm={12} lg={4}>
    <Item className="text-black"><FitnessCenterIcon className="my-2 fs-1" />
    <Typography variant="h6" gutterBottom className="my-5">
    QUALITY EQUIPMENT</Typography>
    <Typography variant="body2" gutterBottom>
    The sea freight service has grown consider ably in recent years. We spend timetting to kn.
    </Typography>
    <div>
            <ButtonComp btnType={"text"} btnValue={"Discover More About Us →"}  />
    </div>
    </Item>

  </Grid>
  <Grid item xs={12} md={4} sm={12} lg={4}>
    <Item className="text-black"><FitnessCenterIcon className="my-2 fs-1" />
    <Typography variant="h6" gutterBottom className="my-5">
    QUALITY EQUIPMENT</Typography>
    <Typography variant="body2" gutterBottom>
    The sea freight service has grown consider ably in recent years. We spend timetting to kn.
    </Typography>
    <div>
            <ButtonComp btnType={"text"} btnValue={"Discover More About Us →"}  />
    </div>
    </Item>

  </Grid>
  <Grid item xs={12} md={4} sm={12} lg={4}>
    <Item className="text-black"><FitnessCenterIcon className="my-2 fs-1" />
    <Typography variant="h6" gutterBottom className="my-5">
    QUALITY EQUIPMENT</Typography>
    <Typography variant="body2" gutterBottom>
    The sea freight service has grown consider ably in recent years. We spend timetting to kn.
    </Typography>
    <div>
            <ButtonComp btnType={"text"} btnValue={"Discover More About Us →"}  />
    </div>
    </Item>

  </Grid>

</Grid>

</div>


<div className="container my-5 py-5">
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} sm={12} lg={6} >
         
            <img src={about2} className="w-100" />
          
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6} >
        <Typography variant="h5" gutterBottom className="my-3 text-danger">
        --- CLIENT FEEDBACK
      </Typography>
        
            <Typography variant="h5" component="h4" className="fw-bolder blue_text" >
            WHAT OUR CLIENT THIK ABOUT OUR GYM
            </Typography>
<Typography variant="h6" gutterBottom className="my-3">
Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
      Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.
      </Typography>
            <div className="mt-5">
      <ButtonComp btnType={"text"} btnValue={"Became a member"}  />
      </div>
        </Grid>
      </Grid>
    </Box>
    </div>


{/* Gallery Start */}

<Gallerycomp/>



{/* Gallery End */}


{/* Team Start */}
<Box>
<Grid container spacing={1} className="mt-5 container p-5">
  <Grid item  xs={12} md={8} sm={12} lg={8} >
  <Typography variant="h5" className="text-danger" >
  ---- OUR TEAM MAMBERS
      </Typography>
      <Typography variant="h5" className=" fw-bolder ">
      OUR MOST EXPRIENCED TRAINERS
            </Typography>

  </Grid>
  <Grid item  xs={12} md={4} sm={12} lg={4} className="text-end" >
  <ButtonComp btnType={"text"} btnValue={"More Services"} />  
  </Grid>
</Grid>
</Box>
<Box className="container mb-5" >

<div className="row d-flex align-items-center justify-content-center">
  <div className="col">
    <img src={team1} className="w-100" />
  </div>
  <div className="col">
    <img src={team2} className="w-100" />
  </div>
  <div className="col">
    <img src={team3} className="w-100" />
  </div>
</div>
</Box>

{/* Team End */}



{/* Membership start */}
<div className="section_bg_img2 my-5 p-5">

<div className="row mt-5 container p-5 d-flex align-items-center justify-content-center">
  <div className="col-12 col-md-6 " >
 
      <Typography variant="h4" gutterBottom className=" fw-bolder ">
      April membership offer available Now
      </Typography>

  </div>
  <div className="col-12 col-md-6 "  >
  <ButtonComp btnType={"text"} btnValue={"More Services"}  />  </div>
</div>

</div>
{/* Membership end */}


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
<Box className="container d-flex align-items-center justify-content-center  my-5" >
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