import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../redux/Action';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  
  //getting state value from store using useSelector
  const userData = useSelector((store)=>store.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

//useEffect for calling userData Api for fetching data through redux
  useEffect(()=>{
  dispatch(getUserData());
  },[])

  const handleUserClick=(user)=>{
  localStorage.setItem("user",JSON.stringify(user));
  navigate('/user')
  }

  return (
    <div>
      <div>
        <div>
          Select An Account
        </div>
        {
          userData.length>0 && userData.map((user)=>(
            <div onClick={()=>handleUserClick(user)} key={user.id}>
              <div style={{display:"flex",gap:"30px"}}>
                 <img src={user.profilepicture} alt="profile" width={'200px'} height={'100px'}/>
                 <p>{user.name}</p>
              </div>
              <hr />
            </div>
          )) 
        }

      </div>
    </div>
  )
}

export default Home