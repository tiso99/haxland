document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("more-info");
    const scriptsBtn = document.getElementById("scripts");
    const haxHubPaidBtn = document.getElementById("haxhub-paid");
    const closePopupBtn = document.getElementById("close-popup");
    const closeHaxHubPopupBtn = document.getElementById("close-haxhub-popup");
    const popup = document.getElementById("popup");
    const haxHubPopup = document.getElementById("haxhub-popup");

    moreInfoBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });

    scriptsBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });

    haxHubPaidBtn.addEventListener("click", function() {
        haxHubPopup.style.display = "block";
    });

    closePopupBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    closeHaxHubPopupBtn.addEventListener("click", function() {
        haxHubPopup.style.display = "none";
    });

    // Add event listener to close popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
        if (event.target == haxHubPopup) {
            haxHubPopup.style.display = "none";
        }
    });
});
