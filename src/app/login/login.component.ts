import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
  	event.preventDefault();
  	const target = event.target;
  	const username = target.querySelector('#username').value;
	const password = target.querySelector('#password').value;

	this.Auth.getUserDetails(username, password).subscribe(data => {
		if (data.success) {

		} else {
			window.alert(data.secret);
		}
	});

  	// console.log(event);
  	// console.log(username);
  	// console.log(password);
  }

}
