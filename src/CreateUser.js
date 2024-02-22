import React, { useState } from "react";
import axios from "axios"; 

    const CreateUser = () => {
        const [inputUser, setInputUser] = useState("");
        const [inputPass, setInputPass] = useState("");
        const [inputConfirm, setInputConfirm] = useState("");
        const [status, setStatus] = useState('')



        return (
            <div className="CreateUser">
                <input
                    style={{marginTop:'-100px', marginBottom:'25px', height:'50px', width: '200px'}}
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                ></input>
                <br></br>
                <input
                    style={{marginTop:'-50px', marginBottom: '20px', height: '50px', width:'200px'}}
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value = {inputPass}
                    onChange={(e) => setInputPass(e.target.value)}
                ></input>
                <br></br>
                <input
                    style={{marginTop:'-10px', height: '50px', width:'200px'}}
                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    id="confirmpass"
                    value = {inputConfirm}
                    onChange = {(e) => setInputConfirm(e.target.value)}
                ></input>
                <br></br>
                <h6>{status}</h6>
                <br></br>
                <button type="button" className="btn btn-primary" style={{width:'200px', height: '50px'}} onClick= {addUser}>
                    Create
                </button>
            </div>
        );
    };

export default CreateUser;