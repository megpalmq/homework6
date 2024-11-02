export function changeRoute(pageID) {
    if (pageID == "") {
        pageID = "home";
    }

    $("#app").load(`pages/${pageID}.html`, function(response, status, xhr) {
        if (status == "error") {
            console.log(`Error loading ${pageID}: ${xhr.status} ${xhr.statusText}`);
            $("#app").html(`<h1>404 Error</h1><p>Page not found.</p>`);
        }
    });

    
    window.history.pushState("", "", `#${pageID}`);
}