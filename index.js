document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
})

function getRepositories() {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load", showRepositories)
  xhr.open("GET", "https://api.github.com/users/octocat/repos")
  xhr.send()
}

function showRepositories() {
  const repos = JSON.parse(this.responseText)
  console.log(repos)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}
