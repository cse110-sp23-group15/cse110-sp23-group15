function accessswitch(){
    const synth = window.speechSynthesis;
    let voiceList = window.speechSynthesis.getVoices();
    let accessibility = document.getElementsByName("accessibility");
    accessibility[0].addEventListener('change', function(){
        console.log("change");
        if(this.checked){
            if(document.URL.includes("index")){
                let intro = new SpeechSynthesisUtterance("Welcom to main page of tasty noodle fortune telling site");
                intro.rate = 2;
                intro.voice = voiceList[0];
                synth.speak(intro);
                console.log("intro");
            }else if(document.URL.includes("questionnaire")){
                console.log("question");
            }else if(document.URL.includes("about")){
                console.log("about");
            }else if(document.URL.includes("fortune")){
                console.log("fortune");
            }else if(document.URL.includes("profiles")){
                console.log("profiles");
            }else{
                let intro = new SpeechSynthesisUtterance("Welcom to main page of tasty noodle fortune telling site");
                intro.rate = 2;
                intro.voice = voiceList[0];
                synth.speak(intro);
                accessEn()
                console.log("intro");
            }
            accessEn();
        } else{
            synth.cancel();
        }
    });
}

function accessEn(){
    const synth = window.speechSynthesis;
    let readText = document.getElementsByClassName("read");
    let voiceList = window.speechSynthesis.getVoices();
    for (let i = 0; i<readText.length; i++){
        let text =  new SpeechSynthesisUtterance(readText[i].value);
        text.rate = 2;
        text.voice = voiceList[0];
        synth.speak(text);
    }
}

export {accessswitch, accessEn};