import { Component } from '@angular/core';
import { IconService } from './services/icon.service';
import icons from './interface/icons';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private iconService: IconService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.icons = iconService.icons;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = this.router.url;
        if (this.url.split('/')[1].includes('mymessages')) {
          this.messageRoute = this.router.url;
        }
      }
    });
  }
  icons: icons;
  url: string = '';

  messageRoute: string = '/mymessages/inbox';

  users: unknown[] = [];
  user: string | unknown = '';

  handleChangeUser(user: string | unknown) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/mymessages'])
  }
  ngOnInit() {
    fetch('assets/messages.json')
      .then((res) => res.json())
      .then((res) => {
        const _res = res.map((res: any) => res.to);
        this.users = [...new Set(_res)];
        this.user = JSON.parse(localStorage.getItem('user') as "") || this.users[0];
        localStorage.setItem('user', JSON.stringify(this.user));
      });
  }
}
