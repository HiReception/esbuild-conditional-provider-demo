import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionOneService {

  constructor() { }
  
  public optionText = "This is Option One.";
}
