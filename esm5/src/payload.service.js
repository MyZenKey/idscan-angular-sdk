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
                                console.log('GetCall :' + data.data.message.payloadData);
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
    PayloadService.prototype.Printer = function () {
        return 'It Works!!!';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRzY2FuLWFuZ3VsYXItc2RrLyIsInNvdXJjZXMiOlsic3JjL3BheWxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQXNCLE1BQU0sT0FBTyxDQUFDOztBQUUzQztJQUtFO0lBQWdCLENBQUM7SUFFbkIsYUFBYTtJQUNiOzs7T0FHRztJQUNLLHFDQUFZLEdBQWxCLFVBQW1CLGNBQXNCLEVBQUUsU0FBaUI7Ozs7Ozt3QkFDcEQsR0FBRyxHQUFHLHNFQUFvRSxjQUFjLG1CQUFjLFNBQVcsQ0FBQzt3QkFDekcscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFHLEdBQUssQ0FBQztpQ0FDckMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQ0FDUixJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUM7b0NBQ1YsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29DQUNoRCxPQUFPLFVBQVUsQ0FBQztpQ0FDbkI7NEJBQ0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixPQUFPLEtBQUssQ0FBQzs0QkFDZixDQUFDLENBQUMsRUFBQTs7d0JBVEUsTUFBTSxHQUFHLFNBU1g7d0JBQ1Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ1g7SUFFSyxzQ0FBYSxHQUFuQixVQUFvQixTQUFpQixFQUFFLGlCQUF5Qjs7Ozs7O3dCQU14RCxHQUFHLEdBQUcsd0RBQXdELENBQUM7d0JBQ3RELHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUksR0FBRyxvQkFBZSxTQUFTLGFBQVEsaUJBQW1CLENBQUM7aUNBQ3RGLElBQUksQ0FBQyxVQUFBLElBQUk7Z0NBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0NBQ3pELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUE7Z0NBQ2hELE9BQU8sS0FBSyxDQUFDOzRCQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDbkIsT0FBTyxLQUFLLENBQUM7NEJBQ2YsQ0FBQyxDQUFDLEVBQUE7O3dCQVJFLE1BQU0sR0FBRyxTQVFYO3dCQUNKLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNmO0lBRUgsZ0NBQU8sR0FBUDtRQUNBLE9BQU8sYUFBYSxDQUFDO0lBQ3JCLENBQUM7OztnQkFoREEsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3lCQUxEO0NBcURDLEFBbERELElBa0RDO1NBL0NZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYXhpb3MsIHtBeGlvc1Jlc3BvbnNlfSBmcm9tICdheGlvcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheWxvYWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4vLyBAdHMtaWdub3JlXG4vKipcbiAqIEBleHBvcnRcbiAqIEBpbXBsZW1lbnRzIHtJT25lS29zbW9zfVxuICovXG4gIGFzeW5jIGdldFNlc3Npb25JZChjb3JyZWxhdGlvbl9pZDogc3RyaW5nLCBjbGllbnRfaWQgOnN0cmluZyApOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz57XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2xvb2t1cFNlc3Npb25JZC8/Y29ycmVsYXRpb25faWQ9JHtjb3JyZWxhdGlvbl9pZH0mY2xpZW50X2lkPSR7Y2xpZW50X2lkfWA7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmKCEhZGF0YSl7XG4gICAgICAgIGNvbnN0IHNlc3Npb25faWQgPSBkYXRhLmRhdGEubWVzc2FnZS5zZXNzaW9uX2lkO1xuICAgICAgICByZXR1cm4gc2Vzc2lvbl9pZDtcbiAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbnJldHVybiByZXRSZXA7XG4gIH1cblxuICBhc3luYyBnZXRTdG9yZWREYXRhKHNlc3Npb25JZDogc3RyaW5nLCBwdWJsaWNLZXlQcm92aWRlZDogc3RyaW5nKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+IHtcbiAgICAvLyBsZXQgc3BfcHViID0gJ1BTSjFzRWdWQ1dSbXZaNFRreUJHb3lpZVhsOXA4NTJMY2VqRDVmT0hVeEJKVjRROFo1YTZpK1ZsdFRKVXNmem11VGtEbjUrODQ2T0lYcGpwKzdWRTRBPT0nO1xuICAgIC8vIGxldCBzcF9wciA9ICdVTGNZU2Z2KzVldFRxQnIyUnhFRjlIU0ozM3VKbGtlcDlFTDQreHpzV2tJPSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleSA9ICc1ODA5YjdiNy04ODZmLTRjODgtOTA2MS01OWEyYmFmNDg1YmUnO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXlfcGlsb3QgPSAnYzc3YWEwY2UtZjAwZC00ODQzLTg2YTktMzhlNmMxYmY3ZDhlJztcbiAgICAvL3JldHVybiBge+KAnGZpcnN0X25hbWXigJw64oCcQmVu4oCcLCDigJxsYXN0X25hbWXigJw64oCcRG92ZXLigJwsIOKAnGxhc3RfNF9zb2NpYWzigJ0gOuKAnDM4NDTigJx9YDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvZ2V0RGF0YVdpdGhTZXNzaW9uSWQvYDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfT9zZXNzaW9uX2lkPSR7c2Vzc2lvbklkfSZwcGs9JHtwdWJsaWNLZXlQcm92aWRlZH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXRDYWxsIDonICsgZGF0YS5kYXRhLm1lc3NhZ2UucGF5bG9hZERhdGEpO1xuICAgICAgICBjb25zdCBwcm9vZiA9IGRhdGEuZGF0YS5tZXNzYWdlLnBheWxvYWREYXRhLmRhdGFcbiAgICAgICAgcmV0dXJuIHByb29mO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXRSZXA7XG4gIH1cblxuUHJpbnRlcigpOiBzdHJpbmd7XG5yZXR1cm4gJ0l0IFdvcmtzISEhJztcbn1cblxufSJdfQ==