// setup config for API

const apikey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JmMDNjMGQ3NjQ5ZTJkOTNjZGI2ZTljMWNlMjRlZCIsInN1YiI6IjY1ZDRjMjllZmJhNjI1MDE3YzVjNmY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQrfmO518JyhPw8D_YnOYhlp_4P90xEKkqSLjGX7G1w";
const imgApi = "https://image.tmdb.org/t/p/w1280";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=`;

//connect input forms

const form = document.getElementById("search_form");


//connect user query
const query = document.getElementById("search_input");


//html element where result needs to be embedded
const result = document.getElementById("result");

// control vars
let page = 1;
let IsSearching = false;



// logic of funcs



// fetch data on api page load
async function fetchData(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new error("oops something went wrong");
        }
        return await response.json();

    }catch(error){
        return (null);
    }
}


//show the data after fetch
async function fetchAndShowResult(url){
    const data = await fetchData(url);
    if(data && data.result){
        fetchAndShowResult(data.result);
    }
}

//dynamic content gen using js
function createMovieCard(movie){
    //extract different object from data returned by api
    const { poster_path, original_title, release_date, overview } = movie;
    const imagePath = poster_path ? imgApi : "./img-01.jpg";
}