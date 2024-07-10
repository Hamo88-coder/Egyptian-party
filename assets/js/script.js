$(() => {
    $('.openNav').click(function () {
        $('#leftMenu').css('width', '250px')
    })
    $('.closebtn').click(function () {
        $('#leftMenu').css('width', '0')

    })
    $('.toggle').click(function () {
        $('.inner').css('display', 'none')
        $(this).next('.inner').slideToggle(500)
    })

    var countDownDate = new Date("Dec 30, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.days').text(days + ' days')
        $('.hours').text(hours + ' h')
        $('.minutes').text(minutes + ' m')
        $('.seconds').text(seconds + ' s')


        $('#demo').text(days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ")

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $("#demo").text("EXPIRED");
        }
    }, 1000);


    $('#message-input').on('input', function () {
        var chars = 100 - $(this).val().length;
        $('#chars').text(chars);
        if (chars == 0) {
            $('#chars').css('color', 'red');
        } else {
            $('#chars').css('color', 'black');
        }
    })
})