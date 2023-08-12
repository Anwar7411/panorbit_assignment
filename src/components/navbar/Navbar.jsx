import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card';
import './Navbar.css'

const Navbar = ({data,page}) => {
    const [open,setOpen] = useState(false)

    const handleIconClick=()=>{
        setOpen(true)
    }

  return (
        <div className='navbar-container'>
         <Grid container row sx={{justifyContent:"space-between"}}>
            <Grid item>{page}</Grid>
            <Grid item > 
            <img src={data?.profilepicture} alt="profile"  onClick={handleIconClick} className='navbar-icon'/>
            </Grid>
        </Grid>
        {
            open ? <Card  data={data}/> : ""
        }
        </div>
  )
}

export default Navbar