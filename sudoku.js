let mat1 = [
    [5, 4, 3, 9, 2, 1, 8, 7, 6],
    [2, 1, 9, 6, 8, 7, 5, 4, 3],
    [8, 7, 6, 3, 5, 4, 2, 1, 9],
    [9, 8, 7, 4, 6, 5, 3, 2, 1],
    [3, 2, 1, 7, 9, 8, 6, 5, 4],
    [6, 5, 4, 1, 3, 2, 9, 8, 7],
    [7, 6, 5, 2, 4, 3, 1, 9, 8],
    [4, 3, 2, 8, 1, 9, 7, 6, 5],
    [1, 9, 8, 5, 7, 6, 4, 3, 2]];

let mat2 = [
    [9, 5, 7, 6, 1, 3, 2, 8, 4],
    [4, 8, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 3, 6, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 3, 6, 8],
    [3, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 4, 5, 7, 9, 2, 6, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 3, 6, 1, 8, 5, 4, 2, 9]];

let mat3 = [
    [9, 4, 3, 1, 2, 7, 8, 6, 5],
    [1, 2, 7, 6, 5, 8, 3, 9, 4],
    [5, 6, 8, 3, 4, 9, 7, 2, 1],
    [7, 5, 2, 4, 3, 1, 9, 8, 6],
    [6, 3, 9, 2, 8, 5, 1, 4, 7],
    [4, 8, 1, 7, 9, 6, 5, 3, 2],
    [8, 1, 4, 9, 7, 2, 6, 5, 3],
    [2, 9, 6, 5, 1, 3, 4, 7, 8],
    [3, 7, 5, 8, 6, 4, 2, 1, 9]];

let mat4 = [
    [2, 1, 9, 5, 4, 3, 6, 7, 8],
    [5, 4, 3, 8, 7, 6, 9, 1, 2],
    [8, 7, 6, 2, 1, 9, 3, 4, 5],
    [4, 3, 2, 7, 6, 5, 8, 9, 1],
    [7, 6, 5, 1, 9, 8, 2, 3, 4],
    [1, 9, 8, 4, 3, 2, 5, 6, 7],
    [3, 2, 1, 6, 5, 4, 7, 8, 9],
    [6, 5, 4, 9, 8, 7, 1, 2, 3],
    [9, 8, 7, 3, 2, 1, 4, 5, 6]];

let mat5 = [
    [9, 7, 6, 4, 8, 1, 3, 2, 5],
    [1, 4, 3, 2, 5, 9, 7, 8, 6],
    [5, 2, 8, 3, 7, 6, 1, 9, 4],
    [6, 9, 4, 5, 1, 8, 2, 3, 7],
    [8, 1, 2, 7, 3, 4, 5, 6, 9],
    [7, 3, 5, 9, 6, 2, 4, 1, 8],
    [4, 6, 7, 8, 2, 3, 9, 5, 1],
    [2, 5, 1, 6, 9, 7, 8, 4, 3],
    [3, 8, 9, 1, 4, 5, 6, 7, 2]];

let array = [mat1, mat2, mat3, mat4, mat5];             // database of sudoku
var level;                                              // save chosen level
var percent = 0;                                        // show numbers in sudoku board according to percent(level)
var mat = [];                                           // save current board (with Zeros)

setLevel();                                             // calculate percent according to chosen level
createGame();                                           // start building the game


//username and password in sudoku.html
function enter() {

    let name1 = document.getElementById("user").value;
    let pass1 = document.getElementById("psw").value;
    //check the username
    if (name1 != "ABCD") {
        alert("username is not exist");
    }
    //check the password
    else if (pass1 != "1234") {
        alert("password is not correct");
    }
    else {// go to page of level (welcome)
        <a href="https://mayoush89k.github.io/sudoku/welcome.html"/>
    }
}

function hint(hint){
    if(hint == 'User'){
        alert("ABCD");
    }
    else if(hint == 'Pswrd'){
        alert("1234");
    }
}

//level button from Welcome.html
function chooseLevel(clickedLevel) {
    localStorage.setItem(level, clickedLevel);             // save the level to local storage, to be used later
    window.location.replace('./game.html');     // open page of game
}

//save the level to the game.html
function setLevel(){
    // 1 – הכי קל – מציג 75% מהלוח.
    // 2 - בינוני – מציג 50% מהלוח.
    // 3 – קשה – מציג 25% מהלוח
    let savedLevel = localStorage.getItem(level);
    if (savedLevel == 3) {
        percent = (81 * 75) / 100;
    }
    else if (savedLevel == 2) {
        percent = (81 * 50) / 100;
    }
    else {
        percent = (81 * 25) / 100;
    }
}

//fill the game according to the level
function createGame(){
    mat = array[Math.floor(Math.random() * 5)]; // randomly choose one matrix from database
    let row, col;

    //re`${square}${row}${row}` 0 in randome `${square}${row}${row}`s in current matrix
    for (let i = 0; i < percent; i++) {
        row = Math.floor(Math.random() * 9); 
        col = Math.floor(Math.random() * 9); 

        if(mat[row][col] != 0){
            mat[row][col] = 0;
        }
        else
            i--;
    }
    createSudoku();                          // locate the randomly chosen numbers into board of sudoku
}

//create sudoku board
function createSudoku(){
    let square;
    //go throught rows and columns  
    for(let row = 0 ; row < 9 ; row++){
        for(let col = 0 ; col < 9 ; col++){
            //search in which square current col and row is
            if(row < 3){
                if (col < 3)            square = 0;
                else if (col < 6)       square = 1;
                else                    square = 2;
            }
            else if (row < 6) {
                    if(col < 3)         square = 3; 
                    else if (col < 6)   square = 4;  
                    else                square = 5;
                }
            else{
                if(col < 3)             square = 6; 
                else if (col < 6)       square = 7;  
                else                    square = 8;
            }
            debugger
            if(mat[row][col] != 0){
                document.getElementById(`${square}${row}${col}`).value = mat[row][col];
                document.getElementById(`${square}${row}${col}`).disabled = "disabled";
            }
            else{
                document.getElementById(`${square}${row}${col}`).value = "";
            }
        }
    
    }
}

//check all cells in the same row
function checkRow(row){
    let squ;

    //curent row starts in which square
    if(row < 3){        squ = 0;}
    else if(row < 6){   squ = 3;}
    else {              squ = 6;}

    //go through all columns in the same row and check if there is dublicated number
    let num = [false,false,false,false,false,false,false,false,false];
    for(let col = 0 ; col < 9 ; col++){
        if(col == 3 || col == 6){squ++;} //square will increase every 3 columns
         
        try{
            if(num[document.getElementById(`${square}${row}${row}`).value - 1] == true && document.getElementById(`${square}${row}${row}`).value != ""){
                return false;
            }
            else{
                num[document.getElementById(`${square}${row}${row}`).value - 1] = true;
            }
        }
        catch(e){
        }
    }
    return true;
}

//check all cells in the same squ
function checkSqu(squ){
    let firstColInSqu , firstRowInSqu;
    
    //get the first row and col of square
    if(squ == 0)     {firstRowInSqu = 0 ; firstColInSqu = 0;}
    else if(squ == 1){firstRowInSqu = 0 ; firstColInSqu = 3;}
    else if(squ == 2){firstRowInSqu = 0 ; firstColInSqu = 6;}
    else if(squ == 3){firstRowInSqu = 3 ; firstColInSqu = 0;}
    else if(squ == 4){firstRowInSqu = 3 ; firstColInSqu = 3;}
    else if(squ == 5){firstRowInSqu = 3 ; firstColInSqu = 6;}
    else if(squ == 6){firstRowInSqu = 6 ; firstColInSqu = 0;}
    else if(squ == 7){firstRowInSqu = 6 ; firstColInSqu = 3;}
    else             {firstRowInSqu = 6 ; firstColInSqu = 6;}

    
    //go through all columns and rows in the same sqaure and check if there is dublicated number
    let num = [false,false,false,false,false,false,false,false,false];
    for(let row = firstRowInSqu ; row < firstRowInSqu + 3; row++){
        for(let col = firstColInSqu ; col < firstColInSqu + 3 ; col++){
            try{
                if(num[document.getElementById(`${square}${row}${row}`).value - 1] && document.getElementById(`${square}${row}${row}`).value != ""){
                    return false;
                }
                else{
                    num[document.getElementById(`${square}${row}${row}`).value - 1] = true;
                }
            }
            catch(e){
            }
        }
    }
    return true;
}

//check all cells in the same col
function checkCol(col){
    let squ;
    
    //col is in which square
    if(col < 3){     squ = 0;}
    else if(col < 6){squ = 1;}
    else {           squ = 2;}

    //go through all rows in the same col and check if there is dublicated number
    let num = [false,false,false,false,false,false,false,false,false];
    for(let row = 0 ; row < 9 ; row++){
        if(row == 3 || row == 6){ //go to the square below after 3 rows
            squ += 3;
        }

        try{
            if(num[document.getElementById(`${square}${row}${row}`).value - 1] && document.getElementById(`${square}${row}${row}`).value != ""){
                return false;
            }
            else{
                num[document.getElementById(`${square}${row}${row}`).value - 1] = true;
            }
        }
        catch(e){
        }
    }
    return true;
}

//finish button in game.html
function finish(){

    //check all rows, cols and squares in board
    for(let i = 0 ; i < 9 ; i++){
        if(checkRow(i) && checkCol(i) && checkSqu(i)){
            document.getElementById("error").innerHTML = "Succes"; 
        }
        else{
            document.getElementById("error").innerHTML = "failed";
            return;
        }
    }    
}

//again button in game.html
function again(){

    document.getElementById("error").innerHTML = "";
    createSudoku();          //rebuild the current board
}

//input entry in game.html
function inputCell(cell){
    //get the place of cell
    let squ = cell.charAt(0);
    let row = cell.charAt(1);
    let col = cell.charAt(2);
    
    //check all rows, cols and squares in board
    if(checkCol(col) && checkRow(row) && checkSqu(squ)){
        document.getElementById("error").innerHTML = "good";
    }
    else{
        document.getElementById("error").innerHTML = "not good";
    }

}

