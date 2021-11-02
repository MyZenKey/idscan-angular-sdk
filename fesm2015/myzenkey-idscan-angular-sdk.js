import { __awaiter } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import axios from 'axios';

class PayloadService {
    constructor() { }
    // @ts-ignore
    /**
     * @export
     * @implements {IOneKosmos}
     */
    getSessionId(correlation_id, client_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://idscan-qa.xcijv.com/auth/lookupSessionId/?correlation_id=${correlation_id}&client_id=${client_id}`;
            const retRep = yield axios.get(`${url}`)
                .then(data => {
                if (!!data) {
                    const session_id = data.data.message.session_id;
                    return session_id;
                }
            }).catch(error => {
                console.log(error);
                return error;
            });
            return retRep;
        });
    }
    getStoredData(sessionId, publicKeyProvided) {
        return __awaiter(this, void 0, void 0, function* () {
            // let sp_pub = 'PSJ1sEgVCWRmvZ4TkyBGoyieXl9p852LcejD5fOHUxBJV4Q8Z5a6i+VltTJUsfzmuTkDn5+846OIXpjp+7VE4A==';
            // let sp_pr = 'ULcYSfv+5etTqBr2RxEF9HSJ33uJlkep9EL4+xzsWkI=';
            // const licenseKey = '5809b7b7-886f-4c88-9061-59a2baf485be';
            // const licenseKey_pilot = 'c77aa0ce-f00d-4843-86a9-38e6c1bf7d8e';
            //return `{“first_name“:“Ben“, “last_name“:“Dover“, “last_4_social” :“3844“}`;
            const url = `https://idscan-qa.xcijv.com/auth/getDataWithSessionId/`;
            const retRep = yield axios.get(`${url}?session_id=${sessionId}&ppk=${publicKeyProvided}`)
                .then(data => {
                const proof = data.data.message.payloadData;
                return proof;
            }).catch(error => {
                console.log(error);
                return error;
            });
            return retRep;
        });
    }
    getStoredDataWithKeys(sessionId, privateKeyProvided, publicKeyProvided) {
        return __awaiter(this, void 0, void 0, function* () {
            // let sp_pub = 'PSJ1sEgVCWRmvZ4TkyBGoyieXl9p852LcejD5fOHUxBJV4Q8Z5a6i+VltTJUsfzmuTkDn5+846OIXpjp+7VE4A==';
            // let sp_pr = 'ULcYSfv+5etTqBr2RxEF9HSJ33uJlkep9EL4+xzsWkI=';
            // const licenseKey = '5809b7b7-886f-4c88-9061-59a2baf485be';
            // const licenseKey_pilot = 'c77aa0ce-f00d-4843-86a9-38e6c1bf7d8e';
            //return `{“first_name“:“Ben“, “last_name“:“Dover“, “last_4_social” :“3844“}`;
            publicKeyProvided = publicKeyProvided.replace('+', '%2B');
            publicKeyProvided = publicKeyProvided.replace('=', '%3D');
            privateKeyProvided = privateKeyProvided.replace('+', '%2B');
            privateKeyProvided = privateKeyProvided.replace('=', '%3D');
            const url = `https://idscan-qa.xcijv.com/auth/getDataWithSessionIdPrivateKeyPubKey/`;
            const retRep = yield axios.get(`${url}?session_id=${sessionId}&sp_publicKey=${publicKeyProvided}&sp_privateKey=${privateKeyProvided}`)
                .then(data => {
                const payload = data.data.message.payloadData;
                return payload;
            }).catch(error => {
                console.log(error);
                return error;
            });
            return retRep;
        });
    }
}
PayloadService.ɵprov = ɵɵdefineInjectable({ factory: function PayloadService_Factory() { return new PayloadService(); }, token: PayloadService, providedIn: "root" });
PayloadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
PayloadService.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PayloadService };
//# sourceMappingURL=myzenkey-idscan-angular-sdk.js.map
