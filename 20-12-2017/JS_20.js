//add2.js

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
		function add_number()
			{
			
            var first_number = parseInt(document.getElementById("Text1").value);
            var second_number = parseInt(document.getElementById("Text2").value);
            var result = document.getElementById("txtresult");
				result.value=first_number + second_number;
            }
      
//calc.js	  
			var first_number,second_number;
		var result;
		 function add_number()
			{
				 first_number = parseInt(document.getElementById("Text1").value);
				 second_number = parseInt(document.getElementById("Text2").value);
				 result = document.getElementById("txtresult");
				result.value=first_number + second_number;
			}
			function minus_number()
			{
				 first_number = parseInt(document.getElementById("Text1").value);
				 second_number = parseInt(document.getElementById("Text2").value);
				 result = document.getElementById("txtresult");
				result.value=first_number - second_number;
			}
			function mul_number()
			{
				 first_number = parseInt(document.getElementById("Text1").value);
				 second_number = parseInt(document.getElementById("Text2").value);
				 result = document.getElementById("txtresult");
				result.value=first_number * second_number;
			}
			function div_number()
			{
				 first_number = parseInt(document.getElementById("Text1").value);
				 second_number = parseInt(document.getElementById("Text2").value);
				 result = document.getElementById("txtresult");
				result.value=first_number / second_number;
			}
	
//first.js

		var a,b;
		var result;
		function myfun(ch)
		{
			
			a=document.getElementById("txt1").value;
			b=document.getElementById("txt2").value;			
			switch(ch)
			{
				case '+':
					result=parseInt(a) + parseInt(b);
					break;
				case '-':
					result=parseInt(a) - parseInt(b);
					break;
				case '*':
					result=parseInt(a) * parseInt(b);
					break;
				case '/':
					result=parseInt(a) / parseInt(b);
					break;
			}
			document.getElementById("result").value=result;
			return;
		};

//funoneline.js

function myfun()
		{
			document.getElementById("r").textContent=eval(document.getElementById("txt1").value);
		};
		
//opercalc

function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }
            
//two.js

var a,b;
		var result;
		function myfun(ch)
		{
			
			a=document.getElementById("txt1").value;
			b=document.getElementById("txt2").value;
			
			document.getElementById("result").value=eval(a+ch+b);
			return;
		};
		