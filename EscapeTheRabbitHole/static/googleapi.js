function googleapi(word){

    var search = word;
    var count = 0;
    const sources = ['www.bloomberg.com', 'www.nbcnews.com', 'www.cnn.com', 'www.theguardian.com', 'www.nytimes.com', 'www.theamericanconservative.com', 'www.washingtontimes.com', 'www.foxnews.com', 'www.breitbart.com', 'www.nationalreview.com'];
    const link = ['#bloomberg', '#nbc', '#cnn', '#theguardian', '#nytimes', '#theamericanconservative', '#washingtontimes', '#foxnews', '#breitbart', '#nationalreview'];

    while (count < 11) {
        var fullSrc = "https://www.googleapis.com/customsearch/v1?siteSearch=" +sources[count]+ "&siteSearchFilter=i&key=AIzaSyDb54oEYNtY2zKGeyC7cqJGBP7t1VBCrk4&cx=6adbb15b85973bdf7&q=" +search+ "&callback=hndlr&num=1"
        $(link[count]).attr("src", fullSrc);
        count += 1;
    }
}

function hndlr(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        console.log(item.title + "<br>");
        console.log(item.link + "<br><br>");
        document.getElementById("content").innerHTML += item.title + "<br>";
        document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
    }
}