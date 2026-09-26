import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _email: string | null = null;
    private _code: string | null = null;

    SetEmail(email: string) {
        this._email = email;
    }
    
    GetEmail() {
        return this._email;
    }

    CheckEmailExistance() {
        return !!this._email;
    }

    ClearEmail() {
        this._email = '';
    }

    SetCode(code: string) {
        this._code = code;
    }

    GetCode() {
        return this._code;
    }

    CheckCodeExistance() {
        return !!this._code;
    }
}
