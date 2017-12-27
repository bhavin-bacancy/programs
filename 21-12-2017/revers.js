//var input = ["HEtali","shah"];
	var res,ret ,len;
	var input =[];
	function reverseArr() 
	{
		 res = document.getElementById("txt").value;
		 input = res.split(",");
		 
		 ret = new Array;
		 len=input.length;
		 alert(len);
		for(var i = len; i >= 0; i--)
		{
			
			ret.push(input[i]);
			
		}
		document.getElementById("txt1").value=ret;
		
	}
	