import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './UserProfile.css'
import { Grid } from '@mui/material';
import MenuBar from '../../components/menubar/MenuBar';
import Navbar from '../../components/navbar/Navbar';

const UserProfile = () => {
    const [data,setData] = useState({})

    const userData = useSelector((store)=>store.userData)
   
 //useEffect for getting single user which profile need to be view
    useEffect(()=>{
       let user=JSON.parse(localStorage.getItem("user"));
        setData(user);
    },[])
console.log("dddddd",data)

  return (
    <div className='profile-main-container'>
        <div className='profile-menubar-content'>
          <MenuBar  page={'Profile'} />
        </div>
        <div className='profile-nav-content'>
          <Navbar data={data} page={'Profile'} />
          {/* <Grid container>
            <Grid item>
            <img src={data?.profilepicture} alt="profile" />
            <h1>{data?.name}</h1>
            <div>
              <p>UserName : <span>{data?.username}</span> </p>
              <p>e-mail   : <span>{data?.email}</span> </p>
              <p>Phone    : <span>{data?.phone}</span> </p>
              <p>Website  : <span>{data?.website}</span> </p>
            </div>
            <hr />
            <h2>Company</h2>
            <div>
             <p>Name           : <span>{data?.company?.name}</span> </p>
              <p>catchPhrase   : <span>{data?.company?.catchPhrase}</span> </p>
              <p>bs            : <span>{data?.company?.bs}</span> </p>
            </div>
            </Grid>
            <Grid item>
              <div>
                <h1>Address</h1>
                <div>
              <p>Street   : <span>{data?.address?.street}</span> </p>
              <p>Suite    : <span>{data?.address?.suite}</span> </p>
              <p>City     : <span>{data?.address?.city}</span> </p>
              <p>Zipcode  : <span>{data?.address?.zipcode}</span> </p>
                </div>
              </div>
            </Grid>
          </Grid> */}
        </div>
    </div>
  )
}

export default UserProfile