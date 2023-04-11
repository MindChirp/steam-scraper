import { buildGraph } from "./builders/graphs.mjs";
import { buildSearch } from "./builders/search.mjs";

function selectButton(button) {
    // Get the name of the button
    const name = button.name;
    
    if (!button.classList.contains("selected")) {
        button.classList.add("selected");
    } else {
        return;
    }

    // Get the other buttons and deselect them
    const buttons = button.parentNode.children;
    
    for (const key in buttons) {
        if (!buttons.hasOwnProperty(key)) continue;
        const button = buttons[key];
        if (button.name === name) continue;

        button.classList.remove("selected");
    }

    // Display the selected page
    switch(name) {
        case "search":
            displaySearchPage();
            break;
        case "graphs":
            displayGraphsPage();
            break;
    }
}


function displaySearchPage() {
    const parent = document.getElementById("main-content").querySelector(".content > .search-wrapper");

    // Remove the show class from all other pages
    const pages = document.getElementById("main-content").querySelector(".content").children;

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("show");
    }


    parent.classList.add("show");

    if (parent.children.length > 0) { 
        parent.querySelector(".search").focus();
        return 
    };

    const searchPage = buildSearch();
    parent.innerHTML = "";

    parent.appendChild(searchPage);
    searchPage.querySelector(".search").focus();

}

function displayGraphsPage() {
    const parent = document.getElementById("main-content").querySelector(".content > .graph-wrapper");

    // Remove the show class from all other pages
    const pages = document.getElementById("main-content").querySelector(".content").children;

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("show");
    }

    console.log(parent.children.length)
    if (parent.children.length > 0) {
        parent.classList.add("show");
        return;
    }

    const graphPage = buildGraph();
    parent.innerHTML = "";

    parent.appendChild(graphPage);
}

window.selectButton = selectButton;