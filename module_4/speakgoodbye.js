(function(window) {
    var byeSpeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    var speakWord = "goodbye";
    window.byeSpeaker = byeSpeaker;
})(window);