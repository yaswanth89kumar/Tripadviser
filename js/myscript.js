$(document).on({
  ajaxStart: function() { 
    $.mobile.loading('show'); // To show the mobile loader while ajax call triggered
  },
  ajaxStop: function() {
    $.mobile.loading('hide');// To hide the mobile loader while ajax call completes
  }    
});
$(document).ready(function(){
var site='http://10.76.127.61';
if(localStorage.getItem('username')!=null){
window.location.href='/mobile/profile.html';
}
//localstorage.setItem('userid');
//localstorage.setItem('lastlogin');

$("#login-submit").click(function(){
//calling the webservice while clicking the login button
$.ajax({
method:'post',
url: site+'/angular/checking.php',
data:{name:$('#username').val(),password:$("#pass").val()},
success:function(data){
$("#myPopup").popup("open");
  $("#text").html('Login Success...');
},
error:function(data){
$("#myPopup").popup("open");
  $("#text").html('Login Falied.Please try again.');
}
});
});
});
