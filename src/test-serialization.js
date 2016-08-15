import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DashboardManager, UserStateStorage, PeriscopeObjectConfigurator, DashboardSerializer} from 'periscope-framework';
import {PeriscopeFactory} from 'periscope-framework';


@inject(DashboardManager, Router, EventAggregator, PeriscopeFactory)
export class TestSerialization {

  constructor(dashboardManager, router, eventAggregator, periscopeFactory) {
    this._router = router;
    this._dashboardManager = dashboardManager;
    this._eventAggregator = eventAggregator;
    this._periscopeFactory = periscopeFactory;
  }

  attached(){
    var self = this;
    this._eventAggregator.subscribe('router:navigation:complete', (payload) => {
      let serializer = new DashboardSerializer(new PeriscopeObjectConfigurator(this._periscopeFactory));
      let config = serializer.serialize(self._dashboardManager.dashboards);
      let db = serializer.deserialize(config);
    });
  }
}
