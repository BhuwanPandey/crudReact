import React,{useState} from 'react'
import './Create.css';

import {useDispatch} from 'react-redux';
import {createData} from '../actions/index';

function Create() {

const [val,setVal]=useState('default');
const [checked, setChecked] = useState(true);
const [name,setName]=useState('');
const [capacity,setCapacity]=useState('');
const [file,setFile]=useState({selectedFile:''})
const [item,setItem]=useState([]);
const dispatch=useDispatch();


const createTable=(e)=>{
    e.preventDefault();
    if(val==='default' || !name || !capacity || !file.selectedFile){
        alert('Please fill up data')
    }else{
        setItem([...item,{val,checked,name,capacity,file}])

        dispatch(createData({val,checked,name,capacity,file}))
        setName('');
        setCapacity('');
        
    }
}
const cancelTable=(e)=>{
    e.preventDefault();
    setChecked(true);
    setName('');
    setCapacity('');
}


  return (
    <div className="createContainer">
        <h1 className='title'>Create Table</h1>
        <div className="createSubcontainer">
            <form onSubmit={createTable}>
                <div className="elementContainer">
                    <label>Layout:</label>
                    <select defaultValue={val} onChange={(e)=>{setVal(e.target.value)}}>
                        <option value="default" disabled hidden>Select Layout</option>
                        <option value="border">Border</option>
                        <option value="grid">Grid</option>
                        <option value="box">Box</option>
                        <option value="card">Card</option>
                    </select>
                </div>
                <div className="elementContainer">
                    <label >Name:</label>
                    <input type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} value={name}/>
                </div>
                <div className="elementContainer">
                    <label >Capacity:</label>
                    <input type="text" placeholder='Enter Capacity' onChange={(e)=>{setCapacity(e.target.value)}} value={capacity}/>
                </div>
                <div className="elementContainer">
                    <label >Status:</label>
                    <input type="checkbox" checked={checked} onChange={(e)=>{setChecked(e.target.value)}}/>
                </div>
                <div className="elementContainer">
                    <label>Image:</label>
                    <input type="file" onChange={(e)=>{setFile({selectedFile:e.target.files[0].name});}} />
                </div>
                <div className="elementContainer">
                    <button className='createtable' type='submit'>Create Table</button>
                    <button className='canceltable' onClick={cancelTable}>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create