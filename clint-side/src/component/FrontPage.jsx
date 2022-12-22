import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FrontPage = () => {
    const [state, setState] = useState("");
    const changeHandler = (e) => {
        setState(e.target.value)
        console.log(state)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/auth/postUser",{ user: state })
        .then((ele)=>{
            console.log(ele)
            localStorage. setItem("data", JSON.stringify(ele.data));
        }).then((ele)=>{
           navigate("/topic")
        })
        .catch(err => console.log(err))
    }
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
                <form>
                    <div class="mb-3" >
                        <label for="exampleInputEmail1" class="form-label">userName</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ changeHandler }/>
                    </div>

                        <button type="submit" class="btn btn-success" onClick={ clickHandler }>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default FrontPage