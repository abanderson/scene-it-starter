$(function() {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }

    function renderMovies(movieArray) {
    var finalHTML = "";

    movieArray.forEach(function(currentMovie) {
        finalHTML += "<div class=\"movie card\">";
        finalHTML += "<img class=\"card-img poster\" src=\"" + currentMovie.Poster + "\"alt=\"Card image\">";
        finalHTML += "<div class=\"card-body\"><div class=\"card-title movie-title\">" + currentMovie.Title + "</div>";
        finalHTML += "<div class=\"card-text release\">" + currentMovie.Year + "</div>";
        finalHTML += "<button data-id=\"" + currentMovie.imdbID + "\" type=\"button\" class=\"btn btn-secondary btn-block btn-sm add\">Add</button></div></div>";
    });

    return finalHTML;
};

    var moviesHTML = renderMovies(watchlist);
    $('.movies-container').html(moviesHTML);

});