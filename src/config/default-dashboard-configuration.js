import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import {DashboardBehavior, ManageNavigationStackBehavior, DataSourceHandleBehavior, DataSourceChangedBehavior, ChangeRouteBehavior, ReplaceWidgetBehavior, CreateWidgetBehavior, SettingsHandleBehavior, DataFilterHandleBehavior, DataFieldSelectedBehavior, DataSelectedBehavior, DataActivatedBehavior, DataFilterChangedBehavior} from 'periscope-framework';
import {CacheManager, Datasource, JsonDataService, StaticSchemaProvider, MemoryCacheStorage, Factory, StaticJsonDataService} from 'periscope-framework';
import {UserStateStorage, StateUrlParser, DashboardManager, PeriscopeRouter} from 'periscope-framework';
import {DashboardConfiguration} from 'periscope-framework';

import {BootstrapDashboard, DefaultSearchBox} from 'periscope-ui';

//, DefaultSearchBox


@inject(EventAggregator,  UserStateStorage, DashboardManager, PeriscopeRouter, Factory.of(StaticJsonDataService), Factory.of(JsonDataService), Factory.of(CacheManager))
export class DefaultDashboardConfiguration extends DashboardConfiguration  {
  constructor(eventAggregator, userStateStorage, dashboardManager, periscopeRouter, dataServiceFactory, swaggerServiceFactory, cacheManagerFactory){
    super();
    this._eventAggregator = eventAggregator;
    this._periscopeRouter = periscopeRouter;
    this._dashboardManager = dashboardManager;
    this._dataServiceFactory = dataServiceFactory;
    this._cacheManager = cacheManagerFactory(new MemoryCacheStorage());
  }
  
  invoke(){
    var customersDataService = this._dataServiceFactory()
    customersDataService.configure({
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
        }
      }
    )
    var dsCustomers = new Datasource({
      name: "customers",
      cache: {
        cacheTimeSeconds: 120,
        cacheManager: this._cacheManager
      },
      transport:{
        readService: customersDataService
      }
    });
    //Search box
    var searchBox = new DefaultSearchBox({
      name:"positionsSearchWidget",
      header:"Positions",
      showHeader:false,
      dataSource: dsCustomers,
      dataFilter:"",
      stateStorage: this._stateStorage,
      behavior:[
        new DataFilterChangedBehavior("searchBoxChannel",this._eventAggregator)
      ]
    });

    var dbCustomers = this._dashboardManager.createDashboard(BootstrapDashboard, {
      name: "customers",
      title:"Customers",
      route: "/customers"
    });
    dbCustomers.addWidget(searchBox, {sizeX:12, sizeY:1, col:1, row:1});
  }
}
