export const awsReducer = (state=[{userName:"Ashik"}],action) => {
    
    switch(action.type){

        case "GETAWSLIST":
         return Object.assign([],action.payLoad);
         default:
        return state;
       

    }
}