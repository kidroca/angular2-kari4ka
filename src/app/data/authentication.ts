export interface Authentication {

    authenticated(): boolean;

    logIn<T>(username: string, password: string): Promise<T>;

    singUp<T>(username: string, password: string): Promise<T>;

    logout<T>(): Promise<T>;
}
