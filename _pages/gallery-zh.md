---
permalink: /zh/gallery/
title: "实验室相册"
excerpt: "智图实验室的毕业合影、学术交流与日常记录。"
author_profile: true
author: zh
lang: zh-CN
lang_switch_url: /gallery/
---

<div class="lab-gallery-page">
  <p class="lab-gallery-kicker">智图实验室 · Graph Intelligence Lab</p>
  <h1>实验室相册</h1>
  <p class="lab-gallery-intro">毕业合影、学术交流和日常记录。</p>

  <section class="lab-gallery-section" aria-labelledby="gallery-graduation">
    <h2 id="gallery-graduation">毕业留影</h2>
    <div class="lab-gallery-grid lab-gallery-grid--graduation">
      {% for photo in site.data.lab_gallery.graduation %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.zh }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.zh }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>

  <section class="lab-gallery-section" aria-labelledby="gallery-academic">
    <h2 id="gallery-academic">学术交流</h2>
    <div class="lab-gallery-grid lab-gallery-grid--academic">
      {% for photo in site.data.lab_gallery.academic %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.zh }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.zh }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>

  <section class="lab-gallery-section" aria-labelledby="gallery-daily">
    <h2 id="gallery-daily">日常记录</h2>
    <div class="lab-gallery-grid lab-gallery-grid--daily">
      {% for photo in site.data.lab_gallery.daily %}
      <figure>
        <a href="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}"><img src="{{ '/images/lab-gallery/' | append: photo.file | relative_url }}" alt="{{ photo.zh }}" loading="lazy" decoding="async"></a>
        <figcaption>{{ photo.zh }}</figcaption>
      </figure>
      {% endfor %}
    </div>
  </section>
</div>
{% include lab-gallery-lightbox.html title="照片预览" close="关闭照片" %}
