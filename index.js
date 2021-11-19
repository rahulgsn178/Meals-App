// my buttons and list
const searchBtn = document.querySelector('.search-btn');
const mealList = document.querySelector('.meal');
const favMealBtn = document.querySelector('.fav-meal-btn');

// array for storing the favorite meals
const favMeals = [];

// For the data object
let mydata = new Object();


// Event Listeners
searchBtn.addEventListener('click', getMealList);
favMealBtn.addEventListener('click', toSendData);




// my functions
function getMealList() {
    let searchInputText = document.querySelector('.search-content').value.trim();
    // validation
    if(searchInputText === '') {
        return alert('Please first search for the meal in the search bar');
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            console.log(data);
            mydata = data;
            if(data.meals) {
                data.meals.forEach(meal => {
                    html += 
                            `<div class="meal-item" data-id = "${meal.idMeal}">
                                <img src="${meal.strMealThumb}" alt="meal">
                                <div class="meal-name">
                                    <h3>${meal.strMeal}</h3>
                                </div>
                                <div class="meal-controls">
                                    <a href="meal-detail-page.html?i=${meal.idMeal}" class="meal-details-btn btn" id="meal-details-btn">
                                        Details
                                    </a>
                                    <button type="button" class="fav-btn btn mg" onclick="addToFav(event, ${meal.idMeal});">
                                        Add to Favorites
                                    </button> 
                                </div>
                            </div>`;
                });
                mealList.innerHTML = html;
                
            }
        });

    }

    
    
}

// to add to favorite list of meals
function addToFav(event, mealId) {

    mydata.meals.forEach(meal => {
        if(!favMeals.includes(meal) && meal.idMeal == mealId) {
            favMeals.push(meal);
            console.log(favMeals);
            return alert('Added to favorites');
        }
    });
}

// function to send data using session storage in the fav-meals-page 
function toSendData() {

    // checking if fav is empty then dont render the fav meals page
    if(favMeals.length == 0) {
        favMealBtn.href = '#';
        return alert('Sorry!!!! You have not added any meal yet');
    } else {
        sessionStorage.setItem('favMeal', JSON.stringify(favMeals));
        window.location.href = 'my-fav-meal-page.html';
    }

}

