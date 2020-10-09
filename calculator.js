/*
 * Implement all your JavaScript in this file!
 */

var string1 = '';
var string2 = '';

$("button").click(function(){
    //displaying numbers
    if ($(this).val()) {
        string1 = string1.concat($(this).val());
        $("#display").val(string1);
    }
    else {
        if ($(this).attr('id') == 'addButton'){
            $("#output").html(string1 + "add");
        }
        if ($(this).attr('id') == 'subtractButton'){
            $("#output").html("subtract");
        }
        if ($(this).attr('id') == 'multiplyButton'){
            $("#output").html("multiply");
        }
        if ($(this).attr('id') == 'divideButton'){
            $("#output").html("divide");
        }
        if ($(this).attr('id') == 'clearButton'){
            $("#output").html("clear");
            $('#display').val('');
            string1 = "";
        }
        if ($(this).attr('id') == 'equalsButton'){
            $("#output").html("equals");
        }
    }
});