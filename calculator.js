/*
 * Implement all your JavaScript in this file!
 */

// initiating variables
var string1 = '';
var number1 = 0;
var result = null;
var operator = null;
// to be used when user continues to press equals
var preoperator = null; 
var presecond = null;

$("button").click(function(){
    //displaying numbers
    if ($(this).val()) {
        if ((result )|| (operator)){
            string1 = string1.concat($(this).val());
            $("#display").val(string1);
            result = null;
        }
        else {
            string1 = string1.concat($(this).val());
            $("#display").val(string1);
        }
    }
    else {
        if ($(this).attr('id') == 'addButton'){
            if (operator) {
                const second = Number(string1);
                number1 = calculate(number1, second, operator);
                $("#display").val(number1);
            }
            else {
                number1 = Number($("#display").val());        
            }
            operator = 'add'
            $("#output").html("add");
            string1 = '';
        }
        if ($(this).attr('id') == 'subtractButton'){
            if (operator) {
                const second = Number(string1);
                number1 = calculate(number1, second, operator);
                $("#display").val(number1);
            }
            else {
                number1 = Number($("#display").val());        
            }
            operator = 'subtract';
            $("#output").html("subtract");
            string1 = '';
        }
        if ($(this).attr('id') == 'multiplyButton'){
            if (operator) {
                const second = Number(string1);
                number1 = calculate(number1, second, operator);
                $("#display").val(number1);
            }
            else {
                number1 = Number($("#display").val());        
            }
            operator = 'multiply';
            $("#output").html("multiply");
            string1 = '';
        }
        if ($(this).attr('id') == 'divideButton'){
            if (operator) {
                const second = Number(string1);
                number1 = calculate(number1, second, operator);
                $("#display").val(number1);
            }
            else {
                number1 = Number($("#display").val());        
            }
            operator = 'divide'
            $("#output").html("divide");
            string1 = '';
        }
        if ($(this).attr('id') == 'clearButton'){
            $("#output").html("clear");
            $('#display').val('');
            string1 = "";
            number1 = 0;
            operator = null;
            result = null;
        }
        if ($(this).attr('id') == 'equalsButton'){
            if ((number1) && (operator) && (string1)) {
                const second = Number(string1);
                result = calculate (number1, second, operator);
                $("#output").html("equals " + result);
                preoperator = operator;
                presecond = second;
                string1 = '';
                operator = null;
                $("#display").val(result);
                // console.log(number1 + preoperator + presecond +"equals"+result);
            } 
            else {
                if (operator){
                    // console.log(number1);
                    // console.log(string1);
                    $('#display').val(number1);
                    // console.log(number1);
                    // console.log(string1);
                    result = null;    
                }
                else {
                    if (result) {
                    number1 = Number($("#display").val());
                    result = calculate (number1, presecond, preoperator);
                    $('#display').val(result);
                    $("#output").html("equals " + result);
                    // console.log(number1 + preoperator + presecond +"equals"+result);
                    }
                    else {
                        $('#display').val(string1);
                        result = null;
                    }
                }                                
            }            
        }
    }
    /*
    console.log($(this).attr('id'));
    console.log("string1=" + string1);
    console.log("number1=" + number1);
    console.log("result=" + result);
    console.log("operator=" + operator);
    console.log("presecond=" + presecond);
    console.log("preoperator=" + preoperator);
    */
});

function calculate(number1, number2, operator){
    if (operator == 'add') {
        result = number1 + number2;
    }
    else {
        if (operator == 'subtract') {
            result = number1 - number2;
        }
        if (operator == 'multiply') {
            result = number1 * number2;
        }
        if (operator == 'divide') {
            result = number1 / number2;
        }
    }
    return result;
}