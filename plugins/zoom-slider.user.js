// ==UserScript==
// @id             iitc-plugin-zoom-slider@fragger
// @name           IITC plugin: Zoom slider
// @category       Controls
// @version        0.2.0.@@DATETIMEVERSION@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Show a zoom slider on the map instead of the zoom buttons.
@@METAINFO@@
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
var zoomSlider = {};
window.plugin.zoomSlider = zoomSlider;

zoomSlider.options = {
  // Height of zoom-slider.png in px
  //stepHeight: 8,

  // Height of the knob div in px (including border)
  //knobHeight: 6,

  //styleNS: 'leaflet-control-zoomslider'
};

function setup () {
  try {
    // https://github.com/kartena/Leaflet.zoomslider
    @@INCLUDERAW:external/L.Control.Zoomslider.js@@
    $('<style>').html('@@INCLUDESTRING:external/L.Control.Zoomslider.css@@').appendTo('head');

  } catch(e) {
    console.error('L.Control.Zoomslider.js loading failed');
    throw e;
  }

  // prevent Zoomslider from being activated by default (e.g. in minimap)
  L.Map.mergeOptions({
    zoomsliderControl: false
  });

  var map = window.map;
  if(map.zoomControl._map) {
    map.zoomControl.remove();
  }
  L.control.zoomslider(zoomSlider.options).addTo(map);

  // L.Control.Zoomslider.css defines non-standard border for `.leaflet-control-zoomslider`
  // which makes zoomslider not aligning with other leaflet controls
  // Here we are trying to unset it (make the same as general `.leaflet-control`)
  $('<style>')
    .html('.leaflet-touch .leaflet-control-zoomslider { border: 2px solid rgba(0,0,0,0.2) }')
    .appendTo('head');
};

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
