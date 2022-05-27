window.alert("")

var AllDates = []

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
	
	AllDates.push(data)

	const Game1 = jogo[0]

	console.log(Game1)

	const bla1 = document.querySelector('.game1')
	
	const blake = document.createElement('div')

	blake.style.backgroundImage = `url(${Game1.thumbnail})`

	blake.setAttribute('class', 'bli')

	bla1.appendChild(blake)

	const blaki1 = document.createElement('h1')

	blaki1.setAttribute('class', 'bli')

	blaki1.innerHTML = Game1.title

	blake.appendChild(blaki1)

})