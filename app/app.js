import { changeRoute } from "../model/model.js";

function initListeners() {
    $(document).on("click", "nav a", function(e) {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        changeRoute(btnID);
    });
}

function initURLListener() {
    $(window).on("hashchange", function(e) {
        let pageID = window.location.hash.replace("#", "");
        changeRoute(pageID);
    });
}

$(document).ready(function() {
    initListeners();
    initURLListener();

    changeRoute('login');
});