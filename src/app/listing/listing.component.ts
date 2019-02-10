import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  gvalues = {gid: 1,	gname: 'Shirt',	gprice: 1200,	gquantity: 20,	gdescription: 'Afughiuhigh FDtvfyugyuy DFyuufyugyug'};
  index: number;
  edit(id, name, price, quantity, description) {
    this.service.tggle = false;
    this.gvalues = { gid: id,
    gname: name,
    gprice: price,
    gquantity: quantity,
    gdescription: description };
  }
  delete(id) {
    this.index = this.service.products.findIndex(x => x.id === id);
    this.service.products.splice(this.index, 1);
  }
  constructor(public service: ServiceService) { }

  ngOnInit() {
  }

}
