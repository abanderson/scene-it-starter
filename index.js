$(function() {
    function renderMovies(movieArray) {
        var finalHTML = "";

        movieArray.forEach(function(currentMovie) {
            finalHTML += "<div class=\"movie card\">";
            finalHTML += "<img class=\"card-img\" src=\"" + currentMovie.Poster + "\"alt=\"Card image\">";
            finalHTML += "<div class=\"card-body\"><span class=\"card-title movie\">" + currentMovie.Title + "</span>";
            finalHTML += "<span class=\"card-text release\">" + currentMovie.Year + "</span>";
            finalHTML += "<button data-id=\"" + currentMovie.imdbID + "\" type=\"button\" class=\"btn btn-secondary btn-block add\">Add</button></div></div>";
        });

        return finalHTML;
    };


    $('form').submit(function(event) {
        event.preventDefault();
        var moviesHTML = renderMovies(movieData);
        $('.movies-container').html(moviesHTML);
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


                    
                        
                            
                            
                            