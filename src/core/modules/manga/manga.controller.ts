import GetManga from "./use-cases/get-mangas"; // Certifique-se de importar corretamente

export default class MangaController {
    private getManga: GetManga;

    constructor() {
        this.getManga = new GetManga();
    }

    async getAllManga() {
        return await this.getManga.getMangas();
    }
}
