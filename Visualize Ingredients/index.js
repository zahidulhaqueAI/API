const data = "ingredientList=3%20oz%20flour&measure=metric&servings=2&view=grid&showBacklink=true&defaultCss=true";

const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	//	console.log(this.responseText);
        document.body.innerHTML = this.responseText;
	}
});

xhr.open("POST", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/visualizeIngredients");

xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("accept", "text/html");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx7ef");

xhr.send(data);
