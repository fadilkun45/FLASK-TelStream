window.onload = loadhome()

function loadhome (){
  $(".container").load("section/home.html");
    loadTomcat()
    loadSenmed()
}

function loadTomcat(){
  fetch('https://api.mikasa-server.online/api/v1/youtube/?channel=tstream')
  .then(response => response.json())
  .then((data) => {
    console.log(data['tstream'][0]['title'])
    for(i = 0 ; i < 3 ; i++ ){
      const url = data['tstream'][i]['url'];
      const title = data['tstream'][i]['title'];
      const publish = data['tstream'][i]['publish'];
      const thumbnail = data['tstream'][i]['thumbnail'];
      const container = document.querySelector(".card-trending");

      container.innerHTML += `<div class="col-md text-center mb-3">
      <div class="card">
        <a href="` + url + `" class="no-hover">
          <img class="card-img-top" src="` + thumbnail + `">
          <div class="card-body">
            <h5 class="card-title hapus-overflow text-title">` + title + `</h5>
            <h6 class="card-subtitle mb-2 text-muted hapus-overflow text-subtitle">`+ publish +`</h6>
          </div>
        </a>
      </div>
    </div>`
    }
  })
}

function loadSenmed (){
  fetch('https://api.mikasa-server.online/api/v1/youtube/?channel=senmed')
  .then(response => response.json())
  .then((data) => {

    console.log(data['senmed'][0]['title'])
    for(i = 0 ; i < 3 ; i++ ){
      const url = data['senmed'][i]['url'];
      const title = data['senmed'][i]['title'];
      const publish = data['senmed'][i]['publish'];
      const thumbnail = data['senmed'][i]['thumbnail'];
      const container = document.querySelector(".card-trending");

      container.innerHTML += `<div class="col-md text-center mb-3">
      <div class="card">
        <a href="` + url + `" class="no-hover">
          <img class="card-img-top" src="` + thumbnail + `">
          <div class="card-body">
            <h5 class="card-title hapus-overflow text-title">` + title + `</h5>
            <h6 class="card-subtitle mb-2 text-muted hapus-overflow text-subtitle">`+ publish +`</h6>
          </div>
        </a>
      </div>
    </div>`
    }
  })
}


