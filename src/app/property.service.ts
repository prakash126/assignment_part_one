import { Injectable } from '@angular/core';
import {Properties} from './property'
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }
  public properties:any = [];
  public getProperties(){
    return this.properties;
  }
  public addProperty(propertyObj:any){
    this.properties.push(new Properties(propertyObj.name,propertyObj.description,propertyObj.size));
  }
  public deleteProperty(indx:any){
    this.properties.splice(indx,1)
  }
}
