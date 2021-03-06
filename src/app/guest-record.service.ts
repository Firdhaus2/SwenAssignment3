import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GuestRecordService {

  constructor(private http: HttpClient) { }

  // Register account
  registerAcc(username: string, password: string, email: string) {
    return this.http.get('/api/registerAcc/' + username + '/' + password + '/' + email);
  }

  // Login account
  loginAcc(username: string, password: string) {
    return this.http.get('/api/loginAcc/' + username + "/" + password);
  }

  // Retrieve User Information with Email
  retrieveAccInfo(username: string) {
    return this.http.get<any[]>('./api/retrieveAccInfo/' + username);
  }

  setSecureToken(secure_token: string) {
    sessionStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return sessionStorage.getItem("LoggedIn")
  }

  logout() {
    sessionStorage.removeItem("LoggedIn");
    sessionStorage.removeItem("AccType");
  }

  isLoggedIn() {
    return this.getSecureToken() !== null;
  }

  createGuestRecord(streetAdd: string, blockNo: string, unitNo: string, postalCode: string, country: string, firstName: string, lastName: string, gender: string, mobileNum: string, homeNum: string) {
    return this.http.post<any[]>('/api/createGuestRecord/' + streetAdd + '/' + blockNo + '/' + unitNo + '/' + postalCode + '/' + country + '/' + firstName + '/' + lastName + '/' + gender + '/' + mobileNum + '/' + homeNum,
     { 'streetAdd': streetAdd, 'blockNo': blockNo, 'unitNo': unitNo, 'postalCode': postalCode, 'country': country, 'firstName': firstName, 'lastName': lastName, 'gender': gender, 'mobileNum': mobileNum, 'homeNum': homeNum })
  }
}
