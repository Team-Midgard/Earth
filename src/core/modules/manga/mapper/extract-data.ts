export const extractNextData = (html: string) => {
    const match = html.split("__NEXT_DATA__")[1];
    if (!match) throw new Error("Dados __NEXT_DATA__ não encontrados.");

    const jsonString = match.split('type="application/json">')[1]?.split("</script>")[0];
    if (!jsonString) throw new Error("JSON não encontrado.");

    return JSON.parse(jsonString);
}
