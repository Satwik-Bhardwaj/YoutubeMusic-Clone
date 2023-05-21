// get the search button and search box
const searchButton = document.getElementById("search-sec");
const searchContainer = document.getElementById("search-screen");

// adding the clicking event listener to search button
searchButton.addEventListener("click", addClick);

// function to manage the search box display
function manageSrch(event){
  if(!searchContainer.contains(event.target) && !searchButton.contains(event.target)){
    // called when click event occurs neither in search-dialog-box nor on searchButton
    
    searchContainer.classList.remove("active");
    searchContainer.classList.add("inactive");
    document.removeEventListener("click", manageSrch);
  }else{
    // called when click event occurs either in search-dialog-box or on searchButton

    searchContainer.classList.remove("inactive");
    searchContainer.classList.add("active");
  }
}

function addClick(){
  document.addEventListener("click", manageSrch);
}