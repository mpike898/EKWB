

module.exports = (page,reasonOp,rgbOp) => {
    page
        .waitForElementVisible('@rgbTitle')
        if(reasonOp==='Both'){
            page
            .waitForElementVisible('@bothCheck')
            .click('@bothCheck')

        }
        else if(reasonOp==='Overclock'){
            page
            .waitForElementPresent('@overclockCheck')
            .click('@overclockCheck')
        }

        if(rgbOp==='Visual'){
            page
            .waitForElementVisible('@visualCheck')
            .click('@visualCheck')

        }
        else if(rgbOp==='No'){
            page
            .waitForElementPresent('@noRgbCheck')
            .click('@noRgbCheck')
        }

    page
        //.pause(2000)
        .click('@nextBtn')
}
