import {Injectable} from '@angular/core';
import {AppUserService} from './app-user.service';
import {AppImage} from './models/app-image';

const DefaultCategory = 'general';

@Injectable()
export class AppImageService {

    constructor(private userService: AppUserService) {}

    getImages(category?: string, page?: Number): Promise<AppImage[]> {
        category = category || DefaultCategory;
        page = page || 1;

        return Promise.resolve([]);
    }

    newImage(): AppImage {

        let newImage = new AppImage();
        newImage.category = DefaultCategory;
        newImage.set('createdBy', this.userService.currentUser);

        return newImage;
    }

    setDataUrl(image: AppImage, fromFile: File): Promise<AppImage> {

        let reader = new FileReader();

        return new Promise((resolve, reject) => {

            reader.readAsDataURL(fromFile);

            reader.onload = () => {
                image.dataUrl = reader.result;
                resolve(image);
            };

            reader.onerror = () => reject(reader.error);
        });
    }
}
