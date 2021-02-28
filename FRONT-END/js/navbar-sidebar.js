const toggle = document.querySelector('nav .toggle input');
const sidebar = document.querySelector('.sidebar');
const MainContainer = document.querySelector('.main-container');
const container = document.querySelector('.container');
const SearchBar = document.querySelector('.search-bar');


// section caller

function loadhome (){
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


toggle.addEventListener('change', function(event){
    if(this.checked){
        sidebar.classList.add('sidebar-hilang');
        console.log("checklist gan");
    }else{
        sidebar.classList.remove('sidebar-hilang');
        console.log("non checklist gan");
    }
})

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
