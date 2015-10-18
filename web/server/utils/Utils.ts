export default class Utils{
    static isNodeEnv():boolean{
        if(typeof window != "undefined"){
            return false;
        }
        return true;
    }
    static isDevelopmentEnv():boolean{
        if(Utils.isNodeEnv()){
            return process.env.NODE_ENV == "development"
        }else {
            console.error("BROWSER ENV NOT IMPLEMENTED");
            return true
        }
    }
}