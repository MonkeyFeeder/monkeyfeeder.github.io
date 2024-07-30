---
layout: splash
title: 'Mael Landrin'
permalink: '/'
header:
    overlay_image: /assets/images/developer-illustration.svg
    actions:
        - label: 'Apprenez à me connaître'
          url: '/a-propos/'
excerpt: 'Développeur Web et Mobile à Bordeaux. Moins cher, plus impliqué et plus rapide que les agences.'
feature_row:
    - image_path: assets/images/airbus.png
      alt: 'développeur web et mobile bordeaux'
      title: "Airbus - Leader mondial de l'aéronautique"
      excerpt: "Refonte de l'intranet d'Airbus en utilisant React, assurant une interface utilisateur moderne et une performance optimisée pour les employés."
      url: 'https://www.airbus.com/en'
      btn_label: 'Voir le site'
      btn_class: 'btn--primary'
feature_row2:
    - image_path: /assets/images/president.png
      alt: 'logo president fromages'
      title: 'Président - Marque de fromages la plus connue en France'
      excerpt: "Développement et optimisation des sites internet pour Président FR et UK, sur WordPress, pour sa simplicité d'utilisation et sa flexibilité."
      url: 'https://president.fr/'
      btn_label: 'Voir le site'
      btn_class: 'btn--primary'
feature_row3:
    - image_path: /assets/images/decide-work.svg
      alt: 'logo Decide'
      title: 'Decide - Outil de sourcing pour les entreprises'
      excerpt: "Directeur technique et développeur pour Decide et ses projets, sur le site web et l'application mobile."
      url: 'https://decide.work/'
      btn_label: 'Voir le site'
      btn_class: 'btn--primary'
feature_row4:
    - image_path: /assets/images/siggis.png
      alt: 'logo Siggis'
      title: 'Siggis - Marque de yaourts islandais'
      excerpt: 'Développement de tous les sites Siggis internationaux ( sauf Canada ) sur WordPress, totalement administrable par les équipes marketing.'
      url: 'https://siggis-skyr.fr/'
      btn_label: 'Voir le site'
      btn_class: 'btn--primary'
feature_row5:
    - title: 'Galbani, Uniwise, Lémiel, Célia...'
      excerpt: 'Découvrez tous mes clients et leurs projets'
      url: '/experiences/'
      btn_label: 'Voir mes références'
      btn_class: 'btn--primary'
---

{% include feature_row id="feature_row" type="right" %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="left" %}

{% include feature_row id="feature_row5" type="center" %}

<h2>Mes prestations</h2>

<section class="showcase">
    <div class="offer">
        <h2>Site<br/> Vitrine</h2>
        <p class="price">2000€</p>
        <ul class="advantages">
            <li>Maquettage + Dévelopement + Référencement + Livraison</li>
            <li>Présenter son entreprise</li>
            <li>Être visible sur internet</li>
            <li>Améliorer sa notoriété en ligne</li>
            <li>Optimiser référencement naturel</li>
        </ul>
    </div>
    <div class="offer">
        <h2>SEO<br/>/Référencement</h2>
        <p class="price">4 articles/mois: 100€</p>
        <p class="price">8 articles/mois: 150€</p>
        <ul class="advantages">
            <li>Script professionnel pour la rédaction d'articles</li>
            <li>Améliorer sa visibilité en ligne</li>
            <li>Attirer des clients</li>
            <li>Améliorer son CA</li>
        </ul>
    </div>
    <div class="offer">
        <h2>Site E-commerce</h2>
        <p class="price">À partir de 3000€</p>
        <ul class="advantages">
            <li>Maquettage + Développement + Référencement + Livraison</li>
            <li>Améliorer sa visibilité en ligne</li>
            <li>Vendre ses produits en ligne de manière sécurisée</li>
            <li>Améliorer son CA</li>
        </ul>
    </div>
    <div class="offer">
        <h2>Site/Application Personnalisé(e)</h2>
        <p class="price">Sur devis</p>
        <ul class="advantages">
            <li>RDV de découverte + Design + Développement + Livraison</li>
            <li>Répondre à un besoin particulier</li>
            <li>Optimiser un processus dans son entreprise</li>
        </ul>
    </div>
</section>
<p class="contact-me-button">
    <a href="/contact/" class="btn btn--primary">Contactez-moi</a>
</p>

<style>
.showcase {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.offer {
    background-color: #fff;
    border-radius: 8px;
    padding: 1.1rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}

.offer:hover {
    transform: translateY(-5px);
    border: 1px solid #3498db;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.offer h2 {
    margin-bottom: 1rem;
    color: #34495e;
    margin-top: 0;
}

.offer .price {
    margin-bottom: 0;
    font-weight: 600;
}

.offer .advantages {
    list-style: none;
    padding: 0;
}

.offer .advantages li {
    margin-bottom: 0.5rem;
    color: #7f8c8d;
}

.contact-me-button {
    text-align: center;
    font-size: 34px !important;
}

@media (min-width: 768px) {
    .showcase {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .offer {
        width: 24%;
        margin-bottom: 2rem;
    }
}

</style>
