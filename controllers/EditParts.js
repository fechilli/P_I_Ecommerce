
const editParts={
    editHome: (req,res) => {
        res.render('parts/header.ejs')
    },

    editFooter: (req,res) => {
        res.render('parts/footer.ejs')
    }


};

module.exports = editParts;