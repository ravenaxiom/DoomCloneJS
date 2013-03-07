

$(document).ready(function() {
    var eskyLib = new EskyLib(
        "#viewport-container", 
        800, 
        600, 
        setupScene,
        drawFrame, 
        logicFrame, 
        0xFFFFFF,
        0xFFFFFF
    );

    eskyLib.startDrawing();

   //var sector = new GAMEWORLD.Sector();
});        

// setup the scene
function setupScene() {
    
}


// render the frame
function drawFrame() {
    
}


 // do frame logic
function logicFrame() {
    /*if(isPlaying) {
        
    }*/
}    


