export const awsReducer = (state=[{userName:"Ashik"}],action) => {
    
    switch(action.type){

        case "GETAWSLIST":
         return Object.assign([],state,action.payLoad);
        break;
        default:
        return state;
       

    }
}