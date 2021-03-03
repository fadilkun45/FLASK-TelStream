const toggle = document.querySelector('nav .toggle input');
const sidebar = document.querySelector('.sidebar');
const MainContainer = document.querySelector('.main-container');
const container = document.querySelector('.container');
const SearchBar = document.querySelector('.search-bar');
const searchbarResult = document.querySelector('#livesearch');
const SearchBarvalue = document.querySelector('#bar');

// livesearch 
SearchBarvalue.addEventListener('keyup', function showResult() {
    fetch('https://api.mikasa-server.online/api/v1/youtube/?title='+ SearchBarvalue.value)
      .then(response => response.json())
      .then((data) => {
          console.log(data['title'])
          const title = data['title'];

        if(title === undefined ){
            searchbarResult.innerHTML=`<p>404 not found</p>`;
        }else{
            searchbarResult.innerHTML=`<p>${title}</p>`;
        }
        })
})

SearchBarvalue.addEventListener('blur', function () {
    searchbarResult.innerHTML = '';
    SearchBarvalue.value = '' ;

})

SearchBarvalue.addEventListener('keyup',function(event){
    if(event.keyCode == 13) {
        $(".container").load("section/search.html");
        fetch('https://api.mikasa-server.online/api/v1/youtube/?title='+SearchBarvalue.value)
        .then(response => response.json())
        .then((data) => {
            for(i = 0 ; i < data.length ; i++ ){
                console.log(data[i])
                const title = data[i][0];
                const url = data[i][1];
                const thumbnail = data[i][2];
                const container = document.querySelector('.result');
                container.innerHTML += `<div class="col-md text-center mb-3">
                <div class="card">
                  <a href="#" data-url="${url}" class="no-hover video-result">
                    <img class="card-img-top" src="${thumbnail}">
                    <div class="card-body">
                      <h5 class="card-title hapus-overflow text-title">${title}</h5>
                    </div>
                  </a>
                </div>
            </div>`

            $('.video-result').on('click',function (){
                $(".container").load("section/stream.html");
                const source = document.createElement('source');
                const linkembed = "https://www.youtube.com/embed/"
                const videoLink = linkembed + this.dataset.url ;
                console.log(videoLink)
                const layar = document.querySelector('#stream-player');
                source.setAttribute('src',videoLink);
                layar.appendChild(source);
            })
        }

           
            
        })
    };
})


// section caller

function loadhome (){
    starthome ()
    $(".container").load("section/home.html");
    checkedRemove()
}   

function loadSenmed(){
    $(".container").load("section/senmedDokumentasi.html");
    checkedRemove()
}

function loadTomcat(){
    $(".container").load("section/tomcatDokumentasi.html");
    checkedRemove()
}

function loadLive(){
    $(".container").load("section/live.html");
    checkedRemove()
}

function loadTrending (){
    $(".container").load("section/trending.html");
    checkedRemove()
}


function checkedRemove (){
    $(".rmvcheck").click(function(){
        $(toggle).prop("checked", false);
    });
    sidebar.classList.remove('sidebar-hilang');
    container.style.display = "flex" ;
    SearchBar.style.display = "block" ;
    MainContainer.classList.remove('container-utama-pengecil');
}

// sidebar
toggle.addEventListener('change', function(event){
    if(this.checked){
        sidebar.classList.add('sidebar-hilang');
        console.log("checklist gan");
    }else{
        sidebar.classList.remove('sidebar-hilang');
        console.log("non checklist gan");
    }
})

// script yang aktif ketika mobile
if (document.documentElement.clientWidth < 800 ){
    toggle.addEventListener('change', function(event){
        if(this.checked){
            container.style.display = "none" ;
            SearchBar.style.display = "none" ;
            MainContainer.classList.add('container-utama-pengecil');
        }else{
            container.style.display = "flex" ;
            SearchBar.style.display = "block" ;
            MainContainer.classList.remove('container-utama-pengecil');
        }
    })
    
}
