export default interface lerMangasInterface {
    title: string;
    link: string | undefined;
    imageUrl: string | undefined;
    rating: string;
    chapters: {
        title: string;
        link: string | undefined;
    }[];
}
