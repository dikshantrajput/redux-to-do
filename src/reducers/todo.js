function todo(store=[] , action){
    const date = new Date()
    const month = ['Jan' , 'Feb' , 'March' , 'Apr' , 'May' ,'June' , 'July' , 'Aug' , 'Sep' , 'Oct'  , 'Nov' , 'Dec']
    switch(action.type){
        case "ADD_TODO":
            return [
                    ...store , { 
                        id: store.length > 0 ? Math.max.apply(null,store.map((item)=> item.id))+1 : 1 ,
                        title : action.payload.title ,
                        completed: false,
                        date : date.getDate() + ' ' + month.filter((item,index)=>index === date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes()
                    }
                ]
        
        case "REMOVE_TODO":
            return store.filter((item)=> action.payload.id !== item.id)
        
        case "TOGGLE_TODO":
            return store.map((item)=>{
                if(item.id !== action.payload){
                    return item
                }else{
                    return {
                        ...item,
                        completed : !item.completed
                    }
                }
            })
            
        default:
            return store 
    }
}

export default todo