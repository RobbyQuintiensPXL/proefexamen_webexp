import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../../models/gift.model';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts$: Observable<Gift[]>;

  constructor(private gs: GiftService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.gifts$ = this.gs.getGifts();
  }

  getGifts($event: any): void {
    this.gifts$ = this.gs.getGifts($event);
  }

  updateGift($event: any): void {
    this.gs.updateGift($event)
      .subscribe(() => this.refresh());
  }

  removeGift($event: any): void {
    this.gs.removeGift($event)
      .subscribe(() => this.refresh());
  }
}
