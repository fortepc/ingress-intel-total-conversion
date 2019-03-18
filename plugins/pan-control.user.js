// ==UserScript==
// @id             iitc-plugin-pan-control@fragger
// @name           IITC plugin: Pan control
// @category       Controls
// @version        0.2.0.@@DATETIMEVERSION@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Show a panning control on the map.
@@METAINFO@@
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
var panControl = {};
window.plugin.panControl = panControl;

panControl.options = {
  //position: 'topleft',
  //panOffset: 350
};

function setup () {
  try {
    // https://github.com/kartena/Leaflet.Pancontrol
    @@INCLUDERAW:external/L.Control.Pan.js@@
    $('<style>').html('@@INCLUDECSS:external/L.Control.Pan.css@@').appendTo('head');

  } catch(e) {
    console.error('L.Control.Pan.js loading failed');
    throw e;
  }

  var map = window.map;
  L.control.pan(panControl.options).addTo(map);

  if (map.zoomControl._map) {  // Move above the zoom control
    map.zoomControl.remove();
    L.control.zoom().addTo(map);
  }

  // L.Control.Pan.css tries to align zoom control with the pan control, but the result sucks
  // so here is our attempt to make it better
  $('<style>').html('\
    .leaflet-left.has-leaflet-pan-control>.leaflet-control { left: 24px }\
    .leaflet-top.has-leaflet-pan-control>.leaflet-control.leaflet-control-scale { left: 63px }\
    .leaflet-left>.leaflet-control.leaflet-control-pan { left: 0 }\
  ').appendTo('head');
};

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
