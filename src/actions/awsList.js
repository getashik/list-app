export const GetList = function () {
    
    return function(dispatch){
    fetch("http://ec2-52-43-107-155.us-west-2.compute.amazonaws.com:3030/get")
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
    fetch("/put",
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
  fetch("/delete",
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