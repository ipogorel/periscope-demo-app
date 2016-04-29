import {inject, bindable, computedFrom} from 'aurelia-framework';
import {DashboardManager, PeriscopeRouter} from 'periscope-framework';

@inject(PeriscopeRouter, DashboardManager)
export class DashboardsList {
  constructor(periscopeRouter, dashboardManager){
    this._periscopeRouter = periscopeRouter;
    this._dashboardManager = dashboardManager;
  }

  get dashboards(){
    return this._dashboardManager.dashboards;
  }

  navigate(dashboard){
    this._periscopeRouter.navigate({
        route: dashboard.route,
        title: dashboard.title,
        dashboardName: dashboard.name
      }
    );
  }
}
