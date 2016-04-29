import {inject} from 'aurelia-framework';
import {DashboardBase} from 'periscope-framework';
import {DefaultDashboardConfiguration} from './config/default-dashboard-configuration';
import $ from 'jquery';

@inject(DefaultDashboardConfiguration)
export class App {
  constructor(dashboardsConfiguration) {
    this.dashboardsConfiguration = dashboardsConfiguration;
  }


  configureRouter(config, router){
    config.title = 'Periscope';
    config.map([
      { route: ['/', '/:dashboard'],  name: 'dashboard',  moduleId: './index',  nav: true, title:'Dashboard' }
    ]);
    this.router = router;
  }


  
  attached(){
    this.dashboardsConfiguration.invoke();
    var elementsHeight = $(".navbar")[0].scrollHeight + $(".mainnav")[0].scrollHeight-8;
    if ($(".breadcrumb")[0])
      elementsHeight+=$("breadcrumb")[0].scrollHeight;

    $(".content").css("height",$("#wrapper")[0].clientHeight-elementsHeight);
  }
}
