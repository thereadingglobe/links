console.log(searchData);
// Initialize Fuse with your searchData
var fuseOptions = {
  keys: ["name"],
  threshold: 0.2,
};

var fuse = new Fuse(searchData, fuseOptions);

var searchInput = document.getElementById("search-input");
var searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function () {
  var query = searchInput.value;
  var results = fuse.search(query);

  var html = "";

  if (results.length === 0) {
    // Handle the case when there are no results
    html += '<div class="search-result">';
    html += '<p>No results found</p>';
    html += '</div>';
  } else {
    for (var i = 0; i < results.length; i++) {
      html += '<div class="search-result">';
      html += '<h2><a href="' + results[i].url + '">' + results[i].name + "</a></h2>";
      html += '</div>';
    }
  }

  searchResults.innerHTML = html;
});

// Attach click event to each search result item
searchResults.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    // Redirect to the clicked URL
    window.location.href = e.target.getAttribute("href");
  }
});


