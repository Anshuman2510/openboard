

    let boardTop = CanvasBoard.getBoundingClientRect().top;
    let boardLeft = CanvasBoard.getBoundingClientRect().left;

    let ix, iy, fx, fy;
    let drawing = false;

    body.addEventListener("mousedown", function (e) {

        ix = e.clientX - boardLeft
        iy = e.clientY - boardTop
        if (cTool == "pencil" || cTool=="eraser") {
            drawing = true;
            tool.beginPath();
            tool.moveTo(ix, iy);
        }
    })

    body.addEventListener("mouseup", function (e) {
        if (cTool == "pencil" || cTool=="eraser") {
            drawing = false;
        }

        else if (cTool == "line" || cTool == "rect") {
            fx = e.clientX - boardLeft;
            fy = e.clientY - boardTop;

            let width = fx - ix;
            let height = fy - iy;

            if (cTool == "rect") {
                tool.strokeRect(ix, iy, width, height);
            }
            else if (cTool == "line") {
                tool.beginPath();
                tool.moveTo(ix, iy);
                tool.lineTo(fx, fy);
                tool.stroke();
            }
        }

    })

    body.addEventListener("mousemove", function (e) {
        if (drawing == false)
            return;
        fx = e.clientX - boardLeft;
        fy = e.clientY - boardTop;
        tool.lineCap = 'round'
        tool.lineJoin = 'round'
        tool.lineTo(fx, fy);
        tool.stroke();
        ix = fx;
        iy = fy;
    })
