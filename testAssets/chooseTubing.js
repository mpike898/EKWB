

module.exports = (page,tubeOp,) => {
    page
        .waitForElementVisible('@tubeTitle')
        if(tubeOp==='Hard'){
            page
            .waitForElementVisible('@hardCheck')
            .click('@hardCheck')

        }
    page
        .click('@nextBtn')
}
