
    let cTool = "pencil";
    let CanvasBoard = document.querySelector("canvas");

    let tool = CanvasBoard.getContext("2d");
    let body = document.querySelector("body");

    CanvasBoard.height = window.innerHeight;
    CanvasBoard.width = window.innerWidth;
    tool.strokeStyle = "black"

