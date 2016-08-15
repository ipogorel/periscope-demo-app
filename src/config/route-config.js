import {AuthorizeStep} from 'aurelia-auth';
import {HistoryStep} from 'periscope-framework'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DashboardManager} from 'periscope-framework';

@inject(Router, DashboardManager)
export default class{

  constructor(router, dashboardManager){
    this.router = router;
    this.dashboardManager = dashboardManager;
  }
  configure(){
    var appRouterConfig = function(config){
      config.title = 'Periscope';
      config.addPipelineStep('preActivate', HistoryStep);
      config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
      config.map([
        { route: '',  name: 'login',  moduleId: './index',  nav: true, title:'Login' },
        { route: 'test',  name: 'test',  moduleId: './test',  nav: true, title:'Test'},
        { route: 'test2',  name: 'test2',  moduleId: './test-serialization',  nav: true, title:'Test'},
        { route: 'signup',  name: 'signup',  moduleId: './signup',  nav: true, title:'SignUp' },
        { route: 'registration',  name: 'registration',  moduleId: './registration',  nav: true, title:'Registration',auth:true},
        { route: 'me',  name: 'me',  moduleId: './me',  nav: true, title:'Profile',auth:true},
        { route: ['/#/', '/:dashboard'],  name: 'dashboard',  moduleId: './dashboard',  nav: true, title:'Dashboard',auth:true}

        //{ route: ['/', '/:dashboard'],  name: 'dashboard',  moduleId: './index',  nav: true, title:'Dashboard' }
      ]);
    };
    return this.router.configure(appRouterConfig);
  }
}

