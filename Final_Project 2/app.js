/*
finished tasks:
- generate board
  - tile coordinates
  - white and black tiles colors
- place initial pieces positions 
- activate click event every restart/move/everything
- append img to special tiles when clicked
- assign special class to pawn moves
- assign special class to rook moves
- assign special class to horse moves
- opt: restart button
*/

var yCoordinates = ["A", "B", "C", "D", "E", "F", "G", "H"];

function generateBoard() {
  var columnStart = [0, 8, 16, 24, 32, 40, 48, 56]; 
  //created divs outline
  for (var i=0; i< 64; i++) {
    var box = document.createElement("div");
    $(box).attr("id", i);
    $(box).attr("class", "tile");
    $("#boxes").append(box);
  }
  //identifying and giving attrbutes
  for (var i=0; i<8; i++) {
    for (var z=0; z<8; z++){
      
      //var yCoordinatesTEMP = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black"];
      //$("#" + (z+columnStart[i])).css("background-color", yCoordinatesTEMP[i]);
      
      //giving black and white tile attributes
      if (i%2 == 0 && z%2 == 1){
        $("#" + (z+columnStart[i])).addClass(yCoordinates[i]+" "+z+" black");
    }
      else if (i%2 == 1 && z%2 == 0){
      $("#" + (z+columnStart[i])).addClass(yCoordinates[i]+" "+z+" black");
    }
      else {
      $("#" + (z+columnStart[i])).addClass(yCoordinates[i]+" "+z+" white");
    }
   }
      //}
  }}
function activateEventClick() {
  $(".pawn").click(pawnClicked);
  $(".rook").click(rookClicked);
  $(".horse").click(horseClicked);
  $(".bishop").click(bishopClicked);
  $(".queen").click(queenClicked);
  $(".king").click(kingClicked);}
function emptyVars() {
  var lastClicked = "";
  var classArray = "";
  var currentMoves = "";}
function placement(){
  //pawns
  {var wpawn = $("<img width='80px' height = '80px' class='whitePiece pawn' src='https://images.vexels.com/media/users/3/143290/isolated/preview/3dc0e132939ad9ebff880b64637ea820-pawn-chess-figure-white-by-vexels.png'>");
    var bpawn = $("<img width='80px' height = '80px' class='blackPiece pawn' src='https://images.vexels.com/media/users/3/143289/isolated/preview/759a1d9598eae60232ca7a56b19f5a7d-pawn-chess-figure-by-vexels.png'>");
    $(".B").append(bpawn);
    $(".G").append(wpawn);}
  //rook
  {var prook = ["0", "7"];
   for (i=0;i<2;i++) {
     var wrook = $("<img width='80px' height = '80px'  class='whitePiece rook' src='https://images.vexels.com/media/users/3/143224/isolated/preview/be2b821fd2c442cd1a7e26bc086ba091-rook-chess-figure-white-by-vexels.png'>");
    var brook = $("<img width='80px' height = '80px'  class='blackPiece rook'  src='https://images.vexels.com/media/users/3/143223/isolated/preview/2ac9bfd45b5f61c5425789214ce4ea4e-rook-chess-figure-by-vexels.png'>");
     $(".A."+prook[i]).append(brook);
     $(".H."+prook[i]).append(wrook);
  } 
 }
  //horse
  {var phorse = ["1", "6"];
   for (i=0;i<2;i++) {
     var whorse = $("<img width='80px' height = '80px'   class='whitePiece horse' src='https://images.vexels.com/media/users/3/143173/isolated/preview/b34a47b2a0e9d773aa199f7ae0f0a7ca-knight-chess-figure-by-vexels.png'>");
    var bhorse = $("<img width='80px' height = '80px'   class='blackPiece horse' src='https://images.vexels.com/media/users/3/143174/isolated/preview/34f1b2b61373f599d8f735e91ce37851-knight-chess-figure-black-by-vexels.png'>");
     $(".A."+phorse[i]).append(bhorse);
     $(".H."+phorse[i]).append(whorse);
  } 
 }
  //bishop
  {var pbishop = ["2", "5"];
   for (i=0;i<2;i++) {
     var wbishop = $("<img width='100px' height = '80px' class='whitePiece bishop' src='https://images.vexels.com/media/users/3/143272/isolated/preview/270aa40d920d040a999bc44d27a2e114-bishop-chess-figure-white-by-vexels.png'>");
    var bbishop = $("<img width='100px' height = '80px' class='blackPiece bishop' src='https://images.vexels.com/media/users/3/143271/isolated/preview/a787a26d69a5c257e7f05d7d416f9389-bishop-chess-figure-by-vexels.png'>");
     $(".A."+pbishop[i]).append(bbishop);
     $(".H."+pbishop[i]).append(wbishop);
  } 
 }
  //queen
  {var wqueen = $("<img width='90px' height = '80px' class='whitePiece queen' src='https://images.vexels.com/media/users/3/143217/isolated/preview/b37faca0051e61f5f393c949c1f4907e-queen-chess-figure-white-by-vexels.png'>");
   var bqueen = $("<img width='90px' height = '80px' class='blackPiece queen' src='https://images.vexels.com/media/users/3/143216/isolated/preview/2ae1ced518237938f0aa487655a0362b-queen-chess-figure-black-by-vexels.png'>");
     $(".A.4").append(bqueen);
     $(".H.4").append(wqueen);
 }
  //king
  {var wking = $("<img width='90px' height = '80px'  class='whitePiece king' src='https://images.vexels.com/media/users/3/143267/isolated/preview/80c9ad2648bc76689e7167cfd68306e4-king-chess-figure-by-vexels.png'>");
   var bking = $("<img width='90px' height = '80px'  class='blackPiece king' src='https://images.vexels.com/media/users/3/143268/isolated/preview/efccbb14ab51440300ce79d55dc23551-king-chess-figure-black-by-vexels.png'>");
     $(".A.3").append(bking);
     $(".H.3").append(wking);
 }}
function pieceClicked() {
  for (var i=0;i<64;i++){
    $("#"+i).removeClass("special");
  }
  classArray = lastClicked.attr("class").split(" ");}
emptyVars();
generateBoard();
placement();


//pawn moves
function pawnClicked(){
  lastClicked = $(this).closest("div");
  console.log("pawn clicked!");
  pieceClicked();
  
  //black pawns special first move 
  if (classArray[1] == "B" && $(this).hasClass("blackPiece") ){
     for(var z=0;z<2;z++){
       currentMoves = $("."+yCoordinates[z+2]+"."+classArray[2]);
       currentMoves.addClass("special");
   }
  }

  //white pawns special first move 
  else if (classArray[1] == "G" && $(this).hasClass("whitePiece") ){
    for(var z=0;z<2;z++){
      currentMoves = $("."+yCoordinates[z+4]+"."+ classArray[2]);
      currentMoves.addClass("special");
    }
  }

  //black pawns normal move 
  else if($(this).hasClass("blackPiece")){
    $("."+yCoordinates[yCoordinates.indexOf(classArray[1]) + 1]+"."+classArray[2]).addClass("special");
    //eating
  }

  //white pawns normal move
  else if ($(this).hasClass("whitePiece") ){
    for (var i=0;i<8;i++){
    $("."+yCoordinates[yCoordinates.indexOf(classArray[1]) - 1]+"."+classArray[2]).addClass("special");
      }
    }
    
    else{
      console.log("pawn clicked but special tiles assigned not recognised");
    }}
//rook moves
function rookClicked(){
  lastClicked = $(this).closest("div");
  console.log("rook clicked!");
  pieceClicked();
  
  currentMoves = $("."+classArray[1]+", ."+classArray[2])
  $("."+classArray[1]).toggleClass("special");
  $("."+classArray[2]).toggleClass("special");}
//horse moves
function horseClicked() {
  lastClicked = $(this).closest("div");
  console.log("horse clicked!");
  pieceClicked();
  console.log(classArray);
  
  currentMoves = [];
  var ycoords = "";
  var horsey = [2, -2, 1, -1];
  var horsex = [1, -1, 2, -2];

  //setting moves
  for (var z=0;z<2;z++){
    for(var i=0;i<2;i++){
      ycoords = "."+yCoordinates[yCoordinates.indexOf(classArray[1]) + horsey[z]];
      currentMoves.push($(ycoords+"."+(parseInt(classArray[2])+horsex[i])));
    }}

  for (var z=2;z<5;z++){
    for(var i=2;i<5;i++){
      ycoords = "."+yCoordinates[yCoordinates.indexOf(classArray[1]) + horsey[z]];
      currentMoves.push($(ycoords+"."+(parseInt(classArray[2])+horsex[i])));
    }}
  //setting special class
  for (var i=0;i<9;i++){
    currentMoves[i].addClass("special");
  }}
//bishop moves
function bishopClicked() {
  lastClicked = $(this).closest("div");
  console.log("bishop clicked!");
  pieceClicked();

  console.log(classArray);
  var currentMovesY = yCoordinates.indexOf(classArray[1]);
  var currentMovesX = parseInt(classArray[2]);


}
//queen moves
function queenClicked() {
  lastClicked = $(this).closest("div");
  console.log("queen clicked!");
  pieceClicked();

  console.log(classArray);
  currentMoves = $("."+classArray[1]+", ."+classArray[2])
  $("."+classArray[1]).toggleClass("special");
  $("."+classArray[2]).toggleClass("special");
}
//king moves
function kingClicked() {
  lastClicked = $(this).closest("div");
  console.log("king clicked!");
  pieceClicked();
  console.log(classArray);
  //currentMoves = 
}

activateEventClick()

//tile clicking and actual moving  
$(".tile").click(function(){
  console.log("tile clicked");

  if($(this).hasClass("special")){
    //if this console log appears, function most definetly running
    console.log("special tile clicked");
    //lactClicked = parent of img, in here you're removing the img and appending somewhere else
    var currentImg = $(lastClicked).html();
    $(lastClicked).html("");
    $(this).append($(currentImg));
    activateEventClick()
    emptyVars()
    for (var i=0;i<64;i++){
    $("#"+i).removeClass("special");
    }}});

//restart button function
function restart(){
  for (var i=0;i<64;i++) {
    $("#"+i).html("");
    $("#"+i).removeClass("special");
  }
  placement()
  activateEventClick()
  emptyVars()}

/*
things left to do:
- assign special class to bishop moves
- assign special class to queen moves
- assign special class to king moves
- let rivals eat each other
  - pawn eats sideways
- blocking function with other pieces (remove special class)
  - pawns blocked when something facing them
  - own side pieces blocks each other (exception: horse)
- analyse all king's possible moves, remove class if:
  - any rival piece possible moves able to start eating function on king
  - blocking own pieces (automatic)
- castling
- opt: null all pieces moves when king's checked
- opt: wining sign (e.g. C H E C K M A T E)
- opt: log
*/