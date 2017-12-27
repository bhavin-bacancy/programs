var res,i,c,search,rep;
	function tocheckstring()
	{
		res=document.getElementById("txt1").value;
		
		search=document.getElementById("txt2").value;
		i=0;
		while(i<res.length)
		{
			
			if(res.charAt(i)==search)
			{
				rep=res.replace(/e/g,"{"+search+"}");
			}
			i++;
		}
		alert(rep);
		
	}
