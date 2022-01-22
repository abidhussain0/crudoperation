import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const UpDate=(props)=>{
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("")

    const getUse = () => {
        axios.get(`http://localhost:3000/restaurant/${props.match.params.id}`)
            .then((res) => {
                setId(res.data.id)
                setName(res.data.name)
                setAdress(res.data.adress)
            })
            .catch(() => {
                console.log('Data not found!');
            });
    }
    useEffect(() => {
        getUse();
    }, [])

    const saveUser = (e) => {
        e.preventDefault();
      
        let data = { name, adress }
        axios.put(`http://localhost:3000/restaurant/${props.match.params.id}`, data)

            .then(() => {
                console.log("data successful updated")

            })
            .catch(() => {
                console.log('Data not update');
            })
    }

    return(
        <div>
        <h1>Update</h1>
        <form onSubmit={saveUser} >
            <input type="text" disabled value={id} onChange={(e) => { setId(e.target.value) }} name="id" />
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />
            <input type="text" value={adress} onChange={(e) => { setAdress(e.target.value) }} name="city" />
            <button type="submit">Update</button>
        </form>

    </div>


    );
}
export default UpDate;