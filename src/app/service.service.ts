import { Injectable } from '@angular/core';
import { Prods } from './prod';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  tggle = true;
  products: Prods = [
    { id: 1, name: 'Shirt', price: 1200, quantity: 20, description: 'Afughiuhigh FDtvfyugyuy DFyuufyugyug'},
    { id: 2, name: 'Jeans', price: 1800, quantity: 10, description: 'cytFFGYyu GGG FFTUYUugkuygy'},
    { id: 3, name: 'Shoes', price: 2200, quantity: 15, description: 'Sardytf fyft rfxgfdt'},
    { id: 4, name: 'Trowser', price: 1600, quantity: 12, description: 'arestdfh fygyug trctfyt'},
    { id: 5, name: 'Jackets', price: 3200, quantity: 5, description: 'Dgfdyhj fyuyugg DFyufufyugyug'}
  ];
  constructor() {}
}
