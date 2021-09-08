ZenKey

ZenKey SDKs and Web Integrations.
ZenKey SDKs (iOS and Android) and web integrations provide effective resources for you as a service provider to authenticate users accessing your apps with their mobile device or web browser. There are several resources you can access to get started integrating your apps with ZenKey.

Try It Out
Note : Must Use Angular Version 8 or newer
run: 
npm install axios@0.21.1 
npm install @myzenkey/idscan-angular-sdk

add:
Import {PayloadService} from '@myzenkey/idscan-angular-sdk'
into the files that require it, declare PayloadService as a provider in app.module.ts

PayloadService Functions:

getSessionId(CorrelationID, ClientID)- retrieves a saved session id for proofing data, takes a correlation id and the client id as parameters 
getStoredData(SessionID)- retrieves data on OneKosmos related to the sessionID passed as a parameter
