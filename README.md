Point au 6/1/24 :

    SCSS :
    Seul le fichier styles/style.css est importé dans app.jsx
    style.css est compilé du fichier style.Scss
        - le fichier style.scss importe tous les autres fichiers scss (1 par composant) stocké dans le même dossier
        - style.scss importe aussi breakpoint et config-scss, qui gère le breakpoint responsive (mobile) et les 2 couleurs de base (ces 2 fichiers sont aussi importés dans tous les autres fichiers scss)
    

    dépendances installées :
        -react
        -react-dom
        -react-router-dom

        -prop-types
        -fort-awesome

    +nom start
    +sass watch

A faire : (cf surlignages liste des étapes clés)

    Implémenter page 404
    finir responsive (fiche notamment)
    3 renders au chargement de la fiche?
    router mauvais num de fiche vers 404
    animer collapse (Attention, changer code jsx surement)
    animer rotation fleche collapse
    animer carousel (optionnel)

    suivre cours :
        - Animations CSS
        - creer documentation de vos projets