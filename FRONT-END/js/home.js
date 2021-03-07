window.onload = starthome()

function starthome (){
  $(".container").load("section/home.html");
   setTimeout( TomcatCaller(),5000)
   setTimeout( SenmedCaller(),5000)
}


function TomcatCaller (){
  fetch('https://api.mikasa-server.online/api/v1/youtube/?channel=tstream')
  .then(response => response.json())
  .then((data) => {
  console.log(data['tstream'][0]['title'])
  for(i = 0 ; i < 3 ; i++ ){
      const url = data['tstream'][i]['url'];
      const title = data['tstream'][i]['title'];
      const publish = data['tstream'][i]['publish'];
      const thumbnail = data['tstream'][i]['thumbnail'];
      const container = document.querySelector(".card-tomcat");

      container.innerHTML += `<div class="col-md text-center mb-3">
            <div class="card">
              <a href="#" class="no-hover video-result " data-url = "${url}">
                <img class="card-img-top" src="${thumbnail}">
                <div class="card-body">
                  <h5 class="card-title hapus-overflow text-title">${title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted hapus-overflow text-subtitle">${publish}</h6>
                </div>
              </a>
            </div>
        </div>`
    }

    // Trigger video player
    const film = document.querySelectorAll('.video-result');
    film.forEach(btn => {
       btn.addEventListener('click', function(){
           const videoLink = "https://www.youtube.com/embed/" + this.dataset.url ;
           console.log(videoLink);
           CallvideoPlayer(videoLink);
       })
    })
  })
}

function SenmedCaller (){
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
              <a href="#"  class="no-hover video-result" data-url = "${url}">
                <img class="card-img-top" src="${thumbnail}">
                <div class="card-body">
                  <h5 class="card-title hapus-overflow text-title">${title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted hapus-overflow text-subtitle">${publish}</h6>
                </div>
              </a>
            </div>
        </div>`
  }

  // Trigger video player
  const film = document.querySelectorAll('.video-result');
  film.forEach(btn => {
      btn.addEventListener('click', function(){
          const videoLink = "https://www.youtube.com/embed/" + this.dataset.url ;
          console.log(videoLink);
          CallvideoPlayer(videoLink);
      })
    })
  })
}


// video player
function CallvideoPlayer(videoLink) {
  const containerUtama = document.querySelector(".container");
  containerUtama.innerHTML = '';
  containerUtama.innerHTML += `<div class = "col"><div class= "col"><iframe width="853" height="480" src="${videoLink}" frameborder="0" allow="accelerometer autoplay  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  <div class="col"><button class="btn btn-primary btn-mobile" onclick = "loadhome()">back</button></div>
  </div>`
}

