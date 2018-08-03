import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html',
  styleUrls: ['./color-swatch-input-section.component.scss']
})
export class ColorSwatchInputSectionComponent implements OnInit {
  @Input() form: FormGroup;
  color: Color;

  constructor() { }

  ngOnInit() {
  }

  confirmAddColor() {

  }

  cancelAddColor() {

  }
}
