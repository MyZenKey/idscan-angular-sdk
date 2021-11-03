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
                        // let sp_pub = 'PSJ1sEgVCWRmvZ4TkyBGoyieXl9p852LcejD5fOHUxBJV4Q8Z5a6i+VltTJUsfzmuTkDn5+846OIXpjp+7VE4A==';
                        // let sp_pr = 'ULcYSfv+5etTqBr2RxEF9HSJ33uJlkep9EL4+xzsWkI=';
                        // const licenseKey = '5809b7b7-886f-4c88-9061-59a2baf485be';
                        // const licenseKey_pilot = 'c77aa0ce-f00d-4843-86a9-38e6c1bf7d8e';
                        //return `{“first_name“:“Ben“, “last_name“:“Dover“, “last_4_social” :“3844“}`;
                        publicKeyProvided = publicKeyProvided.replace(/\+/g, '%2B');
                        publicKeyProvided = publicKeyProvided.replace(/\=/g, '%3D');
                        privateKeyProvided = privateKeyProvided.replace(/\+/g, '%2B');
                        privateKeyProvided = privateKeyProvided.replace(/\=/g, '%3D');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG15emVua2V5L2lkc2Nhbi1hbmd1bGFyLXNkay8iLCJzb3VyY2VzIjpbInNyYy9wYXlsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFzQixNQUFNLE9BQU8sQ0FBQzs7QUFFM0M7SUFLRTtJQUFnQixDQUFDO0lBRW5CLGFBQWE7SUFDYjs7O09BR0c7SUFDSyxxQ0FBWSxHQUFsQixVQUFtQixjQUFzQixFQUFFLFNBQWlCOzs7Ozs7d0JBQ3BELEdBQUcsR0FBRyxzRUFBb0UsY0FBYyxtQkFBYyxTQUFXLENBQUM7d0JBQ3pHLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFLLENBQUM7aUNBQ3JDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0NBQ1IsSUFBRyxDQUFDLENBQUMsSUFBSSxFQUFDO29DQUNWLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQ0FDaEQsT0FBTyxVQUFVLENBQUM7aUNBQ25COzRCQUNELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDbkIsT0FBTyxLQUFLLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7O3dCQVRFLE1BQU0sR0FBRyxTQVNYO3dCQUNSLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNYO0lBRUssc0NBQWEsR0FBbkIsVUFBb0IsU0FBaUIsRUFBRSxpQkFBeUI7Ozs7Ozt3QkFNeEQsR0FBRyxHQUFHLHdEQUF3RCxDQUFDO3dCQUN0RCxxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFJLEdBQUcsb0JBQWUsU0FBUyxhQUFRLGlCQUFtQixDQUFDO2lDQUN0RixJQUFJLENBQUMsVUFBQSxJQUFJO2dDQUNSLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtnQ0FDM0MsT0FBTyxLQUFLLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixPQUFPLEtBQUssQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs7d0JBUEUsTUFBTSxHQUFHLFNBT1g7d0JBQ0osc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Y7SUFDSyw4Q0FBcUIsR0FBM0IsVUFBNEIsU0FBaUIsRUFBRSxrQkFBMEIsRUFBRSxpQkFBeUI7Ozs7Ozt3QkFDbEcsMkdBQTJHO3dCQUMzRyw4REFBOEQ7d0JBQzlELDZEQUE2RDt3QkFDN0QsbUVBQW1FO3dCQUNuRSw4RUFBOEU7d0JBQy9FLGlCQUFpQixHQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFELGlCQUFpQixHQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFELGtCQUFrQixHQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVELGtCQUFrQixHQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELEdBQUcsR0FBRyx3RUFBd0UsQ0FBQzt3QkFDdEUscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBSSxHQUFHLG9CQUFlLFNBQVMsc0JBQWlCLGlCQUFpQix1QkFBa0Isa0JBQW9CLENBQUM7aUNBQ25JLElBQUksQ0FBQyxVQUFBLElBQUk7Z0NBQ1IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFBO2dDQUM3QyxPQUFPLE9BQU8sQ0FBQzs0QkFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixPQUFPLEtBQUssQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs7d0JBUEUsTUFBTSxHQUFHLFNBT1g7d0JBQ0osc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Y7OztnQkFoRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3lCQUxEO0NBb0VDLEFBakVELElBaUVDO1NBOURZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYXhpb3MsIHtBeGlvc1Jlc3BvbnNlfSBmcm9tICdheGlvcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheWxvYWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4vLyBAdHMtaWdub3JlXG4vKipcbiAqIEBleHBvcnRcbiAqIEBpbXBsZW1lbnRzIHtJT25lS29zbW9zfVxuICovXG4gIGFzeW5jIGdldFNlc3Npb25JZChjb3JyZWxhdGlvbl9pZDogc3RyaW5nLCBjbGllbnRfaWQgOnN0cmluZyApOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz57XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2xvb2t1cFNlc3Npb25JZC8/Y29ycmVsYXRpb25faWQ9JHtjb3JyZWxhdGlvbl9pZH0mY2xpZW50X2lkPSR7Y2xpZW50X2lkfWA7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmKCEhZGF0YSl7XG4gICAgICAgIGNvbnN0IHNlc3Npb25faWQgPSBkYXRhLmRhdGEubWVzc2FnZS5zZXNzaW9uX2lkO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbl9pZDtcbiAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbnJldHVybiByZXRSZXA7XG4gIH1cblxuICBhc3luYyBnZXRTdG9yZWREYXRhKHNlc3Npb25JZDogc3RyaW5nLCBwdWJsaWNLZXlQcm92aWRlZDogc3RyaW5nKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+IHtcbiAgICAvLyBsZXQgc3BfcHViID0gJ1BTSjFzRWdWQ1dSbXZaNFRreUJHb3lpZVhsOXA4NTJMY2VqRDVmT0hVeEJKVjRROFo1YTZpK1ZsdFRKVXNmem11VGtEbjUrODQ2T0lYcGpwKzdWRTRBPT0nO1xuICAgIC8vIGxldCBzcF9wciA9ICdVTGNZU2Z2KzVldFRxQnIyUnhFRjlIU0ozM3VKbGtlcDlFTDQreHpzV2tJPSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleSA9ICc1ODA5YjdiNy04ODZmLTRjODgtOTA2MS01OWEyYmFmNDg1YmUnO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXlfcGlsb3QgPSAnYzc3YWEwY2UtZjAwZC00ODQzLTg2YTktMzhlNmMxYmY3ZDhlJztcbiAgICAvL3JldHVybiBge+KAnGZpcnN0X25hbWXigJw64oCcQmVu4oCcLCDigJxsYXN0X25hbWXigJw64oCcRG92ZXLigJwsIOKAnGxhc3RfNF9zb2NpYWzigJ0gOuKAnDM4NDTigJx9YDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvZ2V0RGF0YVdpdGhTZXNzaW9uSWQvYDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfT9zZXNzaW9uX2lkPSR7c2Vzc2lvbklkfSZwcGs9JHtwdWJsaWNLZXlQcm92aWRlZH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mID0gZGF0YS5kYXRhLm1lc3NhZ2UucGF5bG9hZERhdGFcbiAgICAgICAgcmV0dXJuIHByb29mO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXRSZXA7XG4gIH1cbiAgYXN5bmMgZ2V0U3RvcmVkRGF0YVdpdGhLZXlzKHNlc3Npb25JZDogc3RyaW5nLCBwcml2YXRlS2V5UHJvdmlkZWQ6IHN0cmluZywgcHVibGljS2V5UHJvdmlkZWQ6IHN0cmluZyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPiB7XG4gICAgLy8gbGV0IHNwX3B1YiA9ICdQU0oxc0VnVkNXUm12WjRUa3lCR295aWVYbDlwODUyTGNlakQ1Zk9IVXhCSlY0UThaNWE2aStWbHRUSlVzZnptdVRrRG41Kzg0Nk9JWHBqcCs3VkU0QT09JztcbiAgICAvLyBsZXQgc3BfcHIgPSAnVUxjWVNmdis1ZXRUcUJyMlJ4RUY5SFNKMzN1SmxrZXA5RUw0K3h6c1drST0nO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXkgPSAnNTgwOWI3YjctODg2Zi00Yzg4LTkwNjEtNTlhMmJhZjQ4NWJlJztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5X3BpbG90ID0gJ2M3N2FhMGNlLWYwMGQtNDg0My04NmE5LTM4ZTZjMWJmN2Q4ZSc7XG4gICAgLy9yZXR1cm4gYHvigJxmaXJzdF9uYW1l4oCcOuKAnEJlbuKAnCwg4oCcbGFzdF9uYW1l4oCcOuKAnERvdmVy4oCcLCDigJxsYXN0XzRfc29jaWFs4oCdIDrigJwzODQ04oCcfWA7XG4gICBwdWJsaWNLZXlQcm92aWRlZD0gcHVibGljS2V5UHJvdmlkZWQucmVwbGFjZSgvXFwrL2csJyUyQicpO1xuICAgcHVibGljS2V5UHJvdmlkZWQ9IHB1YmxpY0tleVByb3ZpZGVkLnJlcGxhY2UoL1xcPS9nLCclM0QnKTtcbiAgIHByaXZhdGVLZXlQcm92aWRlZD0gcHJpdmF0ZUtleVByb3ZpZGVkLnJlcGxhY2UoL1xcKy9nLCclMkInKTtcbiAgIHByaXZhdGVLZXlQcm92aWRlZD0gcHJpdmF0ZUtleVByb3ZpZGVkLnJlcGxhY2UoL1xcPS9nLCclM0QnKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvZ2V0RGF0YVdpdGhTZXNzaW9uSWRQcml2YXRlS2V5UHViS2V5L2A7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0/c2Vzc2lvbl9pZD0ke3Nlc3Npb25JZH0mc3BfcHVibGljS2V5PSR7cHVibGljS2V5UHJvdmlkZWR9JnNwX3ByaXZhdGVLZXk9JHtwcml2YXRlS2V5UHJvdmlkZWR9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gZGF0YS5kYXRhLm1lc3NhZ2UucGF5bG9hZERhdGFcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldFJlcDtcbiAgfVxufSJdfQ==