import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { GiftService } from '../../services/gift.service';
import { Gift } from '../../models/gift.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {
  giftForm: FormGroup;
  categories$: Category[];

  constructor(private fb: FormBuilder, private gs: GiftService, private router: Router) {
    const { required, minLength } = Validators;
    this.giftForm = fb.group({
      description: ['', [required, minLength(3)]],
      category: [Category, [required]],
      thumbnail: ['', [required]],
      points: ['', [required]],
      stock: ['', [required]]
    });
  }

  ngOnInit(): void {
    this.gs.getCategories()
      .subscribe(categories => this.categories$ = categories);
  }

  onSubmit(): void {
    const gift: Gift = this.giftForm.value;
    this.gs.addGift(gift).subscribe(
      () => this.router.navigate(['home'])
    );
  }
}
