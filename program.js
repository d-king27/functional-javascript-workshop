function countWords(inputWords) {
return inputWords.reduce(function(acc,item){
if (item in acc) {
  acc[item]++
}
else {acc[item] = 1}       
return acc}
, {})
  }
  
  module.exports = countWords


  