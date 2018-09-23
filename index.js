function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
});

function searchRepositories() {
  const searchTerms = window.$('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(data)
  }).fail(function(error) {
      displayError();
});

function showCommits(el) {
  const owner = el.dataset.owner
  const repository = el.dataset.repository
});

function showRepositories(data) {
  const repos = JSON.parse(data);
  const repoList =
    '<ul>' +
    repos
      .map(r => {
        return `
          <li>
            <h2>${r.name}</h2>
            <p>Description: ${r.description}</p>
            <p>Link to Repository: ${r.html_url}</p>
            <p>Owner Login: ${r.owner.login}</p>
            <img src="${r.owner.avatar_url}" alt="Avatar Image">
            <p>Owner Profile Page: ${r.owner.url}</p>
          </li>`;
      })
      .join('') +
    '</ul>';
  document.getElementById('#results').innerHTML = repoList;
}

$(document).ready(function (){
});
