import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {MatSidenav} from '@angular/material';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AuthService} from '../../services/auth.service';
import {ScrollerService} from '../../services/scroller.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatSidenav;

  public isPopState = false;

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public auth: AuthService,
              private scrollerService: ScrollerService,
              private router: Router, private locationStrategy: LocationStrategy,
              private breakpointObserver: BreakpointObserver) {
  }

  public ngOnInit(): void {
    this.locationStrategy.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {

      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {

        this.drawer.close(); // todo if they click the same link it wont close

        this.scrollerService.scrollToTop('main-content');

        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }

  public continue() {

   const id = 1; // This is a fake value. See Tim  
   //this.ThisIsWhereYourcutommoduleIDcomesfrom.get('id');

    if (id) {
      this.router.navigate([`/name-of-your-custom-module/page1/${id}`]);
    }
    else {
      this.router.navigate([`/name-of-your-custom-module/page1`]);
    }
  }

  public logout() {
  //  this.auth.logout().subscribe(
    //  (success) => {
        this.router.navigate(['/home']);
    //  }
   // );
  }
}
