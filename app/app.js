import { changeRoute } from "../model/model.js";

const hamburgerMenu = $("#hamburger");
const nav = $(".nav");

hamburgerMenu.on("click", function() { 
    nav.toggleClass("active"); 
    console.log("click"); 
});

function initListeners() {
    $("nav a").on("click", function(e) {
        e.preventDefault(); 
        let id = e.currentTarget.id;
        changeRoute(id); 
        nav.removeClass("active"); 
    });

    // Single hamburger menu handler
    hamburgerMenu.on("click", function() { 
        nav.toggleClass("active"); 
    });
}

function initURLListener() {
    $(window).on("hashchange", function(e) {
        let pageID = window.location.hash.replace("#", "");
        changeRoute(pageID);
    });
}

$(document).ready(function() {
    $(document).ready(function() {
        initListeners();
        initURLListener();
        changeRoute('login'); 
    });
});