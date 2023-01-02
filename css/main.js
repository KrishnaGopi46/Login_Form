
    let obj={
        name:"gopi",
        email:"krishnagopi08875@gmail.com",
        password:12345,
    }

function myFunction(event){
   

    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    if(obj.name==name.value && obj.email==email.value && obj.password==password.value){
        alert("sucessful");
        return false;
    }
    else{
        alert("invalid");
        return false;
    }
}