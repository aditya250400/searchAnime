async function getMovies(keyword) {
	await fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${keyword}`, {
		"method": 'GET',
		"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})
	.then(response => response.json())
	.then(response => {
		let data = response.results;
		let konten = document.querySelector('.anime')
		let cards = '';
		let cards2 = '';
		let konten2 = document.querySelector('.modal-body')
		let buttonn = document.querySelectorAll('.mDetail-button')
		for(let i = 0; i < 19; i ++ ) {
			cards += animeDetails(data[i])
			// cards2 += modal(data[i])
		}
		konten.innerHTML = cards;
		// konten2.innerHTML = cards2;


	})
}
const modalDetailButton = document.querySelectorAll('.mDetail-button');
modalDetailButton.forEach(btn => {
	btn.addEventListener('click', function() {

		let inputText = document.querySelector('.inputText').value;

		fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${inputText}`, {
		"method": 'GET',
		"headers": {
		"x-rapidapi-host": "jikan1.p.rapidapi.com",
		"x-rapidapi-key": "1b1c062addmsh47f2c8da0788be3p178adbjsn735498bf086a"
		}
	})
	.then(response => response.json())
	.then(response => {
		let data5 = response.results;
		console.log(data5)

	})
		
	})
})

let button = document.querySelector('.inputButton');

button.addEventListener('click', function() {
	
	let inputText = document.querySelector('.inputText').value;

	getMovies(inputText);
})


function animeDetails(anmDetail) {
	return `<div class="col-md-3 my-3">
              <div class="card">
              <img src="${anmDetail.image_url}" class="card-img-top float-left" alt="${anmDetail.title}">
              <div class="card-body">
                <h5 class="card-title">${anmDetail.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Score : ${anmDetail.score}</h6>
                <a href="#" class="btn btn-primary mDetail-button" data-bs-toggle="modal" data-bs-target="#exampleModal" dataMal="${anmDetail.mal_id}">More Detail</a>
              </div>
            </div>
            </div>`
}

function modal(modalDetails) {
	return `<div class="container-fluid">
              <div class="row">
                <div class="col-md">
                  <img src="${modalDetails.image_url}" class="img-fluid" alt="${modalDetails.title}">
                </div>
                <div class="col-md overflow-auto" style="height:250px">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${modalDetails.title}</h4></li>
                    <li class="list-group-item eps"><strong>Episodes : </strong>${modalDetails.episodes}</li>
                    <li class="list-group-item"><strong>Score : </strong> ${modalDetails.score} </li>
                    <li class="list-group-item"><strong>Members : </strong> ${modalDetails.members}</li>
                    <li class="list-group-item"><strong>Source : </strong>${modalDetails.source}</li>
                    <li class="list-group-item"><strong>Synopsis : </strong>${modalDetails.synopsis}</li>
                  </ul>
                </div>
              </div>
            </div>`
}
