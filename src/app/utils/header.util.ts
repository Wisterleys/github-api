
import { HttpHeaders } from "@angular/common/http";

export class HeaderUtil {

    public static get(): HttpHeaders {
        const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
        return headers;
    }
}
