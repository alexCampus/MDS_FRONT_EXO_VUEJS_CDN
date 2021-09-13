## Ex 1 - Découverte VueJS

Utilisation de VueJS avec le CDN

### Consignes

- Nous avons une application de todo liste basique en html et JS, nous allons transformer cette app vers VueJS


- Le but est de reproduire le même comportement avec VueJS

### Etapes

1. Commencez par tester et lire le code existant


2. Importer le cdn de vueJS dans le ficher html


3. Ajouter le Vue Devtools dans votre navigateur (cela nous permettra de débugger et d'avoir un outil de dev dédié à Vue)


4. Créer un fichier *scriptVue.js* dans lequel nous allons commencer à faire du Vue et ajouter le dans votre fichier html et commenter l'appel au fichier *script.js*


5. En suivant le documentation Vue remplacer le titre H1 de la page par un premier composant Vue
    - Explorer le Vue Devtools
    - Qu'est ce que vous comprenez du code, du debugger ?


6. Allons un peu plus loin
    - Maintenant on va définir un composant pour la liste dans votre fichier *scriptVue.js*, ajouter un nouveau composant Vue list qui aura pour structure :
      ``` 
       let list = new Vue({ 
            el: '#list', 
            name: 'list', 
            data: { 
                message: 'Liste de TODOS', 
            }, 
       });
         ```
    - modifier le fichier html pour afficher le message
    

7. Affichons maintenant les élèments de la liste : 
    - Ajouter une data *todos* qui aura comme valeur le tableau *datas* dans le composant liste :
      ```
      todos : datas
      ```
   - Vue nous permet d'utiliser tous les event et méthodes javascript, nous pouvons donc faire un rendu de la liste comme dans l'exemple (faire une boucle pour afficher chacun des li) 
      - En réutilisant le code HTML / JS présent dans le fichier *script.js*, réafficher la liste grâce à Vue.
      - Tips 
         - un v-for sera bien utile 
         - commencer simple avec juste un li avec le titre
         - adapter le code html/js pour que cela marche avec Vue
   

8. On devient réactif :
   - Changer le composant list par un composant app sur l'id *app* 
   - Récuperer les valeur des inputs title et author
   - en réutilisant la méthode addTodo et en l'adpatant faire en sorte que l'on puisse ajouter un nouveau todo
      - Que constatez vous ?


9. Allez soyons fou, BONUS
   - En vous servant de la documentation et du code JS déja présent remettre les fonctionnalités suivantes: 
      - Click sur la corbeille, supprime le todo de la liste
      - Click sur le check, coche la checkbox et barre le texte
      - Click sur la checkbox : 
         1. Si la checkbox n'est pas coché, on barre le text 
         2. Si la checkbox est coché, on remet le texte non barré
    

## Conclusions

1. Quels les avantages et inconvénients de cette méthode d'utilisation de Vue ?
2. Quels les avantages par rapport à Vanilla JS ?
3. Débriefons tous ensemble !!!
    
