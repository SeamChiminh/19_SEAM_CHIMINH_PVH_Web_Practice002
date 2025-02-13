
    function searchQuotes() {
        let searchType = document.getElementById("searchType").value;

        let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();

        let quotes = document.getElementsByClassName("quote");
        let quotesList = document.getElementById("quotesList");

        quotesList.classList.add("hidden");

        if (searchQuery.length > 0) {
            let found = false;

            for (let i = 0; i < quotes.length; i++) {
                let quote = quotes[i];

                let id = quote.getAttribute("id").toLowerCase();
                let title = quote.getAttribute("title").toLowerCase();

                if ((searchType === "id" && id.includes(searchQuery)) ||
                    (searchType === "title" && title.includes(searchQuery))) {
                    quote.style.display = "flex";
                    found = true;
                } else {
                    quote.style.display = "none"; 
                }
            }

            if (found) {
                quotesList.classList.remove("hidden");
            }
        } else {
            for (let i = 0; i < quotes.length; i++) {
                quotes[i].style.display = "none";
            }
        }
    }

    function updateInputState() {
        let searchInput = document.getElementById("searchInput");
        let searchButton = document.getElementById("searchButton");
        let selectedOption = document.getElementById("searchType").value;

        if (selectedOption === "") {
            searchInput.disabled = true;
            searchInput.placeholder = "Select an option first...";
            searchInput.classList.add("opacity-50", "cursor-not-allowed");
            searchButton.disabled = true;
            searchButton.classList.add("opacity-50", "cursor-not-allowed");
        } else {
            searchInput.disabled = false;
            searchInput.placeholder = "Enter search term...";
            searchInput.classList.remove("opacity-50", "cursor-not-allowed");
            searchButton.disabled = false;
            searchButton.classList.remove("opacity-50", "cursor-not-allowed");
        }
    }

    document.getElementById("searchType").addEventListener("change", updateInputState);
    document.getElementById("searchInput").addEventListener("input", searchQuotes); 
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        searchQuotes(); 
    });

