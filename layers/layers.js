var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
    title: 'Міста включені в ПП<br />\
    <img src="styles/legend/_0_0.png" /> 1<br />\
    <img src="styles/legend/_0_1.png" /> 2<br />\
    <img src="styles/legend/_0_2.png" /> 3<br />\
    <img src="styles/legend/_0_3.png" /> 4<br />'
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
    title: 'Міста не включені в ПП<br />\
    <img src="styles/legend/_1_0.png" /> 2<br />\
    <img src="styles/legend/_1_1.png" /> 3<br />\
    <img src="styles/legend/_1_2.png" /> 4<br />'
        });var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__2.addFeatures(features__2);var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                title: '<img src="styles/legend/_2.png" /> Межі існуючих ОТГ'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [baseLayer,lyr__0,lyr__1,lyr__2];
lyr__0.set('fieldAliases', {'__name': '__name', 'kolir': 'kolir', });
lyr__1.set('fieldAliases', {'_name': '_name', 'in_pp': 'in_pp', });
lyr__2.set('fieldAliases', {});
lyr__0.set('fieldImages', {'__name': 'TextEdit', 'kolir': 'TextEdit', });
lyr__1.set('fieldImages', {'_name': 'TextEdit', 'in_pp': 'TextEdit', });
lyr__2.set('fieldImages', {});
lyr__0.set('fieldLabels', {'__name': 'inline label', 'kolir': 'inline label', });
lyr__1.set('fieldLabels', {'_name': 'inline label', 'in_pp': 'inline label', });
lyr__2.set('fieldLabels', {});
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});