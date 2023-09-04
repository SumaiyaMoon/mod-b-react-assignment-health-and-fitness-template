import Header from "../layout/header";
import ButtonComp from "../../component/button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import about1 from "../../assets/about.png"
import about2 from "../../assets/about2.png"
import Footer from "../layout/footer";

export default function About(){
    return(
        <>
        <Header headerValue='About Us'/>


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

    <Footer/>

        </>
    )
}