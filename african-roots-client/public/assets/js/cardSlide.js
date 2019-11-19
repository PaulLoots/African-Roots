$("#tabUp").hide();
var cartActive = false;

$( "#cartHeadBtn" ).click(function() {
    if (cartActive == false){
        $("#cartContainer").switchClass( 'ccDown', 'ccUp',300, 'swing');
        $("#tabUp").show();
        $("#tabDown").hide();
        $("#basketTotalColumn").hide();
        $(".cartAmountTxt").addClass('rightAlign');
        cartActive = true; 
    } else {
        $("#cartContainer").switchClass( 'ccUp', 'ccDown',300, 'swing');
        $("#tabUp").hide();
        $("#tabDown").show();
        $("#basketTotalColumn").show();
        $(".cartAmountTxt").removeClass('rightAlign');
        cartActive = false;
    }

});