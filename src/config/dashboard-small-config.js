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

    let staticSchemaProvider = new StaticSchemaProvider();
    staticSchemaProvider.schema = [
      {
        field:"Id",
        type:"string"
      },
      {
        field:"CompanyName",
        type:"string"
      },
      {
        field:"ContactName",
        type:"string"
      },
      {
        field:"ContactTitle",
        type:"string"
      },
      {
        field:"Address",
        type:"string"
      },
      {
        field:"City",
        type:"string"
      },
      {
        field:"Country",
        type:"string"
      },
      {
        field:"PostalCode",
        type:"string"
      },
      {
        field:"Phone",
        type:"string"
      },
      {
        field:"Fax",
        type:"string"
      }
    ];

    let customersDataService = new StaticJsonDataService();
    customersDataService.httpClient = this._securedHttpClient;
    customersDataService.url ='/data/customers.json';
    customersDataService.schemaProvider = staticSchemaProvider;
    customersDataService.dataMapper = data=>{ return data.Results };
    customersDataService.filterParser = new AstToJavascriptParser();

    let dsCustomers = new Datasource();
    dsCustomers.name = "customers";
    dsCustomers.cache = {
      cacheTimeSeconds: 120,
      cacheManager: this._cacheManager
    };
    dsCustomers.readService = customersDataService;

    // CREATE GRID
    let customersGrid = new GridDT();
    customersGrid.name ="gridWidget";
    customersGrid.resourceGroup = "customers";
    customersGrid.header = "Customers";
    customersGrid.showHeader = true;
    customersGrid.minHeight = 450;
    customersGrid.pageSize = 25;
    //customersGrid.stateStorage = this._stateStorage;
    customersGrid.navigatable = true;
    customersGrid.dataSource = dsCustomers;
    customersGrid.dataFilter = "";
    customersGrid.columns = [
      {
        field: "Id",
        title: "#"
      },
      {
        field: "ContactName",
        title: "Contact Name"
      },
      {
        field: "ContactTitle",
        title: "Contact Title",
        selectable: true
      },
      {
        field: "Country",
        selectable: true
      },
      {
        field: "City"
      }
    ];
    customersGrid.group = {
      field: "Country",
      dir: "asc"
    };
    let dfb = new DataFilterHandleBehavior(this._eventAggregator);
    dfb.channel = "searchBoxChannel";
    customersGrid.attachBehavior(dfb);

    let dsb = new DataSelectedBehavior(this._eventAggregator);
    dsb.channel = "gridSelectionChannel";
    customersGrid.attachBehavior(dsb);

    let dab = new DataActivatedBehavior(this._eventAggregator);
    dab.channel = "gridCommandChannel";
    customersGrid.attachBehavior(dab);

    let dfsb = new DataFieldSelectedBehavior(this._eventAggregator);
    dfsb.channel = "gridFieldSelectionChannel";
    customersGrid.attachBehavior(dfsb);


    // CREATE CHART
    let chart = new BarChart();
    chart.name ="chartWidget";
    chart.header = "Country";
    chart.resourceGroup = "customers";
    chart.categoriesField = "Country";
    chart.dataSource = dsCustomers;
    chart.dataFilter = "";
    chart.showHeader = true;
    chart.minHeight = 450;

    let dfhb =  new DataFilterHandleBehavior(this._eventAggregator);
    dfhb.channel = "searchBoxChannel";
    chart.attachBehavior(dfhb);

    let shb = new SettingsHandleBehavior(this._eventAggregator);
    shb.channel = "gridFieldSelectionChannel";
    shb.messageMapper = message => {
      return {
        header: message.fieldName,
        categoriesField: message.fieldName
      };
    }
    chart.attachBehavior(shb);



    let dbCustomers = this._dashboardManager.createDashboard(BootstrapDashboard, {
      name: "customers",
      title:"Customers",
      resourceGroup:"customers"
    });
    dbCustomers.addWidget(customersGrid,{sizeX:6, sizeY:"*", col:1, row:1});
    dbCustomers.addWidget(chart, {sizeX:"*", sizeY:"*", col:7, row:1});

    let serializer = new DashboardSerializer(new PeriscopeObjectConfigurator(this._periscopeFactory));
    let config = serializer.serialize(this._dashboardManager.dashboards);
    this._dashboardManager.dashboards = serializer.deserialize(config);
  }
}
