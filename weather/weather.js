
    $(document).ready(function () {
        $('#form1').submit(function (event) {
          let city = $("#inputt").val();
          event.preventDefault();
          $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            dataType: 'json',
            type: "GET",
            success: function (data) {
  
              let country = JSON.stringify(data)
              console.log(data)
              let output = `
                 <div id="result">
               
                <h3> <strong class="str"> City: </strong> ${data.name}</h3>
                       <h2><strong class="str"> Weather: </strong>${data.weather[0].main}</h2>
                       <h2><strong class="str"> Description: </strong>  <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'>${data.weather[0].description}
                          </h2>
                          <h2><strong class="str"> Temperature: </strong>${data.main.temp}&deg;C</h2>
                          <h2><strong class="str"> Speed: </strong>${data.wind.deg}&deg;C</h2>
  
                        </div>`
              $("#result").html(output)
            },
            error: function (xhr, exception) {
              console.error(exception)
            },
  
          })
        });
      });
  
  
  