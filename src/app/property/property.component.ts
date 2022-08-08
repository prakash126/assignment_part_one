import { Component, OnInit } from '@angular/core';
import { Properties } from '../property';

import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public name!:string;
  public description!:string;
  public size!:any;
  public allProterties:Properties[] = [];
  constructor(private propertySer:PropertyService) { 
    this.getAllProperties();
  }

  ngOnInit(): void {
  }
  public getAllProperties(){
    this.allProterties = this.propertySer.getProperties()
  }
  public addProperty(){
    let propertyObj= {
      name:this.name,
      description:this.description,
      size:this.size
    }
    this.propertySer.addProperty(propertyObj)
    this.clearForm()
  }
  public clearForm(){
    this.name = ''
    this.description = ''
    this.size = ''
  }

  public deleteProperty(indx:any){
    this.propertySer.deleteProperty(indx);
    this.getAllProperties()
  }
}
