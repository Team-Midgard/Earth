export default function ChoiceProvider(provider: number) {
    enum Providers {
        LER_MANGAS = "https://lermangas.me/",
        MANGADEX = "https://mangadex.org/",
        MANGABR = "https://mangabr.net/",
        SLIMEREAD = "https://slimeread.com"
    }

    switch (provider) {
        case 1:
            return Providers.LER_MANGAS;
        case 2:
            return Providers.MANGADEX;
        case 3:
            return Providers.MANGABR;
        case 4:
            return Providers.SLIMEREAD;
        default:
            throw new Error("Provedor inválido");
    }
}
