---
permalink: /zh/people/
title: "实验室人员"
excerpt: "西北师范大学智图实验室成员介绍。"
author_profile: true
author: zh
lang: zh-CN
lang_switch_url: /people/
---

<div class="lab-members-page">
  <p class="lab-members-kicker">智图实验室 · GIL Lab</p>
  <h1>实验室人员</h1>
  <p class="lab-members-intro">课题组围绕图数据智能计算开展研究，并探索其在科学、教育与工业领域的应用。</p>

  <section class="lab-members-section" aria-labelledby="faculty-heading">
    <h2 id="faculty-heading">🧭 课题组教师</h2>
    <div class="lab-faculty-grid">
      {% for member in site.data.lab_members.faculty %}
        {% assign member_name = member.name_zh | default: "教师资料待补充" %}
        <article class="lab-faculty-entry">
          <div class="lab-directory-copy">
            <p class="lab-directory-role">{{ member.role_zh }}</p>
            <h3>{{ member_name }}</h3>
            <p class="lab-directory-title">{{ member.title_zh }}</p>
            {% if member.research_zh != "" %}<p class="lab-directory-research">{{ member.research_zh }}</p>{% endif %}
            <div class="lab-directory-links">
              {% if member.scholar_url != "" %}<a href="{{ member.scholar_url }}" target="_blank" rel="noopener">谷歌学术 ↗</a>{% endif %}
              {% if member.homepage != "" %}<a href="{{ member.homepage }}" target="_blank" rel="noopener">个人主页 ↗</a>{% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section" aria-labelledby="phd-heading">
    <div class="lab-members-section-heading">
      <h2 id="phd-heading">🎓 博士研究生</h2>
      <span class="lab-members-count">{{ site.data.lab_members.phd_students | size }} 人</span>
    </div>
    <div class="lab-student-grid lab-student-grid--phd">
      {% for member in site.data.lab_members.phd_students %}
        {% assign fallback_name = "博士生 " | append: forloop.index %}
        {% assign member_name = member.name_zh | default: fallback_name %}
        <article class="lab-student-entry">
          {% if member.photo != "" %}<img class="lab-student-photo" src="{{ member.photo | relative_url }}" alt="{{ member_name }} 的照片" loading="lazy">{% endif %}
          <div class="lab-directory-copy">
            <h3>{{ member_name }}</h3>
            {% if member.research_zh != "" %}<p class="lab-directory-research">{{ member.research_zh }}</p>{% else %}<p class="lab-directory-placeholder">姓名与研究方向待补充</p>{% endif %}
            {% if member.year != "" %}<p class="lab-directory-year">{{ member.year }}</p>{% endif %}
            {% if member.homepage != "" %}<a class="lab-directory-homepage" href="{{ member.homepage }}" target="_blank" rel="noopener">个人主页 ↗</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section" aria-labelledby="masters-heading">
    <div class="lab-members-section-heading">
      <h2 id="masters-heading">🎓 硕士研究生</h2>
      <span class="lab-members-count">{{ site.data.lab_members.masters_students | size }} 人</span>
    </div>
    <div class="lab-student-grid lab-student-grid--masters">
      {% for member in site.data.lab_members.masters_students %}
        {% assign fallback_name = "硕士生 " | append: forloop.index %}
        {% assign member_name = member.name_zh | default: fallback_name %}
        <article class="lab-student-entry">
          {% if member.photo != "" %}<img class="lab-student-photo" src="{{ member.photo | relative_url }}" alt="{{ member_name }} 的照片" loading="lazy">{% endif %}
          <div class="lab-directory-copy">
            <h3>{{ member_name }}</h3>
            {% if member.research_zh != "" %}<p class="lab-directory-research">{{ member.research_zh }}</p>{% else %}<p class="lab-directory-placeholder">姓名与研究方向待补充</p>{% endif %}
            {% if member.year != "" %}<p class="lab-directory-year">{{ member.year }}</p>{% endif %}
            {% if member.homepage != "" %}<a class="lab-directory-homepage" href="{{ member.homepage }}" target="_blank" rel="noopener">个人主页 ↗</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section lab-destinations" aria-labelledby="destinations-heading">
    <div class="lab-members-section-heading">
      <h2 id="destinations-heading">🎓 毕业生读博情况</h2>
      <span class="lab-members-count">{{ site.data.phd_alumni | size }} 人</span>
    </div>
    {% assign left_alumni = site.data.phd_alumni | slice: 0, 14 %}
    {% assign right_alumni = site.data.phd_alumni | slice: 14, 13 %}
    <div class="lab-destinations-columns">
      {% for alumni_column in (1..2) %}
      <div class="lab-destinations-table-wrap">
        <table class="lab-destinations-table">
          <thead><tr><th scope="col">年级</th><th scope="col">姓名</th><th scope="col">读博学校</th></tr></thead>
          <tbody>
            {% if alumni_column == 1 %}{% assign column_alumni = left_alumni %}{% else %}{% assign column_alumni = right_alumni %}{% endif %}
            {% for alum in column_alumni %}
            <tr><td>{{ alum.cohort }}</td><td>{% if alum.url != "" %}<a class="lab-alumni-link" href="{{ alum.url }}" target="_blank" rel="noopener">{{ alum.name }} <span aria-hidden="true">↗</span></a>{% else %}{{ alum.name }}{% endif %}</td><td>{{ alum.phd_school }}</td></tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
      {% endfor %}
    </div>
  </section>
</div>
