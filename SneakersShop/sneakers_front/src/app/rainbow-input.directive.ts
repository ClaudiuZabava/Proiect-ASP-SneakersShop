import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rainbowField]'
})
export class RainbowInputDirective {

  possibleColors = [
    'lime',
    'indigo',
    'blue',
    'orange',
    'yellow',
    'green'
  ];

  @HostBinding('style.color') color!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.possibleColors[colorPick];
  }

}
