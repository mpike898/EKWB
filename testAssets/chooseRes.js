

module.exports = (page,resOp) => {
    page
        .waitForElementVisible('@resTitle')
        if(resOp==='Separate'){
            page
            .waitForElementVisible('@resSepCheck')
            .click('@resSepCheck')
        }
    page
        //.pause(2000)
        .click('@nextBtn')
}
