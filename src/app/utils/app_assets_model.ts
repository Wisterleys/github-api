export class AppAssets{
    
    constructor(
        private base:string='assets',
        private fonts:string=base+'/fonts',
        private icons:string=base+'/icons',
        private img:string=base+'/img',
        private scss:string=base+'/scss',
    ){};

    public getEncerradoRemovebg():string{
        return this.img+'/encerrado-removebg-preview.png'
    }
    public whatsappIcon(){
        return this.icons+'/whatsapp-square.svg'
    }
    public defaultImage(){
        return this.img+'/default_image.png'
    }
}