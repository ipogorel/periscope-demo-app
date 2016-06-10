import {AuthService,BaseConfig} from 'aurelia-auth';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(AuthService, Router, EventAggregator)
export class Registration{
  constructor(auth, router, eventAggregator){
    this.auth = auth;
    this.router = router;
    this.showForm = false;
    eventAggregator.subscribe("user-profile-channel", message => {
      this.router.navigate("/customers");
    })
  };

  activate(){
    return this.auth.getMe().then(data=>{
      if (data.email)// profile completed
        this.router.navigate("/customers");
      else
        this.showForm = true;
    })
  }
}

