---
layout: story
og_title: 最新消息
og_description: "這裡有最新文章、新聞報導"
og_image: 
toc: false
---

<div class="ui container">
  <div class="ui stackable grid">

    <div class="twelve wide column">
      <h2 class="ui dividing header">
        <i class="file alternate outline icon"></i>
        <div class="content">
          最新文章
          <div class="sub header">探索我們最新發布的專題報導與文章</div>
        </div>
      </h2>
      <a href="/feed.xml" target="_blank" class="ui mini label orange" style="margin-bottom: 1em;">
        <i class="rss icon"></i> RSS 訂閱
      </a>

      {% assign story_categories = "" | split: "," %}
      {% for item in site.data.about.story %}
        {% unless story_categories contains item.category %}
          {% assign story_categories = story_categories | push: item.category %}
        {% endunless %}
      {% endfor %}

      <nav class="story-filter-bar" aria-label="文章分類篩選">
        <div class="story-filter-bar__topline">
          <div class="story-filter-heading">文章分類</div>
          <div id="story-filter-summary" class="story-filter-summary" aria-live="polite"></div>
        </div>
        <div class="story-filter-buttons">
          <button type="button" class="story-filter active" data-filter-type="all" data-filter-value="">
            全部
          </button>
          {% for category in story_categories %}
          <button
            type="button"
            class="story-filter"
            data-filter-type="category"
            data-filter-value="{{ category | escape }}"
          >
            {{ category }}
          </button>
          {% endfor %}
        </div>
      </nav>

      <div class="ui relaxed divided list">
      {% assign new_articles = "" | split: "," %}
      {% assign old_articles = "" | split: "," %}
      
      {% for item in site.data.about.story %}
        {% if forloop.index <= 10 %}
          {% assign new_articles = new_articles | push: item %}
        {% else %}
          {% assign old_articles = old_articles | push: item %}
        {% endif %}
      {% endfor %}

      {% for item in new_articles %}
        <div
          class="item story-article-item"
          data-category="{{ item.category | escape }}"
          style="padding: 1em 0;"
        >
          <i class="large file alternate middle aligned icon" style="color: #666;"></i>
          <div class="content">
            <a class="header" href="/story/{{ item.slug }}" target="_blank" style="font-size: 1.2em; margin-bottom: 0.3em;">
              {{ item.title }}
            </a>
            <div class="description" style="color: #888;">
              <i class="calendar alternate outline icon"></i> {{ item.date }}
            </div>
            <div class="story-list-taxonomy">
              <button type="button" class="ui mini label story-filter-link" data-filter-type="category" data-filter-value="{{ item.category | escape }}">
                {{ item.category }}
              </button>
            </div>
          </div>
        </div>
      {% endfor %}
      </div>

      {% if old_articles.size > 0 %}
      <div class="ui fluid accordion" id="older-articles-accordion">
        <div class="title" style="padding: 1em 0; font-size: 1.1em; color: #555; border-top: 1px solid rgba(34, 36, 38, .15);">
          <i class="dropdown icon"></i>
          過往文章
        </div>
        <div class="content">
          <div class="ui relaxed divided list">
          {% for item in old_articles %}
            <div
              class="item story-article-item"
              data-category="{{ item.category | escape }}"
              style="padding: 1em 0;"
            >
              <i class="large file alternate middle aligned icon" style="color: #666;"></i>
              <div class="content">
                <a class="header" href="/story/{{ item.slug }}" target="_blank" style="font-size: 1.1em; margin-bottom: 0.3em;">
                  {{ item.title }}
                </a>
                <div class="description" style="color: #888;">
                  <i class="calendar alternate outline icon"></i> {{ item.date }}
                </div>
                <div class="story-list-taxonomy">
                  <button type="button" class="ui mini label story-filter-link" data-filter-type="category" data-filter-value="{{ item.category | escape }}">
                    {{ item.category }}
                  </button>
                </div>
              </div>
            </div>
          {% endfor %}
          </div>
        </div>
      </div>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          $('.ui.accordion').accordion();

          const articleItems = Array.from(document.querySelectorAll('.story-article-item'));
          const filterButtons = Array.from(document.querySelectorAll('.story-filter'));
          const filterSummary = document.getElementById('story-filter-summary');
          const olderAccordion = $('#older-articles-accordion');

          function setActiveButton(type, value) {
            filterButtons.forEach(function(button) {
              const isActive =
                button.dataset.filterType === type &&
                button.dataset.filterValue === value;
              button.classList.toggle('active', isActive);
            });
          }

          function applyStoryFilter(type, value, updateUrl) {
            let visibleCount = 0;

            articleItems.forEach(function(item) {
              const visible =
                type === 'all' ||
                (type === 'category' && item.dataset.category === value);

              item.hidden = !visible;
              if (visible) visibleCount += 1;
            });

            setActiveButton(type, value);
            filterSummary.textContent =
              type === 'all'
                ? `共 ${visibleCount} 篇`
                : `${visibleCount} 篇`;

            if (type !== 'all') {
              olderAccordion.accordion('open', 0);
            }

            if (updateUrl) {
              const url = new URL(window.location.href);
              url.searchParams.delete('category');
              if (type !== 'all') url.searchParams.set(type, value);
              window.history.replaceState({}, '', url);
            }
          }

          document.querySelectorAll('.story-filter, .story-filter-link').forEach(function(button) {
            button.addEventListener('click', function() {
              applyStoryFilter(
                button.dataset.filterType,
                button.dataset.filterValue,
                true
              );
            });
          });

          const params = new URLSearchParams(window.location.search);
          if (params.has('category')) {
            applyStoryFilter('category', params.get('category'), false);
          } else {
            applyStoryFilter('all', '', false);
          }
        });
      </script>
      {% endif %}
    </div>

    <div class="four wide column">
      
      <div class="ui segments">
        <div class="ui secondary segment">
          <h4 class="ui header">
            <i class="newspaper outline icon"></i>
            媒體報導
          </h4>
        </div>
        <div class="ui segment">
          <div class="ui relaxed divided list">
          {% assign recent_ocf = "" | split: "," %}
          {% assign older_ocf = "" | split: "," %}
          {% for item in site.data.about.ocf %}
            {% if forloop.index <= 7 %}
              {% assign recent_ocf = recent_ocf | push: item %}
            {% else %}
              {% assign older_ocf = older_ocf | push: item %}
            {% endif %}
          {% endfor %}

          {% for item in recent_ocf %}
            <div class="item">
              <div class="content">
                <a class="header" href="{{ item.url }}" target="_blank" style="font-size: 1em;">
                  {{ item.title }}
                </a>
                <div class="description" style="font-size: 0.85em; color: #777; margin-top: 0.3em;">
                  {{ item.date }} &middot; {{ item.media }}
                </div>
              </div>
            </div>
          {% endfor %}
          </div>

          {% if older_ocf.size > 0 %}
          <div class="ui fluid accordion" style="margin-top: 1em;">
            <div class="title" style="padding: 0.5em 0; font-size: 0.9em; color: #555; text-align: center; border-top: 1px solid rgba(34, 36, 38, .15);">
              <i class="dropdown icon"></i>
              顯示更早的報導
            </div>
            <div class="content">
              <div class="ui relaxed divided list">
              {% for item in older_ocf %}
                <div class="item">
                  <div class="content">
                    <a class="header" href="{{ item.url }}" target="_blank" style="font-size: 1em;">
                      {{ item.title }}
                    </a>
                    <div class="description" style="font-size: 0.85em; color: #777; margin-top: 0.3em;">
                      {{ item.date }} &middot; {{ item.media }}
                    </div>
                  </div>
                </div>
              {% endfor %}
              </div>
            </div>
          </div>
          {% endif %}
        </div>
      </div>

      <div class="ui segments" style="margin-top: 2em;">
        <div class="ui secondary segment">
          <h4 class="ui header">
            <i class="globe icon"></i>
            開源 / 開放文化相關報導
          </h4>
        </div>
        <div class="ui segment">
          <div class="ui relaxed divided list">
          {% for item in site.data.about.floss %}
            <div class="item">
              <div class="content">
                <a class="header" href="{{ item.url }}" target="_blank" style="font-size: 1em;">
                  {{ item.title }}
                </a>
                <div class="description" style="font-size: 0.85em; color: #777; margin-top: 0.3em;">
                  {{ item.date }} &middot; {{ item.media }}
                </div>
              </div>
            </div>
          {% endfor %}
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
