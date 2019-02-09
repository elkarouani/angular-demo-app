import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
	return this.http.post('http://localhost:1234/api/auth.php', {
		username,
		password
	});
  }
}
