//PSEUDO CODE : au défilement vers le bas, je souhaite que mes éléments "row" apparaîssent doucement en mouvement vers le haut

console.log('connecté !');

const rows = document.querySelectorAll('[class*="hide-"]');
console.log(rows);

const options = {
    root: null,// c'est déjà le cas par défaut donc pas obligé de mettre, signifie qu'on observe le viewport
    threshold: 0.5,//échelle de 0 à 1. 0 par défaut signifie que dès qu'on voit un micro bout de l'intersection ça se déclenche. 1 signifie qu'il vaut voir l'entièreté de l'intersection pour que ça se déclenche. 0.25 signifie qu'il faut voir 25% de la section pour que ça se déclenche.
    rootMargin:  "-400px 0px 0px 0px",//applique une distance à partir de laquelle l'IntersectionObserve se déclenche, par défaut 0, là si on met -200px ça se déclenchera 200px AU DESSUS de la ligne. Marche que en px ou %. Marche aussi de la droite vers la gauche si on fait du sidescrolling.
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry =>{
        console.log(entry.target);//permet d'avoir juste la section ciblée dans la console 
      if(!entry.isIntersecting){//! signifie que c'est faux
        return;//return signifie "stop on arrête la fonction".donc veut dire que si une section est entrain d'intersecting ça ignore et passe direct au classList.toggle. Par contre si une section n'est pas entrain d'intersecting ça veut dire que la fonction s'arrête ici et n'applique pas ce qu'il y a en dessous.
      }
      console.log(entry.target);
      entry.target.classList.add('visible');
      });
  },options);
  
  rows.forEach(row => {//pour appliquer l'action à la NodeList
    observer.observe(row);
  });