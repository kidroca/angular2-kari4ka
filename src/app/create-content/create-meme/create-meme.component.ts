import {Component, OnInit} from '@angular/core';
import {Meme} from '../models/meme';
import {NgForm} from '@angular/forms';
import {Submittable} from '../../shared/abstractions/submittable';

@Component({
    selector: 'app-create-meme',
    templateUrl: './create-meme.component.html',
    styleUrls: ['./create-meme.component.less'],
    providers: [Meme]
})
export class CreateMemeComponent extends Submittable implements OnInit {

    static defaultImage: string = 'http://2.bp.blogspot.com/-ZCaoDTKmhgs/UcRUJoaY7UI/AAAAAAAABDw/ta3S76aakWA/s1600/Face-palm+Meme.jpg';

    selectedImage: string;

    constructor(public meme: Meme) {
        super();
    }

    get previewSource(): string {

        if (this.selectedImage) {
            return this.selectedImage;
        }

        return CreateMemeComponent.defaultImage;
    }

    onValidForm(memeForm?: NgForm): Promise<boolean> {

        console.log('Implement meme submission');
        return Promise.resolve(true);
    }

    ngOnInit() {
    }
}
