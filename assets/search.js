---
layout: null
permalink: /search.json
---

var links = [
  {% for link in site.links %}
    {
      "name": "{{ link.Name | escape }}",
      "url": "{{ link.URL | absolute_url }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

var fuseOptions = {
  keys: ["name"],
  threshold: 0.3
};

var fuse = new Fuse(links, fuseOptions);

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
