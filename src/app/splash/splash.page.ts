import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  public buffer = 0.06;
  public progress = 0;

  constructor(public router: Router) {
   
    setTimeout(() => {
      this.router.navigateByUrl("login")
    }, 3000)
   }

  ngOnInit() {
  }
}
