
let d, e;
let tableauMots = [];
let tableauChiffres = [];
let r, s;
let b;
let couleur;

let tourne;
let bouge;


function setup(){
    createCanvas(windowWidth, windowHeight);

    r = 0;
    s = 0;
    tourne = 0
    bouge = 0
    b = 250;
    couleur1 = 240;
    couleur2 = 240;
    couleur3 = 240;
    
    

    //on crée deux tableaux, l'un avec les mots, l'autre avec les chiffres
    tableauMots.push({text:'cliquer', font: 'Play', opacite: 50, x: windowWidth/2, y: windowHeight/3, taille: 70, vitesse: 1});
    tableauMots.push({text:'excecuter', font: 'Source Code Pro', opacite: 150, x: 20, y: windowHeight/2.9, taille: 50, vitesse: 0.5});
    tableauMots.push({text:'erreur', font: 'Oswald', opacite: 450, x: 150, y: windowHeight/1.2, taille: 60, vitesse: 2});
    tableauMots.push({text:'installer', font: 'Play', opacite: 50, x: 50, y: windowHeight/3.8, taille: 60, vitesse: 0.5});
    tableauMots.push({text:'initialiser', font: 'Source Code Pro', opacite: 150, x: 200, y: windowHeight/1.6, taille: 40, vitesse: -1.4});
    tableauMots.push({text:'chargement', font: 'Play', opacite: 130, x: 350, y: windowHeight/1.8, taille: 70, vitesse: 0.5});
    tableauMots.push({text:'demarrer', font: 'Oswald', opacite: 210, x: 50, y: windowHeight/1.8, taille: 50, vitesse: -1});
    tableauMots.push({text:'mise a jour', font: 'Play', opacite: 250, x: 250, y: windowHeight/1.3, taille: 35, vitesse: -0.5});
    tableauMots.push({text:'data', font: 'Oswald', opacite: 240, x: 150, y: windowHeight/2.5, taille: 90, vitesse: -0.3});
    tableauMots.push({text:'bug', font: 'Oswald', opacite: 170, x: 0, y: windowHeight/2, taille: 40, vitesse: -0.5});
    tableauMots.push({text:'hardware', font: 'Source Code Pro', opacite: 230, x: 250, y: windowHeight/2.2, taille: 60, vitesse: -2});
    tableauMots.push({text:'stockage', font: 'Source Code Pro', opacite: 180, x: 150, y: windowHeight/1.7, taille: 35, vitesse: 0.8});
    tableauMots.push({text:'systeme', font: 'Play', opacite: 170, x: 450, y: windowHeight/1.5, taille: 90, vitesse: 0.3});
    tableauMots.push({text:'reseau', font: 'Oswald', opacite: 60, x: 500, y: windowHeight/1.4, taille: 40, vitesse: 1});
    tableauMots.push({text:'serveur', font: 'Source Code Pro', opacite: 200, x: 350, y: windowHeight/3, taille: 60, vitesse: -1.4});

    tableauChiffres.push({text: '1', font: 'Oswald', opacite: 240, x: windowWidth/2.5, y: 160, taille: 140, vitesse: 0.4});
    tableauChiffres.push({text: '0', font: 'Oswald', opacite: 240, x: windowWidth/2.5, y: 160*2, taille: 140, vitesse: 0.4});
    tableauChiffres.push({text: '0', font: 'Oswald', opacite: 240, x: windowWidth/2.5, y: 160*3, taille: 140, vitesse: 0.4});
    tableauChiffres.push({text: '1', font: 'Oswald', opacite: 240, x: windowWidth/2.5, y: 160*4, taille: 140, vitesse: 0.4});

    tableauChiffres.push({text: '0   1 0  1', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0 1  0', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*2, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '1   1 0  1', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*3, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '1   1 0  1', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*4, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0 1  0', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*5, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0 0  0', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*6, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0 1  0', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*7, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0 1  ', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*8, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0   ', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*9, taille: 60, vitesse: 2});
    tableauChiffres.push({text: '0   0   ', font: 'Oswald', opacite: 190, x: windowWidth/2.4, y: 80*10, taille: 60, vitesse: 2});

    tableauChiffres.push({text: '1  0   1   0  1 0    1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35, taille: 25, vitesse: -1.7});
    tableauChiffres.push({text: '0  0   0   1  1 1    0', font: 'Roboto Mono',  opacite: 140, x: windowWidth/2.8, y: 35*2, taille: 25, vitesse: -1.7});
    tableauChiffres.push({text: '0  1   1   0  1 0    1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*4, taille: 25, vitesse: -1.7});
    tableauChiffres.push({text: '0  0   0   0  0 1    1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*5, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0  1       0  1 0    1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*6, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0  0       0  0      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*7, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          1  0      1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*8, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          0  1      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*9, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          0  1      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*10, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '1          0  1      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*11, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          0  1      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*12, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          0  1      0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*13, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '1          0  1      1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*14, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          1  1       ', font: 'Roboto Mono',opacite: 140, x: windowWidth/2.8, y: 35*15, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          1  1       ', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*16, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '1          0  1   1   ', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*17, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0          0      0  1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*18, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '1          0      0  1', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*19, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '0  0       1      1  0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*20, taille: 25, vitesse: -0.2});
    tableauChiffres.push({text: '1  1       0      1  0', font: 'Roboto Mono', opacite: 140, x: windowWidth/2.8, y: 35*21, taille: 25, vitesse: -0.2});

    tableauChiffres.push({text: '0', font: 'Oswald', opacite: 100, x: windowWidth/2, y: 380, taille: 300, vitesse: -1.6});
    
    tableauChiffres.push({text: '0', font: 'Roboto Mono', opacite: 230, x: windowWidth/2.7, y: 100, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '1', font: 'Roboto Mono', opacite: 230, x: windowWidth/2.7, y: 100*2, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '1', font: 'Roboto Mono', opacite: 230, x: windowWidth/2.7, y: 100*2, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '1', font: 'Roboto Mono', opacite: 230, x: windowWidth/2, y: 100*3, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '0', font: 'Roboto Mono', opacite: 230, x: windowWidth/2.7, y: 100*4, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '0', font: 'Roboto Mono', opacite: 230, x: windowWidth/2, y: 100*5, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '1', font: 'Roboto Mono', opacite: 230, x: windowWidth/2, y: 100*6, taille: 80, vitesse: 4});
    tableauChiffres.push({text: '0', font: 'Roboto Mono', opacite: 230, x: windowWidth/2, y: 100*7, taille: 80, vitesse: 4});
    

      



}

function draw(){
    background(0,0,0);
   
  
   

    //si une touche du clavier est pressé pendant longtemps, le cercle se mets à tourner de plus en plus vite et loin
    if(keyIsPressed === true){
        
        b = 0;
        bouge = bouge + 0.3;
        tourne = tourne + 1;
        if (tourne > 60){
            couleur1 = random(0,255);
            couleur2 = random(0,255);
            couleur3 = random(0,255);
        }
    
        //console.log(tourne); 
        
    //backgroud(couleur,0,0);
     
    //sinon le cercle retourne à son point de départ 
    }else {
        tourne = 0;
        bouge = 0;
        couleur1 =240;
        couleur2 =240;
        couleur3 =240;    
      
        
    }
    //console.log(tourne);
    //console.log(r);
    noStroke();    
     translate(p5.Vector.fromAngle(millis() / bouge, tourne));
      
    //d permet de calculer la distance entre la position de la sourie et le centre du cercle (grace au calcule de l'hypothenus d'un triangle rectangle)
    d= Math.sqrt((windowWidth/2-mouseX)*(windowWidth/2-mouseX) + (windowHeight/2-mouseY)*(windowHeight/2-mouseY));
    // e est le rayon du cercle (qui change en fonction du canvas)
    e = windowWidth/6
    //console.log(d + " - "+ e);
  
    // quand d est > à a, cela veut dire que la sourie est hors du cercle, dans ce cas on affiche le texte
    if(d > e){ 
        afficherTexte();
    } else {
        
        afficherChiffres();
    }

    textSize(10);
    fill(40,40,40, b);
    text('texte: doucle click', 10,15);
    text('cercle: clavier',10,25); 

   
} 


// grace à cette fonction, la vitesse du texte augmente quand on double-click
function doubleClicked(){   
            if(mouseButton == LEFT){
               r = r + 3;
               s = s - 3;
               if((r > 10) && (s < - 10)){
                   r = r +35;
                   s = s - 35;
               }
               if ((r > 100) && (s < -100)){
                   r = 0
                   s = 0
               }
               
            }
           // console.log(r);
}
  
function afficherTexte(){
       
    background(couleur1, couleur2, couleur3);
    fill(40);
    ellipse(windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);
    
        //on utilise les données du tableau
        for(var i = 0; i < tableauMots.length; i++){
            fill(240,240,240, tableauMots[i].opacite)
            textSize(tableauMots[i].taille); 
            textFont(tableauMots[i].font);
            text(tableauMots[i].text, tableauMots[i].x, tableauMots[i].y);
            //x c'est le point de départ du texte, il se déplace à une vitesse définit qui change en fonction de r et s ( quand double click) 
            
            if (tableauMots[i].vitesse > 0){
                tableauMots[i].x = tableauMots[i].x + tableauMots[i].vitesse + r; 
                //les mots reviennent, lorsqu'ils dépacent la limite du canvas (et inversement)
                if(tableauMots[i].x > windowWidth){
                    tableauMots[i].x = 0;
                }
            } else {
                tableauMots[i].x = tableauMots[i].x + tableauMots[i].vitesse + s;
                if(tableauMots[i].x < 0){
                    tableauMots[i].x = windowWidth;
                }
            }
        }

       


}

function afficherChiffres(){
    background(40);
    fill(couleur1, couleur2, couleur3);
    ellipse(windowWidth/2, windowHeight/2, windowWidth/3, windowWidth/3);

    for(let i = 0; i < tableauChiffres.length; i++){
        fill(40, 40, 40, tableauChiffres[i].opacite);
        textSize(tableauChiffres[i].taille);
        textFont(tableauChiffres[i].font);
        text(tableauChiffres[i].text, tableauChiffres[i].x, tableauChiffres[i].y)
        
        if(tableauChiffres[i].vitesse > 0 ){
            tableauChiffres[i].y = tableauChiffres[i].y + tableauChiffres[i].vitesse + r;
            if(tableauChiffres[i].y > windowHeight){
                tableauChiffres[i].y = 0;
            }
        } else {
            tableauChiffres[i].y = tableauChiffres[i].y + tableauChiffres[i].vitesse + s; 
            if(tableauChiffres[i].y < 0){
                tableauChiffres[i].y = windowHeight;
            }
        }
    } 
}
