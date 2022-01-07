class Project {
  constructor(title, description, image="", link="javascript:void(0);,'self") {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

const projects = [
  new Project("Guava", "An mobile app for creating and sharing travel itineraries.", "/images/guava.png", "https://github.com/SpencerLaudie/Guava"),
  new Project("","This site is still under development. Come back soon to see more of my projects!", "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
]

var index = 0;

$(document).ready(function() {
  // populate projects with first four
  while (index < projects.length && index < 4) {
    appendProject(projects[index]);
    index++;
  }
  isMore();

  // smooth scroll to anchor
  $('a[href*="#"]')
    .click(function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
});

function appendProject(proj) {
  console.log(proj.link);
  let html = "<div class='project-container' onclick=\"window.open('" + proj.link + "');\"><div class='project-card'>";
  html += "<div class='project-thumb'><img src='" + proj.image + "'/></div>";
  html += "<div class='project-desc'><h3>" + proj.title + "</h3>";
  html += "<p>" + proj.description + "</p></div></div></a></div>";
  $('#projects').append(html);
}

function seeMore() {
  let i = 0;
  while (index < projects.length && i < 2) {
    appendProject(projects[index]);
    index++;
    i++;
  }
  isMore();
}

function isMore() {
  if (index >= projects.length) {
    $('#see_more').hide();
  }
}
