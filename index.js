window.alert("Bem Vindo ao PewDiePie Games")

var AllDates = []

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '1f0b99604cmsh61b13c5fd04f4ecp118efbjsn9a9b9cf81b5f',
		'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000',
		'Access-Control-Allow-Credentials' : true
	}
};

function search(url, title){
	fetch(url, options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		var game = "<div class='row'>";
		
		// para para 3 collumns a cada row
		for(var i = 0; i < data.length; i++){
			if(i%3==0 && i != 0){
				game += "</div><div class='row'>"
		}
		
		game += '<div class="col"><div class="thumb"><img class="thumb-img" src="'+ 
			data[i].thumbnail+'" alt="img"><div class="thumb-header"><h1 class="thumb-title">'+data[i].title+'</h1></div><div class="thumb-body"><p>'+ data[i].short_description
			
			//Botões de Favoritar e Acessar os Jogos
			+'</p></div><div class="thumb-footer"><a href="'+data[i].game_url+'" class="btn" target="_blank">Acessar game</a>&ensp;<a href="'+data[i].game_url+'" class="btn1" target="_blank">⭐</a></div></div></div>'
			
		}
		game += "</div>";
		var div = document.getElementById("result-games");
		var titulo = document.getElementById("title");
		titulo.innerHTML = title;
		div.innerHTML = game;

	})
	.catch(err => console.error(err));
}

const createBanner = data => {// altera o banner
    document.getElementById("banner").style.backgroundImage = 'url(' + data.thumbnail.replace("thumbnail.jpg","background.webp") +')';
    document.getElementById("banner").href = data.game_url;
}


filter('home', 'alphabetical', 'Mais populares')
function filter(myFilter, myFilter2, title){
	if(myFilter == "top-10"){
		var filter = "https://free-to-play-games-database.p.rapidapi.com/api/games";
	} else if (myFilter == "category"){
		var filter = "https://free-to-play-games-database.p.rapidapi.com/api/games?category="+myFilter2;
	} else if (myFilter == "plataform"){
		var filter = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform="+myFilter2;
	} else if (myFilter == 'home') {
		var filter = "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by="+myFilter2;
	}
	search(filter, title);
}

$(function() {
	$("a.favoritos").click(function(e) {
	  e.preventDefault();
	  // aqui deve definir o endereço do site
	  var url = 'http://www.linhadecomando.com';
	  // aqui deve definir o titulo do site
	  var title = 'Bem-vindo ao linhadecomando.com';
  
	  // mozilla firefox          
	  if ($.browser.mozilla == true) {
		  window.sidebar.addPanel(title, url, '');
		return false;
	  // internet explorer
	  } else if($.browser.msie == true) {  
		  window.external.AddFavorite( url, title);
		  return false;
	  // outros navegadores
	  } else {
		  alert('Pressione as teclas CTRL + D para adicionar aos favoritos.');
	  }
	});
 });

 const createCards = async (offset = 0,tag = "", platform = "all", sort = "relevance") => {
    const gamesData = await requestGames(createParams(tag, platform, sort));
    if(offset === 0){
        createBanner(gamesData[0]);
        pages=0;
    }
    offset *= 9;
    offset++;
    for (let i = 0; i < 9 && (offset + i < gamesData.length) ; i++) {
        let position = offset + i;
        createCard(gamesData[position]);
    }
    pages++;
}
createCards(0);