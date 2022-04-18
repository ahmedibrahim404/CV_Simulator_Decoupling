function loadVersion(){
    const versionToBeLoaded = localStorage.getItem('versionToBeLoaded') || "1.0.0";
    console.log(versionToBeLoaded);    
    var scriptLinker = document.createElement('script');
    scriptLinker.type = 'text/javascript';
    scriptLinker.src = "./dist/" + versionToBeLoaded + '/simulator.js';
    
    var styleLinker = document.createElement('style');

    styleLinker.type = 'text/css';
    styleLinker.rel = "stylesheet";
    styleLinker.href = "./dist/" + versionToBeLoaded + '/simulator.css';

    
    document.head.append(scriptLinker);
    document.head.append(styleLinker);

}

function changeVersion(version){
    localStorage.setItem('versionToBeLoaded', version)
    window.location.reload();
}
