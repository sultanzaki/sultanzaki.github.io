var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
loop: true,
delay: 75,
});

typewriter
.pauseFor(1500)
.typeString('SITH-R')
.pauseFor(600)
.deleteChars(7)
.typeString('Sekolah')
.pauseFor(600)
.deleteChars(7)
.typeString('Ilmu')
.pauseFor(600)
.deleteChars(4)
.typeString('Teknologi')
.pauseFor(600)
.deleteChars(9)
.typeString('Hayati')
.pauseFor(600)
.deleteChars(6)
.typeString('Program')
.pauseFor(600)
.deleteChars(7)
.typeString('Rekayasa')
.pauseFor(600)
.deleteChars(8)
.start();