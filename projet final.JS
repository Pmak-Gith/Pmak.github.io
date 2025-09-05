function Fcompetence(){
    
    const Affiche=document.getElementById("select").value;
    const P1=document.getElementById("P1");
    switch(Affiche)
    {case "DevWeb":P1.textContent="Actuellement étudiant en Développement Web, mes compétences en Html, CSS et JavaScript ont considérablement progressé au cours de ces dernières semaines. De ce fait, comme peut vous le démontrer la page devant vous, je suis à mesure de créer et héberger des sites avec des interactions basiques et un  design visuellement stylés.";
    break;
    case "bureautique":P1.textContent="Je beigne dans la bureautique depuis tout petit avec à la clé un brevet obtenu dès mes 12 ans avec mention. Word, Excel, Publisher et Powerpoint font partie de mes logiciels de prédilection. Je me suis longuement instruit en autodidacte.";  
    break;
    case "GestPro":P1.textContent="La conception et la gestion de projet a été un élément prépondérant dans mon parcours universitaire. C’est un domaine fondamental qui a longtemps constitué l’essentiel de mes travaux. A ce jour, je travaille et participe régulièrement en sous-traitance aussi bien avec des particuliers que des organismes dans la conception et la gestion des leurs projets.";
    break;
    case "Env":P1.textContent="Mes études universitaires ont porté sur les sciences de l’environnement. Avec une spécialisation en environnement et développement durable, je peux tout aussi bien intervenir dans les travaux de conservation, de gestion et même de planification de modèle économique durable. J’ai travaillé dans le reboisement, l’agroforesterie, l’urbanisation et la prévention des inondations dans les zones marécageuses. ";
    break;
    default:
    P1.textContent="Veillez choisir une compétence !"   }
}

function Fprojet(){
    const V1=document.getElementById("vol").value;
    const PP1=document.getElementById("PP1");
    const PP2=document.getElementById("PP2");
    const PP3=document.getElementById("PP3");

    switch(V1)
        {case "1" :PP1.textContent="Monter Ma société de Développement Web"; PP2.textContent="Former d'autres Jeunes aux métiers du numérique";PP3.textContent="Exploiter la visibilité du Web pour gagner en notoriété";
        break;
        case "2":PP1.textContent="Me servir du Web pour instruire le commun de mortels sur la nécessité de protéger la nature"; PP2.textContent="Elever ma carrière au plus haut point";PP3.textContent="Voyager à travers le monde";
        break;
        case "3":PP1.textContent="Faire des études Doctorales"; PP2.textContent="Devenir professeur d'Université et chercheur"; PP3.textContent="Prendre ma retraite après avoir marqué mon époque";
        break;
         default:PP1.textContent=PP2.textContent=PP3.textContent="Faites glisser le bouton";
    }
}