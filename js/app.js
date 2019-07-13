var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('activecol');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

// Sidebar

function openNav() {
  document.getElementById('mySidenav').style.display = 'block';
  // document.getElementById('mySidenav').style.height = '100%';
  // document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  // document.getElementById('mySidenav').style.height = '0';
  document.getElementById('mySidenav').style.display = 'none';
}

function openList() {
  document.querySelector('.openlist').style.display = 'block';
}

function closeList() {
  document.querySelector('.openlist').style.display = 'none';
}
function openList2() {
  document.querySelector('.openlist2').style.display = 'block';
}

function closeList2() {
  document.querySelector('.openlist2').style.display = 'none';
}
