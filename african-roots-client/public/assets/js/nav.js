$('#navcol-1').on('show.bs.collapse', function () {
  $("#cartContainer").hide();
})

$('#navcol-1').on('hidden.bs.collapse', function () {
  $("#cartContainer").show();
})

$(".loginBtn").click(function(){
    $("#loginToOrder").switchClass( 'd-block','d-none');
    $("#orderBtnRow").switchClass( 'd-none', 'd-flex');
});