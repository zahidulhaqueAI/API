const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		// console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data['calories']['value'] + ' calories');
	}
});

xhr.open('GET', 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=Spaghetti%20Aglio%20et%20Olio');

xhr.setRequestHeader('x-rapidapi-host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
xhr.setRequestHeader('x-rapidapi-key', 'ce8422e93cmsh9afff6a6e455fbfp1d8059jsna145fcdf17ef');

xhr.send();


