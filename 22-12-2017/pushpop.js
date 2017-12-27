function pushpop()
{
	var arr=["one","two","three"];
	console.log(arr);
	var x=document.getElementById("id1").value;
	var y=document.getElementById("id2").value;
	arr.push(x);
	alert("push value==>"+x);
	arr.shift();
	alert("shift value===>");
	arr.unshift(y);
	alert("unshift value==>"+ y);
	arr[arr.length] = "hiii";
	alert("length");
	alert("full array==>"+ arr);
	document.getElementById("demo").innerHTML=arr;
	//delete
	var z=document.getElementById("id3").value;
	alert(z);
	delete arr[z];
	alert("USING SLICE FOR ADDING VALUE");
	var sli=document.getElementById("id4").value;
	alert("slice value"+sli);
	arr.splice(z, 0,"slii");
	
	
	document.getElementById("demo1").innerHTML=arr;
}
