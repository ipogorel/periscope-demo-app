import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import {AuthService} from 'aurelia-auth';
import {inject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DashboardManager} from 'periscope-framework';

@inject(AuthService, Router, DashboardManager)
export class NavBar {
  constructor(authService, router, dashboardManager){
    this.authService = authService;
    this.router = router;
    this._dashboardManager = dashboardManager;
  }

  get showMenu(){
    return this.authService.isAuthenticated();
  }
  
  get dashboardsList(){
    if (this.authService.isAuthenticated())
      return this._dashboardManager.dashboards;
    return[];
  }
  
  profile(){
    this.router.navigate("/me");
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
