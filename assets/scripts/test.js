export default class TestAlert{

    constructor(){
        
        this.clickTrigger = $('.button-1')
        this.onLoad()
        this.eventListener()

    }

    eventListener(){
        this.clickTrigger.on('click', (e) => {
            this.colorChange(e)
        })
    }

    onLoad(){
        this.clickTrigger.addClass('blue')
    }

    colorChange(e){
        var $this = $(e.currentTarget)
        $this.toggleClass('size')
    }

}