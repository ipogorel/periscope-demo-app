import {inject} from 'aurelia-framework';
import {DefaultDashboardConfiguration} from './config/dashboard-config';
import {FetchConfig} from 'aurelia-auth';
import AppRouterConfig from './config/route-config';

import $ from 'jquery';
import "./../assets/styles/app.css!";
import "./../assets/styles/sidebar.css!";

@inject(DefaultDashboardConfiguration, FetchConfig, AppRouterConfig)
export class App {
  constructor(dashboardsConfiguration, fetchConfig, appRouterConfig) {
    this.appRouterConfig = appRouterConfig;
    this.fetchConfig = fetchConfig;
    dashboardsConfiguration.invoke();
  }

  activate(){
    this.appRouterConfig.configure();
    this.fetchConfig.configure();
  }

  attached(){

    var elementsHeight = $(".navbar")[0].scrollHeight + $(".mainnav")[0].scrollHeight-8;
    if ($(".breadcrumb")[0])
      elementsHeight+=$("breadcrumb")[0].scrollHeight;

    $(".content").css("height",$("#wrapper")[0].clientHeight-elementsHeight);
  }
}
