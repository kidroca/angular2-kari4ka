import {
    Directive, HostListener, ElementRef, Output, EventEmitter, Optional,
    OnInit, Input
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

    @Input() fileExtensions: string[] = [];

    @Output() onFile: EventEmitter<File[]> = new EventEmitter();

    constructor(private el: ElementRef, @Optional() DRAG_CLASS?: string) {
        this.dragClass = DRAG_CLASS || DefaultDragClass;
        this.el.nativeElement.setAttribute('dropzone', 'copy');
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

    @HostListener('dragover', ['$event']) onDragEnter(event: DragEvent) {
        this.dragListener.next(true);
        event.dataTransfer.dropEffect = 'copy';
        event.preventDefault();
    }

    @HostListener('dragleave') onDragLeave() {
        this.dragListener.next(false);
    }

    @HostListener('drop', ['$event']) onDrop(event: DragEvent) {

        event.preventDefault();
        this.dragListener.next(false);

        let files = event.dataTransfer.files;

        if (files.length === 0) {
            return;
        }

        let filesArray: File[] = [];

        for (let i = 0; i < files.length; i++) {
            if (this.isValidFile(files[i])) {
                filesArray.push(files[i]);
            }
        }

        if (filesArray.length > 0) {
            this.onFile.emit(filesArray);
        }
    }

    private isValidFile(file: File): boolean {

        if (this.fileExtensions.length === 0) {
            return true;
        }

        return this.fileExtensions.some(ext => file.name.endsWith(ext));
    }
}
