var res,i,input,c,search,count=0,out,spe;
	function tocheckstring()
	{
		res=document.getElementById("txt1").value;
		
		search=document.getElementById("txt2").value;
		i=0;
		while(i<res.length)
		{
			
			if(res.charAt(i)==search)
			{
				
				var s=res.indexOf(res.charAt(i));
				alert("INDEX OF STRING==>"+s);
				count++;
				spe="@";
				 out=[res.slice(0,s),spe,res.slice(s)].join("");
				alert(out);
				
			}
			i++;
		}
		alert("CHAR IS IN "+count);
	}
	