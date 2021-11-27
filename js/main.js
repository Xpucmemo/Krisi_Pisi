// Navbar
$(function () {
    $("#nav-placeholder").load("./Navigation/nav.html");
});

$(".menu-toggle-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});