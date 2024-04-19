export interface Shoe {
  thumbnail: string;
  bigShoe: string;
}

export interface Product {
  imgURL: string;
  name: string;
  price: string;
  value: string;
}

export interface Service {
  imgURL: string;
  label: string;
  subtext: string;
}

export interface Review {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

export interface SocialMedia {
  src: string;
  alt: string;
}

export interface Link {
  name: string;
  link: string;
}

export interface FooterLink{
    title: string,
        links: Link[]
}
