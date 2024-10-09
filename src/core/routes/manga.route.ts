import { Hono } from "hono";
import MangaController from "../modules/manga/manga.controller";

const MangaRouter = (app: Hono) => {
    const newManga = new MangaController();

    app.get('/all-manga', async (c) => {
        const mangaList = await newManga.getAllManga();
        return c.json(mangaList);
    });
}

export default MangaRouter;
