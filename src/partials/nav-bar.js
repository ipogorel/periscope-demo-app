import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import {AuthService} from 'aurelia-auth';
import {inject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(AuthService, Router)
export class NavBar {
  constructor(authService, router){
    this.authService = authService;
    this.router = router;
  }

  get showMenu(){
    return this.authService.isAuthenticated();
  }
  logout(){
    this.authService.logout();
    this.router.navigate("/");
  }
  attached() {
    $('#nav-expander').on('click',function(e){
      e.preventDefault();
      $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click',function(e){
      e.preventDefault();
      $('body').removeClass('nav-expanded');
    });
    $('#collapseDashboards').collapse('show');
  }
}
