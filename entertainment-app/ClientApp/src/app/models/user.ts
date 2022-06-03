export class User {
    username: string;
    password: string;

    constructor(conf: any){
        this.username = conf.username;
        this.password = conf.password;
    }
}
