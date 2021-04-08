var err1=false;
var err2=false;
var err3=false;
var err4=false;
var err5=false;
$(function (){
    $("#fname").keyup(function(){
        var fname=$("#fname").val();
        $("#fn").text("");
        $("#fname").css("border","none");
        $("#fname").css("border-bottom","1px solid rgb(35, 136, 74)");
        err1=false;
       for(let i=0;i<fname.length;i++)
       {
           if(!fname.charAt(i).match(/[a-z]/i))
           {
            $("#fn").text("Name should contain only alphabets");
            $("#fname").css("border","1px solid red");
            err1=true;
            break;
           }
       }
       if(fname.length>16)
      {
        $("#fn").text("First name cannot exceed 16 characters");
        $("#fname").css("border","1px solid red"); 
        err1=true;
      }
    
    })
    $("#lname").keyup(function(){
        var lname=$("#lname").val();
        $("#ln").text("");
        $("#lname").css("border","none");
        $("#lname").css("border-bottom","1px solid rgb(35, 136, 74)");
        err2=false;
       for(let i=0;i<lname.length;i++)
       {
           if(!lname.charAt(i).match(/[a-z]/i))
           {
            $("#ln").text("Name should contain only alphabets");
            $("#lname").css("border","1px solid red");
            err2=true;
            break;
           }
       }
       if(lname.length>16)
       {
         $("#ln").text("Last name cannot exceed 16 characters");
         $("#lname").css("border","1px solid red"); 
         err2=true;
       }
    
    })

    $("#phno").keyup(function(){
        var ph = $("#phno").val();
        $("#ph").text("");
        $("#phno").css("border","none");
        $("#phno").css("border-bottom","1px solid rgb(35, 136, 74)");
        err3=false;
      if(ph.length!=10)
      {
        $("#ph").text("Phone number must contain 10 digits");
        $("#phno").css("border","1px solid red"); 
        err3=true;
      }
    })

    $("#email").keyup(function(){
        var email = $("#email").val();
        $("#em").text("");
        $("#email").css("border","none");
        $("#email").css("border-bottom","1px solid rgb(35, 136, 74)");
        err4=false;
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i))
        {
             $("#em").text("Enter a valid email: abc@example.com");
             $("#email").css("border","1px solid red");
             err4=true;
        }
    })


    $("#pwd").keyup(function(){
        var password = $("#pwd").val();
        $("#pass").text("");
        $("#pwd").css("border","none");
        $("#pwd").css("border-bottom","1px solid rgb(35, 136, 74)");
        err5=false;
      if(password.length<8 || password.length > 16)
      {
        $("#pass").text("Password should be 8-16 characters long");
        $("#pwd").css("border","1px solid red"); 
        err5=true;
      }
      if(!password.match(/[0-9]/i))
      {
        $("#pass").text("Password should contain atleast one digit");
        $("#pwd").css("border","1px solid red"); 
        err5=true;
      }
      if(!password.match(/[a-z]/))
      {
        $("#pass").text("Password should contain atleast one lower case letter");
        $("#pwd").css("border","1px solid red"); 
        err5=true;
      }
      if(!password.match(/[A-Z]/))
      {
        $("#pass").text("Password should contain atleast one upper case letter");
        $("#pwd").css("border","1px solid red"); 
        err5=true;
      }
     
      if(!password.match(/[\W+]/))
      {
        $("#pass").text("Password should contain atleast one special character, one upper and one lower case letter, one digit");
        $("#pwd").css("border","1px solid red"); 
        err5=true;
      }
    })

    

    $("#myform").submit(function(e){
        if(err1)
        e.preventDefault();
        else if(err2)
        e.preventDefault();
        else if(err3)
        e.preventDefault();
        else if(err4)
        e.preventDefault();
        else if(err5)
        e.preventDefault();
        else
        alert("Submitted Successfully!");
    })
})