var newarr , result ,i,x,str;
	function reverseString()
	{
		str=document.getElementById("txt1").value;
		newarr = str.split("");
		result = [];
		
		x = newarr.length;
		
		for (i = x; i > -1; i--) {
			result.push(newarr[i]);
		}
		
		str = result.join("");
		
		document.getElementById("res").value=str;
	}