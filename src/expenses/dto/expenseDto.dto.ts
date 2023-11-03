// import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  name: string;
  amount: number;
  location: string;
  currency: string;
  description: string;
  vendor: string;
  attachments: string;
}
