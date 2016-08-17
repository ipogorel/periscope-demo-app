import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import * as base64 from 'js-base64';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AuthService} from 'aurelia-auth';
import {HttpClient} from 'aurelia-fetch-client';
import {DefaultHttpClient} from 'periscope-framework';
import {DashboardBehavior, ManageNavigationStackBehavior, DataSourceHandleBehavior, DataSourceChangedBehavior, ChangeRouteBehavior, ReplaceWidgetBehavior, CreateWidgetBehavior, SettingsHandleBehavior, DataFilterHandleBehavior, DataFieldSelectedBehavior, DataSelectedBehavior, DataActivatedBehavior, DataFilterChangedBehavior, DrillDownBehavior, DrillDownHandleBehavior} from 'periscope-framework';
import {CacheManager, Datasource, JsonDataService, StaticSchemaProvider, MemoryCacheStorage, Factory, StaticJsonDataService} from 'periscope-framework';
import {AstToJavascriptParser, UserStateStorage, StateUrlParser, DashboardManager, DatasourceManager} from 'periscope-framework';
import {PermissionsManager, DashboardConfiguration} from 'periscope-framework';

import {BootstrapDashboard, DefaultSearchBox, DefaultDetailedView, SwaggerDataSourceConfigurator} from 'periscope-ui';
import {GridDT} from 'periscope-widgets-datatables';
import {BarChart} from 'periscope-widgets-chartjs';

import {ElasticSearchDataService, AstToElasticSearchQueryParser, ElasticSearchSchemaProvider} from 'periscope-elastic-search';

import {PeriscopeFactory, PeriscopeObjectConfigurator, DashboardSerializer} from 'periscope-framework';

@inject(EventAggregator,  UserStateStorage, DashboardManager, DatasourceManager, Router, Factory.of(CacheManager), HttpClient, DefaultHttpClient, AuthService, PermissionsManager, PeriscopeFactory)
export class DefaultDashboardConfiguration extends DashboardConfiguration {
  constructor(eventAggregator, userStateStorage, dashboardManager, datasourceManager, router, cacheManagerFactory, securedHttpClient, defaultHttpClient, authService, permissionsManager, periscopeFactory) {
    super();
    this._eventAggregator = eventAggregator;
    this._router = router;
    this._dashboardManager = dashboardManager;
    this._datasourceManager = datasourceManager;
    this._stateStorage = userStateStorage;
    this._cacheManager = cacheManagerFactory(new MemoryCacheStorage());
    this._permissionsManager = permissionsManager;
    this._periscopeFactory = periscopeFactory;

    this._securedHttpClient = securedHttpClient;
    this._defaultHttpClient = defaultHttpClient;
  }

  invoke() {
    this._dashboardManager.configure({dashboardRouteName: "dashboard"});
    let permissionsDataService = new JsonDataService();
    permissionsDataService.httpClient = this._securedHttpClient;
    permissionsDataService.url = 'http://localhost:5000/api/permission';

    let permissionsDataSource = new Datasource();
    permissionsDataSource.name = "userpermissions";
    permissionsDataSource.cache = {
        cacheTimeSeconds: 5,
        cacheManager: this._cacheManager
     };
    permissionsDataSource.readService = permissionsDataService;

    this._permissionsManager.configure(config=>{
      config.withDataSource(permissionsDataSource);
    });


    let config = [{"type":"BootstrapDashboard","config":{"name":"customers","resourceGroup":"customers","title":"Customers","route":"http://localhost:9000/#/customers","layout":[{"type":"LayoutWidget","config":{"sizeX":6,"sizeY":"*","col":1,"row":1,"widget":{"type":"GridDT","config":{"columns":[{"field":"Id","title":"#"},{"field":"ContactName","title":"Contact Name"},{"field":"ContactTitle","title":"Contact Title","selectable":true},{"field":"Country","selectable":true},{"field":"City"}],"navigatable":true,"pageSize":25,"group":{"field":"Country","dir":"asc"},"name":"gridWidget","resourceGroup":"customers","header":"Customers","minHeight":450,"stateType":"gridState","showHeader":true,"dataSource":{"type":"Datasource","config":{"name":"customers","readService":{"type":"StaticJsonDataService","config":{"url":"/data/customers.json","schemaProvider":{"type":"StaticSchemaProvider","config":{"schema":[{"field":"Id","type":"string"},{"field":"CompanyName","type":"string"},{"field":"ContactName","type":"string"},{"field":"ContactTitle","type":"string"},{"field":"Address","type":"string"},{"field":"City","type":"string"},{"field":"Country","type":"string"},{"field":"PostalCode","type":"string"},{"field":"Phone","type":"string"},{"field":"Fax","type":"string"}]}},"filterParser":{"type":"AstToJavascriptParser","config":{}},"dataMapper":"function (data) {\n            return data.Results;\n          }"}}}},"behaviors":[{"type":"DataFilterHandleBehavior","config":{"channel":"searchBoxChannel"}},{"type":"DataSelectedBehavior","config":{"channel":"gridSelectionChannel"}},{"type":"DataActivatedBehavior","config":{"channel":"gridCommandChannel"}},{"type":"DataFieldSelectedBehavior","config":{"channel":"gridFieldSelectionChannel"}}]}}}},{"type":"LayoutWidget","config":{"sizeX":"*","sizeY":"*","col":7,"row":1,"widget":{"type":"BarChart","config":{"categoriesField":"Country","name":"chartWidget","resourceGroup":"customers","header":"Country","minHeight":450,"stateType":"chartState","showHeader":true,"dataSource":{"type":"Datasource","config":{"name":"customers","readService":{"type":"StaticJsonDataService","config":{"url":"/data/customers.json","schemaProvider":{"type":"StaticSchemaProvider","config":{"schema":[{"field":"Id","type":"string"},{"field":"CompanyName","type":"string"},{"field":"ContactName","type":"string"},{"field":"ContactTitle","type":"string"},{"field":"Address","type":"string"},{"field":"City","type":"string"},{"field":"Country","type":"string"},{"field":"PostalCode","type":"string"},{"field":"Phone","type":"string"},{"field":"Fax","type":"string"}]}},"filterParser":{"type":"AstToJavascriptParser","config":{}},"dataMapper":"function (data) {\n            return data.Results;\n          }"}}}},"behaviors":[{"type":"DataFilterHandleBehavior","config":{"channel":"searchBoxChannel"}},{"type":"SettingsHandleBehavior","config":{"messageMapper":"function (message) {\n            return {\n              header: message.fieldName,\n              categoriesField: message.fieldName\n            };\n          }","channel":"gridFieldSelectionChannel"}}]}}}}],"behaviors":[]}}];
    let serializer = new DashboardSerializer(new PeriscopeObjectConfigurator(this._periscopeFactory));
    this._dashboardManager.dashboards = serializer.deserialize(config);
  }
}
