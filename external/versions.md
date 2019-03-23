### jQuery-related components:

* https://jquery.com/
  3.3.1
  jquery-3.3.1.min.js

* https://jqueryui.com/
  1.12.1
  jquery-ui-1.12.1.min.js

* https://github.com/jeromeetienne/jquery-qrcode
  jquery.qrcode.min.js: 2b253c58f4f23f7c522c9f24627d4a51412f8588

* https://github.com/richadams/jquery-taphold
  taphold.js: b59ed509a64080f4fd7c894fa7de83ceb92851e0
  modified: jQuery: fixed deprecated `bind`/`unbind` functions:
  https://github.com/IITC-CE/jquery-taphold/commit/a85050a7744d780809e8f007f6dc43065cdece9c

* https://github.com/bgrins/spectrum
  1.8.0-24-g9e04e58
  spectrum.js: 1d9835b239869d90bf8d3555641d1f7e9cea1f71
  used in: draw-tools


### Leaflet-related components:

* https://github.com/Leaflet/Leaflet
  1.4.0
  leaflet-src.js

* https://github.com/Leaflet/Leaflet.draw
  1.0.0+33ea262
  leaflet.draw-src.js
  modified: geodesic shapes, snap points, update to leaflet 1 (clickable->interactive)
  https://github.com/McBen/ingress-intel-total-conversion/commit/1901ee52534c1108402b864eff387a47a15830ca#diff-faf274517d8a5af6178bf8dbb31c682a
  used in: draw-tools

* https://github.com/shramov/leaflet-plugins/
  3.0.3
  * Bing.js: 14b845bba7f6e7bc0309f37c66f59bceb801bb68
    used in: basemap-bing
  * Yandex.js: 21998f069d00952807ae070fb5b5c9992e7a6c1f
    used in: basemap-yandex

* https://github.com/makinacorpus/Leaflet.FileLayer
  1.2.0-1-g4f0e011
  leaflet.filelayer.js: 943f903d245b19523d17e24e4af5108ffafdeb7e
  used in: overlay-kml

* https://github.com/mapbox/togeojson
  v0.16.0-27-g72957d6
  togeojson.js: 72957d69545ed1f798d56618694473b603a0ba6f
  used in: overlay-kml

* https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
  0.8.0
  Leaflet.GoogleMutant.js

* https://github.com/Norkart/Leaflet-MiniMap
  v3.6.1-2-gb0ff0e6
  Control.MiniMap.js: ce2704cb40fb5dd89fd4fddfae9101c736329b35
  modified: fixes to comply with leaflet 1.0+: `clickable`->`interactive`
  335895ddee05c4d110d0d7c383ccdb4ea119d420
  used in: minimap

* https://github.com/kartena/Leaflet.Pancontrol/
  v0.7.1-4-g272329d
  L.Control.Pan.js: d9528ed95479d97d92828c19fa521aa2613aff09
  used in: pan-control

* https://github.com/kartena/Leaflet.zoomslider/
  v0.7.1-6-ga6bab54
  L.Control.Zoomslider.js: 061a7455fa8a49961363ba63d9811be01989c093
  used in: zoom-slider

* origin (abandoned): https://github.com/Fragger/Leaflet.Geodesic
  modified a lot: https://github.com/IITC-CE/ingress-intel-total-conversion/commits/master/external/L.Geodesic.js

* https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
  v0.2.6
  oms.min.js
  modified: fixes to comply with updated leaflet: clickable->interactive
  197379276b9df9a3826e4cc313ff0471250121a6
  used in: bookmarks, draw-tools, player-activity-tracker


### Other:

* https://github.com/bryanwoods/autolink-js
  1.0.2-4-g1418049
  autolink-min.js: c5df674c2da6ca7e26d47e2b05abafd28262f0a8

* https://github.com/ironwallaby/delaunay
  1.0.1-4-g6de2b4f
  delaunay.js: dfc747e3dc850c928d720bcdf2a93c42d5a42712
  used in: tidy-links

* https://github.com/gregallensworth/Leaflet/
  LatLng_Bearings.js: 7f807ae6c3402420b2d0daa96b571d93c8caf7c1
  modified: fix removed constants RAD_TO_DEG, DEG_TO_RAD: 9077c24efbf7f1d2f12886f79578575b66b4a464
  used in: distance-to-portal

* https://github.com/chriso/load.js
  load.js: f8b9e2efbabfad19869e1fe6d4575d72e7b6dd53

* https://github.com/jonatkins/s2-geometry-javascript/
  s2geometry.js: 5e20625eb5d2c0d6a8fd0aeaa5cc91dddd8b306a
  modified: 42ed6566e49dcfa81ae3be0b3bdee9ebd586e53f, 6f8fbe60d38b01782b8d92bdc20fa4470645f186
