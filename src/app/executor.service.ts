import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {ExecResponse, ExecRequest, SessionResponse} from './terminal'

@Injectable()
export class ExecutorService {


  constructor(private http: Http) {

  }

  createSession(): Observable<SessionResponse> {
    return this.http.get('http://localhost:3500/session').map(result => result.json())
  }

  execute(request: ExecRequest): Observable<ExecResponse> {
    return this.http.post('http://localhost:3500/execute', request)
      .map(result => result.json())
  }


}
