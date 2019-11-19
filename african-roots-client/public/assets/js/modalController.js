$(".cartTopHalf").click(function(){
    $('#menuDetailsModal').modal("toggle");
});

$('#menuDetailsModal').on('show.bs.modal', function (e) {
 $("#cartContainer").hide();
});

$('#menuDetailsModal').on('hide.bs.modal', function (e) {
 $("#cartContainer").show();
})

$('#loginModal').on('show.bs.modal', function (e) {
 $("#cartContainer").hide();
});

$('#loginModal').on('hide.bs.modal', function (e) {
 $("#cartContainer").show();
})

$('#signUpModal').on('show.bs.modal', function (e) {
 $("#cartContainer").hide();
});

$('#signUpModal').on('hide.bs.modal', function (e) {
 $("#cartContainer").show();
})

$("#btnSignUpLogin").click(function(){
    $('#loginModal').modal("hide");
    $('#signUpModal').modal("show");
});

$("#btnLoginSignUp").click(function(){
    $('#signUpModal').modal("hide");
    $('#loginModal').modal("show");
});