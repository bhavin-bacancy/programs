function neardate()
{
var date1=document.getElementById("txt").value;
var date2=document.getElementById("txt1").value;
var firstValue = date1.split('-');
var secondValue = date2.split('-');

 var firstDate=new Date();
 firstDate.setFullYear(firstValue[0],(firstValue[1] - 1 ),firstValue[2]);

 var secondDate=new Date();
 secondDate.setFullYear(secondValue[0],(secondValue[1] - 1 ),secondValue[2]);     

  if (firstDate > secondDate)
  {
   alert("First Date  is greater than Second Date");
  }
 else
  {
    alert("Second Date  is greater than First Date");
  }
}
