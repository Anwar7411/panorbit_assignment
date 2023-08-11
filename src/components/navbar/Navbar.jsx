import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'

const Navbar = ({data,Page}) => {
    const [open,setOpen] = useState(false)

    const handleIconClick=()=>{
        setOpen(true)
    }

  return (
        <div>
         <Grid container row>
            <Grid item>{Page}</Grid>
            <Grid item> 
            <img src={data?.profilepicture} alt="profile"  onClick={handleIconClick}/>
            </Grid>
        </Grid>
        {
            open ? <Card  data={data}/> : ""
        }
        </div>
  )
}

export default Navbar