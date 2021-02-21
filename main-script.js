function regxdynery(t) {
  return String(t.match(/[^{\}]+(?=})/g)).trim();
}
function beforeLoader() {
  return '<div class="loader"/>';
}
function getFeedUrl(t, i, e) {
  var o = "";
  switch (e) {
    case "comments":
      o = "list" == t ? "/feeds/comments/default?alt=json&max-results=" + i : "/feeds/posts/default/-/" + e + "?alt=json&max-results=" + i;
      break;
    default:
      o = "/feeds/posts/default/-/" + e + "?alt=json&max-results=" + i;
  }
  return o;
}
function getPostLink(t, i) {
  for (var e = 0; e < t[i].link.length; e++)
    if ("alternate" == t[i].link[e].rel) {
      var o = t[i].link[e].href;
      break;
    }
  return o;
}
function getPostTitle(t, i) {
  return t[i].title.$t;
}
function getFirstImage(t, i) {
  var e = $("<div>").html(t).find("img:first").attr("src"),
    o = e.lastIndexOf("/") || 0,
    a = e.lastIndexOf("/", o - 1) || 0,
    n = e.substring(0, a),
    s = e.substring(a, o),
    r = e.substring(o);
  return (s.match(/\/s[0-9]+/g) || s.match(/\/w[0-9]+/g) || "/d" == s) && (s = "/w72-h72-p-k-no-nu"), n + s + r;
}
function getPostImage(t, i, e) {
  var o = t[i].content.$t;
  if (t[i].media$thumbnail) var a = t[i].media$thumbnail.url;
  else a = "https://1.bp.blogspot.com/-LiMF6D7uAKs/YC7Avh5FUwI/AAAAAAAAAI4/EC6jjGKqAH42RJbukr94gdg3Mc8NpYelgCLcBGAsYHQ/s72-c/resim-yok.png";
  return o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1
    ? o.indexOf("<img") > -1
      ? o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < o.indexOf("<img")
        ? a.replace("/default.", "/0.")
        : getFirstImage(o)
      : a.replace("/default.", "/0.")
    : o.indexOf("<img") > -1
    ? getFirstImage(o)
    : "https://1.bp.blogspot.com/-LiMF6D7uAKs/YC7Avh5FUwI/AAAAAAAAAI4/EC6jjGKqAH42RJbukr94gdg3Mc8NpYelgCLcBGAsYHQ/s72-c/resim-yok.png";
}
function getPostAuthor(t, i) {
  return (i = t[i].author[0].name.$t), "true" == messages.postAuthor ? '<span class="entry-author">' + i + "</span>" : "";
}
function getPostDate(t, i) {
  var e = t[i].published.$t,
    o = e.substring(0, 4),
    a = e.substring(5, 7),
    n = e.substring(8, 10),
    s = monthFormat[parseInt(a, 10) - 1] + " " + n + ", " + o;
  if ("true" == messages.postDate) var r = '<span class="entry-time"><time class="published" datetime="' + e + '">' + s + "</time></span>";
  else r = "";
  return r;
}
function getPostMeta(t, i) {
  if ("true" == messages.postAuthor || "true" == messages.postDate) var e = '<div class="meta-list">' + t + i + "</div>";
  else e = "";
  if ("true" == messages.postDate) var o = '<div class="meta-list">' + i + "</div>";
  else o = "";
  return [e, o];
}
function getPostLabel(t, i) {
  if (null != t[i].category) var e = '<span class="entry-category">' + t[i].category[0].term + "</span>";
  else e = "";
  return e;
}
function getCustomStyle(t, i, e) {
  if ("" != e) {
    if ("featured" == t) var o = ".id-" + t + "-" + i + " .entry-category{background-color:" + e + ";color:#fff}.id-" + t + "-" + i + " .loader:after{border-color:" + e + ";border-right-color:rgba(155,155,155,0.2)}";
  } else o = "";
  return o;
}
  (function (t) {
    t.fn.replaceText = function (i, e, o) {
      return this.each(function () {
        var a,
          n,
          s = this.firstChild,
          r = [];
        if (s)
          do {
            3 === s.nodeType && (n = (a = s.nodeValue).replace(i, e)) !== a && (!o && /</.test(n) ? (t(s).before(n), r.push(s)) : (s.nodeValue = n));
          } while ((s = s.nextSibling));
        r.length && t(r).remove();
      });
    };
  })(jQuery),
  (function (t) {
    t.fn.replaceText = function (i, e, o) {
      return this.each(function () {
        var a,
          n,
          s = this.firstChild,
          r = [];
        if (s)
          do {
            3 === s.nodeType && (n = (a = s.nodeValue).replace(i, e)) !== a && (!o && /</.test(n) ? (t(s).before(n), r.push(s)) : (s.nodeValue = n));
          } while ((s = s.nextSibling));
        r.length && t(r).remove();
      });
    };
  })(jQuery),
  $(".search-toggle").on("click", function () {
    $("body").toggleClass("search-active");
  }),
  $("#social-counter ul.social-icons li a").each(function () {
    var t = $(this),
      i = t.find(".count"),
      e = t.data("content").trim().split("$"),
      o = e[0],
      a = e[1];
    t.attr("href", o), i.text(a);
  }),
  $(".avatar-image-container img").attr("src", function (t, i) {
    return (i = i.replace("//dynery.github.io/blank.gif", "//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg")).replace(
      "//dynery.github.io/blank.gif",
      "//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg"
    );
  }),
  $(".post-body a").each(function () {
    var t = $(this),
      i = t.text().trim(),
      e = i.split("/"),
      o = e[0],
      a = e[1],
      n = e.pop();
    i.match("button") && (t.addClass("button").text(o), "button" != a && t.addClass(a), "button" != n && t.addClass("colored-button").css({ "background-color": n }));
  }),
  $(".share-links .window-dynery,.entry-share .window-dynery").on("click", function () {
    var t = $(this),
      i = t.data("url"),
      e = t.data("width"),
      o = t.data("height"),
      a = window.screen.width,
      n = window.screen.height,
      s = Math.round(a / 2 - e / 2),
      r = Math.round(n / 2 - o / 2);
    window.open(i, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + e + ",height=" + o + ",left=" + s + ",top=" + r).focus();
  }),
  $(".share-links").each(function () {
    var t = $(this);
    t.find(".show-hid a").on("click", function () {
      t.toggleClass("show-hidden");
    });
  }),
  $(".about-author .author-description span a").each(function () {
    var t = $(this),
      i = t.text().trim(),
      e = t.attr("href");
    t.replaceWith('<li class="' + i + '"><a href="' + e + '" title="' + i + '" target="_blank"/></li>'), $(".author-description").append($(".author-description span li")), $(".author-description").addClass("show-icons");
  }),
  $(".blog-post-comments").each(function () {
    var t = $(this);
    t.addClass("comments-system-blogger").show(), $(".meta-list .entry-comments-link").addClass("show");
    var i = t.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),
      e = t.find(".comments .toplevel-thread > #top-continue");
    i.on("click", function () {
      e.show();
    }),
      e.on("click", function () {
        e.hide();
      });
  }),
  $(function () {
    $(".mobile-logo").each(function () {
      var t = $(this),
        i = $("#brand .header-widget a").clone();
      i.find("#h1-tag").remove(), i.appendTo(t);
    }),
      $("#mobile-menu").each(function () {
        var t = $(this),
          i = $("#menu-nav").clone();
        i.attr("id", "main-mobile-nav"),
          i.appendTo(t),
          $(".on-mobile-menu, .hide-mobile-menu, .overlay").on("click", function () {
            $("body").toggleClass("nav-active");
          }),
          $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),
          $(".mobile-menu ul li .submenu-toggle").on("click", function (t) {
            $(this).parent().hasClass("has-sub") &&
              (t.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170));
          });
      }),
      $(".social-mobile").each(function () {
        var t = $(this);
        $("#navbar-social ul.social").clone().appendTo(t);
      }),
      $("#header-section .headsection").each(function () {
        var t = $(this),
          i = $(document).scrollTop(),
          e = t.offset().top,
          o = t.height(),
          a = e + o;
        $(window).scroll(function () {
          var e = $(document).scrollTop();
          e < $("#footer-wrapper").offset().top - o && (e > a ? t.addClass("is-fixed") : 0 >= e && t.removeClass("is-fixed"), e > i ? t.removeClass("show") : t.addClass("show"), (i = $(document).scrollTop()));
        });
      }),
      $(".back-top").each(function () {
        var t = $(this);
        $(window).on("scroll", function () {
          $(this).scrollTop() >= 100 ? t.fadeIn(250) : t.fadeOut(250), t.offset().top >= $("#footer-wrapper").offset().top - 32 ? t.addClass("on-footer") : t.removeClass("on-footer");
        }),
          t.click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
          });
      }),
      $("p.comment-content").each(function () {
        var t = $(this);
        t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'),
          t.replaceText(
            /(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,
            '<iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          );
      }),
      $("#load-more-link").each(function () {
        var t = $(this).data("load");
        t && $("#load-more-link").show(),
          $("#load-more-link").on("click", function (i) {
            $("#load-more-link").hide(),
              $.ajax({
                url: t,
                success: function (i) {
                  var e = $(i).find(".blog-posts");
                  e.find(".index-post").addClass("post-animated post-fadeInUp"),
                    $(".blog-posts").append(e.html()),
                    (t = $(i).find("#load-more-link").data("load")) ? $("#load-more-link").show() : ($("#load-more-link").hide(), $("#blog-pager .no-more").addClass("show")),
                    $(".index-post .entry-image-link .entry-thumb").lazydynery();
                },
                beforeSend: function () {
                  $("#blog-pager .loading").show();
                },
                complete: function () {
                  $("#blog-pager .loading").hide();
                },
              }),
              i.preventDefault();
          });
      });
  });
