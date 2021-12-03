import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift } from '../models/gift.model';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class GiftService {
  private giftUrl: string;
  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.giftUrl = 'api/gifts';
    this.categoryUrl = 'api/categories';
  }

  getGifts(searchText?: string): Observable<Gift[]> {
    if (!searchText) {
      return this.http.get<Gift[]>(this.giftUrl);
    } else {
      const options = { params: new HttpParams().set('description', searchText) };
      return this.http.get<Gift[]>(this.giftUrl, options);
    }
  }

  getGiftById = (id: number) => this.http.get<Gift>(this.giftUrl + '/' + id);

  addGift = (item: Gift) => this.http.post(this.giftUrl, item);

  removeGift = (item: Gift) => this.http.delete(this.giftUrl + '/' + item.id);

  updateGift = (item: Gift) => this.http.put(this.giftUrl, item);

  getCategories = (): Observable<Category[]> => this.http.get<Category[]>(this.categoryUrl);

}
