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

// live search
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
                <div class="card" >
                    <a href="#" class="no-hover video-result" data-url ="${url}" >
                    <img class="card-img-top" src="`+ thumbnail +`">
                    <div class="card-body">
                        <h5 class="card-title hapus-overflow text-title">` + title + `</h5>
                    </div>
                    </a>
                </div>
                </div>`
        }
        // pemanggil video player
        const film = document.querySelectorAll('.video-result');
        film.forEach(btn => {
        btn.addEventListener('click', function(){
            console.log("tes");
            const videoLink = "https://www.youtube.com/embed/" + this.dataset.url ;
            console.log(videoLink);
            CallPlayer(videoLink)
        })
        })
        function CallPlayer(videoLink) {
            const tesfile = document.querySelector(".result");
            tesfile.innerHTML = '';
            tesfile.innerHTML += `<div class = "col"><div class= "col"><iframe width="853" height="480" src="${videoLink}" frameborder="0" allow="accelerometer autoplay  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="col"><button class="btn btn-primary btn-mobile" onclick = "loadhome()">back</button></div>
            </div>`

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
