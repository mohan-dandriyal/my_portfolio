
let toggle = false;

$('document').ready(function () {

    new Typed('#typed', {
        strings: ['Mohan', 'Chandra'],
        typeSpeed: 100,
        delaySpeed: 100,
        loop: 1
    });

    AOS.init();

    // header  toggle code
    $('.btn-1').click(function () {
        if (toggle === false) {
            $('nav ul').css('left', '0');
            $('#bottom').addClass("bottom")
            $('#hide').css("visibility", "hidden")
            $('#top').addClass("top")
            $('nav .logo .btn span ').css("background-color", "#0984bbe6")
            toggle = true;
        }
        else if (toggle === true) {
            $('nav ul').css('left', '-110%');
            $('#bottom').removeClass("bottom")
            $('#hide').css("visibility", "visible")
            $('#top').removeClass("top")
            $('nav .logo .btn span ').css("background-color", "#ffff")
            toggle = false;
        }


    });
})
const hideMenu = () => {
    $('nav ul').css('left', '-100%');
    $('.btn-2').css('display', 'none')

    $('#bottom').removeClass("bottom")
    $('#hide').css("visibility", "visible")
    $('#top').removeClass("top")
    $('nav .logo .btn span ').css("background-color", "#ffff")
    toggle = false;
}





