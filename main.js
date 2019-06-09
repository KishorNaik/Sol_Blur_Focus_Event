/// <reference path="./jquery-3.4.1.min.js"/>

$(document).ready(function(){

    console.log("Dom Is Ready");

    $("#txtName").on('focus',function(){

        console.log("Focus");

        $(this)
            .removeClass("backgroundBlur");

        $(this)
            .removeClass("backgroundFocus")
            .addClass("backgroundFocus");

    });

    $("#txtName").on('blur',function(){

        console.log("blur");

        $(this)
            .removeClass("backgroundFocus");

        $(this)
            .removeClass("backgroundBlur")
            .addClass("backgroundBlur");

    });

});