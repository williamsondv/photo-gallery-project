



function searchFunction() {
   let input = document.getElementById("search-bar");
   let filter = input.value.toUpperCase();
   let thumb = document.getElementsByTagName("a");
   let searchString;

    for(let i = 0; i < 12; i++) {
        searchString = thumb[i].getAttribute("data-caption").toString().toUpperCase();
        if(searchString.includes(filter)) {
            thumb[i].style.display = "block";
        } else {
            thumb[i].style.display = "none";
        }
        
    }
   
}




  
