// This file is for ... on name on Right Side

export default class DotDotName{

    constructor(){
        
        this.charCountList = $('.requestAct__list--item')
        this.eventListener()

    }

    eventListener(){
        this.charCountList.each(function() {
            var textToCount = $(this).find('a .status .color').text()
            var charCount = textToCount.length
            if(charCount >= 25){
                var limitedText = textToCount.slice(0, 25)
                console.log(limitedText)
                var textToCount = $(this).find('a .status .color').text(limitedText + '...')
            }
        })
    }

}