var size = 4; //Grid size
var min = 0;
var max = size - 1;
var isMoved = false;
var score = 0;
var excludeIds = [] //Track merged tiles to prevent double merging
function load() //Load game
{
    var html = '<table border="1">';
    for(var row=0;row<size;row++)
    {
        html += '<tr>';
        for(var col=0;col<size;col++) 
        {
        var id = row+""+col;
        html += '<td align="center" valign="center" height="60" width="60" id="'+id+'" style="background-color:#cdc1b4;"></td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById("canvas").innerHTML = html;
    var id1 = getId();
    var id2 = "";
    while(true) 
    {
        id2 = getId();
        if(id1 != id2)
        break;
    }
    document.getElementById(id1).innerHTML = "2";
    document.getElementById(id2).innerHTML = "2";
    document.getElementById(id1).style.backgroundColor = getColor(2);
    document.getElementById(id2).style.backgroundColor = getColor(2);
    score = 0;
    document.getElementById("score").innerHTML = score;
    return false;
}
function getRandom() //Generate random number
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function getId() //Generate random tile id
{
    var i = getRandom();
    var j = getRandom();
    return i+""+j;
}
function up() //Handle up movement
{
    isMoved = false;
    excludeIds = [];
    for(var j=min;j<=max;j++) 
    {
        for(var i=min;i<=max;i++) 
        {
        var id = i+""+j;
        if(document.getElementById(id).innerHTML != "") 
        {
            moveUp(id);
        }
        }
    }
    if(isMoved == true) 
    {
        update();
    }
    return false;
}
function moveUp(id) //Move tile up and merge
    {   
    if(!id.startsWith(min)) 
    {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for(var k=(i-1);k>=min;k--) 
        {
        var nId = k+""+j;
        if(document.getElementById(nId).innerHTML != "") 
        {
            var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
            var nVal = parseInt(document.getElementById(nId).innerHTML);
            if(val == nVal) 
            {
            if(excludeIds.indexOf(nId) == -1)
            {
                excludeIds.push(nId);
                document.getElementById(nId).innerHTML = (val+nVal);
                document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                document.getElementById((k+1)+""+j).innerHTML = "";
                document.getElementById((k+1)+""+j).style.backgroundColor = "#cdc1b4";
                isMoved = true;
                updateScore();
            }
            }
            break;
        }
        else 
        {
            document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
            document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
            document.getElementById((k+1)+""+j).innerHTML = "";
            document.getElementById((k+1)+""+j).style.backgroundColor = "#cdc1b4";
            isMoved = true;
        }
        }
    }
    return false;
}
function left() //Handle left movement
{
    isMoved = false;
    excludeIds = [];
    for(var i=min;i<=max;i++) 
    {
        for(var j=min;j<=max;j++) 
        {
        var id = i+""+j;
        if(document.getElementById(id).innerHTML != "") 
        {
            moveLeft(id);
        }
        }
    }
    if(isMoved == true) 
    {
        update();
    }
    return false;
}
function moveLeft(id) //Move tile left and merge
{
    if(!id.endsWith(min)) 
    {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for(var k=(j-1);k>=min;k--) 
        {
        var nId = i+""+k;
        if(document.getElementById(nId).innerHTML != "") 
        {
            var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
            var nVal = parseInt(document.getElementById(nId).innerHTML);
            if(val == nVal) {
            if(excludeIds.indexOf(nId) == -1)
            {
                excludeIds.push(nId);
                document.getElementById(nId).innerHTML = (val+nVal);
                document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                document.getElementById(i+""+(k+1)).innerHTML = "";
                document.getElementById(i+""+(k+1)).style.backgroundColor = "#cdc1b4";
                isMoved = true;
                updateScore();
            }
            }
            break;
        }
        else 
        {
            document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
            document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
            document.getElementById(i+""+(k+1)).innerHTML = "";
            document.getElementById(i+""+(k+1)).style.backgroundColor = "#cdc1b4";
            isMoved = true;
        }
        }
    }
    return false;
}
function down() //Handle down movement
{
    isMoved = false;
    excludeIds = [];
    for(var i=min;i<=max;i++) 
    {
        for(var j=max;j>=min;j--) 
        {
        var id = j+""+i;
        if(document.getElementById(id).innerHTML != "") 
        {
            moveDown(id);
        }
        }
    }
    if(isMoved == true) 
    {
        update();
    }
    return false;
}
function moveDown(id) //Move tile down and merge
{
    if(!id.startsWith(max)) 
    {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for(var k=(i+1);k<=max;k++) 
        {
        var nId = k+""+j;
        if(document.getElementById(nId).innerHTML != "") 
        {
            var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
            var nVal = parseInt(document.getElementById(nId).innerHTML);
            if(val == nVal) 
            {
            if(excludeIds.indexOf(nId) == -1)
            {
                excludeIds.push(nId);
                document.getElementById(nId).innerHTML = (val+nVal);
                document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                document.getElementById((k-1)+""+j).innerHTML = "";
                document.getElementById((k-1)+""+j).style.backgroundColor = "#cdc1b4";
                isMoved = true;
                updateScore();
            }
            }
            break;
        }
        else 
        {
            document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
            document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
            document.getElementById((k-1)+""+j).innerHTML = "";
            document.getElementById((k-1)+""+j).style.backgroundColor = "#cdc1b4";
            isMoved = true;
        }
        }
    }
    return false;
}
function right() //Handle right movement
{
    isMoved = false;
    excludeIds = [];
    for(var i=min;i<=max;i++) 
    {
        for(var j=max;j>=min;j--) 
        {
        var id = i+""+j;
        if(document.getElementById(id).innerHTML != "") 
        {
            moveRight(id);
        }
        }
    }
    if(isMoved == true) 
    {
        update();
    }
    return false;
}
function moveRight(id) //Move tile right and merge
{
    if(!id.endsWith(max)) 
    {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for(var k=(j+1);k<=max;k++) 
        {
        var nId = i+""+k;
        if(document.getElementById(nId).innerHTML != "") 
        {
            var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
            var nVal = parseInt(document.getElementById(nId).innerHTML);
            if(val == nVal) 
            {
            if(excludeIds.indexOf(nId) == -1){
                excludeIds.push(nId);
                document.getElementById(nId).innerHTML = (val+nVal);
                document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
                document.getElementById(i+""+(k-1)).innerHTML = "";
                document.getElementById(i+""+(k-1)).style.backgroundColor = "#cdc1b4";
                isMoved = true;
                updateScore();
            }
            }
            break;
        }
        else 
        {
            document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
            document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
            document.getElementById(i+""+(k-1)).innerHTML = "";
            document.getElementById(i+""+(k-1)).style.backgroundColor = "#cdc1b4";
            isMoved = true;
        }
        }
    }
    return false;
}
//Handle swipe on mobile
var touchStartX = 0, touchStartY = 0;
var touchEndX = 0, touchEndY = 0;
document.addEventListener("touchstart", function(e) 
{ 
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, false);
document.addEventListener("touchend", function(e) 
{
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
}, false);
function handleSwipe() 
{
    var dx = touchEndX - touchStartX;
    var dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 50) {
            right();
        } else if (dx < -50) {
            left();
        }
    } else {
        if (dy > 50) {
            down();
        } else if (dy < -50) {
            up();
        }
    }
}
function update() //Update game
{   
    //Add new value
    var ids = [];
    for(var i=min;i<=max;i++) 
    {
        for(var j=min;j<=max;j++) 
        {
        var id = i+""+j;
        if(document.getElementById(id).innerHTML == "") 
        {
            ids.push(id);
        }
        }
    }
    var id = ids[Math.floor(Math.random()*ids.length)];
    document.getElementById(id).innerHTML = "2";
    document.getElementById(id).style.backgroundColor = getColor(2);
    var allFilled = true;
    for(var i=min;i<=max;i++) 
    {
        for(var j=min;j<=max;j++) 
        {
        var id = i+""+j;
        if(document.getElementById(id).innerHTML == "") 
        {
            allFilled = false;
            break;
        }
        }
    }
    if(allFilled) 
    {
        checkGameOver();
    }
}
function updateScore() { //Update score
    let highest = 0;
    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            let id = i + "" + j;
            let cellValue = document.getElementById(id).innerHTML;
            if (cellValue !== "") {
                let num = parseInt(cellValue);
                if (num > highest) {
                    highest = num;
                }
            }
        }
    }
    score = highest;
    document.getElementById("score").innerHTML = score;
}
function checkGameOver() //Check if game is over
{
    var isOver = true;
    for(var j=min;j<=max;j++) 
    {
        for(var i=min;i<=(max-1);i++) 
        {
        var val = parseInt(document.getElementById(i+""+j).innerHTML);
        var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
        if(val == nVal) 
        {
            isOver = false;
            break;
        }
        }
    }   
    if(isOver == true) 
    {
        for(var i=min;i<=max;i++) 
        {
        for(var j=min;j<=(max-1);j++) 
        {
            var val = parseInt(document.getElementById(i+""+j).innerHTML);
            var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
            if(val == nVal) 
            {
            isOver = false;
            break;
            }
        }
        }
    }
    if(isOver) 
    {
        alert("Game over!\nYou gained "+ score +" points!");
    }
    return false;
}
function getColor(val) { //Get color based on value
    switch(val) {
        case 2: return "#eee4da";
        case 4: return "#ede0c8";
        case 8: return "#f2b179";
        case 16: return "#f59563";
        case 32: return "#f67c5f";
        case 64: return "#f65e3b";
        case 128: return "#edcf72";
        case 256: return "#edcc61";
        case 512: return "#edc850";
        case 1024: return "#edc53f";
        case 2048: return "#edc22e";
        default: return "#cdc1b4";
    }
}
if ( typeof String.prototype.startsWith != 'function' )
{
    String.prototype.startsWith = function( str ) 
    {
    return this.substring( 0, str.length ) === str;
    }
    };
    if ( typeof String.prototype.endsWith != 'function' ) 
    {
    String.prototype.endsWith = function( str ) {
    return this.substring( this.length - str.length, this.length ) === str;
    }
};
document.onkeydown = function(e) //Handle key press
{
    e.preventDefault()
    switch (e.keyCode) 
    {
        case 37:
        left();
        break;
        case 38:
        up();
        break;
        case 39:
        right();
        break;
        case 40:
        down();
        break;
    }
};
load();