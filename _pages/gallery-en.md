---
permalink: /gallery/
title: "Gallery"
excerpt: "Graduation, academic events, and everyday moments at the Graph Intelligence Lab."
author_profile: true
author: en
lang: en
lang_switch_url: /zh/gallery/
---

<div class="lab-gallery-page">
  <p class="lab-gallery-kicker">GRAPH INTELLIGENCE LAB · GIL LAB</p>
  <h1>Gallery</h1>
  <p class="lab-gallery-intro">Graduations, academic events, and moments from lab life.</p>

  <section class="lab-gallery-section" aria-labelledby="gallery-graduation">
    <h2 id="gallery-graduation">Graduation</h2>
    <div class="lab-gallery-grid lab-gallery-grid--graduation">
      {% for photo in site.data.lab_gallery.graduation %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.en }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.en }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>

  <section class="lab-gallery-section" aria-labelledby="gallery-academic">
    <h2 id="gallery-academic">Academic Events</h2>
    <div class="lab-gallery-grid lab-gallery-grid--academic">
      {% for photo in site.data.lab_gallery.academic %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.en }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.en }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>

  <section class="lab-gallery-section" aria-labelledby="gallery-daily">
    <h2 id="gallery-daily">Lab Life</h2>
    <div class="lab-gallery-grid lab-gallery-grid--daily">
      {% for photo in site.data.lab_gallery.daily %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.en }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.en }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>
</div>
{% include lab-gallery-lightbox.html title="Photo preview" close="Close photo" %}
