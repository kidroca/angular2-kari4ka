import {Injectable, Optional} from '@angular/core';
import {AppUserService} from './app-user.service';
import {AppImage} from './models/app-image';
import { Query as ParseQuery } from 'parse';

const DefaultCategory = 'general';

@Injectable()
export class AppImageServiceConfig {

    pageSize: number = 10;
}

@Injectable()
export class AppImageService {

    constructor(
        private userService: AppUserService,
        @Optional() private config?: AppImageServiceConfig) {

        this.config = this.config || new AppImageServiceConfig();
    }

    /**
     * @param category
     * @param page - starts from 1
     * @returns {Promise<AppImage[]>}
     */
    getImages(category?: string, page?: number): Promise<AppImage[]> {
        category = category || DefaultCategory;
        page = page - 1 || 0;

        let query = new ParseQuery(AppImage);
        query.equalTo(AppImage.category, category);
        query.limit(this.config.pageSize);

        if (page > 0) {
            query.skip(this.config.pageSize * page);
        }

        return Promise.resolve(query.find());
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
