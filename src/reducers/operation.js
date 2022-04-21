const initialData={
    items:[]
}

const Creation=(state=initialData,action)=>{
    switch(action.type){
        case "CREATE":
            const {id,data}=action.payload;
            return{
                ...state,
                items:[
                    ...state.items,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            case "DELETE":
                const newlist=state.items.filter((elem)=>elem.id!=action.id)
                
                return{
                    ...state,
                    items:newlist
                }
        default: return state
    }

}

export default Creation;