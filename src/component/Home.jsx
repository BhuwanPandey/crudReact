import React,{useState} from 'react'
import './Home.css';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {updateData,deleteData} from '../actions/index';
import Edit from './Edit';


function Home() {
  const items=useSelector((state)=>state.Creation.items);
  const dispatch=useDispatch();
  const [edits,setEdit]=useState(true);

  return (
    <>
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Layout</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Image</th>
          </tr>
        </thead>
        
        <tbody>
          {items.map((elem)=>{
           return(
            <tr className="item" key={elem.id}>
              <td>{elem.data.name}</td>
              <td>{elem.data.val}</td>
              <td>{elem.data.capacity}</td>
              <td>{elem.data.checked ?'True':'False'}</td>
              <td>{elem.data.file.selectedFile}</td>
              <td className='btnGroup'><button className='editbtn' onClick={()=>{edits===true?setEdit(false):setEdit(true)}}>Edit</button><button className='removebtn' onClick={()=>dispatch(deleteData(elem.id))}>remove</button></td>
            </tr>
           )
          })}
        
          
        </tbody>
      
   
      </table>
    </div>
    {edits || <Edit/>}
    </>
  )
}

export default Home