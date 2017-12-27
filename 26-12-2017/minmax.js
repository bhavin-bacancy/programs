var table;
var x,y,z,m,g,e;
var total = 0;
var sum_arr=[];
var rowcount,row,cell1,cell2;
var persons = [];
var mn,mx;
function myFunction() {

x=document.getElementById("id1").value;
y=document.getElementById("id2").value;
z=document.getElementById("id3").value;

m=parseInt(document.getElementById("wp").value);
e=parseInt(document.getElementById("cg").value);
g=parseInt(document.getElementById("sp").value);

total=m+e+g;
table = document.getElementById("myTable");
rowcount=table.rows.length;

row = table.insertRow(rowcount);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell3 = row.insertCell(2);
cell4 = row.insertCell(2);

cell1.innerHTML = x;
cell2.innerHTML = total;
cell3.innerHTML=z;
cell4.innerHTML=y;
cell2.className="total";

//===========data=======================
var data={firstname : x,middlename:z,lastname: y, maths:m, english:e , gujarati:g,totall:total}
persons.push(data)
document.getElementById("demo").innerHTML = persons.map(getFullName);
//=============push and sort====
sum_arr.push(total);
debugger;
//sum_arr.sort(function(a, b){return a.total- b.total});
//sum_arr.sort();
    
var len=sum_arr.length;
sum_arr.sort(function(a, b){return a- b});

mn=sum_arr[0];
mx=sum_arr[len-1];
document.getElementById("demo1").innerHTML =mn;
document.getElementById("demo2").innerHTML =mx;
//==========================minimum maximum=============
table = document.getElementById("myTable1");
rowcount=table.rows.length;

row = table.insertRow(rowcount);
cell1 = row.insertCell(0);
cell2 = row.insertCell(1);
cell1.innerHTML=mn;
cell2.innerHTML=mx;
}
function getFullName(item,index)
{
	
	var fullname = [item.firstname,item.middlename,item.lastname,item.maths,item.english,item.gujarati,item.totall].join(" ");
    return fullname;
	
}
