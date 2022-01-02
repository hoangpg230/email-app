import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import message from 'src/app/interface/message';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css'],
})
export class EmailPreviewComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.typeParm = this.route.snapshot.paramMap.get('type');
        this.route.firstChild?.params.subscribe((res: any)=>{
          this.idParm = res.id
        })
        this.getMessagesByType();
      }
    });
  }
  idParm: any
  typeParm = this.route.snapshot.paramMap.get('type');
  Messages: message[] = [];

  getMessagesByType() {
    fetch('assets/messages.json')
      .then((res) => res.json())
      .then((res) => {
        this.Messages = res.filter((val: message) => val.folder == this.typeParm && val.to == JSON.parse(localStorage.getItem('user') as "")).sort((a: message, b: message) => {
          if(a.date > b.date) return -1;
          return 1
        });
      });
  }

  handleReadMail(id: string) {
    this.router.navigate([`/mymessages/${this.typeParm}/${id}`])
  }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((res: any)=>{
      this.idParm = res.id
    })
    this.getMessagesByType();
  }
}
