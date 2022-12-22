import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PopperCo from './PopperCo';
import { useSelector, useDispatch } from 'react-redux'


const ShowDesc = () => {
  const [state, setState] = useState([]);
  let selector = useSelector((state)=>state.counterReducer.numbers_arr);
  let selector1 = useSelector((state)=>state.counterReducer.value);

 
console.log(selector,selector1);
  const getDescription = () => {
    let data = JSON.parse(localStorage.getItem("description_data"));
    console.log(data);
    let x = { title: data.topic, user: data.user };
    console.log(x)
    axios.get(`http://localhost:4000/topic/getSpecificTopic/${data.topic}/${data.user}`)
      .then((ele) => {
        // setState(ele)
        // console.log(state)
        console.log(ele.data[0].desc)
        setState(ele.data[0].desc)
        console.log(state)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getDescription()
  }, []);
  return (
    <div className='container'>
      {
        state.map((ele, index) => {
          return (
           <PopperCo ele = {ele} index={index}/>
          
          )
        })
      }
     
    </div>
  )
}

export default ShowDesc;