let results = document.querySelector("#movies")

let myTitle = document.querySelector("#title");
let myButton = document.querySelector("button");
function recuperer() {
myButton.addEventListener('click', e=> {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${myTitle.value}&apikey=b2b0e413`)
    .then (res => res.json())
    .then (result => {
         getMovies(result)
})


    function getMovies(result) {
        for (let propriete in result) {
            if(result[propriete]){
                let movies = result[propriete];
                if(movies != null) {
                    if( movies instanceof Object){
                        displayMovies(movies)
                       
                    }
                }
            }
        }
    };
    

    function displayMovies(movies) {
        const div = document.querySelector("#movies")
        let divM = "";
        movies.forEach(movie =>{
            console.log(movie)
            divM += '<div class ="card-body>'
                divM += ('<img src=' +  movie.Poster + ' alt="' + movie.Title + '" class="card-img-top" syle="width:18rem"/>');
                divM += '</a>';
                console.log('<img src=' +  movie.Poster + ' alt="' + movie.Title + '" class="card-img-top" syle="width:18rem"/>');
            divM += "</div>"
            })

    div.innerHTML = divM
    }
    
}
)}
