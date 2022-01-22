import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import Navbar_comp from "./navbar";


function Search() {
    const [search, setSearch] = useState([]);
    const [found, setFound] = useState(false);

    const searchData = (key) => {
        axios.get(`http://localhost:3000/restaurant?q=${key}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setSearch(res.data);
                    setFound(true);
                    return;
                }
                setFound(false);
                console.log(res.data);
            })
            .catch(() => {
                console.log('Data not found!');
                setFound(false);
            });


    }




    return (
        <>
        <Navbar_comp/>
        <div>
            <h1>Search</h1>
            <input type="text" onChange={(e) => { searchData(e.target.value) }} name="name" ></input>
            <div>
                {found ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>


                            </tr>
                        </thead>

                        <tbody>
                            {search.map((curEle) => (
                                <tr key={curEle.id}>
                                    <td>{curEle.id}</td>
                                    <td>{curEle.name}</td>
                                    <td>{curEle.adress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    : <h3>DATA NOT FOUND!!</h3>
                }
            </div>
        </div>
        </>
    )
}

export default Search;
