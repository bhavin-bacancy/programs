function merge()
	{
		var arr1=["one","two","three"];
		var arr2=["four","five","six"];
		var i;
		var x=arr1.indexOf("id1");
		var y=arr2.indexOf("id1");
		alert(x);
		alert(y);
		for(i=0; i<arr2.length;i++)
		{	
			arr1.push(arr2[i]);
		}
		document.getElementById("demo").innerHTML=arr1;
	}
	