import {
    Directive, HostListener, ElementRef, Output, EventEmitter, Optional,
    OnInit
} from '@angular/core';
import {Subject} from 'rxjs';

const DefaultDragClass = 'drag-over';

/**
 * Adds a drag class while an object is dragged over the decorated element
 * Raises the {@link FileDropDirective.onFile} when a file is dropped over
 */
@Directive({
    selector: '[appFileDrop]'
})
export class FileDropDirective implements OnInit {

    private dragClass: string;
    private dragListener: Subject<boolean> = new Subject();

    @Output() onFile: EventEmitter<File[]> = new EventEmitter();

    constructor(private el: ElementRef, @Optional() DRAG_CLASS?: string) {
        this.dragClass = DRAG_CLASS || DefaultDragClass;
    }

    ngOnInit(): void {
        this.dragListener
            .asObservable()
            .debounceTime(5)
            .distinctUntilChanged()
            .subscribe((isDragOver: boolean) => {

                if (isDragOver) {
                    this.el.nativeElement.classList.add(this.dragClass);
                }
                else {
                    this.el.nativeElement.classList.remove(this.dragClass);
                }
            });
    }

    @HostListener('dragover', ['$event']) onDragEnter(event: Event) {
        this.dragListener.next(true);
        event.preventDefault();
    }

    @HostListener('dragleave') onDragLeave() {
        this.dragListener.next(false);
    }

    @HostListener('drop', ['$event']) onDrop(event: DragEvent) {

        let files = event.dataTransfer.files;

        if (files.length === 0) {
            return;
        }

        let filesArray: File[] = [];

        for (let i in files) {
            if (Reflect.has(files, i)) {
                filesArray.push(files[i]);
            }
        }

        this.onFile.emit(filesArray);

        event.preventDefault();
        this.dragListener.next(false);
    }
}
