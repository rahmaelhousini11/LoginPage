var nameInput=document.querySelector('#nameInput');
var email2Input =document.querySelector('#email2Input');
var pass2Input =document.querySelector('#pass2Input');
var signbtn =document.querySelector('#signbtn')
var arrSignUp=[]



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
        return true
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
