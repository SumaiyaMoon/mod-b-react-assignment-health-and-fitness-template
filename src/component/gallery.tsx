import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Gallery1 from "../assets/gallery1.png"
import Gallery2 from "../assets/gallery2.png"
import Gallery3 from "../assets/gallery3.png"
import Gallery4 from "../assets/gallery4.png"
import Gallery5 from "../assets/gallery5.png"


export default function Gallerycomp() {
  return (
    <>

      <Box className="row d-flex align-items-center justify-content-center m-2"  >
        <Box className="col-md-6 col-sm-12">
          <Grid container>
            <Grid item>
            <img src={Gallery1} className='w-100' />
            </Grid>
          </Grid>
        </Box>
        <Box className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column gap-2" >

          <Grid container className="row ">
            <Grid item className='col-md-6 col-sm-12'>
              <img src={Gallery2} className='w-100 py-3' />
            </Grid>
            <Grid item className='col-md-6 col-sm-12'>
              <img src={Gallery3} className='w-100 py-3' />
            </Grid>
          </Grid>

          <Grid container className="row ">
            <Grid item className='col-md-6 col-sm-12'>
              <img src={Gallery4} className='w-100 py-3' />
            </Grid>
            <Grid item className='col-md-6 col-sm-12'>
              <img src={Gallery5} className='w-100 py-3' />
            </Grid>
          </Grid>

        </Box>
      </Box>


    </>
  )
}