import React, { useEffect, useState } from 'react'
import './Fetchdata.css';

function Fetchdata() {
  const [data,setData]=useState()
    useEffect(()=>{
      const fetchApi=async()=>{
        const url="https://jsonplaceholder.typicode.com/todos";
        const res=await fetch(url);
        const response=await res.json();
          setData(response)
      }
      fetchApi()
    },[])

  return (
    <>
      {!data?"loading":
      <table>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
      
        {data.map((elem,id)=>{
          return(
            <tr key={id}>
              <td>{elem.userId}</td>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.completed}</td>
            </tr>
          )
        })}
        
      </tbody>
    </table>
    }
    </>
  )
}

export default Fetchdata;