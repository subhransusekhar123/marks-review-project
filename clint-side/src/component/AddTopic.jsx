import axios from 'axios'
import React, { useState } from 'react'

const AddTopic = () => {
    const [state, setState] = useState({
        topic: "",
        textArea: ""
    })
    const changeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }

    const clickHandler = () => {
        let user = JSON.parse(localStorage.getItem("data"));
        console.log(user)
        let x = {
            name:state.topic,
            desc:state.textArea,
            id:user.user
        }
        console.log(user.user);
        axios.post("http://localhost:4000/topic/postTopic",x)
        .then((ele)=> {
            console.log(ele.data)
        }).catch((ele)=> {
            console.log(ele)
        })
    }
    return (
        <div className='container'>
            <div>
                <input type="text" name="topic" id="" onChange={changeHandler} />
            </div>
            <div>
                <textarea name="textArea" id="" cols="30" rows="10" onChange={changeHandler}></textarea>
            </div>
            <div>
                <button className="btn btn-success" onClick={clickHandler}>submit</button>
            </div>
        </div>
    )
}

export default AddTopic