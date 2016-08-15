import * as _ from 'lodash';

export class Configurable {
  constructor(){}
  persistConfigurationTo(configurationInfo){}
  restoreConfigurationFrom(configurationInfo){};
}

export class Item extends Configurable {
  constructor(){
    super();
  }

  propertyA;
  complexPropertyB;
  arrayOfComplexPropertyC = [];

  persistConfigurationTo(configurationInfo){
    configurationInfo.addValue("propertyA",this.propertyA);
    configurationInfo.addValue("complexPropertyB",this.complexPropertyB);
    //serializationInfo.addValue("arrayOfComplexPropertyC",this.arrayOfComplexPropertyC);
  }

  restoreConfigurationFrom(configurationInfo){
    this.propertyA = configurationInfo.getValue("propertyA");
    this.complexPropertyB = configurationInfo.getValue("complexPropertyB");
    //this.arrayOfComplexPropertyC = serializationInfo.getValue("arrayOfComplexPropertyC");
  }
}

export class NestedItem extends Item {
  constructor(){
    super();
  }

  propertyB = "propertyB Test";

  persistConfigurationTo(configurationInfo){
    configurationInfo.addValue("propertyB",this.propertyB);
    super.persistConfigurationTo(configurationInfo);
  }

  restoreConfigurationFrom(configurationInfo){
    this.propertyB = configurationInfo.getValue("propertyB");
    super.restoreConfigurationFrom(configurationInfo);
  }
}

export class ConfigurationInfo {
  static createInfo(configurator, object, objectConfig){
    return new ConfigurationInfo(configurator, object.constructor.name, objectConfig);
  }

  constructor(configurator, objectType, objectConfig){
    this.configurator = configurator;
    this.type = objectType;
    this.config = objectConfig?objectConfig:{};
  }

  configurator;
  type;
  config;

  addValue(key, value){
    if (value){
      if (_.isArray(value)){
        let aVal = [];
        _.forEach(value,v=>{
          if (this.configurator.isConfigurable(v))
            aVal.push(this.configurator.getConfiguration(v));
          else
            aVal.push(v);
        })
        this.config[key] = aVal;
      }
      else {
        if (this.configurator.isConfigurable(value))
          this.config[key] = this.configurator.getConfiguration(value);
        else
          this.config[key] = value;
      }
    }
  }

  getValue(key){
    if (this.config[key]){
      let result;
      if (this.config[key].type) {//serializable
        return this.configurator.getObject(this.config[key]);
      }
      return this.config[key];
    }
    return null;
  }

}

export class DashboardBuilder {
  constructor(configurator){
    this.configurator = configurator;
  }

  dashoardsConfigurationState=[];

  addDashboard(dashboard) {
    this.dashoardsConfigurationState.push(this.configurator.getConfiguration(dashboard));
  }


  build(configuration){
    this.dashoardsConfigurationState = configuration;
    let result = [];
    _.forEach(this.dashoardsConfigurationState,d=>{
      result.push(this.configurator.getObject(d));
    });
    return result;
  }
}


export class JsonSerializer {
  serialize(object){
    return JSON.stringify(object);
  }

  deserialize(string){
    return JSON.parse(string);
  }
}

export class PeriscopeObjectConfigurator {
  constructor(factory){
    this.factory = factory;
  }

  isConfigurable(object){
    if (!_.isObject(object) || !object.persistConfigurationTo)
      return false;
    return true;
  }

  getConfiguration(object){
    if (!this.isConfigurable(object))
      throw "configurable object must implement persistConfigurationTo method";
    let info = ConfigurationInfo.createInfo(this, object);
    object.persistConfigurationTo(info);
    return {
      type: info.type,
      config: info.config
    }
  }

  getObject(objectConfig){
    let obj = this.factory.createObject(objectConfig.type);
    let info = ConfigurationInfo.createInfo(this, obj);
    info.config = objectConfig.config;
    obj.restoreConfigurationFrom(info);
    return obj;
  }
}
