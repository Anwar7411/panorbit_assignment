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
         <Grid container row justifyContent={'space-between'}>
            <Grid item className='navbar-page-title'>{page}</Grid>
            <Grid item  className='navbar-icon-container' onClick={handleIconClick} style={{cursor:"pointer"}}> 
            <img src={data?.profilepicture} alt="profile" className='navbar-icon'/>
            <p>{data?.name}</p>
            </Grid>
         </Grid>
        {
            open ? <Card  data={data} setOpen={setOpen}/> : ""
        }
        </div>
  )
}

export default Navbar