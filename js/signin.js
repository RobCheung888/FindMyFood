function refreshSignin() {
if (localStorage.getItem("lastname")) {
    document.getElementById("signintext").innerHTML = 'welcome, ' + localStorage.getItem("lastname");
    document.getElementById("signinbtn").style.display = 'none';
    document.getElementById("addrestbtn").style.display = 'block';
    document.getElementById("signoutbtn").style.display = 'block';
} else {
    document.getElementById("signintext").innerHTML = 'please sign in';
    document.getElementById("signinbtn").style.display = 'block';
    document.getElementById("addrestbtn").style.display = 'none';
    document.getElementById("signoutbtn").style.display = 'none';
}
}

refreshSignin()