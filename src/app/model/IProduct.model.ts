export interface IProduct {
  name: string;
  due_at: Date | string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  id?: number;
}
