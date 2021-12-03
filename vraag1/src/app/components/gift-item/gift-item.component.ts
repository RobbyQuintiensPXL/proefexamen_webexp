import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gift } from '../../models/gift.model';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.css']
})
export class GiftItemComponent implements OnInit {
  @Input() gift: Gift;
  @Output() claimEmitter = new EventEmitter();
  @Output() removeEmitter = new EventEmitter();

  constructor(private gs: GiftService) {
  }

  ngOnInit(): void {
  }

  claim(): void {
    const updatedGift = {
      ...this.gift,
      stock: this.gift.stock - 1
    };
    this.claimEmitter.emit(updatedGift);
  }

  removeItem(): void {
    this.removeEmitter.emit(this.gift);
  }
}
