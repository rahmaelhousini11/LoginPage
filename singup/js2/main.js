//All input of SignUp
var nameInput=document.querySelector('#nameInput');
var email2Input =document.querySelector('#email2Input');
var pass2Input =document.querySelector('#pass2Input');
var signbtn =document.querySelector('#signbtn');
var arrSignUp=[]

//All input of LogIn
var emailInput =document.querySelector('#emailInput');
var passInput = document.querySelector('#passInput');
var logInBtn =document.querySelector('#logInBtn');
var username = localStorage.getItem('sessionUsername')
arrusers=[];


////signup////
if (localStorage.getItem('users') == null) {
    arrSignUp = []
} else {
    arrSignUp = JSON.parse(localStorage.getItem('users'))
}


function addUsers(){
    var allUsers = {
        name: nameInput.value,
        email:email2Input.value,
        password:pass2Input.value,
    }
    if(inputEmpty() == true){
        document.getElementById('notSucceed').innerHTML = '<span class="text-danger my-3">All inputs is required</span>'
        
    }
    if (arrSignUp.length == 0) {
        arrSignUp.push(allUsers)
        localStorage.setItem('users', JSON.stringify(arrSignUp))
        document.getElementById('notSucceed').innerHTML = '<span class="text-success my-3">Success</span>'
       
    }
    if (emailExist() == true) {
        document.getElementById('notSucceed').innerHTML = '<span class="text-danger my-3">email already exists</span>'

    } else {
        arrSignUp.push(allUsers)
        localStorage.setItem('users', JSON.stringify(arrSignUp))
        document.getElementById('notSucceed').innerHTML = '<span class="text-info my-3">Success</span>'

    }
  cleanForm()
}

function cleanForm(){
    nameInput.value='';
    email2Input.value='';
    pass2Input.value='';

}

function inputEmpty(){
    if(nameInput.value == "" || email2Input.value == "" || pass2Input.value == ""){
        return true;
    }
}

function emailExist(){
    for (var i = 0; i < arrSignUp.length; i++) {
        if (arrSignUp[i].email.toLowerCase() == email2Input.value.toLowerCase()) {
            return true;
        }
    }
}


////Login///


function emptyInput(){
    if(emailInput.value =="" || passInput.value ==""){
        return true;
    }
}

function logIn(){
    if(emptyInput() == true){
        document.getElementById('notSucceed').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    var email=emailInput.value;
    var password=passInput.value;

    for (var i = 0; i < arrusers.length; i++) {
        if (arrusers[i].email.toLowerCase() == email.toLowerCase() && arrusers[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', arrusers[i].name)
        //     if (baseURL == '/') {
        //         location.replace('https://' + location.hostname + '/home.html')

        //     } else {
        //         location.replace(baseURL + '/home.html')

        //     }
        // } else {
        //     document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}