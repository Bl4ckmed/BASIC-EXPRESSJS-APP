exports.p1 =  function(str,num) {
    num=parseInt(num);

    // calculer la longeur de la chaine en input 
    n=String(str).length;

    // cas de division par 0 
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


