export default class AppleShop{
    constructor(){
        this.appleShopElement =  document.addEventListener("appleShop");
        this.startEvents();
    }
    
    StartEvents(){
        
        this.appleShopElement.addEventListener("click", ()=>{
        
            this.appleShopElement.style.display = 'block';
        
        });
    
    }
}


