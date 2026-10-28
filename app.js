function showAlert(){
    searchBtn = document.querySelector('.searchBtn');
    searchBtn.addEventListener('click', getList);
}

function getList(){
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok){
                throw new Error("List not found");
            }
            return response.text();
        })
        .then(data => {
            alert(data);
        })
        .catch(err => {
            console.error("Error in Data", err);
        })
}

window.onload = function(){
    showAlert();

}
