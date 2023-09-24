console.log(searchData);
var fuseOptions = {
  keys: ["name"],
  threshold: 0.3
};

var fuse = new Fuse(searchData, fuseOptions);

var searchInput = document.getElementById("search-input");
var searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function () {
  var query = searchInput.value;
  var results = fuse.search(query);

  var html = "";

  for (var i = 0; i < results.length; i++) {
    html += '<div class="search-result">';
    html += '<h2><a href="' + results[i].url + '">' + results[i].name + '</a></h2>';
    html += '</div>';
  }

  searchResults.innerHTML = html;
});
