


const baseUrl = "https://api.punkapi.com/v2/beers";



let output = "";
fetch(`${baseUrl}`)
    .then(response => response.json())
    .then((results) => {
        //console.log(results);

        for (i = 0; i < results.length; i++) {
            output = output + `<div class="box"><h2>${results[i].name}</h2><h3>${results[i].tagline}<h4> 
     ${results[i].first_brewed}<p>${results[i].description}
     </p>  <img src="https://static.horiba.com/fileadmin/Horiba/_processed_/3/6/csm_csm_01_02-2019_Beer_Brewing_53ef2818e5_948557e774.png" alt=""></div>`

        }

        document.getElementById("container").innerHTML = output;




    })
    .catch()
