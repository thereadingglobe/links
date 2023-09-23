---
layout: null
permalink: /search.json
---

var pages = [
  {% for page in site.pages %}
    {
      "title": "{{ page.title | escape }}",
      "description": "{{ page.description | escape }}",
      "url": "{{ page.url | absolute_url }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

var fuseOptions = {
  keys: ["title", "description"],
  threshold: 0.3
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
    html += '<h2><a href="' + results[i].url + '">' + results[i].title + '</a></h2>';
    html += '<p>' + results[i].description + '</p>';
    html += '</div>';
  }

  searchResults.innerHTML = html;
});
