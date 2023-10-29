export interface IProduct {
  name: string;
  due_at: Date | string;
  price: number;
  id?: number;
}
