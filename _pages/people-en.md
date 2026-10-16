---
permalink: /people/
title: "Lab Members"
excerpt: "Meet the Intelligent Data and Scientific Computing Lab at Northwest Normal University."
author_profile: true
author: en
lang: en
lang_switch_url: /zh/people/
---

<div class="lab-members-page">
  <p class="lab-members-kicker">INTELLIGENT DATA AND SCIENTIFIC COMPUTING LAB</p>
  <h1>Lab Members</h1>
  <p class="lab-members-intro">We study intelligent computing for graph data and its applications in science, education, and industry.</p>
  <p class="lab-members-photo-note">All student portraits are virtual examples and can be replaced with actual photos later.</p>

  <section class="lab-members-section" aria-labelledby="faculty-heading">
    <h2 id="faculty-heading">🧭 Faculty</h2>
    <div class="lab-faculty-grid">
      {% for member in site.data.lab_members.faculty %}
        {% assign member_name = member.name_en | default: "Faculty profile to be added" %}
        <article class="lab-faculty-entry">
          <div class="lab-directory-copy">
            <p class="lab-directory-role">{{ member.role_en }}</p>
            <h3>{{ member_name }}</h3>
            <p class="lab-directory-title">{{ member.title_en }}</p>
            {% if member.research_en != "" %}<p class="lab-directory-research">{{ member.research_en }}</p>{% endif %}
            <div class="lab-directory-links">
              {% if member.scholar_url != "" %}<a href="{{ member.scholar_url }}" target="_blank" rel="noopener">Google Scholar ↗</a>{% endif %}
              {% if member.homepage != "" %}<a href="{{ member.homepage }}" target="_blank" rel="noopener">Personal homepage ↗</a>{% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section" aria-labelledby="phd-heading">
    <div class="lab-members-section-heading">
      <h2 id="phd-heading">🎓 Ph.D. Students</h2>
      <span class="lab-members-count">{{ site.data.lab_members.phd_students | size }}</span>
    </div>
    <div class="lab-student-grid lab-student-grid--phd">
      {% for member in site.data.lab_members.phd_students %}
        {% assign fallback_name = "Ph.D. Student " | append: forloop.index %}
        {% assign member_name = member.name_en | default: fallback_name %}
        <article class="lab-student-entry">
          {% if member.photo != "" %}<img class="lab-student-photo" src="{{ member.photo | relative_url }}" alt="Photo of {{ member_name }}" loading="lazy">{% endif %}
          <div class="lab-directory-copy">
            <h3>{{ member_name }}</h3>
            {% if member.research_en != "" %}<p class="lab-directory-research">{{ member.research_en }}</p>{% else %}<p class="lab-directory-placeholder">Profile details to be added</p>{% endif %}
            {% if member.year != "" %}<p class="lab-directory-year">{{ member.year }}</p>{% endif %}
            {% if member.homepage != "" %}<a class="lab-directory-homepage" href="{{ member.homepage }}" target="_blank" rel="noopener">Personal homepage ↗</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section" aria-labelledby="masters-heading">
    <div class="lab-members-section-heading">
      <h2 id="masters-heading">🎓 Master’s Students</h2>
      <span class="lab-members-count">{{ site.data.lab_members.masters_students | size }}</span>
    </div>
    <div class="lab-student-grid lab-student-grid--masters">
      {% for member in site.data.lab_members.masters_students %}
        {% assign fallback_name = "Master’s Student " | append: forloop.index %}
        {% assign member_name = member.name_en | default: fallback_name %}
        <article class="lab-student-entry">
          {% if member.photo != "" %}<img class="lab-student-photo" src="{{ member.photo | relative_url }}" alt="Photo of {{ member_name }}" loading="lazy">{% endif %}
          <div class="lab-directory-copy">
            <h3>{{ member_name }}</h3>
            {% if member.research_en != "" %}<p class="lab-directory-research">{{ member.research_en }}</p>{% else %}<p class="lab-directory-placeholder">Profile details to be added</p>{% endif %}
            {% if member.year != "" %}<p class="lab-directory-year">{{ member.year }}</p>{% endif %}
            {% if member.homepage != "" %}<a class="lab-directory-homepage" href="{{ member.homepage }}" target="_blank" rel="noopener">Personal homepage ↗</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="lab-members-section lab-destinations" aria-labelledby="destinations-heading">
    <div class="lab-members-section-heading">
      <h2 id="destinations-heading">🎓 Alumni Ph.D. Study</h2>
    </div>
    {% assign left_alumni = site.data.phd_alumni | slice: 0, 14 %}
    {% assign right_alumni = site.data.phd_alumni | slice: 14, 13 %}
    <div class="lab-destinations-columns">
      {% for alumni_column in (1..2) %}
      <div class="lab-destinations-table-wrap">
        <table class="lab-destinations-table">
          <thead><tr><th scope="col">Cohort</th><th scope="col">Name</th><th scope="col">Ph.D. Institution</th></tr></thead>
          <tbody>
            {% if alumni_column == 1 %}{% assign column_alumni = left_alumni %}{% else %}{% assign column_alumni = right_alumni %}{% endif %}
            {% for alum in column_alumni %}
            <tr><td>{{ alum.cohort | remove: "级" | prepend: "20" }}</td><td>{% if alum.url != "" %}<a class="lab-alumni-link" href="{{ alum.url }}" target="_blank" rel="noopener">{{ alum.name_en }} <span aria-hidden="true">↗</span></a>{% else %}{{ alum.name_en }}{% endif %}</td><td>{{ alum.phd_school_en }}</td></tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
      {% endfor %}
    </div>
  </section>
</div>
