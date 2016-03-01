

        // change color for selected article
        function select(id) {
          var elements = document.getElementsByClassName("inner");
          var logo = document.getElementsByClassName("icons");
          for (var i=0; i<elements.length; i++) {
            elements[i].style.backgroundColor = (elements[i].id == id) ? "#87BD65" : "#6A974E";
          }
          for (var i=0; i<logo.length; i++) {
            logo[i].style.backgroundColor = (logo[i].id == id) ? "#87BD65" : "#6A974E";
          }
        }

        // create fragment
        function create(htmlStr) {
          var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
          temp.innerHTML = htmlStr;
          while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
          }
          return frag;
        }

        // ADD new article
        function add_article() {
          var fragment = create('<div class="col-33 padding"><div class="item article_item"><div class="heading_item"><div class="date"><p>7/11/2014</p></div><h3>PROJECT: SANCTUARY</h3></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin suscipit leo et tincidunt luctus.</p></div></div>');
          document.getElementById("rows_byclick").appendChild(fragment);
        }



        // CAROUSEL
        var BANNER = {};
        BANNER.num = 0;

        BANNER.slides_list = document.getElementsByClassName('js-banner__slide');
        BANNER.slides = [];

        BANNER.positions_list;
        BANNER.positions = [];
        BANNER.position = 0;
        BANNER.position_of = function(obj) {
          var all_children = this.parentNode.childNodes;
          var index = 0;
          for (var i = 0; i < all_children.length; i++) {
          index = i;
          if (this === all_children[i]) {
            break;
          }
          }
          BANNER.position = index;
          BANNER.change('manual');
          };


            // CHANGE BANNER
            BANNER.change = function(value) {
              BANNER.slides[BANNER.num].className = BANNER.slides[BANNER.num].className.replace(/(?:^|\s)active(?!\S)/g,'');
              BANNER.positions[BANNER.num].className = '';
              if (BANNER.num + value > BANNER.slides.length - 1) {
                BANNER.num = 0;
              } else if (BANNER.num + value < 0) {
                BANNER.num = BANNER.slides.length -1;
              } else if (value === 'manual') {
                BANNER.num = BANNER.position;
              } else {
                BANNER.num += value;
              }
              BANNER.slides[BANNER.num].className += ' active';
              BANNER.positions[BANNER.num].className = 'active';
            };

            // INITIALIZE
            BANNER.init = function() {
                  for (var i = 0; i < BANNER.slides_list.length; i++) {
                    BANNER.slides[i] = BANNER.slides_list[i];
                    document.getElementsByClassName('banner__position')[0].appendChild(document.createElement('li'));
                  }
                  BANNER.slides[0].className += ' active';
                  BANNER.positions_list = document.getElementsByClassName('banner__position')[0].children;
                  for (var i = 0; i < BANNER.slides.length; i++) {
                    BANNER.positions[i] = BANNER.positions_list[i];
                  }
                  BANNER.positions[0].className = 'active';
                  for (var i = 0; i < BANNER.positions.length; i++) {
                    BANNER.positions[i].addEventListener('click', BANNER.position_of, false);
                  }

                  document.getElementsByClassName('js-banner__left')[0].onclick = function() {
                    BANNER.change(-1);
                  };
                  document.getElementsByClassName('js-banner__right')[0].onclick = function() {
                    BANNER.change(1);
                  };
                };

                BANNER.init();
