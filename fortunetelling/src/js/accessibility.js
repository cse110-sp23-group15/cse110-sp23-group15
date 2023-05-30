function init(){
    
}

function accessswitch(){
    let accessibility = document.getElementsByClassName("accessibility");
    accessibility[0].addEventListener('change', function(){
        if(this.checked){
            accessEn();
        } else{

        }
    });
}

function accessEn(){
    if(page.url() == "http://127.0.0.1:5500/fortunetelling/index.html"){
        
    }
    let readText = page.getElementsByClassName("read");
    for (let i = 0; i<readText.length; i++){

    }
}