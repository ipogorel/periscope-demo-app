import {inject, bindable, computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DashboardManager} from 'periscope-framework';

@inject(Router, DashboardManager)
export class DashboardsList {
  constructor(router, dashboardManager){
    this._router = router;
    this._dashboardManager = dashboardManager;
  }

  get dashboards(){
    return this._dashboardManager.dashboards;
  }

  navigate(dashboard){
    this._router.navigate(dashboard.route);
  }
}
