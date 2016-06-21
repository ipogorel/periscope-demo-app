import {inject, bindable, computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class DashboardsList {
  constructor(router){
    this._router = router;
  }

  @bindable dashboards;

  navigate(dashboard){
    this._router.navigate("/" + dashboard.name);
  }
}
