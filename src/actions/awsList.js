const APIURL=process.env.REACT_APP_API_URL;
export const GetList = function () {
    return function(dispatch){
    fetch(`${APIURL}/get`)
      .then(res => res.json())
      .then(
        (result) => {
         
          
            dispatch(
                {
                    type: "GETAWSLIST",
                    payLoad: result
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


export const PushUser = function (data) {
    
    return function(dispatch){
    fetch(`${APIURL}/put`,
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }
    )
      .then(res => res.json())
      .then(
        (result) => {
         
          
          dispatch(GetList())
           
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

export const DeleteUser = function (data) {
    
  return function(dispatch){
  fetch(`${APIURL}/delete`,
  {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }
  )
    .then(res => res.json())
    .then(
      (result) => {
       
        
        dispatch(GetList())
         
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