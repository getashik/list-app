export const fireReducer = (state={addAction:false,listData:[]},action) => {
    
    switch(action.type){

        case "ENABLEADD":
       return Object.assign({},state,action);
          
         case "FETCH":
         return Object.assign({},state,action);
         default:
        return state;
    }
}