const createData=(data)=>{
    return{
        type:"CREATE",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}


const updateData=()=>{
    return{
        type:"UPDATE"
    }
}
const deleteData=(id)=>{
    return{
    type:"DELETE",
    id
}}

export {createData,updateData,deleteData};