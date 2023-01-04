let form=document.getElementById("form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    let name=document.getElementById("name");
    let mail=document.getElementById("mail");
    let pass=document.getElementById("pass");
    let confirm=document.getElementById("confirm");
    if(name.value==''){
        let require=document.createElement("p");
        require.innerText="Fill Your Name";
        require.style.color="red";
        name.parentNode.appendChild(require);
    }
    /*else{
        name.parentNode.querySelector("p").innerText="";
    }*/
    if(mail.value==''){
        let require1=document.createElement("p");
        require1.innerText="Fill Your Gmail";
        require1.style.color="red";
        mail.parentNode.appendChild(require1);
    }
    /*else{
        mail.parentNode.querySelector("p").innerText="";
    }*/
    if(pass.value==''){
        let require2=document.createElement("p");
        require2.innerText="Fill Your Password";
        require2.style.color="red";
        pass.parentNode.appendChild(require2);
    }
    /*else{
        pass.parentNode.querySelector("p").innerText="";
    }*/
    if(confirm.value!=pass.value){
        let require3=document.createElement("p");
        require3.innerText="Check Your Password";
        require3.style.color="red";
        confirm.parentNode.appendChild(require3);
    }
    
});