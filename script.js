function getCategoriesData(){

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error('Something Went Wrong')
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.error(error)
            alert('Error fetching category data')
        })
}



function getIngredientData(){

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => {
        if (res.ok) return res.json()
        else throw new Error('Something Went Wrong')
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.error(error)
        alert('Error fetching Ingredient data')
    })

}