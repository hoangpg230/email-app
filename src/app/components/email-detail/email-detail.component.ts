import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import icons from 'src/app/interface/icons';
import message from 'src/app/interface/message';

import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
})
export class EmailDetailComponent implements OnInit {
  constructor(
    private iconService: IconService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.icons = iconService.icons;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.idParm = this.route.snapshot.paramMap.get('id')
        this.getMessageById(this.idParm)
      }
    });
  }
  icons: icons;
  idParm = this.route.snapshot.paramMap.get('id')
  Message: any = {}
  getMessageById(id: any): void {
    fetch('assets/messages.json')
      .then((res) => res.json())
      .then((res) => {
        this.Message = res.find((res: message) => res._id == id);
      });
  }
  ngOnInit(): void {
    this.getMessageById(this.idParm)
  }

  ngOnDestroy(): void {
    this.idParm = ""
  }
}
