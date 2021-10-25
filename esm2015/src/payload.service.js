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
                console.log('GetCall :' + data.data.message.payloadData);
                const proof = data.data.message.payloadData;
                return proof;
            }).catch(error => {
                console.log(error);
                return error;
            });
            return retRep;
        });
    }
    Printer() {
        return 'It Works!!!';
    }
}
PayloadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PayloadService_Factory() { return new PayloadService(); }, token: PayloadService, providedIn: "root" });
PayloadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
PayloadService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bG9hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWRzY2FuLWFuZ3VsYXItc2RrLyIsInNvdXJjZXMiOlsic3JjL3BheWxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQXNCLE1BQU0sT0FBTyxDQUFDOztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUV6QixnQkFBZ0IsQ0FBQztJQUVuQixhQUFhO0lBQ2I7OztPQUdHO0lBQ0ssWUFBWSxDQUFDLGNBQXNCLEVBQUUsU0FBaUI7O1lBQzFELE1BQU0sR0FBRyxHQUFHLG9FQUFvRSxjQUFjLGNBQWMsU0FBUyxFQUFFLENBQUM7WUFDeEgsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUM7b0JBQ1YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUNoRCxPQUFPLFVBQVUsQ0FBQztpQkFDbkI7WUFDRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sTUFBTSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFNBQWlCLEVBQUUsaUJBQXlCOztZQUM5RCwyR0FBMkc7WUFDM0csOERBQThEO1lBQzlELDZEQUE2RDtZQUM3RCxtRUFBbUU7WUFDbkUsOEVBQThFO1lBQzlFLE1BQU0sR0FBRyxHQUFHLHdEQUF3RCxDQUFDO1lBQ3JFLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxTQUFTLFFBQVEsaUJBQWlCLEVBQUUsQ0FBQztpQkFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO2dCQUNoRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUgsT0FBTztRQUNQLE9BQU8sYUFBYSxDQUFDO0lBQ3JCLENBQUM7Ozs7WUFoREEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXlsb2FkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuLy8gQHRzLWlnbm9yZVxuLyoqXG4gKiBAZXhwb3J0XG4gKiBAaW1wbGVtZW50cyB7SU9uZUtvc21vc31cbiAqL1xuICBhc3luYyBnZXRTZXNzaW9uSWQoY29ycmVsYXRpb25faWQ6IHN0cmluZywgY2xpZW50X2lkIDpzdHJpbmcgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4gfCBzdHJpbmc+e1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lkc2Nhbi1xYS54Y2lqdi5jb20vYXV0aC9sb29rdXBTZXNzaW9uSWQvP2NvcnJlbGF0aW9uX2lkPSR7Y29ycmVsYXRpb25faWR9JmNsaWVudF9pZD0ke2NsaWVudF9pZH1gO1xuICAgIGNvbnN0IHJldFJlcCA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZighIWRhdGEpe1xuICAgICAgICBjb25zdCBzZXNzaW9uX2lkID0gZGF0YS5kYXRhLm1lc3NhZ2Uuc2Vzc2lvbl9pZDtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25faWQ7XG4gICAgICB9XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG5yZXR1cm4gcmV0UmVwO1xuICB9XG5cbiAgYXN5bmMgZ2V0U3RvcmVkRGF0YShzZXNzaW9uSWQ6IHN0cmluZywgcHVibGljS2V5UHJvdmlkZWQ6IHN0cmluZyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+IHwgc3RyaW5nPiB7XG4gICAgLy8gbGV0IHNwX3B1YiA9ICdQU0oxc0VnVkNXUm12WjRUa3lCR295aWVYbDlwODUyTGNlakQ1Zk9IVXhCSlY0UThaNWE2aStWbHRUSlVzZnptdVRrRG41Kzg0Nk9JWHBqcCs3VkU0QT09JztcbiAgICAvLyBsZXQgc3BfcHIgPSAnVUxjWVNmdis1ZXRUcUJyMlJ4RUY5SFNKMzN1SmxrZXA5RUw0K3h6c1drST0nO1xuICAgIC8vIGNvbnN0IGxpY2Vuc2VLZXkgPSAnNTgwOWI3YjctODg2Zi00Yzg4LTkwNjEtNTlhMmJhZjQ4NWJlJztcbiAgICAvLyBjb25zdCBsaWNlbnNlS2V5X3BpbG90ID0gJ2M3N2FhMGNlLWYwMGQtNDg0My04NmE5LTM4ZTZjMWJmN2Q4ZSc7XG4gICAgLy9yZXR1cm4gYHvigJxmaXJzdF9uYW1l4oCcOuKAnEJlbuKAnCwg4oCcbGFzdF9uYW1l4oCcOuKAnERvdmVy4oCcLCDigJxsYXN0XzRfc29jaWFs4oCdIDrigJwzODQ04oCcfWA7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaWRzY2FuLXFhLnhjaWp2LmNvbS9hdXRoL2dldERhdGFXaXRoU2Vzc2lvbklkL2A7XG4gICAgY29uc3QgcmV0UmVwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybH0/c2Vzc2lvbl9pZD0ke3Nlc3Npb25JZH0mcHBrPSR7cHVibGljS2V5UHJvdmlkZWR9YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2V0Q2FsbCA6JyArIGRhdGEuZGF0YS5tZXNzYWdlLnBheWxvYWREYXRhKTtcbiAgICAgICAgY29uc3QgcHJvb2YgPSBkYXRhLmRhdGEubWVzc2FnZS5wYXlsb2FkRGF0YS5kYXRhXG4gICAgICAgIHJldHVybiBwcm9vZjtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0UmVwO1xuICB9XG5cblByaW50ZXIoKTogc3RyaW5ne1xucmV0dXJuICdJdCBXb3JrcyEhISc7XG59XG5cbn0iXX0=