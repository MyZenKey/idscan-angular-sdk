import { __awaiter, __generator } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import axios from 'axios';

var PayloadService = /** @class */ (function () {
    function PayloadService() {
    }
    // @ts-ignore
    /**
     * @export
     * @implements {IOneKosmos}
     */
    PayloadService.prototype.getSessionId = function (correlation_id, client_id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, retRep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://idscan.xcijv.com/auth/lookupSessionId/?correlation_id=" + correlation_id + "&client_id=" + client_id;
                        return [4 /*yield*/, axios.get("" + url)
                                .then(function (data) {
                                if (!!data) {
                                    var session_id = data.data.message.session_id;
                                    return session_id;
                                }
                            }).catch(function (error) {
                                console.log(error);
                                return error;
                            })];
                    case 1:
                        retRep = _a.sent();
                        return [2 /*return*/, retRep];
                }
            });
        });
    };
    PayloadService.prototype.getStoredData = function (sessionId, publicKeyProvided) {
        return __awaiter(this, void 0, void 0, function () {
            var url, retRep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://idscan.xcijv.com/auth/getDataWithSessionId/";
                        return [4 /*yield*/, axios.get(url + "?session_id=" + sessionId + "&ppk=" + publicKeyProvided)
                                .then(function (data) {
                                console.log('GetCall :' + data.data.message.payloadData);
                                var proof = data.data.message.payloadData.data;
                                return proof;
                            }).catch(function (error) {
                                console.log(error);
                                return error;
                            })];
                    case 1:
                        retRep = _a.sent();
                        return [2 /*return*/, retRep];
                }
            });
        });
    };
    PayloadService.prototype.Printer = function () {
        return 'It Works!!!';
    };
    PayloadService.ɵprov = ɵɵdefineInjectable({ factory: function PayloadService_Factory() { return new PayloadService(); }, token: PayloadService, providedIn: "root" });
    PayloadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    PayloadService.ctorParameters = function () { return []; };
    return PayloadService;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { PayloadService };
//# sourceMappingURL=idscan-angular-sdk.js.map
