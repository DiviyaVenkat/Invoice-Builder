export interface InvoiceItem {
  id: number;
  product: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface Customer {
  name: string;
  address: string;
  email: string;
  phone: string;
}