export default class statusDropDown{

    constructor(){
        
        this.showDropDown = $('.payReqList__dropDown--selected')
        this.changeStatus = $('.payReqList__dropDown__list--item')
        this.showOptions = $('.payReqList--dots')
        this.eventListener()

    }

    eventListener(){
        this.showDropDown.on('click', (e) => {
            this.dropDownCode(e)
        })
        this.changeStatus.on('click', (e) => {
            this.updateStatus(e)
        })
        this.showOptions.on('click', (e) => {
            this.displayOptions(e)
        })
    }

    dropDownCode(e){
        var $this = $(e.currentTarget)
        $this.next().slideToggle()
        $this.toggleClass('opened')
        // Hide Other Dropdown
        $this.parent().parent().siblings().children('.payReqList__dropDown').children('.payReqList__dropDown__list').slideUp()
        $this.parent().parent().siblings().children('.payReqList__dropDown').children('.payReqList__dropDown--selected').removeClass('opened')
        // Close Options DropDown
        $this.parent().siblings('.payReqList__options').slideUp()
        $this.parent().siblings('.payReqList--dots').removeClass('active')
    }
    updateStatus(e){
        var $this = $(e.currentTarget)
        // Update Class on Main Li
        var classToAdd = $this.data('name')
        $this.closest('.payReqList--item').removeClass('draft submitted paid viewed declined')
        $this.closest('.payReqList--item').addClass(classToAdd)
        // Close Dropdown in Paid Option Selected
        if(classToAdd == 'paid'){
            $this.parent().slideUp()
            $this.parent().prev().removeClass('opened')
        }
        // Updated the text for the selected Menu and hide current menu
        $this.addClass('hidden')
        $this.siblings().removeClass('hidden')
        var textOfThis = $this.children('.text').html()
        $this.parent().prev().children('.status').html(textOfThis)
    }
    displayOptions(e){
        var $this = $(e.currentTarget)
        $this.toggleClass('active')
        $this.next().slideToggle()
        // Close Status DropDown
        $this.siblings('.payReqList__dropDown').children('.payReqList__dropDown__list').slideUp()
        $this.siblings('.payReqList__dropDown').children('.payReqList__dropDown--selected').removeClass('opened')
        // Close Other Options DropDown
        $this.parent().siblings().children('.payReqList__options').slideUp()
        $this.parent().siblings().children('.payReqList--dots').removeClass('active')
    }

}