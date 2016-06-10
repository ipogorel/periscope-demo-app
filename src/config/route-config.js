import {AuthorizeStep} from 'aurelia-auth';
import {HistoryStep} from 'periscope-framework'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class{

  constructor(router){
    this.router = router;
  }
  configure(){
    var appRouterConfig = function(config){
      config.title = 'Periscope';
      config.addPipelineStep('preActivate', HistoryStep);
      config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
      config.map([
        { route: '',  name: 'login',  moduleId: './index',  nav: true, title:'Login' },
        { route: 'signup',  name: 'signup',  moduleId: './signup',  nav: true, title:'SignUp' },
        { route: 'registration',  name: 'registration',  moduleId: './registration',  nav: true, title:'Registration' },
        { route: 'me',  name: 'me',  moduleId: './me',  nav: true, title:'Profile' },
        { route: ['/#/', '/:dashboard'],  name: 'dashboard',  moduleId: './dashboard',  nav: true, title:'Dashboard' }

        //{ route: ['/', '/:dashboard'],  name: 'dashboard',  moduleId: './index',  nav: true, title:'Dashboard' }
      ]);
    };

    this.router.configure(appRouterConfig);
  }
}

