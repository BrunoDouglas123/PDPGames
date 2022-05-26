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
	const Game2 = jogo[1]
	const Game3 = jogo[2]

	console.log(Game1)
	console.log(Game2)
	console.log(Game3)

	const bla1 = document.querySelector('.game1')

	const bla2 = document.querySelector('.game2')

	const bla3 = document.querySelector('.game3')

	const blake = document.createElement('div')

	blake.setAttribute('class', 'bli')
	blake.setAttribute('class', 'ble')
	blake.setAttribute('class', 'blo')

	bla1.appendChild(blake)

	bla2.appendChild(blake)

	bla3.appendChild(blake)

	const blaki1 = document.createElement('h1')

	blaki1.setAttribute('class', 'bli')

	const blaki2 = document.createElement('h1')

	blaki2.setAttribute('class', 'ble')

	const blaki3 = document.createElement('h1')

	blaki3.setAttribute('class', 'blo')

	blaki1.innerHTML = Game1.title
	blaki2.innerHTML = Game2.title
	blaki3.innerHTML = Game3.title

	blake.appendChild(blaki1)
	blake.appendChild(blaki2)
	blake.appendChild(blaki3)

})