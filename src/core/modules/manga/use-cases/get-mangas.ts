import Config from "../../../../common/config/app.config";
import { extractNextData } from "../mapper/extract-data";

const url = Config.api.url

export default class GetManga {
    constructor() { }

    async getMangas() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const extractedData = extractNextData(html);
            return extractedData;
        } catch (error) {
            console.error('Erro ao obter mangas:', error);
            throw error;
        }
    }
}
