export default class PopupForm{

    constructor(){
        
        this.openPopup = $('.dashboardHeader__openNewForm')
        this.closeOnOverlay = $('.popupShade-overlay')
        this.formCloseBtn = $('.createRecord--close')
        this.eventListener()

    }

    eventListener(){
        this.openPopup.on('click', () => {
            this.loadPopup()
        })
        this.closeOnOverlay.on('click', () => {
            this.closePopup()
        })
        this.formCloseBtn.on('click', () => {
            this.closePopup()
        })
    }

    loadPopup(){
        $('.popupShade-overlay').addClass('visible')
        $('.createRecord-popup-form').addClass('visible')
        $('body').addClass('OFHidden')
    }

    closePopup(){
        $('.popupShade-overlay').removeClass('visible')
        $('.createRecord-popup-form').removeClass('visible')
        $('body').removeClass('OFHidden')
    }

}