Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Abul33764 
abul-kalam-coder
/
Voice-Selfie-Web-app
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Voice-Selfie-Web-app/main.js /
@abul-kalam-coder
abul-kalam-coder Add files via upload
Latest commit 5b629f9 on Jun 29, 2021
 History
 1 contributor
55 lines (42 sloc)  1.19 KB
   
var voicerecogniton = window.webkitSpeechRecognition;
var recognition = new voicerecogniton() ;

function start_selfie(){
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();
}

recognition.onresult = function(event){
   
    console.log(event);

    transcript=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=transcript;

    if(transcript == "take my selfie")
    speak();
}

function speak(){
  var synth = window.speechSynthesis ;
  var speakthis ="taking your selfi in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speakthis)  ;
  synth.speak(utterthis);
  
  Webcam.attach(camera);

setTimeout(function(){
snapshot();
save();
},5000);

}
var camera =document.getElementById("camera");
 Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

function snapshot(){
Webcam.snap(function(data_uri){
  document.getElementById("selfie_img").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
});

}

function save(){
link = document.getElementById("link");
var image =document.getElementById("selfie_image").src;
link.href = image;
link.click();

}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
