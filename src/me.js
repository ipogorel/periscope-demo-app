import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Router, EventAggregator)
export class Me{
  constructor(router, eventAggregator){
    this.router = router;
    eventAggregator.subscribe("user-profile-channel", message => {
      this.router.navigate("/customers");
    })
  }

  activate(){
  }


}
