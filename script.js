// Check if JS is loaded
console.log("JS is working!");

// Smooth scrolling when clicking buttons
document.getElementById("btnDestinations").addEventListener("click", function() {
    document.getElementById("Destinations").scrollIntoView({ behavior: "smooth" });
    console.log("Scrolled to Destinations");
});

document.getElementById("btnGallery").addEventListener("click", function() {
    document.getElementById("Gallery").scrollIntoView({ behavior: "smooth" });
    console.log("Scrolled to Gallery");
});

document.getElementById("btnTravelGuide").addEventListener("click", function() {
    document.getElementById("Travel Guide").scrollIntoView({ behavior: "smooth" });
    console.log("Scrolled to Travel Guide");
});

document.getElementById("btnFood").addEventListener("click", function() {
    document.getElementById("Food").scrollIntoView({ behavior: "smooth" });
    console.log("Scrolled to Food");
});