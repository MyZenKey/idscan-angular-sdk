import { AxiosResponse } from 'axios';
export declare class PayloadService {
    constructor();
    /**
     * @export
     * @implements {IOneKosmos}
     */
    getSessionId(correlation_id: string, client_id: string): Promise<AxiosResponse<any> | string>;
    getStoredData(sessionId: string, publicKeyProvided: string): Promise<AxiosResponse<any> | string>;
    getStoredDataWithKeys(sessionId: string, publicKeyProvided: string): Promise<AxiosResponse<any> | string>;
    Printer(): string;
}
