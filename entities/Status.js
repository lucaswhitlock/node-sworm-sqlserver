export default Object.freeze({
    tablename: "fc_status",
    queries: {
        listarStatus: "SELECT * FROM fc_status",
        statusPorId: "SELECT * FROM fc_status WHERE idStatus = @id",
        statusAtivos: "SELECT * FROM fc_status WHERE ativo = 1"
    }
})