exports.p1 =  function(str,num) {
    n=parseInt(num);
    /*calculating the length of the string */
    n=String(str).length;

    if (n>0 && num>=0 && num<=20)
    {
    return "The result is :" + String(n/num);
    }
    else { return "Input conditions not satisfied";}
  }

exports.p2 =  function(start_date,end_date) {
    if (start !== null)
    {
      var start= new Date(start_date); 
      s=start.getDate()-1;

      if (end_date!= null)
      {
        var end=new Date(end_date);
        /* getting the last day of the month of end_date*/    
        int_d = new Date(end.getYear(), end.getMonth()+1,1);
        d = new Date(int_d - 1);
        
        s=s+(d.getDate()-end.getDate());
      }
      console.log(start.getDate())
      console.log(start.getFullYear())

      return String(s)+" jours";
    }
    else 
    {
      return "Please enter a valid start date";
    }
    
  }
