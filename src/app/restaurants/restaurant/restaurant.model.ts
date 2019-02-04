export interface Restaurant {
    id: string;
    name: string;
    category: string;
    deliveryEstimate: string;
    imagePath: string;
    rating: string;
    hours?: string;
    about?: string;
}