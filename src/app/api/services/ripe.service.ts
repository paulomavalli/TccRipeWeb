import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationLoginRequest } from '../models/authentication-login-request';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request';
import { FeedbackRequest } from '../models/feedback-request';
import { QuestionResponse } from '../models/question-response';
import { ReportResponse } from '../models/report-response';
import { Success } from '../models/success';

@Injectable({
  providedIn: 'root'
})
export class RipeService {
  private readonly urlBase = 'https://localhost:44334/'
  constructor(
    private http: HttpClient
  ) { }
  postLogin(loginRequest: AuthenticationLoginRequest): Observable<Success>{
    return this.http.post<Success>(this.urlBase+ 'v1/ripe/login', loginRequest);
  }
  postCadastro(loginRequest: LoginRequest): Observable<Success>{
    return this.http.post<Success>(this.urlBase + 'v1/ripe/createUser',  loginRequest);
  }
  postFeedback(feedbackRequest: FeedbackRequest): Observable<FeedbackRequest>{
    return this.http.post<FeedbackRequest>(this.urlBase + 'v1/ripe/feedback' , feedbackRequest);
  }
  getQuestao(validateUser: string): Observable<QuestionResponse>{   
    return this.http.get<QuestionResponse>(this.urlBase + 'v1/ripe/questions?validateUser='+ validateUser);
  }
  getReport(QuantityPositiveAnswer: string, QuantityNegativeAnswer: string, QuantityNullableAnswer: string): Observable<ReportResponse>{
    return this.http.get<ReportResponse>(this.urlBase + 'v1/ripe/report?QuantityPositiveAnswer=' + QuantityPositiveAnswer +
                                                                      '&QuantityNegativeAnswer=' + QuantityNegativeAnswer +
                                                                      '&QuantityNullableAnswer=' + QuantityNullableAnswer);
    89110
  }
}
