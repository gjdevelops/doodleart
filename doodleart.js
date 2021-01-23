var painting = false;
var showColor = false;
var specialColor;
var showSpecial = false;
var penWidth = 20;
var paintColor = 'black';
setup =_=> {
    title('Doodle Art');
    alert('Welcome to Doodle Art! Press D for directions.');
    createCanvas(windowWidth, windowHeight);
    call_draw = false;
}
onmousedown =_=> painting = true;
onmouseup =_=> painting = false;
onmousemove = e => {
    if(painting) {
        beginPath(penWidth, paintColor, 'round');
        vertex(e.clientX, e.clientY);
        endPath();   
    }
    specialColor = `rgb(${e.clientX%255}, ${e.clientY%255}, ${(e.clientX + e.clientY)%255})`;
    if(showSpecial && showColor) {
        clearRect(0, 15, 10, 10);
        rect(0, 15, 10, 10, specialColor);
        paintColor = specialColor;
    } else if (showSpecial) {
        paintColor = specialColor;
    }
}
onkeydown = e => {
    clearRect(5, 15, 10, 10);
    switch(e.key) {
        case 'e':
            clear();
            if(showColor) {
                text('Paint Color:', 0, 10);
                rect(0, 15, 10, 10, paintColor);
            }
            break;
        case '1':
            paintColor = 'black';
            showSpecial = false;
            break;
        case '2':
            paintColor = 'green';
            showSpecial = false;
            break;
        case '3':
            paintColor = 'magenta';
            showSpecial = false;
            break;
        case '4':
            paintColor = 'cyan';
            showSpecial = false;
            break;
        case '5': 
            paintColor = 'red';
            showSpecial = false;
            break;
        case '6':
            paintColor = 'orange';
            showSpecial = false;
            break;
        case '7':
            paintColor = 'yellow';
            showSpecial = false;
            break;
        case '8':
            paintColor = 'white';
            showSpecial = false;
            break;
        case '9':
            if(!showSpecial) {
                showSpecial = true;
            } else if (showSpecial) {
                showSpecial = false;
            }
            break;
        case 'ArrowUp' :
            penWidth += 5;
            break;
        case 'ArrowDown' :
            penWidth -= 5;
            break;
        case 'c':
            alert('Credits: doodleartwebsite')
            break;
        case 'd':
            alert('Directions: Press Keys 1-8 for Different Colors and E to Erase The entire screen.');
            alert('Key 1 = Black. Key 2 = Green. Key 3 = Magenta. Key 4 = Cyan. Key 5 = Red. Key 6 = Orange. Key 7 = Yellow. Key 8 = Eraser/White.  Key G = Gray. Key B = Brown. Key E = Erase.');
            alert('Press the Up and Down arrows to change the coloring size.');
            alert('If you want to submit your artwork into a contest, press I for more information.');
            alert('If you press W, you will be able to see who won the last drawing competition.')
            alert('Press S to show what color you are drawing(press s again to disable) and C for credits. Have fun!');
            break;
        case 's':
            if(showColor) {
                clearRect(0, 0, 200, 40);
                showColor = false;
            } else if (!showColor) {
                text('Paint Color:', 0, 10);
                rect(0, 15, 10, 10, paintColor);
                showColor = true;
            }
            break;
        case 'g':
            paintColor = 'gray';
            showSpecial = false;
            break;
        case 'b':
            paintColor = 'rgb(139,69,19)';
            showSpecial = false;
            break;
        case 'i':
            alert('Every Friday, we will host a drawing competition, and announce the winner by Monday. If you would like to enter, submit your artwork to doodleartwebsite@gmail.com. If you win the competition, you get a shoutout for any social media platform. Good luck!');
            break;
        case 'w':
            alert('This weeks winner was xdcombo. Go ahead and check them out on TikTok @xdcombo79')
            break;
    }
    if(showColor) { 
        rect(0, 15, 10, 10, paintColor);
    }
} 
