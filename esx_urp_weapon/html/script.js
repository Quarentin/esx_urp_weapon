var currentMelee = 0;
var currentPistol = 0;
var currentRifle = 0;
var currentOther = 0;

var documentWidth = document.documentElement.clientWidth;
var documentHeight = document.documentElement.clientHeight;

var cursor = document.getElementById("cursor");
var cursorX = documentWidth / 2;
var cursorY = documentHeight / 2;

function UpdateCursorPos() {
 cursor.style.left = cursorX;
 cursor.style.top = cursorY;
}

function Click(x, y) {
 var element = $(document.elementFromPoint(x, y));
 element.focus().click();
}

$(function() {
 window.addEventListener('message', function(event) {
  var data = event.data;
  if (data.type == "enableui") {
   document.body.style.display = data.enable ? "block" : "none";
   $("#meleeWeapons").html(data.melee);
   $("#pistolWeapons").html(data.pistol);
   $("#rifleWeapons").html(data.rifle);
   $("#otherWeapons").html(data.other);
   if (currentMelee > 0) {document.getElementById(currentMelee).style.backgroundColor = 'rgba(118, 134, 148,0.4)'}
   if (currentPistol > 0) {document.getElementById(currentPistol).style.backgroundColor = 'rgba(118, 134, 148,0.4)'}
   if (currentRifle > 0) {document.getElementById(currentRifle).style.backgroundColor = 'rgba(118, 134, 148,0.4)'}
   if (currentOther > 0) {document.getElementById(currentOther).style.backgroundColor = 'rgba(118, 134, 148,0.4)'}
  }
 });

 $(document).mousemove(function(event) {
  cursorX = event.pageX;
  cursorY = event.pageY;
  UpdateCursorPos();
 });

 document.onkeyup = function(data) {
  if (data.which == 27) {
   $.post('http://esx_urp_weapon/escape', JSON.stringify({melee: currentMelee, pistol: currentPistol, rifle: currentRifle, other: currentOther}));
  }
 };
});

function selectMelee(id) {
 if (currentMelee > 0) {
  document.getElementById(currentMelee).style.backgroundColor = 'rgba(0,0,0,0.5)';
 }
 currentMelee = id
 document.getElementById(id).style.backgroundColor = 'rgba(118, 134, 148,0.4)';
}

function selectPistol(id) {
 if (currentPistol > 0) {
  document.getElementById(currentPistol).style.backgroundColor = 'rgba(0,0,0,0.5)';
 }
 currentPistol = id
 document.getElementById(id).style.backgroundColor = 'rgba(118, 134, 148,0.4)';
}

function selectRifle(id) {
 if (currentRifle > 0) {
  document.getElementById(currentRifle).style.backgroundColor = 'rgba(0,0,0,0.5)';
 }
 currentRifle = id
 document.getElementById(id).style.backgroundColor = 'rgba(118, 134, 148,0.4)';
}

function selectOther(id) {
 if (currentOther > 0) {
  document.getElementById(currentOther).style.backgroundColor = 'rgba(0,0,0,0.5)';
 }
 currentOther = id
 document.getElementById(id).style.backgroundColor = 'rgba(118, 134, 148,0.4)';
}