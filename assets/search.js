var pages = JSON.parse(document.getElementById("search-data").textContent);

var fuseOptions = {
  keys: ["name"],
  threshold: 0.2
};

var fuse = new Fuse(pages, fuseOptions);

var searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  var query = searchInput.value;
  var results = fuse.search(query);
  var searchResults = document.getElementById("search-results");

  var html = "";

  for (var i = 0; i < results.length; i++) {
    html += '<div class="search-result">';
    html += '<h2><a href="' + results[i].url + '">' + results[i].name + '</a></h2>';
    html += '</div>';
  }

  searchResults.innerHTML = html;
});
