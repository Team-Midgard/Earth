
export default interface lerMangasInterface {
    title: string | undefined;
    link: string | undefined;
    imageUrl: string | undefined;
    rating: string | undefined;
    chapters: {
        title: string;
        link: string;
    }[];
}
