// function removeActiveMenu() {
//   menu.forEach(function (item) {
//     item.classList.remove("active");
//   });
// }

// let lang = document.querySelector(".lang");
// let langCurrent = document.querySelector(" .lang .lang__current span");
// let langOpt = document.querySelector(".lang .lang__options");
// let langItem = document.querySelectorAll(
//   ".lang .lang__options .lang__options-item"
// );
// lang.addEventListener("click", function (e) {
//   e.stopPropagation();
//   langOpt.classList.toggle("active");
// });

// document.addEventListener("click", function () {
//   langOpt.classList.remove("active");
// });

// langItem.forEach(function (item) {
//   item.addEventListener("click", function () {
//     let langText = this.textContent;
//     let langCurrentSpan = langCurrent.textContent;
//     langCurrent.innerHTML = langText;
//     this.innerHTML = langCurrentSpan;
//   });
// });

// let backtop = document.querySelector(".backtop");
// backtop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// let backgroundHeader = document.querySelector("header");
// let positionProduct = document.querySelector(".products").offsetTop;
// let heightHeader = document.querySelector("header").offsetHeight;
// let positionFooter = document.querySelector("footer").offsetTop;
// window.addEventListener("scroll", function () {
//   let positionScroll = window.pageYOffset;
//   if (positionScroll > positionProduct - heightHeader + 20) {
//     backtop.style.display = "block";
//     backgroundHeader.classList.add("active");
//     langOpt.style.color = "black";
//   } else {
//     backtop.style.display = "none";
//     backgroundHeader.classList.remove("active");
//     langOpt.style.color = "white";
//   }
// });
// let menu = document.querySelectorAll("header .menu a");
// let sections = [];

// menu.forEach(function (element, index) {
//   let href = element.getAttribute("href");
//   let className = href.replace("#", "");
//   let section = document.querySelector("." + className);
//   sections.push(section);
//   element.addEventListener("click", function () {
//     window.scrollTo({
//       top: section.offsetTop - heightHeader + 1,
//       behavior: "smooth",
//     });
//     removeActiveMenu();
//     element.classList.add("active");
//   });
// });
// window.addEventListener("scroll", function (e) {
//   let positionscroll = window.pageYOffset;

//   sections.forEach(function (section, index) {
//     if (
//       positionscroll > section.offsetTop - heightHeader &&
//       positionscroll < section.offsetTop + section.offsetHeight
//     ) {
//       removeActiveMenu();
//       menu[index].classList.add("active");
//     } else {
//       menu[index].classList.remove("active");
//     }
//   });
// });

// let button_video = document.querySelectorAll(".video__item-img");
// let popup_video = document.querySelector(".popup-video");
// let close_button = document.querySelector(".close");
// let iframe = document.querySelector(".popup-video iframe");

// button_video.forEach(function (button) {
//   button.addEventListener("click", function () {
//     let video_id = button.getAttribute("video-id");
//     iframe.setAttribute(
//       "src",
//       "https://www.youtube.com/embed/" + video_id + "?autoplay=1"
//     );
//     popup_video.style.display = "flex";
//     document.querySelector("body").style.overflow = "hidden";
//   });
// });
// close_button.addEventListener("click", function () {
//   popup_video.style.display = "none";
//   iframe.setAttribute("src", "");
//
// });

// document.querySelector(".popup-video").addEventListener("click", function (e) {
//   popup_video.style.display = "none";
//   iframe.setAttribute("src", "");
//   document.querySelector("body").style.overflow = "scroll";
// });

// let listItemSlider = document.querySelectorAll(".slider__item");
// let number = document.querySelector(".slider__bottom .paging .number");
// let currentSilder = 0;
// let dotted = document.querySelectorAll(".slider__bottom .paging .dotted li");

// listItemSlider.forEach(function (itemSlider, index) {
//   if (itemSlider.classList.contains("active")) {
//     currentSilder = index;
//   }
// });

// function showNumber(index) {
//   number.innerHTML = index.toString().padStart("2", "0");
// }

// let next_button = document.querySelector(".control__next");
// next_button.addEventListener("click", function () {
//   if (currentSilder < listItemSlider.length - 1) {
//     control(currentSilder + 1);

//   } else {
//     control(0);
//     // listItemSlider[currentSilder].classList.remove("active");
//     // listItemSlider[0].classList.add("active");
//     // currentSilder = 0;
//   }
// });

// let pre_button = document.querySelector(".control__pre");
// pre_button.addEventListener("click", function () {
//   if (currentSilder > 0) {
//     control(currentSilder - 1);
//     // listItemSlider[currentSilder].classList.remove("active");
//     // listItemSlider[currentSilder - 1].classList.add("active");
//     // currentSilder--;
//   } else {
//     control(listItemSlider.length - 1);
//     // listItemSlider[currentSilder].classList.remove("active");
//     // listItemSlider[listItemSlider.length - 1].classList.add("active");
//     // currentSilder = listItemSlider.length - 1;
//   }
// });

// function control(index) {
//   listItemSlider[currentSilder].classList.remove("active");
//   listItemSlider[index].classList.add("active");
//   dotted[currentSilder].classList.remove("is-selected");
//   dotted[index].classList.add("is-selected");
//   currentSilder = index;
//   showNumber(currentSilder + 1);
// }
// dotted.forEach(function (li, index) {
//   li.addEventListener("click", function () {
//     control(index);
//   });
// });

// let nav = document.querySelector(".nav");
// let btmenu = document.querySelector(".btnmenu");
// btmenu.addEventListener("click", function () {
//   nav.classList.toggle("active");
//   btmenu.classList.toggle("clicked");
// });

// let btnnews = document.querySelectorAll(".button__news .tab");
// let newsinfor = document.querySelectorAll(".news-infor");
// btnnews.forEach(function (item, index) {
//   item.addEventListener("click", function () {
//     btnnews.forEach(function (element) {
//       element.classList.remove("active");
//     });
//     newsinfor.forEach(function (element) {
//       element.classList.remove("active");
//       console.log(element);
//     });
//     document.querySelectorAll(".tab")[index].classList.add("active");
//     document.querySelectorAll(".news-infor ")[index].classList.add("active");
//   });
// });
// let accordion = document.querySelectorAll(".accordion");

// accordion.forEach(function (item, index) {
//   item.addEventListener("click", function () {
//     accordion.forEach(function (_item, _index) {
//       if (item == _item && index == _index) {
//         item.classList.toggle("active");
//         item.nextElementSibling.classList.toggle("active");
//       } else {
//         _item.classList.remove("active");
//         _item.nextElementSibling.classList.remove("active");
//       }
//       // _item.classList.remove("active");
//       // _item.nextElementSibling.classList.remove("active");
//     });

//     // console.log(accordion);
//     // // console.log(index);
//     // const panel = item.nextElementSibling;
//     // document.querySelectorAll(".accordion")[index].classList.add("active");
//     // item.nextElementSibling.classList.add("active");

//     // item.addEventListener("click", function () {
//     //   item.classList.toggle("active");
//     //   item.nextElementSibling.classList.toggle("active");
//     // });
//     // if (item.classList.contains("active")) {
//     //   item.nextElementSibling.classList.add("active");
//     // } else {
//     //   item.nextElementSibling.classList.remove("active");
//     // }
//   });
// });
let nav = $(".nav");
let btmenu = $(".btnmenu");
//Language
let langOpt = $(".lang__options");
let langItem = $(".lang__options-item");
let langCurrent = $(".lang__current span");
$(document).ready(function () {
  $(".lang").click(function (e) {
    e.stopPropagation();
    langOpt.toggleClass("active");
    $(".lang i").toggleClass("active");
    nav.removeClass("active");
    btmenu.removeClass("clicked");
  });
  $(document).click(function () {
    langOpt.removeClass("active");
  });
  langItem.each(function (item) {
    $(this).on("click", function () {
      let langText = $(this).text();
      let langCurrentSpan = langCurrent.text();
      langCurrent.empty().append(langText);
      $(this).empty().append(langCurrentSpan);
    });
  });
});

//Menu
let positionProduct = $(".products").offset();
let backtop = $(".backtop");
let positionFooter = $("footer").offset();
console.log(positionFooter.top);

$(document).ready(function () {
  backtop.on("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
});
$(document).scroll(function () {
  if (
    window.pageYOffset < positionProduct.top - heightHeader - 100 ||
    window.pageYOffset >
      $("body").height() - window.innerHeight - $("footer").height()
  ) {
    // console.log(1);
    backtop.removeClass("active");
  } else {
    backtop.addClass("active");
  }
  // console.log(window.pageYOffset);
  // console.log("uygyg", $("body").height() - window.innerHeight);
});
$(document).scroll(function () {
  if (window.pageYOffset > positionProduct.top - heightHeader - 100) {
    bgHeader.addClass("active");
  } else {
    bgHeader.removeClass("active");
  }
});

let bgHeader = $("header");

let menu = $(".menu a");
let sections = [];
let heightHeader = $("header").outerHeight();
// console.log(heightHeader);
function removeActiveMenu() {
  menu.each(function () {
    $(this).removeClass("active");
  });
}

$(document).ready(function () {
  menu.each(function (e) {
    let href = $(this).attr("href");
    // console.log(href);
    let className = href.replace("#", "");
    // console.log(className);
    let section = $("." + className);
    sections.push(section);
    $(this).on("click", function () {
      $("html,body").animate(
        {
          scrollTop: section.offset().top - heightHeader + 1,
        },
        100
      );
      removeActiveMenu();
      $(this).addClass("active");
    });
  });
});

$(document).scroll(function () {
  let positionScroll = window.pageYOffset;

  // console.log(positionScroll);
  menu.each(function (item, index) {
    let href = $(this).attr("href");
    // console.log(href);
    let className = href.replace("#", "");
    // console.log(className);
    let section = $("." + className);
    if (
      positionScroll > section.offset().top - heightHeader &&
      positionScroll < section.offset().top + innerHeight
    ) {
      removeActiveMenu();
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

//nav
let navItem = $("nav a");
$(document).ready(function () {
  btmenu.on("click", function () {
    nav.toggleClass("active");
    btmenu.toggleClass("clicked");
    langOpt.removeClass("active");
    $(".lang i").removeClass("active");
    bgHeader.addClass("active");
    $("body").toggleClass("has-scroll");
  });
});

$("btmenu clicked").on("click", function () {
  bgHeader.removeClass("active");
});

$(window).resize(function () {
  let windowWidth = $(this).width();
  location.reload();
  // console.log(windowWidth);
  if (windowWidth > 986) {
    bgHeader.removeClass("active");
    nav.removeClass("active");
    btmenu.removeClass("clicked");
  }
});
$(document).ready(function () {
  navItem.each(function (e) {
    let href = $(this).attr("href");
    // console.log(href);
    let className = href.replace("#", "");
    // console.log(className);
    let section = $("." + className);
    sections.push(section);
    $(this).on("click", function () {
      $("html,body").animate(
        {
          scrollTop: section.offset().top - heightHeader + 1,
        },
        100
      );
      btmenu.trigger("click");
      // if(section.offset().top > $('.products').offset.top()){
      //   bgHeader.css('background-color','$black-cl;')
      // }
      // bgHeader.removeClass("active");
    });
  });
});

//Slider
let slider = $(".slider__item-wrap");
$(document).ready(function () {
  slider.flickity({
    cellAlign: "left",
    wrapAround: true,
    prevNextButtons: false,
    on: {
      ready: function () {
        let dotted = $(".flickity-page-dots");
        paging = $(".slider__bottom .dotted");
        dotted.appendTo(paging);
      },
      change: function (index) {
        let number = $(".slider__bottom .paging .number");
        let indexPage = index + 1;
        number.text(indexPage.toString().padStart(2, 0));
      },
    },
  });
});

//Pre grun& Next button

let preBtn = $(".slider__bottom .control .control__pre");
let nextBtn = $(".slider__bottom .control .control__next");

preBtn.on("click", function () {
  slider.flickity("previous");
});
nextBtn.on("click", function () {
  slider.flickity("next");
});

//Popup Video
let button_video = $(".videos .video__item-wrap .video__item .video__item-img");
let popup_video = $(".popup-video");
let close_button = $(".close");
let iframe = $(".popup-video iframe");

function removePopup() {
  popup_video.removeClass("active");
  iframe.attr("src", "");
  $("html, body").css({
    overflow: "auto",
  });
}
// console.log(button_video);
button_video.on("click", function () {
  let video_id = $(this).attr("video-id");
  iframe.attr(
    "src",
    "https://www.youtube.com/embed/" + video_id + "?autoplay=1"
  );
  popup_video.addClass("active");
  $("html,body").css({
    overflow: "hidden",
  });
  // console.log(iframe);
});
close_button.on("click", function () {
  removePopup();
});
iframe.click(function (e) {
  e.stopPropagation();
});
popup_video.on("click", function () {
  removePopup();
});

//Accordion

$(document).ready(function () {
  $(".accordion").click(function () {
    $(".panel").not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);

    $(".accordion").not($(this).closest(".accordion")).removeClass("active");
    $(this).closest(".accordion").toggleClass("active");
  });

  // $(".accordion").click(function () {
  //   $(this).addClass("active");
  //   if ($(this).next().is(":visible")) {
  //     $(this).next().hide("200");
  //     $(this).removeClass("active");
  //   } else {
  //     $(".panel").hide("200");
  //     $(this).next().show("200");

  //   }
  // });
});

//Tabs News

let newsItem = $(".news-infor");

$(document).ready(function () {
  // $(".tab").hide();
  // $(".news-infor").hide();
  // $(".tab:first").addClass("active");
  // $(".news-infor:first").show();

  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    let index = $(this).index();
    // console.log(newsItem.eq(index));
    let indexNews = newsItem.eq(index);
    $(".news-infor").removeClass("active");
    indexNews.addClass("active");
  });
});

//Tags

$(document).on("keypress", 'input[name = "tags"]', function (e) {
  if (e.keyCode == 13) {
    let value = $(this).val();
    console.log(value);
    let textTag =
      '<li class="addedTag"> ' +
      value +
      ' <span class="tagRemove"> x </span> </div>';
    $(".tag-item").append(textTag);
    $(this).val("");
  }
});

$(document).on("click", ".tagRemove", function () {
  $($(this).parent()).remove();
  console.log($(this));
});

//PhotoSwipe
var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

window.addEventListener("load", function (event) {
  initPhotoSwipeFromDOM(".carousel-img");
});

//PhotoSlider
let PhotoSlider = $(".photo");
$(document).ready(function () {
  PhotoSlider.flickity({
    lazyLoad: 2,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
  });
});

//Contact form
$(".btnContact").click(function (e) {
  let name = $("input[name='name']").val();
  let email = $("input[name='mail']").val();
  let telephone = $("input[name='telephone']").val();
  let content = $("textarea[name='content']").val();

  let errors = {
    name: [],
    email: [],
    telephone: [],
  };

  if (name == "") {
    errors.name.push("Tên không được để trống");
  } else {
    if (name.length < 2) {
      errors.name.push("Tên không hợp lệ");
    }
  }
  if (email == "") {
    errors.email.push("Email không được để trống");
  } else {
    if (!isEmail(email)) {
      errors.email.push("Email không hợp lệ ");
    }
  }
  if (telephone == "") {
    errors.telephone.push("Số điện thoại không được để trống");
  } else {
    if (telephone.length < 10 || telephone.length > 11) {
      errors.telephone.push("Số điện thoại chỉ được phép từ 10-11 ký tự");
    }
  }
  // console.log(errors);
  let success = true;
  for (let index in errors) {
    if (errors[index].length > 0) {
      success = false;
    }
  }
  if ((success = true)) {
    alert("thanh cong");
  } else {
    alert("kiem tra lai thong tin");
  }
});

function isEmail(string_email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      string_email
    )
  ) {
    return true;
  }
  return false;
}
