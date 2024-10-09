import ChoiceProvider from "../../core/modules/manga/service/choise-provider"

const Config = {
    port: Number(process.env.PORT) || 3000,
    database: {},
    api: {
        url: ChoiceProvider(1)
    }
}

export default Config