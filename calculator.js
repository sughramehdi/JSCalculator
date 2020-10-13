/*
 * Implement all your JavaScript in this file!
 */

var string1 = '';
var numbers = [];
var result = 0;

$("button").click(function(){
    //displaying numbers
    if ($(this).val()) {
        string1 = string1.concat($(this).val());
        $("#display").val(string1);
    }
    else {
        if ($(this).attr('id') == 'addButton'){
            string1 = $("#display").val();
            numbers[0] = Number(string1);        
            numbers[1] = 'add';
            $("#output").html("add");
            string1 = '';
        }
        if ($(this).attr('id') == 'subtractButton'){
            string1 = $("#display").val();
            numbers[0] = Number(string1);        
            numbers[1] = 'subtract';
            $("#output").html("subtract");
            string1 = '';
        }
        if ($(this).attr('id') == 'multiplyButton'){
            string1 = $("#display").val();
            numbers[0] = Number(string1);        
            numbers[1] = 'multiply';
            $("#output").html("multiply");
            string1 = '';
        }
        if ($(this).attr('id') == 'divideButton'){
            string1 = $("#display").val();
            numbers[0] = Number(string1);        
            numbers[1] = 'divide'
            $("#output").html("divide");
            string1 = '';
        }
        if ($(this).attr('id') == 'clearButton'){
            $("#output").html("clear");
            $('#display').val('');
            string1 = "";
            numbers = [];
        }
        if ($(this).attr('id') == 'equalsButton'){
            const second = Number(string1);
            if (numbers[1] == 'add') {
                result = numbers[0] + second;
            }
            else {
                if (numbers[1] == 'subtract') {
                    result = numbers[0] - second;
                }
                if (numbers[1] == 'multiply') {
                    result = numbers[0] * second;
                }
                if (numbers[1] == 'divide') {
                    result = numbers[0] / second;
                }
            }
            $('#display').val(result);
            $("#output").html("equals " + result);
            string1 = '';
        }
    }
});