export class MovieDbInfo {
    private BASEURL : string;
    private APIKEY  : string;
    private REGION  : string;
    private lANGUAGE: string;
    private static movieDbInfo:MovieDbInfo;
    private constructor(){
        this.BASEURL  = "https://api.themoviedb.org/3/";
        this.APIKEY   = "bdf04a42330733fdfeb4cbc860ab26d0";
        this.REGION   = "US";
        this.lANGUAGE = "en-US";
    }
    public static  getMovieDbInfo():MovieDbInfo{
        if(MovieDbInfo.movieDbInfo == undefined){
            MovieDbInfo.movieDbInfo =new MovieDbInfo();
        }
        return MovieDbInfo.movieDbInfo;
    }
    public getBASEURL():string {
        return this.BASEURL;
    }
    public getAPIKEY():string{
        return this.APIKEY;
    }
    public getREGION():string{
        return this.REGION;
    }
    public  getLANUAGE():string{
        return this.lANGUAGE;
    }
    
}
