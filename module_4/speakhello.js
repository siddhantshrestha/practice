(function(window) {
    var names = ['sid', 'miya', 'jessica', 'jenny', 'leex'];
    var helloSpeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    var speakWord = "hello";
    window.helloSpeaker = helloSpeaker;

})(window);