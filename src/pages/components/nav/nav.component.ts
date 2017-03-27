import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-component',
    templateUrl: 'nav.component.html'
})
export class NavComponent{
    @Input() title: string;
    constructor() { }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Tab1Page');
    }
}
