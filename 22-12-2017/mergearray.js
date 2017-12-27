function merge()
	{
		var arr1=["one","two","three"];
		var arr2=["four","five","six"];
		var i;
		var i1=document.getElementById("id1").value;
		var x=arr1.indexOf(i1);
		var y=arr2.indexOf(i1);
		alert(x);
		alert(y);
	
		for(i=0; i<arr2.length;i++)
		{	
			arr1.push(arr2[i]);
		}
		document.getElementById("demo").innerHTML=arr1;
	}
	