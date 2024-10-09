import { Hono } from "hono";
import MangaController from "../modules/manga/manga.controller";

const MangaRouter = (app: Hono) => {
    const newManga = new MangaController();

    app.get('/all-manga', async (c) => {
        const pageParam = c.req.query('page');
        const pages = pageParam ? Number(pageParam) : 1;

        const mangaList = await newManga.getAllManga(pages);
        if (!c.res.ok) return c.json({ message: "Page not found" })
        return c.json(mangaList);
    });

}

export default MangaRouter;
