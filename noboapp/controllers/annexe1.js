exports.p1 =  function(str,num) {
    num=parseInt(num);
    
    /*calculating the length of the string */
    n=String(str).length;

    if (num==0)
    {
      return "error : cannot divide by 0"
    }

    else if (n>0 && num>0 && num<=20)
    {
    return "The result is :" + String(n/num);
    }
    else { return "Input conditions not satisfied";}
  }


