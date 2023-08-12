import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import MenuBar from '../../components/menubar/MenuBar';
import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/map/Map';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getUserData } from '../../redux/Action';

const UserProfile = () => {
    const [data,setData] = useState({});
    const [expanded,setExpanded]=useState(false);

    const dispatch = useDispatch();

    const userData = useSelector((store)=>store.userData)
   
 //useEffect for getting single user which profile need to be view
    useEffect(()=>{
       let user=JSON.parse(localStorage.getItem("user"));
        setData(user);
    },[])

    useEffect(()=>{
  if(userData.length==0){
    dispatch(getUserData());
  }
    },[userData])


  return (
    <div className='profile-main-container'>
        <div className='profile-menubar-content'>
          <MenuBar  page={'Profile'} />
        </div>
        <div className='profile-nav-content'>
          <Navbar data={data} page={'Profile'} />
          <hr  className='bottom-nav-hr-line'/>
          <Grid container spacing={2} justifyContent={'space-between'} >
            <Grid item  xs={5} sm={5} md={5} lg={5} className='profile-summery-container'>
            <img src={data?.profilepicture} alt="profile" className='profile-image'/>
            <h2>{data?.name}</h2>
            <div>
              <p >UserName : <span className='profile-summery-span'>{data?.username}</span> </p>
              <p>e-mail   : <span className='profile-summery-span'>{data?.email}</span> </p>
              <p>Phone    : <span className='profile-summery-span'>{data?.phone}</span> </p>
              <p>Website  : <span className='profile-summery-span'>{data?.website}</span> </p>
            </div>
            <hr className='profile-summery-container-hr'/>
            <h2>Company</h2>
            <div>
             <p>Name           : <span className='profile-summery-span'>{data?.company?.name}</span> </p>
              <p>catchPhrase   : <span className='profile-summery-span'>{data?.company?.catchPhrase}</span> </p>
              <p>bs            : <span className='profile-summery-span'>{data?.company?.bs}</span> </p>
            </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} > 
              <div className='profile-horizontal-line'></div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <div>
                <h1>Address</h1>
                <div>
              <p>Street   : <span className='profile-summery-span'>{data?.address?.street}</span> </p>
              <p>Suite    : <span className='profile-summery-span'>{data?.address?.suite}</span> </p>
              <p>City     : <span className='profile-summery-span'>{data?.address?.city}</span> </p>
              <p>Zipcode  : <span className='profile-summery-span'>{data?.address?.zipcode}</span> </p>
                </div>
              </div>

              <div>
                <Map data={data}/>
                <div className='profile-map-lat-lng'>
                  <p>Lat : <span className='profile-summery-span'>{data?.address?.geo?.lat}</span></p>
                  <p>Long : <span className='profile-summery-span'>{data?.address?.geo?.lng}</span></p>
                </div>
              </div>

              <div className='chat-accordian'>
              <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)} className='accordian-main-container' style={expanded ? {top:"-400px"}:{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='accordian-heading'
        >
          <Typography >
            Chats
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         {
          userData.length>0 && userData.map((user,i)=>(
            <Grid container  row>
                 <Grid item  xs={4} sm={4} md={4} lg={4}><img src={user.profilepicture} alt="" className='online-user-image'/></Grid>  
                 <Grid item  xs={6} sm={6} md={6} lg={6}><p  className='online-user-name'>{user.name}</p></Grid> 
                 <Grid item  xs={2} sm={2} md={2} lg={2}><div className='online-user-status' style={i==2 || i==3 || i==6 || i==7 || i==5? {backgroundColor:"green"}:{}}></div></Grid> 
            </Grid>
          ))
         }
        </AccordionDetails>
      </Accordion>
              </div>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default UserProfile