function loguear()
{
      
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;


if (!localStorage.getItem('token')) {window.location.href = '/index.html';} 
if(user=="juan" && pass=="1234"){window.location="app.html";}


}

