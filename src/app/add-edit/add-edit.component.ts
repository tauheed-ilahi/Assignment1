import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  index: number;
  @Input() edit: boolean;
  @Input() values: {gid: number, gname: string, gprice: number, gquantity: number, gdescription: string};
  save(gid: number, gname: string, gprice: number, gquantity: number, gdescription: string) {
    this.index = this.service.products.findIndex(x => x.id === gid);
    this.service.products.splice(this.index, 1, {id: gid, name: gname, price: gprice, quantity: gquantity, description: gdescription});
    this.service.tggle = true;
     }
  cancel() {
    this.service.tggle = true;
  }

  constructor(public service: ServiceService) { }

  ngOnInit() {
  }

}
