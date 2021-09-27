// WEB303 Assignment 2
// Your Name Here
$(document).ready(function () {
    $("#vprospect, #vconvert, #vretain").click(function (event) {
        event.preventDefault();

        /* Slice the id from first letter because id and html page has 
           same name except the letter v. */
        let url = $(this).attr('id').slice(1) + '.html';
        $.ajax({
            url: url,
            success: function (result) {
                $("#solution").hide();
                $("#solution").html(result);
                $("#solution").fadeIn('4000');
            },
            error: function (request, errorThrown) {
                var message = '';
                if (request.status === 0) {
                    message = 'Not connect.\n Verify Network.';
                } else if (request.status == 404) {
                    message = 'Error 404! Requested page not found.';
                } else if (request.status == 500) {
                    message = 'Error 500! Internal Server Error';
                } else if (errorThrown === 'parsererror') {
                    message = 'Requested JSON parse failed.';
                } else if (errorThrown === 'timeout') {
                    message = 'Time out error.';
                } else if (errorThrown === 'abort') {
                    message = 'Ajax request aborted.';
                } else {
                    message = 'Uncaught Error.\n' + request.responseText;
                }
                alert(message);
            }

        });

    });
});