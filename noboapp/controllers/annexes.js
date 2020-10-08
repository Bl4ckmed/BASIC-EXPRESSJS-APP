exports.p1 =  function(str,num) {
    n=parseInt(num);
    /*calculating the length of the string */
    n=String(str).length;

    if (n>0 && num>=0 && num<=20)
    {
    return "The result is :" + String(n/num);
    }
    else { return "Les conditions sur l'inputs ne sont pas respectées";}
  }

exports.p2 =  function(start_date,end_date) {
    start=Date.parse(start_date);
    if (end_date!= null)
    {
      end=Date.parse(end_date);
      /* getting the last day of the month of end_date*/    
      int_d = new Date(end.getYear(), end.getMonth()+1,1);
      d = new Date(int_d - 1);
    }

    if (start !== null)
    {
      s=start.getDay()-1;
      if (end_date!= null)
      {
        s=s+(d.getDay-end.getDay());
      }
      return String(s)+" jours";
    }
    else 
    {
      return "Please enter a valid start date";
    }
    
  }
