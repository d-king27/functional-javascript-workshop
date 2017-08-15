function getShortMessages(messages) {
    var mapped =
     messages.map(function(item){
         return item.message
                })
   return mapped.filter(function(item)
               {return item.length < 50})
    
   }
   
  
module.exports = getShortMessages

