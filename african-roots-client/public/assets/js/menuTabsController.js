
$("#receiptsHeadingInactive").click(function(){
    console.log("hi")
    //Swap active cart button with inactive one
    $("#cartHeadingActive").switchClass( 'd-inline-flex','d-none');
    $("#cartHeadingInactive").switchClass( 'd-none', 'd-inline-flex');
    //Swap inactive receipt button with active one
    $("#receiptsHeadingActive").switchClass( 'd-none', 'd-inline-flex');
    $("#receiptsHeadingInactive").switchClass( 'd-inline-flex','d-none');
    //Show receipts pane
    $("#cartContainer").switchClass( 'd-block','d-none');
    $("#receiptsContainer").switchClass( 'd-none', 'd-block');
});


$("#cartHeadingInactive").click(function(){
    console.log("hi")
    //Swap active receipt button with inactive one
    $("#receiptsHeadingActive").switchClass( 'd-inline-flex','d-none');
    $("#receiptsHeadingInactive").switchClass( 'd-none', 'd-inline-flex');
    //Swap active cart button with inactive one
    $("#cartHeadingActive").switchClass( 'd-none', 'd-inline-flex');
    $("#cartHeadingInactive").switchClass( 'd-inline-flex','d-none');
    //Show cards pane
    $("#cartContainer").switchClass( 'd-none', 'd-block');
    $("#receiptsContainer").switchClass( 'd-block','d-none');
});
