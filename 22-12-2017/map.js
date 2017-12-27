var persons = [];
function myFunction() {
var x,y,z,m,e,g;
x=document.getElementById("id1").value;
y=document.getElementById("id2").value;
z=document.getElementById("id3").value;
m=document.getElementById("id4").value;
e=document.getElementById("id5").value;
g=document.getElementById("id6").value;
t=document.getElementById("id7").value;
var data={firstname : x,middlename:z,lastname: y,mathes :m,english :e,gujarati :g}
 persons.push(data)
document.getElementById("demo").innerHTML = persons.map(getFullName);
}
function getFullName(item,index)
{
	var fullname = [item.firstname,item.middlename,item.lastname,item.mathes,item.english,item.gujarati].join(" ");
    return fullname;
}
function total()
{
	t=document.getElementById("id7").value=mathes + english +gujarati;
	alert(t);
}

