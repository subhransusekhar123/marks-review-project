import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Button } from '@mui/material';
import { flexbox } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux'
import { addData, increment } from '../Slice/countSlice';
import axios from 'axios';


const PopperCo = ({ ele, index}) => {
  const [color, setColor] = useState("grey");
  const [anchorEl, setAnchorEl] = React.useState(null);
  let data = JSON.parse(localStorage.getItem("description_data"));
  console.log(data);
  let x = { title: data.topic, user: data.user };
  const colorDecider = () => {
    // debugger;
    if(ele.underStanding === 0){
      setColor("grey")
      console.log(color)
    }else if(ele.underStanding == 1){
      setColor("red")
      console.log(color)
    }else if(ele.underStanding == 2){
      setColor("blue")
      console.log(color)

    }else if(ele.underStanding == 3 ){
      setColor("yellow")
      console.log(color)

    }else{
      setColor("green")
    }
  }

  useEffect(()=>{
    colorDecider();
  },[])

  let dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const sendData = (num) => {
    axios.put(`http://localhost:4000/topic/updateTrial/${num}`,{sent:ele.sentence,user:data.user,topic:data.topic})
    .then((ele)=>alert(ele))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <span aria-describedby={id} type="button" onClick={handleClick}>
        <span key={index} style={{color:color}}>{ele.sentence}</span>
      </span>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: flexbox, flexDirection: "row", }}>
          <div >
            <Button variant="contained" color="success" onClick={() => sendData(4)}>UNDERSTOOD</Button>
          </div>

          <div onClick={() => sendData(3)}><Button variant="contained" >SOMEWHAT UNDERSTOOD</Button></div>
          <div onClick={() => sendData(2)}><Button variant="contained" color="secondary">NOT CLEAR</Button></div>
          <div onClick={() => sendData(1)}><Button variant="contained" color="error">WHAT RUBBISH</Button></div>

        </Box>
      </Popper>
    </div>
  )
}

export default PopperCo