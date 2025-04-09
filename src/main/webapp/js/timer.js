document.addEventListener('DOMContentLoaded', function () {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(8, 0, 0, 0);
    var countdownDate = targetDate.getTime();


    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.querySelector('.days').innerText = days;
        document.querySelector('.hours').innerText = hours;
        document.querySelector('.minutes').innerText = minutes;
        document.querySelector('.seconds').innerText = seconds;


        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = '<p class="countdown-expired">Відкрито!</p>';
        }
    }, 1000);
});
