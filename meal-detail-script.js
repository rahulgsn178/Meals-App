window.onload = () => {
    let url = new URL(document.location.href);
    let mealId = url.searchParams.get('i');
    getMealDetails(mealId);
};

function getMealDetails(mealId) {   
    let mealDetails = document.querySelector('.meal-details');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => {
        let html = '';
        let meal;
        // console.log(data);
        if(data.meals) {
           meal = data.meals[0];
           console.log(meal.strInstructions);
           html =
                                    `<div class="meal-item">
                                        <img src="${meal.strMealThumb}" alt="meal">
                                        <div class="meal-name">
                                            <h3>${meal.strMeal}</h3>
                                        </div>
                                        <div class="description">
                                            <h3>${meal.strInstructions}</h3>
                                        </div>
                                    
                                    </div>`         
        }
        mealDetails.innerHTML = html;
    });
}
