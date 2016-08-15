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


@inject(EventAggregator,  UserStateStorage, DashboardManager, DatasourceManager, Router, Factory.of(CacheManager), HttpClient, DefaultHttpClient, AuthService, PermissionsManager)
export class DefaultDashboardConfiguration extends DashboardConfiguration {
  constructor(eventAggregator, userStateStorage, dashboardManager, datasourceManager, router, cacheManagerFactory, securedHttpClient, defaultHttpClient, authService, permissionsManager) {
    super();
    this._eventAggregator = eventAggregator;
    this._router = router;
    this._dashboardManager = dashboardManager;
    this._datasourceManager = datasourceManager;
    this._stateStorage = userStateStorage;
    this._cacheManager = cacheManagerFactory(new MemoryCacheStorage());
    this._permissionsManager = permissionsManager;
    this._authService = authService;

    this._securedHttpClient = securedHttpClient;
    this._defaultHttpClient = defaultHttpClient;
  }

  invoke() {
    this._dashboardManager.configure({dashboardRouteName: "dashboard"});
    let permissionsDataService = new JsonDataService();
    permissionsDataService.configure({
        httpClient: this._securedHttpClient,
        url:'http://localhost:5000/api/permission'
      }
    )
    let permissionsDataSource = new Datasource({
      name: "userpermissions",
      cache: {
        cacheTimeSeconds: 5,
        cacheManager: this._cacheManager
      },
      readService: permissionsDataService
    });
    this._permissionsManager.configure(config=>{
      config.withDataSource(permissionsDataSource);
    });

    let customersDataService = new StaticJsonDataService();
    customersDataService.configure({
        httpClient: this._securedHttpClient,
        url:'/data/customers.json',
        schemaProvider: new StaticSchemaProvider({
          fields:[
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
          ]
        }),
        dataMapper: data=>{
          return data.Results
        },
        filterParser: new AstToJavascriptParser()
      }
    )
    let dsCustomers = this._datasourceManager.createDatasource({
      name: "customers",
      cache: {
        cacheTimeSeconds: 120,
        cacheManager: this._cacheManager
      },
      readService: customersDataService

    });

    //customers grid
    let customersGrid = new GridDT({
      name:"gridWidget",
      resourceGroup:"customers",
      header:"Customers",
      showHeader:true,
      minHeight: 450,
      pageSize: 25,
      stateStorage: this._stateStorage,
      navigatable: true,
      behavior:[
        new DataFilterHandleBehavior("searchBoxChannel",this._eventAggregator),
        new DataSelectedBehavior("gridSelectionChannel",this._eventAggregator),
        new DataActivatedBehavior("gridCommandChannel",this._eventAggregator),
        new DataFieldSelectedBehavior("gridFieldSelectionChannel",this._eventAggregator)
      ],
      dataSource: dsCustomers,
      dataFilter:"",
      columns:[
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
      ],
      group: {
        field: "Country",
        dir: "asc"
      }
    });

    let dbCustomers = this._dashboardManager.createDashboard(BootstrapDashboard, {
      name: "customers",
      title:"Customers",
      resourceGroup:"customers"
    });
    dbCustomers.addWidget(customersGrid,{sizeX:6, sizeY:"*", col:1, row:2});

    
  }
}
