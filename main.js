var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    setTimeout(function () {
        imgId = "selfie1"
        takeSelfie()
        speakData = "tirando sua selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis)


    }, 5000)

    setTimeout(function () {
        imgId = "selfie2"
        takeSelfie()
        speakData = "tirando sua selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis)


    }, 10000)


    setTimeout(function () {
        imgId = "selfie3"
        takeSelfie()
        speakData = "tirando sua selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis)


    }, 15000)












}


recognition.onresult = function(event){

    console.log(event);

    Content = event.result[0][0].trancript.toLowerCase();
    console.log(content)
    if (content == "selfie") {
    speak()
}
}




function takeSelfie() {
    console.log(imgId)

    Webcam.snap(function (data_uri) {

        if (imgId == "selfie1") {
            document.getElementById("result1").innerHTML = '<img src="' + data_uri + '"/>'
        }

        if (imgId == "selfie2") {
            document.getElementById("result2").innerHTML = '<img src="' + data_uri + '"/>'
        }

        if (imgId == "selfie3") {
            document.getElementById("result3").innerHTML = '<img src="' + data_uri + '"/>'
        }



    })


















}



































































