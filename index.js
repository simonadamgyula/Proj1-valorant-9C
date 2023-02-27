$("#navbar").load("navbar.html");

var currentIndex = 0;

$('#maps-carousel').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index();

    changeSlide();
});

function changeSlide() {
    $("#details div").css("display", "none");
    $(`#details div:nth-child(${currentIndex + 1})`).css("display", "block");
}

changeSlide();


$(".agent-roles").on("click", function () {
    let role = $(this).attr("class").split(" ").at(-1);
    let arrow = $(this).find("i");
    let isOpen = arrow.attr("class").includes("open");

    if (isOpen) {
        arrow.removeClass("open");
        $(`.agents-${role[0]}`).css("display", "none");
    } else {
        arrow.addClass("open");
        $(`.agents-${role[0]}`).css("display", "flex");
    }
})
