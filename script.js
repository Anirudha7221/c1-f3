// API = 69e127a2 
const API_key=document.getElementById("apikey");

const BaseURL="http://www.omdbapi.com";

const search=document.getElementById("search");

const search_btn=document.querySelector("#searchbar>span");
search_btn.addEventListener("click",()=>{
     let api=API_key.value;
     let serachResult=search.value.trim();

     let loader=document.getElementById("loader");
     loader.style.display="block";

    fetchData(api,serachResult);

     setTimeout(()=>{
        let loader=document.getElementById("loader");
        loader.style.display="none";
     },2000)
})

async function fetchData(api,search){
    let URL=`${BaseURL}/?s=${search}&apikey=${api}`;

    const response=await fetch(URL,{method:"GET"});

    const results=await response.json();

    console.log(results);
    showResults(results.Search)
}

function showResults(resultsList){
    
    resultsList.forEach(movie => {
            
        let containeer=document.getElementById("containeer");

        let movie_card=document.createElement("div");
        movie_card.className="movie-card";

        // <div class="movie-card">
        //         <img src="">
        //         <p>Jurrasic World</p>
        // </div>

        movie_card.innerHTML=`<img src="${movie.Poster}">
                            <p>${movie.Title}</p>`;

        containeer.appendChild(movie_card);   
    });
}