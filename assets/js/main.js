// ThermoBuild Systems — shared site behaviour
(function(){
  // Nav shadow on scroll
  var nav = document.getElementById('navbar');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 8){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu toggle
  window.toggleMenu = function(){
    var menu = document.getElementById('mobileMenu');
    if(menu) menu.classList.toggle('open');
  };

  // Close mobile menu when a link is clicked
  document.addEventListener('click', function(e){
    var menu = document.getElementById('mobileMenu');
    if(menu && menu.classList.contains('open') && e.target.tagName === 'A' && menu.contains(e.target)){
      menu.classList.remove('open');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i){
        if(i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  // Project category filter (used on projects.html)
  window.filterProjects = function(cat, btnEl){
    document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
    if(btnEl) btnEl.classList.add('active');
    var cards = document.querySelectorAll('#projectsGrid .project-card');
    var visibleCount = 0;
    cards.forEach(function(card){
      var show = (cat === 'all') || (card.dataset.cat === cat) || (card.dataset.status === cat);
      card.style.display = show ? '' : 'none';
      if(show) visibleCount++;
    });
    var empty = document.getElementById('projectsEmpty');
    if(empty) empty.style.display = visibleCount === 0 ? 'block' : 'none';
  };

  // Quote request form — file name preview only.
  // Actual submission now goes to FormSubmit (see contact.html), which emails
  // the enquiry to info@thermobuild.ie and redirects to thank-you.html.
  var quoteForm = document.getElementById('quoteForm');
  if(quoteForm){
    var fileInput = document.getElementById('project-files');
    var fileList = document.getElementById('file-list');
    if(fileInput){
      fileInput.addEventListener('change', function(){
        if(fileInput.files.length){
          var names = Array.prototype.map.call(fileInput.files, function(f){ return f.name; });
          fileList.textContent = names.length + ' file(s) selected: ' + names.join(', ');
        } else {
          fileList.textContent = '';
        }
      });
    }
  }

  // Cookie consent banner
  var COOKIE_KEY = 'thermobuild_cookie_consent';
  var banner = document.getElementById('cookieBanner');
  if(banner){
    try{
      if(!localStorage.getItem(COOKIE_KEY)){
        banner.classList.add('show');
      }
    }catch(err){ banner.classList.add('show'); }
    var acceptBtn = document.getElementById('cookieAccept');
    var declineBtn = document.getElementById('cookieDecline');
    if(acceptBtn) acceptBtn.addEventListener('click', function(){
      try{ localStorage.setItem(COOKIE_KEY, 'accepted'); }catch(err){}
      banner.classList.remove('show');
    });
    if(declineBtn) declineBtn.addEventListener('click', function(){
      try{ localStorage.setItem(COOKIE_KEY, 'declined'); }catch(err){}
      banner.classList.remove('show');
    });
  }
})();
