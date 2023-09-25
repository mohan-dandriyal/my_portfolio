

$('document').ready(function () {

     new Typed('#typed', {
        strings: ['Mohan', 'Chandra'],
        typeSpeed: 100,
        delaySpeed: 100,
        loop: true
    });

    AOS.init();




    // header  toggle code
    $('.btn-1').click(function(){
    $('nav ul').css('left', '0');
    $('.btn-2').css('display','block')

    });

    $('.btn-2').click(function(){
    $('nav ul').css('left', '-100%');
    $('.btn-2').css('display','none')
    })

})

const hideMenu = () => {
        $('nav ul').css('left', '-100%');
        $('.btn-2').css('display','none')
}




