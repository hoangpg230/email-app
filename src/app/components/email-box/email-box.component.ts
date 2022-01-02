import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import icons from 'src/app/interface/icons';
import { IconService } from 'src/app/services/icon.service';
import message from 'src/app/interface/message';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css'],
})
export class EmailBoxComponent implements OnInit {
  constructor(
    private iconService: IconService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.icons = iconService.icons;
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
        this.typeParm = this.route.snapshot.paramMap.get('type');
    });
  }

  icons: icons;
  typeParm = this.route.snapshot.paramMap.get('type');

  messageBoxs: string[] = [
    'inbox',
    'finance',
    'travel',
    'personal',
    'spam',
    'drafts',
    'sent',
  ];

  ngOnInit(): void {}
}
