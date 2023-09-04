import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import ButtonComp from "../../component/button";
import Header from "../layout/header";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Services(){
    return(
        <>
<Header headerValue="Services" />


<div className=" mt-5 p-5">
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

        </>
    )
}