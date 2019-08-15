(function(document) {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'home': '/',
      'comic-transcription': '/transcription/:num/:title'
    }
  });

}(document));