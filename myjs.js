
			window.onload=function(){           
				let btn=document.getElementById("btn");    
				btn.onclick=function(){        
					let s1=document.getElementById("num1").value;
					let s2=document.getElementById("num2").value;
					let ss=0;
					let re=document.getElementById("result");
					if(isNaN(s1)||isNaN(s2))           
					{ 
						alert('Please enter a number!');     
						return false;
					}
					ss=parseInt(s1)+parseInt(s2);    
					re.innerText=ss;
				}
			}
