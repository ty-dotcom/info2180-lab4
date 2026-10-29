function showResults(){
    const form = document.querySelector('form');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const formInput = new FormData(form);
        const data = Object.fromEntries(formInput.entries());
        const result = document.querySelector('#result');
        result.innerHTML = "<h2>RESULT</h2> <hr>";
        const query = data.hero.trim();

        searchHero(query, result);
    })
}

function searchHero(query, container){
    const url = `superheroes.php?query=${encodeURIComponent(query)}`;
    console.log(url)
    fetch(url)
        .then(res => {
            if (!res.ok){
                throw new Error("Hero not found");
            }
            return res.text();
        })
        .then(data => {
            container.innerHTML += data;
        })
        .catch(() => {
            container.innerHTML += "<h4 class='not-found'> SUPERHERO NOT FOUND. <h4>";
        })
}

window.onload = function(){
    showResults();

}
