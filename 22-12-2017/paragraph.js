var data,res;
	function splitparagarph()
	{
		data=document.getElementById("demo").innerHTML;
		//res=data.replace(/./g,".\n");
		res=data.split(".");
		console.log('response',res);
		var str='';
		for(var i=0; i<res.length  ;i++)
		{
		 str+=res[i]+'<br/>';
		}
		document.getElementById("sp1").innerHTML=str
		//res=data.replace(/;/g,"\n");
		
	}
		
	