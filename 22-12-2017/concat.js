function con()
	{
		var arr1=["one","two","three"];
		var arr2=["four","five","six"];
		var joi=arr1.join("*");
		var joi1=arr2.join("*");
		
		document.getElementById("demo").innerHTML=joi;
		document.getElementById("demo1").innerHTML=joi1;
		var con1=joi.concat(joi1);
		document.getElementById("demo2").innerHTML=con1;
	
		
		alert(con1);
	}
	