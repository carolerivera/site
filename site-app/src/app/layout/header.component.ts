import { Component } from '@angular/core';

class MainNavLink {
  constructor(
    public display: string,
    public url: string
  ) {

  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public links: MainNavLink[] = [
    new MainNavLink('Home', '/'),
    new MainNavLink('About', '/about')
  ];

  constructor() { }


}
