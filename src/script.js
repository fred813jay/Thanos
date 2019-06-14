var bookdata = [
  {title:"Thanos - Wikipedia",
   net:"https://en.wikipedia.org/wiki/Thanos",
   content:"Thanos is a fictional supervillain appearing in American comic books published by Marvel Comics. The character, created by writer/artist Jim Starlin, first appeared in The Invincible Iron Man #55 (cover dated February 1973)."},
  {title:"Thanos (Earth-616) | Marvel Database | FANDOM powered by Wikia",
   net:"https://marvel.fandom.com/wiki/Thanos_(Earth-616)",
   content:"Thanos was one of the last sons of A'Lars, progenitor of the second colony of Eternals on Titan, and Sui-San, the last survivor of the original settlement of ..."},
  {title:"Thanos | Marvel Cinematic Universe Wiki | FANDOM powered by Wikia",
  net:"https://marvelcinematicuniverse.fandom.com/wiki/Thanos",
   content:"Thanos was the genocidal warlord from Titan, whose own main objective was to bring stability to the universe, as he believed its massive population would ..."},   {title:"Infinity War Part III: The Trial of Thanos - Escapist Magazine",
   net:"https://www.escapistmagazine.com/v2/2019/04/25/infinity-war-part-iii-the-trial-of-thanos/",
   content:"Congratulations! You've just defeated Thanos and restored order to the universe. The only thing left to do is have him stand trial for his crimes."},
  {title:"Thanos (The Mad Titan) | Characters | Marvel",
   net:"https://www.marvel.com/characters/thanos",
   content:"Thanos, The Mad Titan quests across the universe in search of the Infinity Stones, intending to use their limitless power for shocking purposes."} 
]

var randomID= []
var result= []
var vm = new Vue({
  el: "#app",
  data: {
    books: bookdata,
    name: 'Thanos',
    randomID: randomID,
    result: result
  }, 
  methods: {
    clickpic: function(){
      alert('Hello ' + this.name + '!')
      disappear();
    },
    reclick: function(){
      alert('Fail ' + this.name + '!');
      for (var i=0 ; i< randomID.length ; i++){
        var id = randomID[i];
        $(id).css('transition','opacity 2s linear');
        $(id).css('opacity','1');
        $(id).css('pointer-events','auto')
        result.splice(i,1);
      };
      result.length = 0;
      randomID.length = 0;
    }
  }
});


function disappear(){
   for (var i=0 ;; i++){
   var ran = Math.floor(Math.random() * bookdata.length);
   var id = '#'+'book'+ran;
   if (randomID.indexOf(id) == -1){
     randomID.push(id);
     $('html,body').animate({scrollTop: $(id).offset().top/2},500)
     $(id).css('transition','opacity 1.2s linear');
     $(id).css('opacity','0');
     $(id).css('pointer-events','none')
     result.push(bookdata[ran]);
     setTimeout(() => {
        return disappear();
     }, 2000)
     break;
   }
   else if (randomID.length == bookdata.length){
     $('html,body').animate({scrollTop: $('html,body').offset().top},500)
     break;
   }
 }
}


