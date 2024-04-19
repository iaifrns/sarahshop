import { imgShoe2, imgShoe3, imgShoe4, imgShoe5, imgShoe6, imgShoe7, imgShoe8 } from "../assets/images";
import { FooterLink, Product, Review, Service, Shoe, SocialMedia } from "../types";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes : Shoe[] = [
    {
        thumbnail: imgShoe5,
        bigShoe: imgShoe5,
    },
    {
        thumbnail: imgShoe2,
        bigShoe: imgShoe2,
    },
    {
        thumbnail: imgShoe3,
        bigShoe: imgShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products : Product[] = [
    {
        imgURL: imgShoe6,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        value : '4.5'
    },
    {
        imgURL: imgShoe4,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        value : '5.0'
    },
    {
        imgURL: imgShoe7,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        value: '5.0'
    },
    {
        imgURL: imgShoe8,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        value: '4.5'
    },
];

export const services : Service[] = [
    {
        imgURL: "fa-solid:shipping-fast",
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: "cib:f-secure",
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "mdi:love",
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews : Review[] = [
    {
        imgURL: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks : FooterLink[] = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia : SocialMedia[] = [
    { src: "mdi:facebook", alt: "facebook logo" },
    { src: "ri:twitter-fill", alt: "twitter logo" },
    { src: "ri:instagram-fill", alt: "instagram logo" },
];