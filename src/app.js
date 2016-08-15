import {inject} from 'aurelia-framework';
//import {DefaultDashboardConfiguration} from './config/dashboard-config';
import {DefaultDashboardConfiguration} from './config/dashboard-small-config-serialized';
import {FetchConfig} from 'aurelia-auth';
import {UserStateStorage} from 'periscope-framework';
import AppRouterConfig from './config/route-config';

import $ from 'jquery';
import "./../assets/styles/app.css!";
import "./../assets/styles/sidebar.css!";

@inject(DefaultDashboardConfiguration, FetchConfig, AppRouterConfig, UserStateStorage)
export class App {
  constructor(dashboardsConfiguration, fetchConfig, appRouterConfig, userStateStorage) {
    this.fetchConfig = fetchConfig;
    this.userStateStorage = userStateStorage;

    appRouterConfig.configure().then(c=>{
      dashboardsConfiguration.invoke();
    })
  }

  activate(){
    this.fetchConfig.configure();
    this.userStateStorage.clearAll();
  }

  attached(){

    var elementsHeight = $(".navbar")[0].scrollHeight + $(".mainnav")[0].scrollHeight-8;
    if ($(".breadcrumb")[0])
      elementsHeight+=$(".breadcrumb")[0].scrollHeight;
    $(".content").css("height",$("#wrapper")[0].clientHeight-elementsHeight - 70);     //70 - dashboardtitle height
  }
}
