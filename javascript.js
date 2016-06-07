var myHostingUrl = "file:///Applications/AMPPS/www/medtusser.github.io/index.html";
var thisPlace = window.location.href;
var userPlace = thisPlace.replace(myHostingUrl, "")
if (userPlace==""){
	var div = document.getElementById('topArticle');
}