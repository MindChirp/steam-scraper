// Create the search page html
function buildSearch() {
    const wrapper = document.createElement("div");
    wrapper.id = "page-wrapper";

    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add("search-wrapper");

    wrapper.appendChild(searchWrapper);

    // Create the search bar area
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    const input = document.createElement("input");
    inputWrapper.appendChild(input);
    input.placeholder = "Search for items, cases etc..."
    input.classList.add("search");
    input.tabIndex = "1";

    searchWrapper.appendChild(inputWrapper);

    const inputHighlight = document.createElement("div");
    inputHighlight.classList.add("highlight");
    inputWrapper.appendChild(inputHighlight);

    const results = document.createElement("div");
    results.className = "results-wrapper";
    const t = document.createElement("p");
    t.innerText = "Looking for items"
    results.appendChild(t);

    // TODO: create results list

    return wrapper;
}

export { buildSearch };