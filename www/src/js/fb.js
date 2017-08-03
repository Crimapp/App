/**
 * Created by Turox on 7/10/2017.
 */
var btnlogin;
var userId = null;
var accessToken = null;


function userConnected() {
    facebookConnectPlugin.api('me/', ['public_profile'], function (response) {
        //document.getElementById("login").innerHTML = response.name;
        document.getElementById("login").innerHTML = response.name;
        document.getElementById('logoutButton').style.display = "block";
        document.getElementById('addDiv').style.display = "block";
    });
}

function userLogout(response) {
    if (response == 'OK') {
        userId = null;
        accessToken = null;
        document.getElementById('login').innerHTML = 'Login';
        document.getElementById('logoutButton').style.display = "none";
        document.getElementById('addDiv').style.display = "none";
    }
}

function statusChangedCallback(response) {
    console.log('statusChangedCallback');
    if (response.status == 'connected') {
        accessToken = response.authResponse.accessToken;
        userId = response.authResponse.userID;
        //btnlogin.onclick = function () {console.log("logado");};
        userConnected();
    }
    else if (response.status == 'not_authorized') {
        //alert("faça login");
    }
    else {
        //alert("faça login");
    }
}