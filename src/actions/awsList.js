export const GetList = function () {
    
    return function(dispatch){
    fetch("/service/data.json?tt=11f")
      .then(res => res.json())
      .then(
        (result) => {
         
          
            dispatch(
                {
                    type: "GETAWSLIST",
                    payLoad: result.data
                })
	// 	 dispatch( returnUserdata(
	// 	result.data
	//    ))
           
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
           alert("Erooor");
        }
      ) 
    }
    
    

}