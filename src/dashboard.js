import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DashboardManager, UserStateStorage} from 'periscope-framework';


@inject(DashboardManager, Router, EventAggregator, UserStateStorage)
export class Dashboard {

  constructor(dashboardManager, router, eventAggregator, userStateStorage) {
    this._router = router;
    this._dashboardManager = dashboardManager;
    this._eventAggregator = eventAggregator;
    this._userStateStorage = userStateStorage;
  }

  attached(){
    var self = this;
    this._eventAggregator.subscribe('router:navigation:complete', (payload) => {
      if (payload.instruction.params.dashboard)
        self.dashboard = self._dashboardManager.find(payload.instruction.params.dashboard);
      else
        self.dashboard = self._dashboardManager.dashboards[0];
      if (self.dashboard)
        self.dashboard.refresh();
    });
  }
}
