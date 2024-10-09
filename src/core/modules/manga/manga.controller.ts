import lerMangasInterface from "./interface/lermangas";
import GetManga from "./use-cases/get-mangas";
import GetMangaMostPopulars from "./use-cases/get-most-populars";

export default class MangaController {
    private getManga: GetManga;
    private getMostPopulars: GetMangaMostPopulars

    constructor() {
        this.getManga = new GetManga();
        this.getMostPopulars = new GetMangaMostPopulars();
    }

    async getAllManga(pages: number = 1) {
        return await this.getManga.getMangas(pages);
    }

    async mostPopulars() {
        return await this.getMostPopulars.getMostPopulars();
    }
}
