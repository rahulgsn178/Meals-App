const removeBtn = document.querySelector('.remove-btn');
const favorites = document.querySelector('.favorites');
let favMeals;
window.onload = () => {
    let url = new URL(document.location.href);
    console.log(url);



    var sessionString = sessionStorage.getItem('favMeal');
    favMeals = JSON.parse(sessionString);
    console.log(favMeals);
    favMeals.forEach(meal => {
        favorites.innerHTML += 
                                `<div class="meal-item" data-id = "${meal.idMeal}">
                                    <img src="${meal.strMealThumb}" alt="meal">
                                    <div class="meal-name">
                                        <h3>${meal.strMeal}</h3>
                                    </div>
                                    <div class="meal-controls">
                                        <button type="button" name="remove-btn" onclick= "removeMealFromFav(event, ${meal.idMeal})" class="remove-btn btn mg">
                                            Remove
                                        </button> 
                                    </div>
                                </div>`;
        
    });

}


// function to remove from fav meals from page
function removeMealFromFav(event, mealId) {
    let rembtn = event.target;
    if(rembtn.classList.contains('remove-btn')) {
        rembtn.parentNode.parentNode.remove();
    }
    // function to remove from the fav meals array
    favMeals = favMeals.filter(meal => {
        return mealId != meal.idMeal;
    });
    console.log(favMeals);
}










