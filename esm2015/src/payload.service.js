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
            publicKeyProvided = publicKeyProvided.replace(/\+/g, '%2B');
            publicKeyProvided = publicKeyProvided.replace(/\=/g, '%3D');
            privateKeyProvided = privateKeyProvided.replace(/\+/g, '%2B');
            privateKeyProvided = privateKeyProvided.replace(/\=/g, '%3D');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG15emVua2V5L2lkc2Nhbi1hbmd1bGFyLXNkay8iLCJzb3VyY2VzIjpbInNyYy9wYXlsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFzQixNQUFNLE9BQU8sQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFbkIsYUFBYTtJQUNiOzs7T0FHRztJQUNLLFlBQVksQ0FBQyxjQUFzQixFQUFFLFNBQWlCOztZQUMxRCxNQUFNLEdBQUcsR0FBRyxvRUFBb0UsY0FBYyxjQUFjLFNBQVMsRUFBRSxDQUFDO1lBQ3hILE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBRyxDQUFDLENBQUMsSUFBSSxFQUFDO29CQUNWLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDaEQsT0FBTyxVQUFVLENBQUM7aUJBQ25CO1lBQ0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDVCxPQUFPLE1BQU0sQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxTQUFpQixFQUFFLGlCQUF5Qjs7WUFDOUQsMkdBQTJHO1lBQzNHLDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QsbUVBQW1FO1lBQ25FLDhFQUE4RTtZQUM5RSxNQUFNLEdBQUcsR0FBRyx3REFBd0QsQ0FBQztZQUNyRSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLGVBQWUsU0FBUyxRQUFRLGlCQUFpQixFQUFFLENBQUM7aUJBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7Z0JBQzNDLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFDSyxxQkFBcUIsQ0FBQyxTQUFpQixFQUFFLGtCQUEwQixFQUFFLGlCQUF5Qjs7WUFDbEcsMkdBQTJHO1lBQzNHLDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QsbUVBQW1FO1lBQ25FLDhFQUE4RTtZQUMvRSxpQkFBaUIsR0FBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELGlCQUFpQixHQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsa0JBQWtCLEdBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM1RCxrQkFBa0IsR0FBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNELE1BQU0sR0FBRyxHQUFHLHdFQUF3RSxDQUFDO1lBQ3JGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxTQUFTLGlCQUFpQixpQkFBaUIsa0JBQWtCLGtCQUFrQixFQUFFLENBQUM7aUJBQ25JLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7Z0JBQzdDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBOzs7O1lBaEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBheGlvcywge0F4aW9zUmVzcG9uc2V9IGZyb20gJ2F4aW9zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGF5bG9hZFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbi8vIEB0cy1pZ25vcmVcbi8qKlxuICogQGV4cG9ydFxuICogQGltcGxlbWVudHMge0lPbmVLb3Ntb3N9XG4gKi9cbiAgYXN5bmMgZ2V0U2Vzc2lvbklkKGNvcnJlbGF0aW9uX2lkOiBzdHJpbmcsIGNsaWVudF9pZCA6c3RyaW5nICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPntcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pZHNjYW4tcWEueGNpanYuY29tL2F1dGgvbG9va3VwU2Vzc2lvbklkLz9jb3JyZWxhdGlvbl9pZD0ke2NvcnJlbGF0aW9uX2lkfSZjbGllbnRfaWQ9JHtjbGllbnRfaWR9YDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfWApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYoISFkYXRhKXtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbl9pZCA9IGRhdGEuZGF0YS5tZXNzYWdlLnNlc3Npb25faWQ7XG4gICAgICAgIHJldHVybiBzZXNzaW9uX2lkO1xuICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xucmV0dXJuIHJldFJlcDtcbiAgfVxuXG4gIGFzeW5jIGdldFN0b3JlZERhdGEoc2Vzc2lvbklkOiBzdHJpbmcsIHB1YmxpY0tleVByb3ZpZGVkOiBzdHJpbmcpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz4ge1xuICAgIC8vIGxldCBzcF9wdWIgPSAnUFNKMXNFZ1ZDV1Jtdlo0VGt5QkdveWllWGw5cDg1MkxjZWpENWZPSFV4QkpWNFE4WjVhNmkrVmx0VEpVc2Z6bXVUa0RuNSs4NDZPSVhwanArN1ZFNEE9PSc7XG4gICAgLy8gbGV0IHNwX3ByID0gJ1VMY1lTZnYrNWV0VHFCcjJSeEVGOUhTSjMzdUpsa2VwOUVMNCt4enNXa0k9JztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5ID0gJzU4MDliN2I3LTg4NmYtNGM4OC05MDYxLTU5YTJiYWY0ODViZSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleV9waWxvdCA9ICdjNzdhYTBjZS1mMDBkLTQ4NDMtODZhOS0zOGU2YzFiZjdkOGUnO1xuICAgIC8vcmV0dXJuIGB74oCcZmlyc3RfbmFtZeKAnDrigJxCZW7igJwsIOKAnGxhc3RfbmFtZeKAnDrigJxEb3ZlcuKAnCwg4oCcbGFzdF80X3NvY2lhbOKAnSA64oCcMzg0NOKAnH1gO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9nZXREYXRhV2l0aFNlc3Npb25JZC9gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9P3Nlc3Npb25faWQ9JHtzZXNzaW9uSWR9JnBwaz0ke3B1YmxpY0tleVByb3ZpZGVkfWApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2YgPSBkYXRhLmRhdGEubWVzc2FnZS5wYXlsb2FkRGF0YVxuICAgICAgICByZXR1cm4gcHJvb2Y7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldFJlcDtcbiAgfVxuICBhc3luYyBnZXRTdG9yZWREYXRhV2l0aEtleXMoc2Vzc2lvbklkOiBzdHJpbmcsIHByaXZhdGVLZXlQcm92aWRlZDogc3RyaW5nLCBwdWJsaWNLZXlQcm92aWRlZDogc3RyaW5nKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+IHtcbiAgICAvLyBsZXQgc3BfcHViID0gJ1BTSjFzRWdWQ1dSbXZaNFRreUJHb3lpZVhsOXA4NTJMY2VqRDVmT0hVeEJKVjRROFo1YTZpK1ZsdFRKVXNmem11VGtEbjUrODQ2T0lYcGpwKzdWRTRBPT0nO1xuICAgIC8vIGxldCBzcF9wciA9ICdVTGNZU2Z2KzVldFRxQnIyUnhFRjlIU0ozM3VKbGtlcDlFTDQreHpzV2tJPSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleSA9ICc1ODA5YjdiNy04ODZmLTRjODgtOTA2MS01OWEyYmFmNDg1YmUnO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXlfcGlsb3QgPSAnYzc3YWEwY2UtZjAwZC00ODQzLTg2YTktMzhlNmMxYmY3ZDhlJztcbiAgICAvL3JldHVybiBge+KAnGZpcnN0X25hbWXigJw64oCcQmVu4oCcLCDigJxsYXN0X25hbWXigJw64oCcRG92ZXLigJwsIOKAnGxhc3RfNF9zb2NpYWzigJ0gOuKAnDM4NDTigJx9YDtcbiAgIHB1YmxpY0tleVByb3ZpZGVkPSBwdWJsaWNLZXlQcm92aWRlZC5yZXBsYWNlKC9cXCsvZywnJTJCJyk7XG4gICBwdWJsaWNLZXlQcm92aWRlZD0gcHVibGljS2V5UHJvdmlkZWQucmVwbGFjZSgvXFw9L2csJyUzRCcpO1xuICAgcHJpdmF0ZUtleVByb3ZpZGVkPSBwcml2YXRlS2V5UHJvdmlkZWQucmVwbGFjZSgvXFwrL2csJyUyQicpO1xuICAgcHJpdmF0ZUtleVByb3ZpZGVkPSBwcml2YXRlS2V5UHJvdmlkZWQucmVwbGFjZSgvXFw9L2csJyUzRCcpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9nZXREYXRhV2l0aFNlc3Npb25JZFByaXZhdGVLZXlQdWJLZXkvYDtcbiAgICBjb25zdCByZXRSZXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfT9zZXNzaW9uX2lkPSR7c2Vzc2lvbklkfSZzcF9wdWJsaWNLZXk9JHtwdWJsaWNLZXlQcm92aWRlZH0mc3BfcHJpdmF0ZUtleT0ke3ByaXZhdGVLZXlQcm92aWRlZH1gKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBkYXRhLmRhdGEubWVzc2FnZS5wYXlsb2FkRGF0YVxuICAgICAgICByZXR1cm4gcGF5bG9hZDtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0UmVwO1xuICB9XG59Il19