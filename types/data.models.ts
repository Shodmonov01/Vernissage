interface ICategory {
  id: number;
  name: string;
  sub_categor: ISubCategory | ISubCategory[];
}
interface ISubCategory {
  category: number;
  id: number;
  name: string;
}
interface IProductImage {
  id: number;
  image: string;
  product: number;
}

export interface IProduct {
  category: ICategory;
  city: string;
  contact: string;
  country: string;
  create_at: string;
  description: string;
  engraver: string | null;
  id: number;
  image_size: string | null;
  images: IProductImage[];
  language: string;
  name: string;
  orginal_title: string;
  price: number;
  publisher: string | null;
  size: string | null;
  sub_category: ISubCategory;
  technique: string;
  video: string | null;
  year: number;
}
