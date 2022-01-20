export default class statusDropDown{

    constructor(){
        
        this.showDropDown = $('.payReqList__dropDown--selected')
        this.eventListener()

    }

    eventListener(){
        this.showDropDown.on('click', (e) => {
            this.dropDownCode(e)
        })
    }

    dropDownCode(e){
        var $this = $(e.currentTarget)
        $this.next().slideToggle()
    }

}