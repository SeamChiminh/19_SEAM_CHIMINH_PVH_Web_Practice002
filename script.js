function searchQuotes() {
    let searchType = document.getElementById("searchType").value; 
    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim(); 
    let quotes = document.querySelectorAll(".quote");
    let quotesList = document.getElementById("quotesList");

    quotesList.classList.add("hidden");

    if (searchQuery.length > 0) {
        let found = false;
        
        quotes.forEach(quote => {
            let id = quote.getAttribute("id").toLowerCase();
            let title = quote.getAttribute("title").toLowerCase();

            if ((searchType === "id" && id.includes(searchQuery)) || 
                (searchType === "title" && title.includes(searchQuery))) {
                quote.style.display = "flex";
                found = true;
            } else {
                quote.style.display = "none";
            }
        });

        if (found) {
            quotesList.classList.remove("hidden");
        }
    } else {
        quotes.forEach(quote => quote.style.display = "none");
    }
}

document.getElementById("searchType").addEventListener("change", function() {
    let searchInput = document.getElementById("searchInput");
    let searchButton = document.getElementById("searchButton");

    if (this.value === "") {
        searchInput.disabled = true;
        searchInput.classList.add("opacity-50", "cursor-not-allowed");
        searchInput.placeholder = "Select an option first...";
        searchButton.disabled = true;
        searchButton.classList.add("opacity-50", "cursor-not-allowed");
    } else {
        searchInput.disabled = false;
        searchInput.classList.remove("opacity-50", "cursor-not-allowed");
        searchInput.placeholder = "Enter search term...";
        searchButton.disabled = false;
        searchButton.classList.remove("opacity-50", "cursor-not-allowed");
    }
});

document.getElementById("searchInput").addEventListener("input", searchQuotes);
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    searchQuotes();
});