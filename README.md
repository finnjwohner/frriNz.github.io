# F28WP Lab 1 Repo

This is the repo required to complete Lab 1. It includes a basic static website that uses Jekyll to automatically generate content, and is hosted on github pages.

---

## Website Layout

- **Index.html** The home page of the website, contains an introductory sentence and links to all dynamic posts.
  1. **Post 1** The first dynamic post of the website.
  2. **Post 2** The second dynamic post of the website.
  3. **Post 3, Etc.**

---

## Jekyll

Jekyll is used in this website to dynamically display the posts, and provide layouts for other pages.

The most complicated piece of Jekyll code in this repository is;
```
{% for post in site.posts %}
  {% if post.url == page.url %}
		{% continue %}
	{% endif %}
	<a href="{{ post.url }}">{{ post.title }}</a> / 
{% endfor %}
```
Located in *_layouts/post.html*, this code displays a link to all dynamic posts on the website excluding the post that the code is run on.
