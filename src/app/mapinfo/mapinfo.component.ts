import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-mapinfo',
    templateUrl: './mapinfo.component.html',
    styleUrls: ['./mapinfo.component.scss']
})
export class MapinfoComponent {

    constructor() {
    }


    latitude = 60.192059;
    longitude = 24.945831;
    locationChosen = false;


    origin = '';  // its a example aleatory position
    destination = '';  // its a example aleatory position
    travelMode = '';


    hae() {
        this.locationChosen = true;
    }

    reset() {
        this.locationChosen = false;
        this.origin = '';  // its a example aleatory position
        this.destination = '';  // its a example aleatory position
    }


    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        console.log(event);
    }

    selectMode(event) {
        this.travelMode = event.target.selectedOptions[0].value;
        console.log(event.target.selectedOptions[0].value);
        // this.travelMode =
    }

/*
    ngOnInit() {
    $(document).foundation();
}
*/
}

