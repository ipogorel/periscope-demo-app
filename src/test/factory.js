import {Item, NestedItem} from './serialization-test3';
export class Factory {
  createObject(type){
    return eval("new " + type + "()");
  }

}
