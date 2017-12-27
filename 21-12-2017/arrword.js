var temp =[];
	var str,i,j=0,search;
	var arr=[];
	function tocheckstring()
	{
		 str=document.getElementById("txt1").value;
		
		 search=document.getElementById("txt2").value;
		 arr =[str];
		for(i=0; i<arr.length;i++)
		{
			if(res.charAt(i)==search)
			{
				if(arr[i-1]=='$')
				{
					j++;
				}
				temp[j]=arr[i];
				j++;
			}
		}
		document.getElementById("txt3").value=temp;
	}
