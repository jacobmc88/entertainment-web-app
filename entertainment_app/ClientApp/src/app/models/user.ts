export class User {
    id: string;
    username: string;
    password: string;

    constructor(conf: any){
        this.id = conf.id;
        this.username = conf.username;
        this.password = conf.password;
    }
}
