// Create the search page html
function buildGraph() {
    const wrapper = document.createElement("div");
    wrapper.id = "page-wrapper";

    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add("graph-wrapper");

    wrapper.appendChild(searchWrapper);

    return wrapper;
}

export { buildGraph };