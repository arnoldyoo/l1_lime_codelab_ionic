import { Component, OnInit, Input } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
    selector: 'modify',
    templateUrl: 'modify.component.html'
})
export class ModifyComponent implements OnInit {
    @Input() state: string;
    @Input() sitename: string;
    @Input() siteurl: string;

    constructor(
        public viewCtrl: ViewController
    ) { }

    ngOnInit() {
        this._initalizeModel();
    }

    private _initalizeModel(): void {
        if (this.state === 'add') {
            this.sitename = '';
            this.siteurl = '';
        }
    }

    cancel(): void {
        this._initalizeModel();
        this.viewCtrl.dismiss();
    }
    save(): void {
        console.log(this.sitename);
        console.log(this.siteurl);
    }

}
