$(document).ready(function() {
    $('button').click(function(){
        if ($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }
    });
});