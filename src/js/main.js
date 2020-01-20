// var modal = document.querySelector("#modal");
// var button = document.querySelector("#btn");
// var close = document.querySelector("#close");

// function closeModal() {
//     modal.classList.remove("modal_active");
// }

// button.addEventListener('click', function(){
//     modal.classList.add("modal_active");
//     setTimeout(closeModal, 5000);
// });

// close.addEventListener('click', function(){
//     closeModal();
// });

$(function(){

    var button = $('#btn');
    var modal = $('#modal');
    var close = $('#close');

    function modalWindow() {
        modal.toggleClass('modal_active');
    }

    button.on('click', modalWindow);
    close.on('click', modalWindow);

    $('#btnUp').on('click',function(){
        var pos = 0; 
        $('body,html').animate({scrollTop: pos}, 500);
    });

        var windowHeight = $(window).height();
 
        $(document).on('scroll', function() {
            $('.section-price').each(function() {
                var self = $(this),
                height = self.offset().top + self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    $('#btnUp').addClass('animate');
                } else {
                    $('#btnUp').removeClass('animate');
                }
            });
        });

});