$(function() {
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


    $('form').submit(function(event) {
        event.preventDefault();
        var searchString = $('.search-bar').val();
        var urlEncodedSearchString = encodeURIComponent(searchString);
        $.ajax({
            url: "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
            method: "GET",
            success: function(response) {
                movieData = response.Search;
                var moviesHTML = renderMovies(movieData);
                $('.movies-container').html(moviesHTML);
            }
        });

    });

    $('.movies-container').on('click', '.add', function(event) {
        event.preventDefault();
        var imdbID = $(this).data('id');
        var movie = movieData.find(function(currentMovie) {
            return currentMovie.imdbID == imdbID;
        });

        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if(watchlist == null) {
            watchlist = [];
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });

});


                    
                        
                            
                            
                            