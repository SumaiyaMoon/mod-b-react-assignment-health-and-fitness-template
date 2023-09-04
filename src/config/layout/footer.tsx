import { Box, Grid, Typography } from "@mui/material";
import logo from "../../assets/logo.png"
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <>
       <div className="footer_bg_img mt-5 p-5">
        <Box className="d-flex align-items-stretch mt-5 justify-content-around">
<Grid className="text-start mx-4 p-3">
    <Typography variant="h6" className="mb-3 fw-bolder">COMPANY</Typography>
    <Typography variant="body2" className="my-3 text-secondary">About Us</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Company</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Press & Blog</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Privacy Policy</Typography>
</Grid>
<Grid className="text-start mx-4 p-3">
    <Typography variant="h6" className="mb-3 fw-bolder">OPEN HOUR</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Monday 11am-7pm</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Tuesday-Friday 11am-8pm</Typography>
    <Typography variant="body2" className="my-3 text-secondary"> Saturday 10am-6pm</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Sunday 11am-6pm</Typography>
</Grid>
<Grid className="text-start mx-4 p-3">
    <Typography variant="h6" className="mb-3 fw-bolder">RESOURCES</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Home Insurance</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Travel Insurance</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Car Insurance</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Business Insurance</Typography>
    <Typography variant="body2" className="my-3 text-secondary">Heal Insurance</Typography>
</Grid>
<Grid className="text-start mx-4 p-3">
  <img src={logo} className="w-50 " />
    <Typography variant="body2" gutterBottom className="my-3 text-secondary">GThe trade war currently ensuing between <br/> te US  anfd several natxions around thdhe globe, most <br/> fiercely with.</Typography>
    <Typography variant="body2" className="my-3 text-secondary">
        <ul className="list-unstyled d-flex align-items-start justify-content-start gap-3 mt-3">
        <li><FacebookSharpIcon/></li>
        <li><TwitterIcon/></li>
        <li><LanguageIcon/></li>
        <li><InstagramIcon/></li>
        </ul>
            </Typography>
</Grid>
        </Box>
<hr className="m-5"/>
<div className="p-5 text-center">
    <Typography variant="body1">Copyright ©2023 All rights reserved | This template is made with ❤️  by Colorlib</Typography>
</div>
        </div>
        </>
    )
}