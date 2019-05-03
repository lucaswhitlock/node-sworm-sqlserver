export default Object.freeze({
    tablename: "fc_assunto",
    queries: {
        countInativos: "SELECT COUNT(idAssunto) AS count FROM fc_assunto WHERE ativo = 0",
        statusAtivos: "SELECT * FROM fc_assunto WHERE ativo = @ativo"
    }
})