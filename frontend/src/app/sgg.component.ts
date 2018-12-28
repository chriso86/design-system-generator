import {Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sgg.component.html',
  styleUrls: ['./sgg.component.scss']
})
export class SggComponent {
  title = 'style-guide-generator';
  menuOptions = {
    menuIsOpen: true,
    mode: 'side'
  };

  constructor(public vcRef: ViewContainerRef) {
    // Set initial menu options
    this.reassignMenuOptions();

    // Set menu options on resize
    window.onresize = () => {
      this.reassignMenuOptions();
    };
  }

  private reassignMenuOptions() {
    const breakpoint = 480;

    this.menuOptions.menuIsOpen = window.innerWidth > breakpoint;
    this.menuOptions.mode = window.innerWidth > breakpoint
      ? 'side'
      : 'over';
  }
}
