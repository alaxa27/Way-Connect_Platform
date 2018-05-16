import Cookies from "universal-cookie";

export default class CookieService {

    constructor() {
        this.cookies = new Cookies();
    }

    setJwt(token, remember = null) {
        let expirationTimeInDays = 1;
        if(remember) {
            expirationTimeInDays = 30;
        }
        const expires = new Date();
        expires.setDate(expires.getDate() + expirationTimeInDays);
        this.cookies.set('jwt', token, { path: '/', expires: expires });
    }

    getJwt() {
        return this.cookies.get('jwt');
    }
}