var arr=new Array();
 arr[0]=5;
 arr[1]=20;
 arr[2]=2;
 arr[3]=7;
 arr[4]=15;
 
 arr.pop(); 
 display("REMOVING HIGHEST DATA AND DISPLAYING  <br>");
 

function display(msg)
{
 document.write(msg);
 for(var i in arr)
  document.write(arr[i]+"<BR>");
}

function sort()
{
 var temp;
 for(var i in arr)
 {
  for(var j in arr)
  {
   if (arr[i]<arr[j])
   { 
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
   }
  }
 }
}
