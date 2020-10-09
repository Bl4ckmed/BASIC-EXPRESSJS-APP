exports.p2 =  function(start_date,end_date) {
    s=0
    if (start_date!== " ")
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
   
      return String(s)+" jours";
    }
    else 
    {
      return "Please enter a valid start date";
    }
    
  }