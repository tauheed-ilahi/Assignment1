interface Prod {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export interface Prods extends Array<Prod> {}
