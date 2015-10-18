/**
 * Simple prefix for the folders
 * @type {string}
 */
const basePrefix    = "web";
const temDir        = "tmp";
const buildDir      = "build";
const gulpDir       = "gulp";
const serverDir     = "server";
const assetDir      = "assets";
const layoutDir     = "layout";
const src           = "./" +basePrefix + "/";
function buildFullName(name){
    return basePrefix + "-" + name;
}

export default {
    src: src,
    gulpDir: buildFullName(gulpDir),
    tempDir: buildFullName(temDir),
    buildDir: buildFullName(buildDir),
    serverPublicDir: buildFullName(temDir) + "/" + serverDir + "/" + "public",
    assetDir: src + serverDir +"/"+ assetDir,
    layoutDir: layoutDir,
    serverDir: serverDir
};