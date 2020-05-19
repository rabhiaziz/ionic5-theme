import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss'],
})
export class PopmenuComponent implements OnInit {

  openMenu: Boolean = false;
  constructor() { }

  ngOnInit() {}
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
}
