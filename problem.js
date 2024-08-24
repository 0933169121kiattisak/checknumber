const  checkNumber = (number1,number2,number3) => {
    if(number1 < number2 && number1 < number3 && number2 < number3){
     console.log("increasing");
    } else if(number1 > number2 && number1 > number3 && number2 > number3){
      console.log("decreasing");
    }else{
      console.log("neither");
    }
  }
  
checkNumber(1,2,3);
  