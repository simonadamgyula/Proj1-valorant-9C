$("#navbar").load("navbar.html");

var currentIndex = 0;

$('#maps-carousel').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index();

    changeSlide();
});

function changeSlide() {
    $("#details div").css("display", "none");
    $(`#details div:nth-child(${currentIndex + 1})`).css("display", "block");
    console.log(currentIndex);
}

changeSlide();