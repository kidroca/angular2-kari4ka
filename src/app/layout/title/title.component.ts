import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
    selector: '[app-title]',
    template: 'Karti4ka | {{pageTitle}}'
})
export class TitleComponent implements OnInit {

    pageTitle: string;

    constructor(private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activeRoute.data
            .subscribe((data: {title: string}) => {
                this.pageTitle = data.title;
            });
    }
}
