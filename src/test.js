import {JsonSerializer, PeriscopeObjectConfigurator, DashboardBuilder, Item, NestedItem} from './test/serialization-test3';
import {Factory} from './test/factory';

export class  Test {
  constructor (){
    this.serialize();
    this.deserialize();
  }

  serialize(){
    let cf = new DashboardBuilder(new PeriscopeObjectConfigurator(new Factory()));
    let item = new Item();
    item.propertyA = "someA";

    let nA = new NestedItem();
    nA.propertyA = "some new A";
    item.complexPropertyB = nA;

    let nAA = new NestedItem();
    nAA.propertyA = "some new array C";
    item.arrayOfComplexPropertyC = [nAA];

    cf.addDashboard(item);

    let strData = cf.dashoardsConfig;
  }

  deserialize(){
    let data = [{
      "type":"Item",
        "config":{
        "propertyA":"someA",
          "complexPropertyB":{
          "type":"NestedItem",
            "config":{
            "propertyB":"propertyB Test",
              "propertyA":"some new A",
              "arrayOfComplexPropertyC":[]
          }
        },
        "arrayOfComplexPropertyC":[{
          "type":"NestedItem",
          "config":{
            "propertyB":"propertyB Test",
            "propertyA":"some new array C",
            "arrayOfComplexPropertyC":[]
          }
        }]
      }
    }]
    let cf = new DashboardBuilder(new PeriscopeObjectConfigurator(new Factory()));
    let objData = cf.build(data);
  }
}
