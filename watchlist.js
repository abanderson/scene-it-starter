$(function() {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
});