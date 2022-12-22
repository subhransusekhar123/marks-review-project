import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Table = () => {
    const [state, setState] = useState([])
    let user2 = JSON.parse(localStorage.getItem("data"));
    let navigate = useNavigate();
    const clickHandler = (e) => {
        let user = JSON.parse(localStorage.getItem("data"));
        console.log(user)
        axios.get(`http://localhost:4000/topic/getTopic/${user.user}`)
        .then((ele)=>{
            console.log(ele.data)
            setState(ele.data)
        }).then((ele)=>{
           navigate("/topic")
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        clickHandler()
    },[])

    const clickHandler2 =(topic,user) => {
        localStorage.setItem("description_data", JSON.stringify({topic:topic,user:user}));
        navigate("/desc")
    }
    
    return (
        <div className='container mt-2'>
            <button className="btn btn-success" onClick={()=>navigate("/addTopic")}>add-topic</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">topic name</th>
                        <th scope="col">percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((ele,index)=>{
                            return (
                                <>
                                    <tr>
                                    <td scope="col">{ index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.percentage}</td>
                                    <td><button className='btn btn-primary' onClick={()=>clickHandler2(ele.name,user2.user)}>edit description</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Table