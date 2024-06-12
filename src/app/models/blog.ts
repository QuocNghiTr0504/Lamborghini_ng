 export interface Blog {
    id: number;
    date: string;
    tittle: string;
    image: Image;
    description: Description[];
    category: string;
}

 export interface Image {
    image_main: string;
    secondary_image: string;
    carousel: Carousel[];
}

    export interface Carousel {
    image1: string;
    image2: string;
    image3: string;
}

    export interface Description {
    des: string;
    saying: string;
}
