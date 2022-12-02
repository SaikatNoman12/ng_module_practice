import { Router } from '@angular/router';
import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private _sub: HeaderServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(e: any) {
    e.preventDefault();

    const uName = e.target['uname'];
    const pass = e.target['pass'];
    const checkData = e.target['checkData'];

    if ((uName.value === '' || uName.value.trim() === '') && (pass.value === '' || pass.value.trim() === '') && !checkData.checked) {
      alert('Please fill all data!');
      
    }
    else if (uName.value === '' || uName.value.trim() === '') {
      alert('Please fill your user name!');
    }
    else if (pass.value === '' || pass.value.trim() === '') {
      alert('Please fill your password!');
    }
    else if (!checkData.checked) {
      alert('Please agree with me!')
    }
    else if (pass.value === 'admin') {
      this._sub.headerLogInBack.next(uName.value);
      this._sub.headerShow.next(true);
      this.router.navigate(['home']);
    }
    else {
      alert('please add valid password!');
    }

  }

  ngOnDestroy(): void {
  }
}
