ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([652677.819310, 2262808.395862, 741166.859526, 2328932.074265]);
var wms_layers = [];


        var lyr_GGSatellite_0 = new ol.layer.Tile({
            'title': 'GG Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GGStreetMap_1 = new ol.layer.Tile({
            'title': 'GG StreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> '
            });
var format_RanhGii_4 = new ol.format.GeoJSON();
var features_RanhGii_4 = format_RanhGii_4.readFeatures(json_RanhGii_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RanhGii_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhGii_4.addFeatures(features_RanhGii_4);
var lyr_RanhGii_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhGii_4, 
                style: style_RanhGii_4,
                popuplayertitle: 'Ranh Giới',
                interactive: true,
                title: '<img src="styles/legend/RanhGii_4.png" /> Ranh Giới'
            });
var format_Ghich_5 = new ol.format.GeoJSON();
var features_Ghich_5 = format_Ghich_5.readFeatures(json_Ghich_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Ghich_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ghich_5.addFeatures(features_Ghich_5);
var lyr_Ghich_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ghich_5, 
                style: style_Ghich_5,
                popuplayertitle: 'Ghi chú',
                interactive: false,
                title: '<img src="styles/legend/Ghich_5.png" /> Ghi chú'
            });
var group_RGVN = new ol.layer.Group({
                                layers: [lyr__3,lyr_RanhGii_4,lyr_Ghich_5,],
                                fold: "open",
                                title: 'RGVN'});

lyr_GGSatellite_0.setVisible(true);lyr_GGStreetMap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr__3.setVisible(true);lyr_RanhGii_4.setVisible(true);lyr_Ghich_5.setVisible(true);
var layersList = [lyr_GGSatellite_0,lyr_GGStreetMap_1,lyr_OpenStreetMap_2,group_RGVN];
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'TenDiem': 'TenDiem', 'CH01': 'CH01', 'Shape_Length': 'Shape_Length', });
lyr_RanhGii_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'TenDiem': 'TenDiem', 'CH01': 'CH01', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Ghich_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Owner': 'Owner', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtAngle': 'TxtAngle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'TenDiem': 'TextEdit', 'CH01': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_RanhGii_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'TenDiem': 'TextEdit', 'CH01': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ghich_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Owner': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'Range', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtAngle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtJust': 'TextEdit', 'VertAlign': 'TextEdit', 'TxtFont': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', });
lyr__3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'TenDiem': 'hidden field', 'CH01': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_RanhGii_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'TenDiem': 'hidden field', 'CH01': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'no label', });
lyr_Ghich_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Owner': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'ScaleX': 'hidden field', 'ScaleY': 'hidden field', 'ScaleZ': 'hidden field', 'Style': 'hidden field', 'FontID': 'hidden field', 'Text': 'hidden field', 'Height': 'hidden field', 'TxtAngle': 'hidden field', 'TxtWidth': 'hidden field', 'TxtOblique': 'hidden field', 'TxtGenType': 'hidden field', 'TxtJust': 'hidden field', 'VertAlign': 'hidden field', 'TxtFont': 'hidden field', 'TxtBoxHt': 'hidden field', 'TxtBoxWd': 'hidden field', 'TxtRefWd': 'hidden field', 'TxtAttach': 'hidden field', 'TxtDir': 'hidden field', 'LnSpace': 'hidden field', 'SpaceFct': 'hidden field', 'TxtMemo': 'hidden field', });
lyr_Ghich_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});