var listaFilmes = ["https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg","https://conteudo.imguol.com.br/c/entretenimento/bc/2022/06/22/poster-oficial-de-house-of-the-dragon-1655915054477_v2_3x4.jpg","https://i.pinimg.com/originals/17/1a/65/171a65476b4bfce21f9b3d6d0c609c7a.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/91/66/66/20156966.jpg","https://img.elo7.com.br/product/zoom/2677C5D/big-poster-filme-o-espetacular-homem-aranha-2012-lo02-90x60-marvel.jpg","https://sm.ign.com/ign_br/screenshot/default/image1_2jjv.jpg","https://img.elo7.com.br/product/original/2C0062E/big-poster-filme-o-estranho-mundo-de-jack-tamanho-90x60-cm-o-estranho-mundo-de-jack.jpg"];

var nomeFilmes = ['One Piece', 'House of the Dragon', 'Five Nights at Freddie´s',"A espera de um milagre","O Espetacular Homem-Aranha","Homem-Aranha: Através do Aranhaverso","O Estranho Mundo de Jack"]

var regex = /\.jpg$/;

document.write('<div class="container_todosFilmes">');

for(var i = 0; i < listaFilmes.length; i++){
  if(regex.test(listaFilmes[i])){
    document.write('<div class="container_filme">');
    document.write('<a href="https://onepieceex.net/">');
    document.write('<img src=' + listaFilmes[i] +'>');
    document.write('</a>');
    document.write('<p>'+ nomeFilmes[i] +'</p>');
    document.write('</div>')
  }
}

document.write('</div>');

/*
var i = 0;
while(i < listaFilmes.length){
  document.write('<img src= ' + listaFilmes[i] + '>');
  
  i++;
}*/