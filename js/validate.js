function validateform(){  
    var name=document.myform.name.value;  
    var email = document.myform.email.value;
    var phone= document.myform.phone.value;
    var city = document.myform.city.value;
    var radio1 = document.myform.gridRadios1;
    var radio2= document.myform.gridRadios2;
    var radio3 = document.myform.gridRadios3;

if(name_validation(name))
{
if(email_validation(email))
{
if(phone_validation(phone))
{ 
if(city_validation(city))
{
if(radio_validation(radio1, radio2, radio3))
{
} 
}
}
}
}
return false;
}

function name_validation(name)
{
  re=/^[a-zA-Z]/;
  if (re.test(name)){
    return true; 
  }
else if(name != re || name == ""){
  alert("Name can't be blank or have numbers");  
  return false;
}
}

function email_validation(email){
      
   
  re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(email)){
    return true; 
  }
  else {
      alert("You have entered an invalid email address!");
      return (false)
  }
    
  }
function phone_validation(phone){
  re=/\(6|8|9)\d{7}/;
  if (re.test(phone)){
    return true; 
  }
  else {
    alert("You have entered invalid phone number, start with only 9, 8 or 6.");
    return false;
 
   }
  
}

function city_validation(city){
  re=/^[A-Za-z]/;
  if (re.test(city)){
    return true; 
  }
  else {
    alert("City can't be blank or have numbers");  
    return false;  
  }
}


function radio_validation(radio1, radio2 ,radio3){
 var x=0;

if(radio1.checked) 
{
x++;

} 
if(radio2.checked) 
{
x++;

} 
if(radio3.checked) 
{
x++;

} 
if(x==0)
{
alert('Please select one');
radio1.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.href="thankyou.html"
return true;
}

}
 



    
    