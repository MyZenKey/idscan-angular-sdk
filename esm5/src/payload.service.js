import { __awaiter, __generator } from "tslib";
import { Injectable } from '@angular/core';
import axios from 'axios';
import * as i0 from "@angular/core";
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
                        url = "https://idscan-qa.xcijv.com/auth/lookupSessionId/?correlation_id=" + correlation_id + "&client_id=" + client_id;
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
                        url = "https://idscan-qa.xcijv.com/auth/getDataWithSessionId/";
                        return [4 /*yield*/, axios.get(url + "?session_id=" + sessionId + "&ppk=" + publicKeyProvided)
                                .then(function (data) {
                                var proof = data.data.message.payloadData;
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
    PayloadService.prototype.getStoredDataWithKeys = function (sessionId, privateKeyProvided, publicKeyProvided) {
        return __awaiter(this, void 0, void 0, function () {
            var url, retRep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://idscan-qa.xcijv.com/auth/getDataWithSessionIdPrivateKeyPubKey/";
                        return [4 /*yield*/, axios.get(url + "?session_id=" + sessionId + "&sp_publicKey=" + publicKeyProvided + "&sp_privateKey=" + privateKeyProvided)
                                .then(function (data) {
                                var payload = data.data.message.payloadData;
                                return payload;
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
    PayloadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PayloadService_Factory() { return new PayloadService(); }, token: PayloadService, providedIn: "root" });
    PayloadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    PayloadService.ctorParameters = function () { return []; };
    return PayloadService;
}());
export { PayloadService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRzY2FuLWFuZ3VsYXItc2RrLyIsInNvdXJjZXMiOlsic3JjL3BheWxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQXNCLE1BQU0sT0FBTyxDQUFDOztBQUUzQztJQUtFO0lBQWdCLENBQUM7SUFFbkIsYUFBYTtJQUNiOzs7T0FHRztJQUNLLHFDQUFZLEdBQWxCLFVBQW1CLGNBQXNCLEVBQUUsU0FBaUI7Ozs7Ozt3QkFDcEQsR0FBRyxHQUFHLHNFQUFvRSxjQUFjLG1CQUFjLFNBQVcsQ0FBQzt3QkFDekcscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFHLEdBQUssQ0FBQztpQ0FDckMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQ0FDUixJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUM7b0NBQ1YsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29DQUNoRCxPQUFPLFVBQVUsQ0FBQztpQ0FDbkI7NEJBQ0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixPQUFPLEtBQUssQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs7d0JBVEUsTUFBTSxHQUFHLFNBU1g7d0JBQ1Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ1g7SUFFSyxzQ0FBYSxHQUFuQixVQUFvQixTQUFpQixFQUFFLGlCQUF5Qjs7Ozs7O3dCQU14RCxHQUFHLEdBQUcsd0RBQXdELENBQUM7d0JBQ3RELHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUksR0FBRyxvQkFBZSxTQUFTLGFBQVEsaUJBQW1CLENBQUM7aUNBQ3RGLElBQUksQ0FBQyxVQUFBLElBQUk7Z0NBQ1IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFBO2dDQUMzQyxPQUFPLEtBQUssQ0FBQzs0QkFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dDQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ25CLE9BQU8sS0FBSyxDQUFDOzRCQUNmLENBQUMsQ0FBQyxFQUFBOzt3QkFQRSxNQUFNLEdBQUcsU0FPWDt3QkFDSixzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDZjtJQUNLLDhDQUFxQixHQUEzQixVQUE0QixTQUFpQixFQUFFLGtCQUEwQixFQUFFLGlCQUF5Qjs7Ozs7O3dCQU01RixHQUFHLEdBQUcsd0VBQXdFLENBQUM7d0JBQ3RFLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUksR0FBRyxvQkFBZSxTQUFTLHNCQUFpQixpQkFBaUIsdUJBQWtCLGtCQUFvQixDQUFDO2lDQUNuSSxJQUFJLENBQUMsVUFBQSxJQUFJO2dDQUNSLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtnQ0FDN0MsT0FBTyxPQUFPLENBQUM7NEJBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDbkIsT0FBTyxLQUFLLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7O3dCQVBFLE1BQU0sR0FBRyxTQU9YO3dCQUNKLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNmOzs7Z0JBNURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt5QkFMRDtDQWdFQyxBQTdERCxJQTZEQztTQTFEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXlsb2FkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuLy8gQHRzLWlnbm9yZVxuLyoqXG4gKiBAZXhwb3J0XG4gKiBAaW1wbGVtZW50cyB7SU9uZUtvc21vc31cbiAqL1xuICBhc3luYyBnZXRTZXNzaW9uSWQoY29ycmVsYXRpb25faWQ6IHN0cmluZywgY2xpZW50X2lkIDpzdHJpbmcgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+e1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9sb29rdXBTZXNzaW9uSWQvP2NvcnJlbGF0aW9uX2lkPSR7Y29ycmVsYXRpb25faWR9JmNsaWVudF9pZD0ke2NsaWVudF9pZH1gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZighIWRhdGEpe1xuICAgICAgICBjb25zdCBzZXNzaW9uX2lkID0gZGF0YS5kYXRhLm1lc3NhZ2Uuc2Vzc2lvbl9pZDtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25faWQ7XG4gICAgICB9XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG5yZXR1cm4gcmV0UmVwO1xuICB9XG5cbiAgYXN5bmMgZ2V0U3RvcmVkRGF0YShzZXNzaW9uSWQ6IHN0cmluZywgcHVibGljS2V5UHJvdmlkZWQ6IHN0cmluZyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPiB7XG4gICAgLy8gbGV0IHNwX3B1YiA9ICdQU0oxc0VnVkNXUm12WjRUa3lCR295aWVYbDlwODUyTGNlakQ1Zk9IVXhCSlY0UThaNWE2aStWbHRUSlVzZnptdVRrRG41Kzg0Nk9JWHBqcCs3VkU0QT09JztcbiAgICAvLyBsZXQgc3BfcHIgPSAnVUxjWVNmdis1ZXRUcUJyMlJ4RUY5SFNKMzN1SmxrZXA5RUw0K3h6c1drST0nO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXkgPSAnNTgwOWI3YjctODg2Zi00Yzg4LTkwNjEtNTlhMmJhZjQ4NWJlJztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5X3BpbG90ID0gJ2M3N2FhMGNlLWYwMGQtNDg0My04NmE5LTM4ZTZjMWJmN2Q4ZSc7XG4gICAgLy9yZXR1cm4gYHvigJxmaXJzdF9uYW1l4oCcOuKAnEJlbuKAnCwg4oCcbGFzdF9uYW1l4oCcOuKAnERvdmVy4oCcLCDigJxsYXN0XzRfc29jaWFs4oCdIDrigJwzODQ04oCcfWA7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2dldERhdGFXaXRoU2Vzc2lvbklkL2A7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0/c2Vzc2lvbl9pZD0ke3Nlc3Npb25JZH0mcHBrPSR7cHVibGljS2V5UHJvdmlkZWR9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZiA9IGRhdGEuZGF0YS5tZXNzYWdlLnBheWxvYWREYXRhXG4gICAgICAgIHJldHVybiBwcm9vZjtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0UmVwO1xuICB9XG4gIGFzeW5jIGdldFN0b3JlZERhdGFXaXRoS2V5cyhzZXNzaW9uSWQ6IHN0cmluZywgcHJpdmF0ZUtleVByb3ZpZGVkOiBzdHJpbmcsIHB1YmxpY0tleVByb3ZpZGVkOiBzdHJpbmcpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz4ge1xuICAgIC8vIGxldCBzcF9wdWIgPSAnUFNKMXNFZ1ZDV1Jtdlo0VGt5QkdveWllWGw5cDg1MkxjZWpENWZPSFV4QkpWNFE4WjVhNmkrVmx0VEpVc2Z6bXVUa0RuNSs4NDZPSVhwanArN1ZFNEE9PSc7XG4gICAgLy8gbGV0IHNwX3ByID0gJ1VMY1lTZnYrNWV0VHFCcjJSeEVGOUhTSjMzdUpsa2VwOUVMNCt4enNXa0k9JztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5ID0gJzU4MDliN2I3LTg4NmYtNGM4OC05MDYxLTU5YTJiYWY0ODViZSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleV9waWxvdCA9ICdjNzdhYTBjZS1mMDBkLTQ4NDMtODZhOS0zOGU2YzFiZjdkOGUnO1xuICAgIC8vcmV0dXJuIGB74oCcZmlyc3RfbmFtZeKAnDrigJxCZW7igJwsIOKAnGxhc3RfbmFtZeKAnDrigJxEb3ZlcuKAnCwg4oCcbGFzdF80X3NvY2lhbOKAnSA64oCcMzg0NOKAnH1gO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9nZXREYXRhV2l0aFNlc3Npb25JZFByaXZhdGVLZXlQdWJLZXkvYDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfT9zZXNzaW9uX2lkPSR7c2Vzc2lvbklkfSZzcF9wdWJsaWNLZXk9JHtwdWJsaWNLZXlQcm92aWRlZH0mc3BfcHJpdmF0ZUtleT0ke3ByaXZhdGVLZXlQcm92aWRlZH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBkYXRhLmRhdGEubWVzc2FnZS5wYXlsb2FkRGF0YVxuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0UmVwO1xuICB9XG59Il19