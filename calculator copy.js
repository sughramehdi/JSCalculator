/*
 * Implement all your JavaScript in this file!
 */

 //var string1 = '';
 //var string2 = '';

 //console.log(string1);
 //string1 = string1.concat(string2);
 //console.log(string1);

$('button').click(function(){
    // var string1 = '';
    //displaying numbers
    //string1 = string1.concat(($(this).val()));
    //console.log(string1);
    $("#display").val($(this).val());
    $('#output').html($(this).val());
    /*
    if (($(this).val()) == '1') {
        
    }        
    else {
        // var addbutton = 'addButton';
        const buttoncheck = $('button').attr('id');
        if (buttoncheck == 'addButton') {
            $("#output").html(string1 + ' add');
        }
    }*/
});
