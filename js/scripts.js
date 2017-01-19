var answer = ""
var inputValue


var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["","M","MM","MMM"]];
function convert(num) {
  if (parseInt(num)<=0){
    answer = "Please enter a number above 0";
  } else if(isNaN(parseInt(num))){
    answer = "Please enter a number";

  }else {
    var digits = num.split('').reverse();
    for (var i=0; i < digits.length; i++){
      answer = numeralCodes[i][parseInt(digits[i])] + answer;
    }
    if(answer === "undefined"){
      answer = "Please enter a number 3,999 or below";
    }
  }
  return answer;
}



$(document).ready(function(){
 $("form#rom-form").submit(function(event){
   event.preventDefault();
   $("#output").empty();
   inputValue = $("input#tbox").val()
  convert(inputValue);
   $("#output").append("<p>" + answer + "</p>");
   answer = ""

 });
});
