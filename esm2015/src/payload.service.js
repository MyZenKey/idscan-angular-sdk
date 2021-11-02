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
            publicKeyProvided = encodeURIComponent(publicKeyProvided);
            privateKeyProvided = encodeURIComponent(privateKeyProvided);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG15emVua2V5L2lkc2Nhbi1hbmd1bGFyLXNkay8iLCJzb3VyY2VzIjpbInNyYy9wYXlsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFzQixNQUFNLE9BQU8sQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFbkIsYUFBYTtJQUNiOzs7T0FHRztJQUNLLFlBQVksQ0FBQyxjQUFzQixFQUFFLFNBQWlCOztZQUMxRCxNQUFNLEdBQUcsR0FBRyxvRUFBb0UsY0FBYyxjQUFjLFNBQVMsRUFBRSxDQUFDO1lBQ3hILE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBRyxDQUFDLENBQUMsSUFBSSxFQUFDO29CQUNWLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDaEQsT0FBTyxVQUFVLENBQUM7aUJBQ25CO1lBQ0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDVCxPQUFPLE1BQU0sQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxTQUFpQixFQUFFLGlCQUF5Qjs7WUFDOUQsMkdBQTJHO1lBQzNHLDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QsbUVBQW1FO1lBQ25FLDhFQUE4RTtZQUM5RSxNQUFNLEdBQUcsR0FBRyx3REFBd0QsQ0FBQztZQUNyRSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLGVBQWUsU0FBUyxRQUFRLGlCQUFpQixFQUFFLENBQUM7aUJBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7Z0JBQzNDLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFDSyxxQkFBcUIsQ0FBQyxTQUFpQixFQUFFLGtCQUEwQixFQUFFLGlCQUF5Qjs7WUFDbEcsMkdBQTJHO1lBQzNHLDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QsbUVBQW1FO1lBQ25FLDhFQUE4RTtZQUM5RSxpQkFBaUIsR0FBRSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pELGtCQUFrQixHQUFFLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0QsTUFBTSxHQUFHLEdBQUcsd0VBQXdFLENBQUM7WUFDckYsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxlQUFlLFNBQVMsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0JBQWtCLEVBQUUsQ0FBQztpQkFDbkksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQTtnQkFDN0MsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Ozs7WUE5REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXlsb2FkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuLy8gQHRzLWlnbm9yZVxuLyoqXG4gKiBAZXhwb3J0XG4gKiBAaW1wbGVtZW50cyB7SU9uZUtvc21vc31cbiAqL1xuICBhc3luYyBnZXRTZXNzaW9uSWQoY29ycmVsYXRpb25faWQ6IHN0cmluZywgY2xpZW50X2lkIDpzdHJpbmcgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+e1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9sb29rdXBTZXNzaW9uSWQvP2NvcnJlbGF0aW9uX2lkPSR7Y29ycmVsYXRpb25faWR9JmNsaWVudF9pZD0ke2NsaWVudF9pZH1gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZighIWRhdGEpe1xuICAgICAgICBjb25zdCBzZXNzaW9uX2lkID0gZGF0YS5kYXRhLm1lc3NhZ2Uuc2Vzc2lvbl9pZDtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25faWQ7XG4gICAgICB9XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG5yZXR1cm4gcmV0UmVwO1xuICB9XG5cbiAgYXN5bmMgZ2V0U3RvcmVkRGF0YShzZXNzaW9uSWQ6IHN0cmluZywgcHVibGljS2V5UHJvdmlkZWQ6IHN0cmluZyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPiB7XG4gICAgLy8gbGV0IHNwX3B1YiA9ICdQU0oxc0VnVkNXUm12WjRUa3lCR295aWVYbDlwODUyTGNlakQ1Zk9IVXhCSlY0UThaNWE2aStWbHRUSlVzZnptdVRrRG41Kzg0Nk9JWHBqcCs3VkU0QT09JztcbiAgICAvLyBsZXQgc3BfcHIgPSAnVUxjWVNmdis1ZXRUcUJyMlJ4RUY5SFNKMzN1SmxrZXA5RUw0K3h6c1drST0nO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXkgPSAnNTgwOWI3YjctODg2Zi00Yzg4LTkwNjEtNTlhMmJhZjQ4NWJlJztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5X3BpbG90ID0gJ2M3N2FhMGNlLWYwMGQtNDg0My04NmE5LTM4ZTZjMWJmN2Q4ZSc7XG4gICAgLy9yZXR1cm4gYHvigJxmaXJzdF9uYW1l4oCcOuKAnEJlbuKAnCwg4oCcbGFzdF9uYW1l4oCcOuKAnERvdmVy4oCcLCDigJxsYXN0XzRfc29jaWFs4oCdIDrigJwzODQ04oCcfWA7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2dldERhdGFXaXRoU2Vzc2lvbklkL2A7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0/c2Vzc2lvbl9pZD0ke3Nlc3Npb25JZH0mcHBrPSR7cHVibGljS2V5UHJvdmlkZWR9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZiA9IGRhdGEuZGF0YS5tZXNzYWdlLnBheWxvYWREYXRhXG4gICAgICAgIHJldHVybiBwcm9vZjtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0UmVwO1xuICB9XG4gIGFzeW5jIGdldFN0b3JlZERhdGFXaXRoS2V5cyhzZXNzaW9uSWQ6IHN0cmluZywgcHJpdmF0ZUtleVByb3ZpZGVkOiBzdHJpbmcsIHB1YmxpY0tleVByb3ZpZGVkOiBzdHJpbmcpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55PiB8IHN0cmluZz4ge1xuICAgIC8vIGxldCBzcF9wdWIgPSAnUFNKMXNFZ1ZDV1Jtdlo0VGt5QkdveWllWGw5cDg1MkxjZWpENWZPSFV4QkpWNFE4WjVhNmkrVmx0VEpVc2Z6bXVUa0RuNSs4NDZPSVhwanArN1ZFNEE9PSc7XG4gICAgLy8gbGV0IHNwX3ByID0gJ1VMY1lTZnYrNWV0VHFCcjJSeEVGOUhTSjMzdUpsa2VwOUVMNCt4enNXa0k9JztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5ID0gJzU4MDliN2I3LTg4NmYtNGM4OC05MDYxLTU5YTJiYWY0ODViZSc7XG4gICAgLy8gY29uc3QgbGljZW5zZUtleV9waWxvdCA9ICdjNzdhYTBjZS1mMDBkLTQ4NDMtODZhOS0zOGU2YzFiZjdkOGUnO1xuICAgIC8vcmV0dXJuIGB74oCcZmlyc3RfbmFtZeKAnDrigJxCZW7igJwsIOKAnGxhc3RfbmFtZeKAnDrigJxEb3ZlcuKAnCwg4oCcbGFzdF80X3NvY2lhbOKAnSA64oCcMzg0NOKAnH1gO1xuICAgIHB1YmxpY0tleVByb3ZpZGVkPSBlbmNvZGVVUklDb21wb25lbnQocHVibGljS2V5UHJvdmlkZWQpO1xuICAgIHByaXZhdGVLZXlQcm92aWRlZD0gZW5jb2RlVVJJQ29tcG9uZW50KHByaXZhdGVLZXlQcm92aWRlZCk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2dldERhdGFXaXRoU2Vzc2lvbklkUHJpdmF0ZUtleVB1YktleS9gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9P3Nlc3Npb25faWQ9JHtzZXNzaW9uSWR9JnNwX3B1YmxpY0tleT0ke3B1YmxpY0tleVByb3ZpZGVkfSZzcF9wcml2YXRlS2V5PSR7cHJpdmF0ZUtleVByb3ZpZGVkfWApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZGF0YS5tZXNzYWdlLnBheWxvYWREYXRhXG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXRSZXA7XG4gIH1cbn0iXX0=