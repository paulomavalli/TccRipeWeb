import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationLoginRequest } from '../models/authentication-login-request';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request';
import { FeedbackRequest } from '../models/feedback-request';
import { QuestionResponse } from '../models/question-response';

@Injectable({
  providedIn: 'root'
})
export class RipeService {

  constructor(
    private http: HttpClient
  ) { }
  postLogin(loginRequest: AuthenticationLoginRequest): Observable<any>{
    return this.http.post<AuthenticationLoginRequest>(`https://localhost:4300/v1/ripe/login`, loginRequest);
  }
  postCadastro(loginRequest: LoginRequest): Observable<any>{
    return this.http.post<LoginRequest>(`https://localhost:4300/v1/ripe/createUser`, loginRequest);
  }
  postFeedback(feedbackRequest: FeedbackRequest): Observable<any>{
    return this.http.post<FeedbackRequest>(`https://localhost:4300/v1/ripe/login`, feedbackRequest);
  }
  getQuestao(validateUser: string): Observable<QuestionResponse>{
    return this.http.get<QuestionResponse>(`https://localhost:4300/v1/ripe/questions`);
  }
  getReport(QuantityPositiveAnswer: string, QuantityNegativeAnswer: string, QuantityNullableAnswer): Observable<QuestionResponse>{
    return this.http.get<QuestionResponse>(`https://localhost:4300/v1/ripe/report`);
  }
}
