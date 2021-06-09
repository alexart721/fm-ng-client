import { Injectable } from '@angular/core';

interface Store {
  user: string;
  books: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public store!: Store;

  

  constructor() { }


}
