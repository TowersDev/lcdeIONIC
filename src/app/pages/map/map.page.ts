import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  @ViewChild('map') mapa: ElementRef;
  constructor() {}

  ionViewDidLoad(){
    this.loadMap();
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // console.log('Hello StreetMap Page');
    // const vectorSource = new ol.source.Vector({
    // });

    // for (let i = 0; i < 50; i++) {
    //   const iconFeature = new ol.Feature({
    //     geometry: new
    //       ol.geom.Point(ol.proj.transform([Math.random() * 360 - 180, Math.random() * 180 - 90], 'EPSG:4326', 'EPSG:3857')),
    //     name: 'Null Island ' + i,
    //     population: 4000,
    //     rainfall: 500
    //   });
    //   vectorSource.addFeature(iconFeature);
    // }

    // const iconStyle = new ol.style.Style({
    //   image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
    //     anchor: [0.5, 46],
    //     anchorXUnits: 'fraction',
    //     anchorYUnits: 'pixels',
    //     opacity: 0.75,
    //     src: 'http://openlayers.org/en/v3.9.0/examples/data/icon.png'
    //   }))
    // });

    // const vectorLayer = new ol.layer.Vector({
    //   source: vectorSource,
    //   style: iconStyle
    // });

    // const map = new ol.Map({
    //   layers: [new ol.layer.Tile({ source: new ol.source.OSM() }), vectorLayer],
    //   target: document.getElementById('map'),
    //   view: new ol.View({
    //     center: ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857'),
    //     zoom: 3
    //   })
    // });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}




