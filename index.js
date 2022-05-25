const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '1f0b99604cmsh61b13c5fd04f4ecp118efbjsn9a9b9cf81b5f'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
.then(response => response.json())
.then(data => {
    const jogo = data
    console.log(data)        
})