import lerMangasInterface from "./interface/lermangas";
import GetManga from "./use-cases/get-mangas";

export default class MangaController {
    private getManga: GetManga;

    constructor() {
        this.getManga = new GetManga();
    }

    async getAllManga(pages: number = 1) {
        return await this.getManga.getMangas(pages);
    }
}
