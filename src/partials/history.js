import {inject, bindable, computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {NavigationHistory} from 'periscope-framework';
import {SearchExpressionStateView} from './search-expression-state-view'

@inject(Router, NavigationHistory)
export class History {

  constructor(router, navigationHistory){
    this._router = router;
    this._navigationHistory = navigationHistory;

  }

  get items(){
    var ar = this._navigationHistory.items.slice(0);
    ar.sort(function (a, b) {
      a = new Date(a.dateTime);
      b = new Date(b.dateTime);
      return a>b ? -1 : a<b ? 1 : 0;
    });

    return ar;
  }

  navigate(historyItem){
    this._router.navigate(historyItem.url);
  }

  isCurrent(historyItem){
    return false;
  }


  getStateView(stateItem){
    if (stateItem.value)
      switch (stateItem.value.stateType){
        case "searchBoxState":
          return new SearchExpressionStateView(stateItem.value.stateObject);
        default :
          return null;
      }
  }

}
