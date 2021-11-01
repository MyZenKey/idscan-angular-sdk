import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import axios from 'axios';
import * as i0 from "@angular/core";
export class PayloadService {
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
PayloadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PayloadService_Factory() { return new PayloadService(); }, token: PayloadService, providedIn: "root" });
PayloadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
PayloadService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRzY2FuLWFuZ3VsYXItc2RrLyIsInNvdXJjZXMiOlsic3JjL3BheWxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQXNCLE1BQU0sT0FBTyxDQUFDOztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUV6QixnQkFBZ0IsQ0FBQztJQUVuQixhQUFhO0lBQ2I7OztPQUdHO0lBQ0ssWUFBWSxDQUFDLGNBQXNCLEVBQUUsU0FBaUI7O1lBQzFELE1BQU0sR0FBRyxHQUFHLG9FQUFvRSxjQUFjLGNBQWMsU0FBUyxFQUFFLENBQUM7WUFDeEgsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUM7b0JBQ1YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUNoRCxPQUFPLFVBQVUsQ0FBQztpQkFDbkI7WUFDRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sTUFBTSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFNBQWlCLEVBQUUsaUJBQXlCOztZQUM5RCwyR0FBMkc7WUFDM0csOERBQThEO1lBQzlELDZEQUE2RDtZQUM3RCxtRUFBbUU7WUFDbkUsOEVBQThFO1lBQzlFLE1BQU0sR0FBRyxHQUFHLHdEQUF3RCxDQUFDO1lBQ3JFLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxTQUFTLFFBQVEsaUJBQWlCLEVBQUUsQ0FBQztpQkFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtnQkFDM0MsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNMLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUNLLHFCQUFxQixDQUFDLFNBQWlCLEVBQUUsa0JBQTBCLEVBQUUsaUJBQXlCOztZQUNsRywyR0FBMkc7WUFDM0csOERBQThEO1lBQzlELDZEQUE2RDtZQUM3RCxtRUFBbUU7WUFDbkUsOEVBQThFO1lBQzlFLE1BQU0sR0FBRyxHQUFHLHdFQUF3RSxDQUFDO1lBQ3JGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxTQUFTLGlCQUFpQixpQkFBaUIsa0JBQWtCLGtCQUFrQixFQUFFLENBQUM7aUJBQ25JLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7Z0JBQzdDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBOzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBheGlvcywge0F4aW9zUmVzcG9uc2V9IGZyb20gJ2F4aW9zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGF5bG9hZFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbi8vIEB0cy1pZ25vcmVcbi8qKlxuICogQGV4cG9ydFxuICogQGltcGxlbWVudHMge0lPbmVLb3Ntb3N9XG4gKi9cbiAgYXN5bmMgZ2V0U2Vzc2lvbklkKGNvcnJlbGF0aW9uX2lkOiBzdHJpbmcsIGNsaWVudF9pZCA6c3RyaW5nICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPntcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvbG9va3VwU2Vzc2lvbklkLz9jb3JyZWxhdGlvbl9pZD0ke2NvcnJlbGF0aW9uX2lkfSZjbGllbnRfaWQ9JHtjbGllbnRfaWR9YDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfWApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYoISFkYXRhKXtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9pZCA9IGRhdGEuZGF0YS5tZXNzYWdlLnNlc3Npb25faWQ7XG4gICAgICAgIHJldHVybiBzZXNzaW9uX2lkO1xuICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xucmV0dXJuIHJldFJlcDtcbiAgfVxuXG4gIGFzeW5jIGdldFN0b3JlZERhdGEoc2Vzc2lvbklkOiBzdHJpbmcsIHB1YmxpY0tleVByb3ZpZGVkOiBzdHJpbmcpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz4ge1xuICAgIC8vIGxldCBzcF9wdWIgPSAnUFNKMXNFZ1ZDV1Jtdlo0VGt5QkdveWllWGw5cDg1MkxjZWpENWZPSFV4QkpWNFE4WjVhNmkrVmx0VEpVc2Z6bXVUa0RuNSs4NDZPSVhwanArN1ZFNEE9PSc7XG4gICAgLy8gbGV0IHNwX3ByID0gJ1VMY1lTZnYrNWV0VHFCcjJSeEVGOUhTSjMzdUpsa2VwOUVMNCt4enNXa0k9JztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5ID0gJzU4MDliN2I3LTg4NmYtNGM4OC05MDYxLTU5YTJiYWY0ODViZSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleV9waWxvdCA9ICdjNzdhYTBjZS1mMDBkLTQ4NDMtODZhOS0zOGU2YzFiZjdkOGUnO1xuICAgIC8vcmV0dXJuIGB74oCcZmlyc3RfbmFtZeKAnDrigJxCZW7igJwsIOKAnGxhc3RfbmFtZeKAnDrigJxEb3ZlcuKAnCwg4oCcbGFzdF80X3NvY2lhbOKAnSA64oCcMzg0NOKAnH1gO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9nZXREYXRhV2l0aFNlc3Npb25JZC9gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9P3Nlc3Npb25faWQ9JHtzZXNzaW9uSWR9JnBwaz0ke3B1YmxpY0tleVByb3ZpZGVkfWApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2YgPSBkYXRhLmRhdGEubWVzc2FnZS5wYXlsb2FkRGF0YVxuICAgICAgICByZXR1cm4gcHJvb2Y7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldFJlcDtcbiAgfVxuICBhc3luYyBnZXRTdG9yZWREYXRhV2l0aEtleXMoc2Vzc2lvbklkOiBzdHJpbmcsIHByaXZhdGVLZXlQcm92aWRlZDogc3RyaW5nLCBwdWJsaWNLZXlQcm92aWRlZDogc3RyaW5nKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+IHtcbiAgICAvLyBsZXQgc3BfcHViID0gJ1BTSjFzRWdWQ1dSbXZaNFRreUJHb3lpZVhsOXA4NTJMY2VqRDVmT0hVeEJKVjRROFo1YTZpK1ZsdFRKVXNmem11VGtEbjUrODQ2T0lYcGpwKzdWRTRBPT0nO1xuICAgIC8vIGxldCBzcF9wciA9ICdVTGNZU2Z2KzVldFRxQnIyUnhFRjlIU0ozM3VKbGtlcDlFTDQreHpzV2tJPSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleSA9ICc1ODA5YjdiNy04ODZmLTRjODgtOTA2MS01OWEyYmFmNDg1YmUnO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXlfcGlsb3QgPSAnYzc3YWEwY2UtZjAwZC00ODQzLTg2YTktMzhlNmMxYmY3ZDhlJztcbiAgICAvL3JldHVybiBge+KAnGZpcnN0X25hbWXigJw64oCcQmVu4oCcLCDigJxsYXN0X25hbWXigJw64oCcRG92ZXLigJwsIOKAnGxhc3RfNF9zb2NpYWzigJ0gOuKAnDM4NDTigJx9YDtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvZ2V0RGF0YVdpdGhTZXNzaW9uSWRQcml2YXRlS2V5UHViS2V5L2A7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0/c2Vzc2lvbl9pZD0ke3Nlc3Npb25JZH0mc3BfcHVibGljS2V5PSR7cHVibGljS2V5UHJvdmlkZWR9JnNwX3ByaXZhdGVLZXk9JHtwcml2YXRlS2V5UHJvdmlkZWR9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gZGF0YS5kYXRhLm1lc3NhZ2UucGF5bG9hZERhdGFcbiAgICAgICAgcmV0dXJuIHBheWxvYWQ7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldFJlcDtcbiAgfVxufSJdfQ==