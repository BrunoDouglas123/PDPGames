var favoritos = []
var max = 10
var categoria
var categoria2
var estilo 
var reset = 0

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '1f0b99604cmsh61b13c5fd04f4ecp118efbjsn9a9b9cf81b5f',
		'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
		'Access-Control-Allow-Credentials' : true
	}
};


function search(url, title, myFavoritos){ //renderiza o jogo, recebe a url e o título
	fetch(url, options)				// url filtro dos dados que quero pegar, exemplo plataforma e tipo de jogo e o options é o array que da a permissão para poder pegar esses dados
	.then(response => response.json())
	.then(data => {
		var game = "<div class='row'>";     // para para 3 collumns a cada row
		var gamb = 0;
		
	
		for(var i = 0; i < max; i++){
			

			if(myFavoritos){  //É acessado quando clickado no menu favoritos. 
				if(gamb%3==0 && gamb != 0 && inArray(data[i].id, favoritos)){
					game += "</div><div class='row'>";
				}
				if(inArray(data[i].id, favoritos)){ //Verifica se o ID do jogo existe dentro do meu Array de favoritos;
					game += '<div class="col"><div class="thumb"><img class="thumb-img" src="'+ data[i].thumbnail+'" alt="img"><div class="thumb-header"><h1 class="thumb-title">'+ data[i].title+' <a href="javascript:void(0);" onclick="favoritarGame('+ data[i].id+')"><img src="img/star-regular.svg" width="30"></a></h1></div><div class="thumb-body"><p>'+ data[i].short_description+'</p></div><div class="thumb-footer"><a href="'+ data[i].game_url+'" class="btn" target="_blank">Acessar game</a></div></div></div>'
					gamb++;
				}
			}else{            //Lista todos os jogos de acordo com o filtro - MyFavoritos = falsa
				if(gamb%3==0 && gamb != 0){
					game += "</div><div class='row'>";
				}
				//concatena HTML do jogo
				game += '<div class="col"><div class="thumb"><img class="thumb-img" src="'+ data[i].thumbnail+'" alt="img"><div class="thumb-header"><h1 class="thumb-title">'+ data[i].title+' <a href="javascript:void(0);" onclick="favoritarGame('+ data[i].id+')"><img src="img/star-regular.svg" width="30"></a></h1></div><div class="thumb-body"><p>'+ data[i].short_description+'</p></div><div class="thumb-footer"><a href="'+ data[i].game_url+'" class="btn" target="_blank">Acessar game</a></div></div></div>'
				gamb++;
			}
		}
			
		game += "</div>";
		document.getElementById("result-games").innerHTML = game;
		document.getElementById("title").innerHTML = title;
	})
	.catch(err => console.error(err));
	
}


filter('home', 'popularity', 'Mais populares')
function filter(myFilter, myFilter2, title, reset, plataforma = '', menu = 'default' ){
	//verifica se a variável plataforma = algum parâmetro, caso receba um parâmetro a variável 'param' irá concatenar com a URL
	if(reset == 1) {
		max = 10
	}
	categoria = myFilter
	categoria2 = myFilter2
	estilo = title
	console.log(estilo)
	console.log(reset)
	if (plataforma == ''){
		var param = '';
	} else {
		var param = '&platform=' + plataforma;
	}
	//
	var myFavoritos = false;	//Inicia os favoritos como falso.
	if (myFilter == "category"){
		var url = "https://free-to-play-games-database.p.rapidapi.com/api/games?category="+myFilter2+param;
	} else if (myFilter == "plataform"){
		var url = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform="+myFilter2;
	} else if (myFilter == 'home') {
		var url = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by="+myFilter2+param;
	} else if (myFilter == 'favoritos'){
		myFavoritos = true;
		var url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
	}
	if(menu == 'default'){
		document.getElementById('pc').style.display = 'none';
		document.getElementById('browser').style.display = 'none';
		document.getElementById('default').style.display = 'inline-block';
	} else if ( menu == 'pc'){
		document.getElementById('pc').style.display = 'inline-block';
		document.getElementById('browser').style.display = 'none';
		document.getElementById('default').style.display = 'none';
	} else if (menu == 'browser'){
		document.getElementById('pc').style.display = 'none';
		document.getElementById('browser').style.display = 'inline-block';
		document.getElementById('default').style.display = 'none';
	} 
	search(url, title, myFavoritos);
}

//função que inclui no array de favoritos o ID do game. Que é incluso no evento de clickar. 
function favoritarGame(id){
	favoritos.push(id);
}

//função para verificar elemento dentro do Array (true or false)
function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function loadmore() {
	console.log(max)
	max = max+10
	
	
}