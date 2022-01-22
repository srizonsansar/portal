export default class MoreMenu{

    constructor(){
        
        this.loadMoreMenu = $('.leftNav__list--item.moreMenu')
        this.moreMenuClose = $('.moreNav--close')
        this.eventListener()

    }

    eventListener(){
        this.loadMoreMenu.on('click', () => {
            this.loadMenu()
        })
        this.moreMenuClose.on('click', (e) => {
            this.closeMoreMenu(e)
        })
    }

    loadMenu(){
        $('.moreNav').toggleClass('active')
    }
    closeMoreMenu(e){
        var $this = $(e.currentTarget)
        $this.parent().removeClass('active')
    }

}