
export default (app) => {
    app.get('/service/contact/fillcontacts/:qty',(req, res) => {
        const qty = req.params.qty
        //logic for prisma

        return res.send(`${qty} created successfully`);
    })
}
