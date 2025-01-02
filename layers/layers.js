ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([639216.059415, 2257920.314068, 727705.099631, 2324043.992472]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> '
            });
var format_RanhGii_2 = new ol.format.GeoJSON();
var features_RanhGii_2 = format_RanhGii_2.readFeatures(json_RanhGii_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RanhGii_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhGii_2.addFeatures(features_RanhGii_2);
var lyr_RanhGii_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhGii_2, 
                style: style_RanhGii_2,
                popuplayertitle: 'Ranh Giới',
                interactive: true,
                title: '<img src="styles/legend/RanhGii_2.png" /> Ranh Giới'
            });
var format_Ghich_3 = new ol.format.GeoJSON();
var features_Ghich_3 = format_Ghich_3.readFeatures(json_Ghich_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Ghich_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ghich_3.addFeatures(features_Ghich_3);
var lyr_Ghich_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ghich_3, 
                style: style_Ghich_3,
                popuplayertitle: 'Ghi chú',
                interactive: false,
                title: '<img src="styles/legend/Ghich_3.png" /> Ghi chú'
            });
var group_RGVN = new ol.layer.Group({
                                layers: [lyr__1,lyr_RanhGii_2,lyr_Ghich_3,],
                                fold: "open",
                                title: 'RGVN'});

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr_RanhGii_2.setVisible(true);lyr_Ghich_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_RGVN];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'TenDiem': 'TenDiem', 'CH01': 'CH01', 'Shape_Length': 'Shape_Length', });
lyr_RanhGii_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'TenDiem': 'TenDiem', 'CH01': 'CH01', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Ghich_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Owner': 'Owner', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtAngle': 'TxtAngle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'TenDiem': 'TextEdit', 'CH01': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_RanhGii_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'TenDiem': 'TextEdit', 'CH01': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ghich_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Owner': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'Range', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtAngle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtJust': 'TextEdit', 'VertAlign': 'TextEdit', 'TxtFont': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'TenDiem': 'hidden field', 'CH01': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_RanhGii_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'TenDiem': 'hidden field', 'CH01': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'no label', });
lyr_Ghich_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Entity': 'hidden field', 'Handle': 'hidden field', 'Owner': 'hidden field', 'Layer': 'hidden field', 'LyrFrzn': 'hidden field', 'LyrLock': 'hidden field', 'LyrOn': 'hidden field', 'LyrVPFrzn': 'hidden field', 'LyrHandle': 'hidden field', 'Color': 'hidden field', 'EntColor': 'hidden field', 'LyrColor': 'hidden field', 'BlkColor': 'hidden field', 'Linetype': 'hidden field', 'EntLinetype': 'hidden field', 'LyrLnType': 'hidden field', 'BlkLinetype': 'hidden field', 'Elevation': 'hidden field', 'Thickness': 'hidden field', 'LineWt': 'hidden field', 'EntLineWt': 'hidden field', 'LyrLineWt': 'hidden field', 'BlkLineWt': 'hidden field', 'RefName': 'hidden field', 'LTScale': 'hidden field', 'ExtX': 'hidden field', 'ExtY': 'hidden field', 'ExtZ': 'hidden field', 'DocName': 'hidden field', 'DocPath': 'hidden field', 'DocType': 'hidden field', 'DocVer': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'ScaleX': 'hidden field', 'ScaleY': 'hidden field', 'ScaleZ': 'hidden field', 'Style': 'hidden field', 'FontID': 'hidden field', 'Text': 'hidden field', 'Height': 'hidden field', 'TxtAngle': 'hidden field', 'TxtWidth': 'hidden field', 'TxtOblique': 'hidden field', 'TxtGenType': 'hidden field', 'TxtJust': 'hidden field', 'VertAlign': 'hidden field', 'TxtFont': 'hidden field', 'TxtBoxHt': 'hidden field', 'TxtBoxWd': 'hidden field', 'TxtRefWd': 'hidden field', 'TxtAttach': 'hidden field', 'TxtDir': 'hidden field', 'LnSpace': 'hidden field', 'SpaceFct': 'hidden field', 'TxtMemo': 'hidden field', });
lyr_Ghich_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});