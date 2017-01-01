/**
 * Created by kidroca on 1.1.2017 г..
 */
import {NgForm} from '@angular/forms';

export abstract class Submittable {

    public triedToSubmit: boolean = false;
    public isLoading: boolean = false;

    /**
     * Action that will be executed on valid submits
     */
    abstract onValidForm<T>(form?: NgForm): Promise<T>;

    /**
     * Template method that will call the {@link Submittable.onValidForm} hook
     * when the form is valid or the {@link Submittable.onInvalidForm} hook
     * when the form is invalid
     */
    public onSubmit(form: NgForm) {

        this.triedToSubmit = true;

        if (form.invalid) {
            return this.onInvalidForm(form);
        }

        this.isLoading = true;

        return this.onValidForm(form)
            .then(() => this.submitFinally())
            .catch(err => this.submitFinally() || Promise.reject(err));
    }

    /**
     * @virtual
     * Hook that will be called by {@link Submittable.onSubmit} when the submitted form is invalid
     * The default implementation does nothing
     * @param form
     */
    onInvalidForm(form: NgForm) {}

    private submitFinally(): void {
        this.isLoading = false;
    }
}
