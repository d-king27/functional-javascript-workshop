
function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {                   
        return submittedUsers.every(function(item){            
             return goodUsers.some(function(x) {                 
                 return x.id === item.id 

            })

        })

        }; 

    };
  
   


  module.exports = checkUsersValid
  
