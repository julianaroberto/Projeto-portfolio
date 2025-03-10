document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".facebook").addEventListener("click", function() {
        window.open("https://www.facebook.com", "_blank");
    });

    document.querySelector(".instagram").addEventListener("click", function() {
        window.open("https://www.instagram.com", "_blank");
    });

    document.querySelector(".whatsapp").addEventListener("click", function() {
        window.open("https://wa.me", "_blank");
    });
});