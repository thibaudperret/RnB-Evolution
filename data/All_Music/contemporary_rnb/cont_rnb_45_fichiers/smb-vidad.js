(function() {
  'use strict';

  // *
  // Constants
  // *
  var assetBaseUrl = '//saambaa.com/widget/va/jw',
    gaPropertyId = 'UA-55160257-3',
    apiBaseUrl = '//api.saambaa.com',
    siteBaseUrl = '//saambaa.com/site/full/#/',
    blankImageUrl = '//saambaa.com/assets/image/blank.png',
    widgetClass = 'smb-vidad',
    widgetHeaderContClass = 'smb-vidad-header-cont',
    widgetHeaderClass = 'smb-vidad-header',
    widgetHeaderId = 'smb-vidad-header-text',
    widgetHeaderSuggestClass = 'smb-vidad-header-suggest',
    widgetContBackdrop = 'smb-vidad-adcont-backdrop',
    WidgetContBackdropLogo = 'smb-vidad-adcont-backdrop-logo',
    WidgetContBackdropText = 'smb-vidad-adcont-backdrop-text',
    widgetVideoContClass = 'smb-vidad-adcont',
    widgetVideoContClass = 'smb-vidad-adunit-cont',
    widgetMainCont = 'smb-vidad-main-cont',
    widgetDisplayAdContId = 'smb-vidad-displayad-contid',
    widgetDisplayAdContClass = 'smb-vidad-displayad-cont',
    widgetDisplayAdUnitContClass = 'smb-vidad-displayadunit-cont',
    widgetLoaderClass = 'smb-vidad-loader',
    widgetItemContId = 'smb-vidad-item-contid',
    widgetItemContClass = 'smb-vidad-item-cont',
    widgetFooterContClass = 'smb-vidad-footer-cont',
    widgetFooterTextId = 'smb-vidad-footer-text',
    widgetItemClass = 'smb-vidad-item',
    widgetItemCaptionContClass = 'smb-vidad-img-caption-cont',
    widgetItemCaptionClass = 'smb-vidad-img-caption',
    widgetItemTitleClass = 'smb-vidad-img-caption-title',
    widgetItemDetailClass = 'smb-vidad-img-caption-detail',
    widgetMarketClass = 'smb-vidad-markets',
    widgetMarketSelectContClass = 'custom-select',
    widgetMarketSelectClass = 'smb-vidad-markets-select',
    widgetItemClickMoreClass = 'smb-vidad-img-caption-clickmore',
    slideInUpClass = 'slideInUp',
    slideInLeftClass = 'slideInLeft',
    fadeInClass = 'fadeIn',
    staticCaptionClass = 'staticCaption',
    fontStyleId = 'smb-fonts',
    widgetStyleId = 'smb-vidad-style',
    widgetSelecStyleId = 'smb-vidad-select-style',
    widgetAniStyleId = 'smb-vidad-animation-style',
    jsonLibId = 'smb-json',
    dateLibId = 'smb-date',
    jwLibId = 'smb-jw',
    cbConfigName = 'smb-cfg',
    eqcssLibId = 'smb-eq',
    googTagLibId = 'smb-googtag',
    smbPrebid = 'smb-prebid',
    videoCallback = '__smbOnAdUnitDone',
    lkqdVPAID,
    vpaidFrame;

  var _smbDisplayAdHeight = 250,
    _smbDisplayAdWidth = 300;

  var cLog = function(msg) {
    if (widgetConfig.traceLevel > 4) {
      console.log(msg);
    }
  };

  var _isAdexBlocked = function() {
    return false;
    //return (document.head.innerHTML.toString().indexOf("blockadex', 'TRUE'") > -1)
  }

  // Browser check
  var _isMobileDevice = function() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  // $
  // DOM builder
  // $
  var el = {
    getById: function(id) {
      return document.getElementById(id);
    },

    getByTag: function(tag) {
      return document.getElementsByTagName(tag);
    },

    getByClassName: function(elm, cls) {
      return elm.getElementsByClassName(cls);
    },

    create: function(tag, props) {
      var elm = document.createElement(tag);

      for (var prop in props) {
        elm[prop] = props[prop];
      }

      return elm;
    },

    addEvent: function(elm, e, handler) {
      elm.addEventListener(e, handler, false);
    }
  };

  //$ Dynamically add stylesheets to page
  var stylesLoader = function(styles) {

    for (var i = 0; i < styles.length; i++) {
      var style = styles[i],
        styleTag = el.getById(style.id);

      if (styleTag)
        continue;

      // set additional properties
      style.type = 'text/css';
      style.rel = 'stylesheet';
      styleTag = el.create('link', style);
      (document.head || el.getByTag('head')[0]).appendChild(styleTag);
    }
  };

  //$ Dynamically adds script to page
  var scriptsLoader = function(scripts, cb) {
    var scriptsLoaded = 0;

    var onLoadedScripts = function() {
      scriptsLoaded++;

      if (scriptsLoaded !== scripts.length)
        return;

      if (cb)
        cb();
    };

    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i],
        scriptTag = el.getById(script.id);

      if (scriptTag)
        continue;

      // add additional properties
      script.type = 'text/javascript';
      script.async = true;

      scriptTag = el.create('script', script);
      scriptTag.onreadystatechange = scriptTag.onload = function() {
        var state = scriptTag.readyState;

        if (!state || /loaded|complete/.test(state))
          onLoadedScripts();
      };

      (document.head || el.getByTag('head')[0]).appendChild(scriptTag);
    }
  };

  // *
  // VIDEO WIDGET
  // *
  var VidWidget = (function() {

    // Animation check
    var _getAnimationEvent = function() {
      var elm = el.create('fakeelement'),
        animations = {
          'animation': 'animationend',
          'OAnimation': 'oAnimationEnd',
          'MozAnimation': 'transitionend',
          'WebkitAnimation': 'webkitAnimationEnd'
        };

      for (var an in animations) {
        if (elm.style[an] !== undefined) {
          return animations[an];
        }
      }
    };

    // AJAX JSON Request
    var _execJsonReq = function(action, uri, cb) {
      var xhr = new XMLHttpRequest();
      xhr.open(action, uri);
      xhr.onload = function() {
        var response = JSON.parse(xhr.responseText);
        if (cb)
          cb(response.Data);
      };

      xhr.send();
    };

    var _config = {
        version: '0.1.0'
      },
      _currentMarketId = 0,
      _itemCount = 0,
      _slideIndex = 0,
      _slideMaxCount = 5,
      _slideTimeout = null,
      _checkPlayerStateTimeout = null,
      _displayAdTimeout = null,
      _idleStateTimeout = null,
      _slideRegEx = new RegExp(slideInUpClass + '|' + slideInLeftClass, 'g'),
      _isMobile = _isMobileDevice(),
      _prebidInitialized = false,
      _firstLoad = true,
      _displayAdMode = null,
      _displayAdInterval = null,
      _tagInfo = null,
      _initMoatOnAdTime = false,
      _adIsLoaded = false,
      _displayAdHasRendered = null,
      _requestAdWaitTime = 2 * 1000,
      _requestAdTimer = null,
      _currentFocus = null,
      _requestVideoTimeoutTimer = null,
      _requestDisplayAdTimeoutTimer = null,
      _videoAdTimeSessionKey = '__smbVidST',
      _displayAdTimeSessionKey = '__smbDtST',
      _videoAdRequestCountSessionKey = '_smbVideoAdRequestCount',
      _displayAdRequestCountSessionKey = '_smbDisplayAdRequestCount',
      _displayAdRequestCount = 0,
      _videoAdRequestCount = 0,
      _videoState = '',
      _isVideoContainerViewable = false,
      moatApi = null,
      moatMute = null,
      _moatIds,
      // elements
      _marketSelect = null,
      _widgetContainer = null,
      _mainCont = null,
      _itemCont = null,
      _videoCont = null,
      _displayAdCont = null,
      _hideZindex = 0,
      _showZindex = 9,
      _headerCont = null,
      _footerCont = null;

    var trace = function(msg, severity) {
      if (widgetConfig.traceLevel > 0) {
        switch (severity) {
          case 'price':
            console.log(msg);
            break;
        }
      }
      if (widgetConfig.traceLevel > 1) {
        switch (severity) {
          case 'error':
            console.error(msg);
            break;
          case 'warn':
            console.warn(msg);
            break;
          case 'info':
            console.info(msg);
        }
      }
    };

    const eventLog = function(msg, style) {
      if (widgetConfig.traceLevel > 3) {
        console.log(`%c ${msg}`, `${style}`);
      }
    };

    var _disableVideoRequests = function() {
      trace('disabling video requests', 'warn');
      widgetConfig.videoAdEnabled = false;
    }

    var _disableDisplayAdRequests = function() {
      trace('disabling displayAd requests', 'warn');
      widgetConfig.displayAdEnabled = false;
    }

    // *a
    // Main widget bootstrap function
    // *
    var _createWidget = function() {
      //$ create header
      var headerTemplate = '<div class="' + widgetHeaderClass + '"><div id="' + widgetHeaderId + '">See Top Trending Food & Fun</div><div class="' + widgetMarketClass + '"><div class="' + widgetMarketSelectContClass + '"><select class="' + widgetMarketSelectClass + '"></select></div></div></div>';

      _headerCont = el.create('div', {
        className: widgetHeaderContClass,
        innerHTML: headerTemplate
      });

      _widgetContainer.appendChild(_headerCont);

      // setup market
      _marketSelect = el.getByClassName(_headerCont, widgetMarketSelectClass)[0];

      el.addEvent(_marketSelect, 'change', function(e) {
        var marketSelected = _getSelectedMarketInfo(e);

        _onMarketChange(marketSelected.marketId);
        // TODO: Separate into function and pass props
        var gaObj = window.GoogleAnalyticsObject;
        if (gaObj)
          gaObj('smbTracker.send', 'event', 'markets', 'Market Selected', marketSelected.marketId + " " + marketSelected.marketName);
        else
          ga('smbTracker.send', 'event', 'markets', 'Market Selected', marketSelected.marketId + " " + marketSelected.marketName);
      });

      _mainCont = el.create('div', {
        className: widgetMainCont,

      })
      _mainCont.style.backgroundColor = 'black'

      _widgetContainer.appendChild(_mainCont);

      _displayAdRequestCount = sessionStorage.getItem(_displayAdRequestCountSessionKey);
      _videoAdRequestCount = sessionStorage.getItem(_videoAdRequestCountSessionKey);

      // Video container setup
      if (widgetConfig.videoAdEnabled) {
        //$ create video ad container
        _videoCont = el.create('div', {
          className: widgetVideoContClass,
          id: 'smbPlayer'
        });
        _videoCont.style.display = 'block';
        _videoCont.style.zIndex = _hideZindex;
        _mainCont.appendChild(_videoCont);

        _createVideoUnit();
        if (widgetConfig.maxVideoAdRequestTimeInSec != 0) {
          _requestVideoTimeoutTimer = setTimeout(_videoAdRequestTimeout, getAdRequestDurationTime(widgetConfig.maxVideoAdRequestTimeInSec, _videoAdTimeSessionKey));
        }
        eventLog(`video enabled`, `color:green`)
        trace('video enabled', 'info')
      } else {
        _displayAdMode = true;
        eventLog(`video disabled`, `color:red`)
        trace('video disabled', 'info')
      }

      // Create GPT Container
      if (widgetConfig.displayAdEnabled) {
        _displayAdCont = el.create('div', {
          className: widgetDisplayAdContClass
        });
        _displayAdCont.style.margin = 'auto';
        _displayAdCont.style.top = '77px';
        _displayAdCont.style.zIndex = _showZindex;
        // _displayAdCont.style.backgroundColor = 'black';
        const backdrop = el.create('div', {
          className: widgetContBackdrop
        });
        const backdropLogo = el.create('div', {
          className: WidgetContBackdropLogo
        });
        const backdropText = el.create('div', {
          className: WidgetContBackdropText,
          innerHTML: "Find Your Fun"
        });
        _displayAdCont.appendChild(backdrop);
        _displayAdCont.appendChild(backdropLogo);
        _displayAdCont.appendChild(backdropText);
        _mainCont.appendChild(_displayAdCont);
        cLog('displayAd enabled : ' + widgetConfig.displayAdId);
        if (widgetConfig.maxDisplayAdRequestTimeInSec != 0) {
          _requestDisplayAdTimeoutTimer = setTimeout(_displayAdRequestTimeout, getAdRequestDurationTime(widgetConfig.maxDisplayAdRequestTimeInSec, _displayAdTimeSessionKey));
        }
        _setupDisplay();
      }

      //$ create item container
      _itemCont = el.create('div', {
        className: widgetItemContClass,
        id: widgetItemContId
      });
      //_itemCont.style.display = "none";
      _itemCont.style.zIndex = _showZindex;
      _mainCont.appendChild(_itemCont);


      _onMarketChange(_getSelectedMarketInfo());

      //$ create footer
      var footerTemplate = '<div class="smb-vidad-powered-by"><div id="' + widgetFooterTextId + '">powered by <a title="Powered by Saambaa" href="//go.saambaa.com" target="' +
        '_blank"><img id="smb-icon" src="//saambaa.com/assets/image/logo-saambaa.png" alt' +
        '="Powered by Saambaa" /></a></div></div>';

      _footerCont = el.create('div', {
        className: widgetFooterContClass,
        innerHTML: footerTemplate
      });
      _widgetContainer.appendChild(_footerCont);
      _getMarkets();
    };

    //$ Creat script element for Google Analytics
    var _createAnalytics = function() {

      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', gaPropertyId, 'auto', 'smbTracker');
      ga('smbTracker.send', 'pageview', `widget/va/jw/${widgetConfig.partnerName}`);
      // ga('set', {
      //     page: location.href,
      //     title: location.captureEvents
      // });

      // Piwik Analytics
      window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      window._paq.push(['setCustomDimension', 1, `widget/va/jw/${widgetConfig.partnerName}`]);
      window._paq.push(['setCustomDimension', 2, location.host]);
      window._paq.push(['trackPageView']);
      window._paq.push(['enableLinkTracking']);
      (function() {
        var u = "//analytics.saambaa.com/";
        window._paq.push(['setTrackerUrl', u + 'piwik.php']);
        window._paq.push(['setSiteId', widgetConfig.analyticsSiteId || '1']);
        var d = document,
          g = d.createElement('script'),
          s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.async = true;
        g.defer = true;
        g.src = '//saambaa-static.azureedge.net/piwik.js';
        s.parentNode.insertBefore(g, s);
      })();

      // Init with QuantCast
      _quantcastScript();
      _quantcastPixel();
    };
    //$ Create script element for QuantCast
    var _quantcastScript = function() {
      var url = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
      // TODO: Change to run functions from within JS instead of create el // Locate
      // _qevents in window
      var tracker = el.create('script', {
        innerHTML: "var _qevents = _qevents || [];(function() { var elem = document.createElement('s" +
          "cript');elem.src = '" + url + "';elem.async = true;elem.type = 'text/javascript'; var scpt = document.getElemen" +
          "tsByTagName('script')[0];scpt.parentNode.insertBefore(elem, scpt);})(); _qevents" +
          ".push({qacct: 'p-TWKb6gH_3MnFX'});"
      })
      tracker.type = 'text/javascript';
      (document.body || el.getByTag('body')[0]).appendChild(tracker);
    };
    //$ Create tracking pixel element for QuantCast
    var _quantcastPixel = function() {
      // TODO: change from innerHTML to instead build of props
      var pixel = el.create('noscript', {
        innerHTML: "<div>style='display:none;'><img src='//pixel.quantserve.com/pixel/p-TWKb6gH_3MnF" +
          "X.gif' border='0' height='1' width='1' alt='Quantcast'/></div>"
      });
      (document.body || el.getByTag('body')[0]).appendChild(pixel)
    };

    /*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
    function initMoatTracking(a, c, d, h, k) {
      var f = document.createElement("script"),
        b = [];
      c = {
        adData: {
          ids: c,
          duration: d,
          url: k
        },
        dispatchEvent: function(a) {
          this.sendEvent ? (b && (b.push(a), a = b, b = !1), this.sendEvent(a)) : b.push(a)
        }
      };
      d = "_moatApi" + Math.floor(1E8 * Math.random());
      var e, g;
      try {
        e = a.ownerDocument, g = e.defaultView || e.parentWindow
      } catch (l) {
        e = document, g = window
      }
      g[d] = c;
      f.type = "text/javascript";
      a && a.insertBefore(f, a.childNodes[0] || null);
      f.src = "https://z.moatads.com/" + h + "/moatvideo.js#" + d;
      return c
    };

    function raiseMoatEvent(moatType, volume) {
      if (moatApi) {
        moatApi.dispatchEvent({
          "type": moatType,
          "adVolume": volume
        });
        eventLog(` ' ${moatType}' Reached // Volume ${volume}`, `color:black; background: yellow;`);
      }
    };

    var _getLoader = function() {
      return el.getByClassName(_itemCont, widgetLoaderClass)[0];
    };

    var _showLoader = function(show) {
      var loader = _getLoader();

      if (show && !loader) {
        loader = el.create('img', {
          src: assetBaseUrl + '/assets/loader-dots.gif',
          className: widgetLoaderClass
        });
        _itemCont.appendChild(loader);
      } else if (loader)
        _itemCont.removeChild(loader);
    };

    // Gets markets
    var _getMarkets = function() {
      _showLoader(true);

      // set default current market id
      if (!_currentMarketId)
        _currentMarketId = _config.marketId;

      _execJsonReq('GET', apiBaseUrl + '/partners/' + _config.partnerId + '/markets', function(items) {
        if (!items.length)
          return;

        if (_marketSelect.options.length) {
          for (var i = 0; i < market.options.length; i++) {
            _marketSelect.remove(market.options[i]);
          }
        }

        // create opts for each item
        for (var i = 0; i < items.length; i++) {
          var item = items[i];

          var opt = el.create('option', {
            value: item.Id,
            innerHTML: item.Name
          });

          if (item.Id === _currentMarketId)
            opt.setAttribute('selected', 'selected');

          _marketSelect.appendChild(opt);
        }
      });
    };

    // *
    // Gets posts for the selected market
    // *
    var _getPosts = function() {
      //$ show loader
      var loader = _getLoader();

      if (!loader)
        _showLoader(true);

      _resetSlide();

      var marketId = _currentMarketId || _config.marketId;

      _execJsonReq('GET', apiBaseUrl + '/partners/' + _config.partnerId + '/markets/' + marketId + '/channels/' + _config.channelId + '/posts?filteredPostsRequest={pageNumber:1,pageSize:' + widgetConfig.maxPosts + ',mode:"sparse"}', function(data) {
        //$ get loader again
        loader = _getLoader();

        if (loader)
          _showLoader(false);

        _itemCount = data.Items.length;

        if (!_itemCount)
          return;

        //$ clear existing items
        _itemCont.innerHTML = '';

        for (var i = 0; i < data.Items.length; i++) {
          var post = data.Items[i];

          var item = el.create('div', {
            className: widgetItemClass
          });
          _itemCont.appendChild(item);

          // create link
          var link = el.create('a', {
            href: _getPostUrl(post)
          });

          link.setAttribute('target', '_blank');
          item.appendChild(link);

          // create img tag and append to link
          var imgTag = el.create('img', {
            src: blankImageUrl,
            dataSrc: post.ImageUri
          });
          link.appendChild(imgTag);

          // create click more
          var clickMoreCont = el.create('div', {
            className: widgetItemClickMoreClass
          });
          clickMoreCont.innerHTML = '<p>Click for more</p>';
          link.appendChild(clickMoreCont);

          // create caption container
          var capCont = el.create('div', {
            className: widgetItemCaptionContClass
          });
          link.appendChild(capCont);

          // create caption and append to link
          var cap = el.create('div', {
            className: widgetItemCaptionClass
          });
          capCont.appendChild(cap);

          // create caption title
          var capTitle = el.create('p', {
            className: widgetItemTitleClass,
            innerHTML: post.Title
          });

          cap.appendChild(capTitle);

          var capDetail = el.create('p', {
            className: widgetItemDetailClass,
            innerHTML: _getCaptionDetail(post)
          });

          cap.appendChild(capDetail);
        }
        if (!_showDisplayAd)
          _nextSlide();
      });
    };

    // *
    // Helper function to get correct url based on post type
    // *
    var _getPostUrl = function(post) {
      if (post.PostType !== 8)
        return siteBaseUrl + _config.partnerId + '/' + _currentMarketId + '/' + _config.channelId + '/' + post.Id;

      var params = [
        'pd00=' + _config.partnerId,
        'pd01=' + _currentMarketId,
        'pd02=videoad',
      ];

      return post.ClickthruUrl + '?' + params.join('&');
    };

    // Gets caption detail
    var _getCaptionDetail = function(post) {
      var t = new Date(post.StartDateTimeISO),
        d = t.getDate(),
        month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
      var n = month[t.getMonth()];

      var startDate = `${n}  ${d}`,
        capText = startDate + ' &#x00040 ' + post.PlaceName;

      if (post.Source)
        capText += '<br> <span> ' + post.Source + '</span>';

      return capText;
    };

    // *
    // SLIDE FUNCTIONS
    // *
    var _nextSlide = function() {
      if (_slideTimeout)
        clearTimeout(_slideTimeout);

      var itemConts = el.getByClassName(_itemCont, widgetItemClass);
      //var itemConts = _hideSlideItems();
      //var itemConts = _hideSlideItem(_slideIndex);

      _slideIndex++;

      if (_slideIndex > itemConts.length)
        _slideIndex = 1;

      // get current item
      var item = itemConts[_slideIndex - 1];
      item.style.display = 'block';

      // get caption container
      var capCont = el.getByClassName(item, widgetItemCaptionContClass)[0],
        capDetail = el.getByClassName(capCont, widgetItemCaptionClass)[0],
        clickMore = el.getByClassName(item, widgetItemClickMoreClass)[0],
        img = item.getElementsByTagName('img')[0];

      if (img.src.indexOf('blank.png') != -1) // used for lazy loading
        img.src = img.dataSrc;

      // wire up caption animation
      if (widgetConfig.optimizationLevel == 0) {
        var capTimeoutId = setTimeout(function() {
          clearTimeout(capTimeoutId);
          capCont.className += ' ' + slideInUpClass;
        }, 300);

        // setup slide from left to right
        var aniEventType = _getAnimationEvent();

        var onCapContSlideUpDone = function() {
          capCont.removeEventListener(aniEventType, onCapContSlideUpDone);

          if (_isMobile)
            capDetail.className += ' ' + fadeInClass;
          else
            capDetail.className += ' ' + slideInLeftClass;
        };

        var onCapDetailDone = function() {
          capDetail.removeEventListener(aniEventType, onCapDetailDone);

          if (_isMobile)
            clickMore.className += ' ' + fadeInClass;
          else
            clickMore.className += ' ' + slideInLeftClass;
        };

        capCont.addEventListener(aniEventType, onCapContSlideUpDone);
        capDetail.addEventListener(aniEventType, onCapDetailDone);
      } else {
        capCont.className += ' ' + staticCaptionClass;
        capDetail.className += ' ' + staticCaptionClass;
        clickMore.className += ' ' + staticCaptionClass;
      }

      _hideOtherSlideItems(_slideIndex - 1);

      if (widgetConfig.displayAdEnabled)
        setTimeout(_requestDisplayAd, .5 * 1000);

      _currentFocus = 'slide';
      _slideTimeout = setTimeout(function() {
        _onSlideChange(itemConts.length);
      }, 1000 * 5);
    };

    var _stopSlide = function() {
      if (_slideTimeout)
        clearTimeout(_slideTimeout);

      _hideSlideItems();
    };

    var _removeAnimation = function(item) {
      var capCont = el.getByClassName(item, widgetItemCaptionContClass)[0],
        capDetail = el.getByClassName(capCont, widgetItemCaptionClass)[0],
        clickMore = el.getByClassName(item, widgetItemClickMoreClass)[0];

      if (widgetConfig.optimizationLevel == 0) {
        capDetail.className = capDetail.className.replace(_slideRegEx, '');
        capCont.className = capCont.className.replace(_slideRegEx, '');
        clickMore.className = clickMore.className.replace(_slideRegEx, '');
      } else {
        capDetail.className = capDetail.className.replace(staticCaptionClass, '');
        capCont.className = capCont.className.replace(staticCaptionClass, '');
        clickMore.className = clickMore.className.replace(staticCaptionClass, '');
      }
    };

    var _hideOtherSlideItems = function(slideIndex) {
      var itemConts = el.getByClassName(_itemCont, widgetItemClass);
      // remove animation
      for (var i = 0; i < itemConts.length; i++) {
        if (i != slideIndex) {
          // remove animation
          var item = itemConts[i];
          item.style.display = 'none';
          _removeAnimation(item);
        }
      }
      return itemConts;
    };

    var _hideSlideItems = function() {
      var itemConts = el.getByClassName(_itemCont, widgetItemClass);

      for (var i = 0; i < itemConts.length; i++) {
        // remove animation
        var item = itemConts[i];
        item.style.display = 'none';
        _removeAnimation(item);
      }
      return itemConts;
    };

    var _resetSlide = function() {
      _slideIndex = 0;
      _stopSlide();
    };

    // cap/limit support
    var _isValidForDisplayAdRequest = function() {
      if (widgetConfig.displayAdEnabled) {
        if (widgetConfig.maxDisplayAdRequests != 0 && _displayAdRequestCount >= widgetConfig.maxDisplayAdRequests)
          _disableDisplayAdRequests();
      }
      return (widgetConfig.displayAdEnabled)
    };

    var _isValidForVideoAdRequest = function() {
      if (!widgetConfig.videoAdEnabled)
        return false;
      else if (widgetConfig.maxVideoAdRequests != 0) {
        if (_videoAdRequestCount >= widgetConfig.maxVideoAdRequests)
          trace('video ad count exceeded', 'warn');
        widgetConfig.videoAdEnabled = _videoAdRequestCount < widgetConfig.maxVideoAdRequests;
      }
      return widgetConfig.videoAdEnabled;
    };

    var incrementDisplayAdRequestCount = function() {
        _displayAdRequestCount++;
        // Save # of refreshes data to sessionStorage
        sessionStorage.setItem(_displayAdRequestCountSessionKey, _displayAdRequestCount);
        trace(`_displayAdRequestCount = ${sessionStorage.getItem(_displayAdRequestCountSessionKey)}`, 'info');
      },
      resetDisplayAdRequestCount = function() {
        sessionStorage.setItem(_displayAdRequestCountSessionKey, '0');
        _displayAdRequestCount = 0;
        trace(`Refresh reset displayAd count // ${sessionStorage.getItem(_displayAdRequestCountSessionKey)}`, 'info')
      },
      isSessionExpired = function(sessionKey) {
        var startTime = sessionStorage.getItem(sessionKey);
        if (startTime) {
          let timeNow = Date.now();
          if ((timeNow - startTime) > 0)
            return (false);
        }
        return true;
      },
      getAdRequestDurationTime = function(requestDuration, sessionKey) {
        if (widgetConfig.useSession) {
          var startTime = sessionStorage.getItem(sessionKey);
          if (!startTime) {
            startTime = Date.now();
            sessionStorage.setItem(sessionKey, startTime);
            return requestDuration * 1000;
          } else {
            let timeNow = Date.now();
            if ((timeNow - startTime) > requestDuration) { // session exceeded so reset it
              sessionStorage.setItem(sessionKey, timeNow);
              return requestDuration * 1000;
            } else {
              var duration = (timeNow - startTime);
              return ((timeNow - startTime)); // already in milliseconds
            }
          }
        }
        return requestDuration * 1000;
      },
      resetVideoAdRequestCount = function() {
        sessionStorage.setItem(_videoAdRequestCountSessionKey, '0');
        _videoAdRequestCount = 0;
        trace(`Refresh reset videoAd count // ${sessionStorage.getItem(_videoAdRequestCountSessionKey)}`, 'info')
      },
      incrementVideoAdRequestCount = function() {
        _videoAdRequestCount++;
        sessionStorage.setItem(_videoAdRequestCountSessionKey, _videoAdRequestCount); // Save # of refreshes data to sessionStorage
        trace(`_videAdRequestCount = ${sessionStorage.getItem(_videoAdRequestCountSessionKey)}`, 'info');
      };

    // *
    // DISPLAY AD UNIT FUNCTIONS
    // *
    var _showDisplayAd = false,
      _smbDispSlot,
      PREBID_TIMEOUT = 700,
      prebidAdUnit = null;

    var _createDisplayAdDiv = function() {
      var displayAdUnitCont = el.create('div', {
        id: widgetConfig.displayAdId
      });
      displayAdUnitCont.style.margin = 'auto';
      displayAdUnitCont.style.height = '250px';
      displayAdUnitCont.style.width = '300px';
      displayAdUnitCont.style.display = 'block';
      _displayAdCont.appendChild(displayAdUnitCont);
    };

    var _prebidConfig = function() {
      _displayAdInterval = widgetConfig.displayAdTimeout;


      prebidAdUnit = [{
        code: widgetConfig.displayAdId,
        sizes: [
          [300, 250]
        ],
        bids: widgetConfig.preBids[0]
      }];

      window.pbjs = window.pbjs || {};
      window.pbjs.que = window.pbjs.que || [];

      const customGranularity = {
        'buckets': [{
          'min': 0.03,
          'max': 5.00,
          'increment': 0.01
        }, {
          'min': 5.00,
          'max': 10.00,
          'increment': 0.05
        }, {
          'min': 10.00,
          'max': 20.00,
          'increment': 0.10
        }]
      };

      window.pbjs.setConfig({
        priceGranularity: customGranularity
      })

      window.pbjs.bidderSettings = {
        sonobi: {
          bidCpmAdjustment: function(bidCpm) {
            // adjust the bid in real time before the auction takes place
            //console.log(1*widgetConfig.bidCpms['sonobi']);
            return bidCpm * widgetConfig.bidCpms['sonobi']; //0.7;
          }
        },
        districtmDMX: {
          bidCpmAdjustment: function(bidCpm) {
            // adjust the bid in real time before the auction takes place
            // console.log(1*widgetConfig.bidCpms['districtmDMX']);
            return bidCpm * widgetConfig.bidCpms['districtmDMX']; //0.85;
          }
        }
      };
    }

    var _callPrebid = function(slot) {
      cLog('calling prebid');

      if (widgetConfig.useSession) {
        if (isSessionExpired(_displayAdTimeSessionKey))
          resetDisplayAdRequestCount();
      }
      if (_isValidForDisplayAdRequest()) {
        trace(`callprebid increment`, 'info')
        incrementDisplayAdRequestCount();
      }
      cLog(`_isValidForDisplayAdRequest() = ${_isValidForDisplayAdRequest()}`)
      if (!_isValidForDisplayAdRequest()) {
        setTimeout(_hideDisplayAdUnit, 100);
        return;
      }

      window.pbjs.que.push(function() {
        window.pbjs.addAdUnits(prebidAdUnit);
        window.pbjs.requestBids({
          //adUnitCodes: [slot.getSlotElementId()],
          bidsBackHandler: sendAdserverRequest,
        });
      });
      window.pbjs.onEvent('bidWon', function(e) {

        if (e.adUnitCode === widgetConfig.displayAdId) {
          switch (e.bidder) {
            case 'sonobi':
              _displayAdInterval = 20 * 1000;
              trace(`sonobi interval = ${_displayAdInterval}`, `info`);
              break;
            case 'sovrn':
              // code block
              break;
            case 'districtmDMX':
              // code block
              break;
            case '33across':
              // code block
          }
        }

        let wSSP = '';
        if (e.bidder && e.bidder.length > 2) {
          wSSP = e.bidder.substring(0, 3);
        }
        trace(`${wSSP} - ${e.adserverTargeting.hb_pb}`, `price`);
        eventLog(` Winning Bidder = ${e.bidder} // CPM = ${e.adserverTargeting.hb_pb} // bid = ${e.cpm}`, `color:red;`);
      });
      window.pbjs.onEvent('bidResponse', function(e) {
        //trace(`bidResponse - ${JSON.stringify(e)}`, 'info');
      });
      window.pbjs.onEvent('bidRequested', function(e) {
        //trace(`bidRequested - ${JSON.stringify(e)}`, 'info');
      });

      function sendAdserverRequest() {
        if (window.pbjs.adserverRequestSent) return;
        window.pbjs.adserverRequestSent = true;
        window.googletag.cmd.push(function() {
          window.pbjs.que.push(function() {
            window.pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
            window.googletag.pubads().refresh([slot]);
          });
        });
      }

      //setTimeout(function() {
      //  sendAdserverRequest();
      //}, PREBID_TIMEOUT);
    }

    function refreshSlot(slot) {
      window.pbjs.que.push(function() {
        window.pbjs.requestBids({
          timeout: PREBID_TIMEOUT,
          // adUnitCodes: [slot.getSlotElementId()],
          bidsBackHandler: function() {
            window.pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
            window.googletag.pubads().refresh([slot]);

            incrementDisplayAdRequestCount();
            //var refreshBidResponse = window.pbjs.getBidResponsesForAdUnitCode(slot.getSlotElementId());
            //cLog(refreshBidResponse);
          }
        });
      });
      _resetAdInterval(slot);
    }

    var _stopDisplayAd = function() {
      if (_displayAdTimeout)
        clearTimeout(_displayAdTimeout);
      // _displayAdHasRendered = false;
    };

    var _isDfpOrder = function(id) {
      let validIds = [2162947417, 2250275929, 2334149426, 2239771125];
      return (id && validIds.includes(id));
    };

    var _setupDisplay = function() {
      _prebidConfig();
      _slideMaxCount = 1;

      //$ Create div for window.googletag to push to on first load
      if (_firstLoad) {
        _createDisplayAdDiv();
      }
      _firstLoad = false;
      if (!widgetConfig.useSession || widgetConfig.maxDisplayAdRequestTimeInSec == 0)
        _displayAdRequestCount = 0;

      // Reference vars for googletag
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function() {
        window.googletag.pubads().disableInitialLoad();
      });

      // Call google tag function from window
      window.googletag.cmd.push(function() {
        _smbDispSlot = window.googletag.defineSlot(widgetConfig.displayAdSlot, [_smbDisplayAdWidth, _smbDisplayAdHeight], widgetConfig.displayAdId).addService(window.googletag.pubads());
        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();

        //_callPrebid(_smbDispSlot);

        // Listen for slot to render
        window.googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          let targetSlot = event.slot.getAdUnitPath();
          //cLog(`rendered = ${targetSlot}`)

          if (targetSlot == widgetConfig.displayAdSlot) {
            cLog(`This slot has rendered : ${targetSlot}`);
            cLog(event);

            // Setting flag for a display ad that has rendered
            if (_displayAdHasRendered === null) {
              if (!event.isEmpty) {
                _showDisplayAdUnit();
              } else {
                cLog("First load no ad")
                setTimeout(_hideDisplayAdUnit, 100);
              }
            };

            _displayAdHasRendered = event.slotContentChanged && !event.isEmpty
            // eventLog(`_displayAdHasRendered = ${_displayAdHasRendered}`);
            // Logging for CPM Optimizations
            if (event.campaignId != null && !_isDfpOrder(event.campaignId)) {
              //if (event.campaignId == '2185575041' || event.campaignId == '2241619391') {
              eventLog(`Prebid bidder won`, `color:red`);
              trace('pb', 'price')
            } else if (event.campaignId == '2162947417') {
              eventLog(`AdEx won`, `color:red`);
              trace('ae', 'price')
            } else if (event.campaignId == '2250275929') {
              eventLog(`bidWin - smb adX house`, `color:red`);
              trace('smb ae hs', 'price')
            } else if (event.campaignId == '2334149426') {
              eventLog(`bidWin - AdX Price Priority`, `color:red`);
              trace('ae pp', 'price')
            } else if (event.campaignId == '2239771125') {
              eventLog(`33across won`, `color:red`);
              trace('33', 'price')
            } else {
              eventLog(`No Winner`, `color:white`);
              trace('nw', 'price')
            };
          }
        });

        window.googletag.pubads().addEventListener('impressionViewable', function(event) {
          let targetSlot = event.slot.getAdUnitPath();
          if (targetSlot == widgetConfig.displayAdSlot) {
            eventLog(`Display impressionViewable`, `color:green;`);
          };
        });
      });

      // Push ad to div
      window.googletag.cmd.push(function() {
        window.googletag.display(widgetConfig.displayAdId);
      });
    }

    var _hideDisplayAdUnit = function() {
      _showDisplayAd = false;
      // Hide Display Ad Container
      _itemCont.style.display = 'block';
      _displayAdCont.style.display = 'none';
      _displayAdHasRendered = false;
      // Clear all Ad Slots
      window.googletag.pubads().clear([_smbDispSlot]);
      if (widgetConfig.videoAdEnabled && isAdReady()) {
        cLog('resuming video after display ad');
        _currentFocus = 'video';
        _showVideoUnit();
      } else
        _nextSlide();
    };

    var _showDisplayAdUnit = function() {
      if (_currentFocus == 'video') { // allow video ads to complete
        trace('postpone display ad until video ad done', 'info');
        return;
      }
      _stopSlide();
      // show ad unit container
      _displayAdCont.style.display = 'block';
      _itemCont.style.display = 'none';
      _currentFocus = 'ad';
      _showDisplayAd = true;
      // _requestDisplayAd();
      if (_displayAdTimeout)
        clearTimeout(_displayAdTimeout);
      _displayAdTimeout = setTimeout(_hideDisplayAdUnit, _displayAdInterval);
    };

    var _requestDisplayAd = function() {
      if (widgetConfig.displayAdEnabled && _isValidForDisplayAdRequest()) {
        cLog('Requesting displayAd. tag = ' + widgetConfig.displayAdId);
        if (!_prebidInitialized) {
          _prebidInitialized = true;
          _callPrebid();
        }
        refreshSlot(_smbDispSlot);
      }
    };

    var _resetAdInterval = function(slot) {
      _displayAdInterval = widgetConfig.displayAdTimeout;
      trace(`Interval reset to ${_displayAdInterval}`, `info`);
    }

    // *
    // VIDEO PLAYER FUNCTIONS
    // *
    var _playerElementIdPrefix = 'smb-vd-player-',
      _showVideoAd = false

    var _bind = function(el, evt, fcn) {
      el[window.addEventListener ? 'addEventListener' : 'attachEvent'](window.addEventListener ? evt : 'on' + evt, fcn, false);
    };

    var _createVideoUnit = function() {
      var adUnitCont = el.create('div', {
        className: widgetVideoContClass
      });
      adUnitCont.style.display = 'block';
      _setupLKQDVideoPlayer();
    };

    // Deconstruct video ad tag for MOAT ids
    var _tagDeconstruct = function() {
      if (widgetConfig.videoTag.indexOf('pubads') > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('/')[6].split('&')[0],
          AdServer: 'DFP'
        };
      else if (widgetConfig.videoTag.indexOf("springserve") > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('/')[4].split('?')[0],
          AdServer: 'SpringServe'
        };
      else if (widgetConfig.videoTag.indexOf("lkqd") > -1)
        return _tagInfo = {
          id: widgetConfig.videoTag.split('=')[2].split('&')[0],
          AdServer: 'LKQD'
        };
      else
        return _tagInfo = {
          id: "",
          AdServer: ""
        };
    };

    var _setupLKQDVideoPlayer = function() {
      if (_isMobileDevice()) {
        widgetConfig.isMuted = true;
      }
      _tagDeconstruct();

      _moatIds = {
        "level1": widgetConfig.partnerName,
        "level2": 'widget/gpt/300x600',
        "level3": _tagInfo.AdServer,
        "level4": _tagInfo.id,
        "slicer1": widgetConfig.videoRequestType
      };

      //var moatApi = null,
      //    moatMute = null;

      var lkqdSettings = {
        pid: 437, //21=lkqd sample
        sid: widgetConfig.videoId, // 71907=lkqd sample,
        //pid: 21,
        //sid: 71907,
        playerContainerId: 'smbPlayer',
        playerId: '',
        playerWidth: 300,
        playerHeight: 250,
        execution: 'inbanner',
        placement: '',
        passbackFirst: false,
        playInitiation: 'auto',
        volume: 0,
        pageUrl: '',
        trackImp: '',
        trackClick: '',
        custom1: '',
        custom2: '',
        custom3: '',
        pubMacros: '',
        dfp: false,
        gdpr: '',
        gdprcs: '',
        lkqdId: new Date().getTime().toString() + Math.round(Math.random() * 1000000000).toString(),
        supplyContentVideo: {
          url: '',
          clickurl: '',
          play: 'pre'
        }
      };

      trace(`LKQD Player init -- sid: ${lkqdSettings.sid}`, `info`);
      var creativeData = '';
      if (!document.getElementById(lkqdSettings.playerContainerId)) {
        try {
          if (document.readyState && document.readyState != 'complete' && document.readyState != 'interactive') {
            document.write('<div id=' + lkqdSettings.playerContainerId + '></div>');
          }
        } catch (e) {}
      }
      var environmentVars = {
        slot: document.getElementById(lkqdSettings.playerContainerId),
        videoSlot: document.getElementById(lkqdSettings.playerId),
        videoSlotCanAutoPlay: true,
        lkqdSettings: lkqdSettings
      };

      function onVPAIDLoad() {
        /*              lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
                  		lkqdVPAID.subscribe(function(){ cLog('adStarted'); }, 'AdStarted');
                  		lkqdVPAID.subscribe(function(){
                        cLog('AdImpression');
                      }, 'AdImpression');
                  		lkqdVPAID.subscribe(function(){ cLog('AdVideoStart'); }, 'AdVideoStart');
                  		lkqdVPAID.subscribe(function(){ cLog('AdVideoComplete'); }, 'AdVideoComplete');
                  		lkqdVPAID.subscribe(function(){	cLog('AdPlaying');	}, 'AdPlaying');
                  		lkqdVPAID.subscribe(function(){	cLog('AdStopped');	}, 'AdStopped');
                  		lkqdVPAID.subscribe(function(){	cLog('AdPaused');}, 'AdPaused');
                  		lkqdVPAID.subscribe(function(){
                        cLog('AdError');
                      }, 'AdError');
        */
        // vpaid EVENTS
        lkqdVPAID.subscribe(function() {
          cLog('AdLoadFailure');
        }, 'AdLoadFailure');
        lkqdVPAID.subscribe(function() {
          cLog('AdNotViewable');
          _isVideoContainerViewable = false;
        }, 'AdNotViewable');
        lkqdVPAID.subscribe(function() {
          cLog('Viewability');
        }, 'Viewability');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnmeasurable');
        }, 'AdUnmeasurable');
        //          		lkqdVPAID.subscribe(function(){ cLog('AdOpportunity'); }, 'AdOpportunity');
        lkqdVPAID.subscribe(function() {
          cLog('AdNonOpportunity');
        }, 'AdNonOpportunity');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnavailable');
        }, 'AdUnavailable');
        lkqdVPAID.subscribe(function() {
          cLog('AdAvailable');
        }, 'AdAvailable');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnavailableTimeout');
        }, 'AdUnavailableTimeout');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnavailableNonSuccess');
        }, 'AdUnavailableNonSuccess');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnavailableAborted');
        }, 'AdUnavailableAborted');
        lkqdVPAID.subscribe(function() {
          cLog('AdAvailableHeaderBidding');
        }, 'AdAvailableHeaderBidding');
        lkqdVPAID.subscribe(function() {
          cLog('AdUnavailableHeaderBidding');
        }, 'AdUnavailableHeaderBidding');
        lkqdVPAID.subscribe(function() {
          cLog('ContentVideoStart');
        }, 'ContentVideoStart');
        lkqdVPAID.subscribe(function() {
          cLog('ContentVideoComplete');
        }, 'ContentVideoComplete');

        lkqdVPAID.subscribe(function() {
          cLog('AdViewable');
          _isVideoContainerViewable = true;
          //if (_videoState == 'AdPaused')
          //  lkqdVPAID.resumeAd();
        }, 'AdViewable');

        lkqdVPAID.subscribe(function() {
          cLog('AdOpportunity');
          if (_showVideoAd) // catchall in case AdVideoComplete was not raised and able to hide the video container
            _hideVideoUnit();
        }, 'AdOpportunity');

        lkqdVPAID.subscribe(function() {
          cLog('AdLoaded');
          //                if (_showVideoAd && _videoState=='AdPlaying') {
          //                  cLog('end video hack');
          //                  _endVideoPlay();
          //                }
          _videoState = 'AdLoaded';
          lkqdVPAID.startAd();
        }, 'AdLoaded');

        lkqdVPAID.subscribe(function() {
          cLog('AdStarted');
          _videoState = 'AdStarted';
          eventLog('AdStarted event -- viewable=' + _isPlayerViewable() + '  //  playerState =' + _videoState, `color:blue`);
          _adIsLoaded = true;
          if (widgetConfig.isMuted == true)
            lkqdVPAID.setAdVolume(0);

          //                if (!widgetConfig.videoAdEnabled) { // the case where hit this event after disabling video, be sure to show it and disable again
          //                    widgetConfig.videoAdEnabled = true;
          //                    setTimeout(_disableVideoRequests, 2000);
          //                }
          if (!widgetConfig.startWhenViewable) {
            // showDisplayAd check to see if display is showing, then pause.
            if (_showDisplayAd) {
              eventLog(`AdStarted - pausing ad container is shown -- will resume after disp ad`, `color:orange`);
              trace(`Video loaded -- will resume after disp ad`, `info`);
              _videoCont.style.display = 'none';
              lkqdVPAID.pauseAd();
            } else {
              _initMoatOnAdTime = true; // ONLY for Play out of view
              _showVideoUnit(); // ONLY for Play out of view
            }
          } else {
            if (!_isPlayerViewable()) {
              eventLog(`AdStarted - pausing player out of view`, `color:orange`);
              cLog('AdStarted and not viewable');
              lkqdVPAID.pauseAd();
              _showVideoUnit();
              if (!_checkPlayerStateTimeout)
                clearTimeout(_checkPlayerStateTimeout);
              _checkPlayerStateTimeout = setTimeout(_checkPlayerState, 5000);
            }
            if (_isPlayerViewable() && !_showDisplayAd) {
              _initMoatOnAdTime = true;
              _showVideoUnit();
            } else if (_isPlayerViewable() && _showDisplayAd) {
              _videoCont.style.display = 'none';
              lkqdVPAID.pauseAd();
              eventLog(`AdStarted - pausing ad container is shown -- will resume after disp ad`, `color:orange`)
              trace(`Video loaded -- will resume after disp ad`, `info`);
            } else if (!_showVideoAd && _videoState == 'AdPlaying') {
              cLog('AdStarted - pausing ad container is shown');
              _videoCont.style.display = 'none';
              lkqdVPAID.pauseAd();
            }
          }
        }, 'AdStarted');

        lkqdVPAID.subscribe(function() {
          cLog('AdImpression');
        }, 'AdImpression');

        lkqdVPAID.subscribe(function() {
          cLog('AdVideoStart.  State : ' + _videoState);
          /*                if (!moatApi && _initMoatOnAdTime) {

                              moatApi = initMoatTracking(document.getElementById('smbPlayer'), ids, e.duration, 'saambaajsvidint907431712010', e.tag);
                              moatApi.dispatchEvent({
                                  "type": "AdVideoStart",
                                  "adVolume": lkqdVPAID.getAdVolume()
                              });
                              eventLog(` Moat: AdVideoStart (On adTime) // Volume = ${lkqdVPAID.getAdVolume()} // playerState = AdVideoStart`, `color:white; background: green;`);
                          }
          */
        }, 'AdVideoStart');

        lkqdVPAID.subscribe(function() {
          cLog('AdVideoFirstQuartile');
          raiseMoatEvent('AdVideoFirstQuartile', lkqdVPAID.getAdVolume());
        }, 'AdVideoFirstQuartile');
        lkqdVPAID.subscribe(function() {
          cLog('AdVideoMidpoint');
          raiseMoatEvent('AdVideoMidpoint', lkqdVPAID.getAdVolume());
        }, 'AdVideoMidpoint');
        lkqdVPAID.subscribe(function() {
          cLog('AdVideoThirdQuartile');
          raiseMoatEvent('AdVideoThirdQuartile', lkqdVPAID.getAdVolume());
        }, 'AdVideoThirdQuartile');

        lkqdVPAID.subscribe(function() {
          cLog('AdVideoComplete');
          _videoState = 'AdVideoComplete';
          raiseMoatEvent('AdVideoComplete', lkqdVPAID.getAdVolume());
          _resetVideoUnit();
        }, 'AdVideoComplete');

        lkqdVPAID.subscribe(function() {
          cLog('AdPlaying');
          _videoState = 'AdPlaying';
        }, 'AdPlaying');
        lkqdVPAID.subscribe(function() {
          cLog('AdStopped');
          _videoState = 'AdStopped';
        }, 'AdStopped');
        lkqdVPAID.subscribe(function() {
          cLog('AdPaused');
          _videoState = 'AdPaused';
          raiseMoatEvent('AdPaused', lkqdVPAID.getAdVolume());
        }, 'AdPaused');
        lkqdVPAID.subscribe(function() {
          cLog('AdError');
          _videoState = 'AdError';
        }, 'AdError');

      }

      vpaidFrame = document.createElement('iframe');
      vpaidFrame.id = lkqdSettings.lkqdId;
      vpaidFrame.name = lkqdSettings.lkqdId;
      vpaidFrame.style.display = 'none';
      var vpaidFrameLoaded = function() {
        vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
          lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
          onVPAIDLoad();
          lkqdVPAID.handshakeVersion('2.0');
          setTimeout(function() {
            lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
          }, 2000);

        });
        var vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
        vpaidLoader.setAttribute('async', 'async');
        vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js';
        vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
      };
      var vpaidFrameLoadedError = function() {
        cLog("init err");
      };
      vpaidFrame.onload = vpaidFrameLoaded;
      vpaidFrame.onerror = vpaidFrameLoadedError;
      _videoCont.appendChild(vpaidFrame);
      //document.getElementById("player").appendChild(vpaidFrame);

    }; // end _setupLKQDVideoPlayer

    //var _smbJWPlayer;
    /*        var _setupJWVideoPlayer = function () {
                if (_isMobileDevice()) {
                    widgetConfig.isMuted = true;
                }

                if (widgetConfig.videoAdEnabled) {
                    _tagDeconstruct();
                    if (widgetConfig.useSession) {
                        if (isSessionExpired(_videoAdTimeSessionKey) || widgetConfig.maxVideoAdRequestTimeInSec == 0)
                            resetVideoAdRequestCount();
                    } else {
                        _videoAdRequestCount = 0;
                    }
                }

                var ids = {
                    "level1": widgetConfig.partnerName,
                    "level2": 'widget/va/jw',
                    "level3": _tagInfo.AdServer,
                    "level4": _tagInfo.id,
                    "slicer1": widgetConfig.videoRequestType
                };

                var moatApi = null,
                    moatMute = null,
                    firstEx = null,
                    secondEx = null,
                    thirdEx = null;

                var _smbJWPlayer = jwplayer(_getPlayerElementId());
                _smbJWPlayer.setup({
                    autostart: 'false',
                    mute: widgetConfig.isMuted,
                    volume: widgetConfig.volume,
                    file: widgetConfig.videoFile,
                    width: '100%',
                    height: '100%',
                    advertising: {
                        autoplayadsmuted: 'true',
                        vpaidcontrols: 'true',
                        client: widgetConfig.videoRequestType,
                        schedule: {
                            "pre": {
                                "offset": "pre",
                                "tag": widgetConfig.videoTag
                            }
                        }
                    }
                });
                var _checkPlayerVolume = function () {
                    return jwplayer(_getPlayerElementId()).getVolume() / 100;
                };
                _smbJWPlayer.on('ready', function (event) {
                    jwplayer(_getPlayerElementId()).setMute(widgetConfig.isMuted);
                    if (widgetConfig.isMuted && widgetConfig.hoverUnMute) {
                        var container = _smbJWPlayer.getContainer();
                        cLog('setting mouse events');
                        _bind(container, 'mouseenter', function () {
                            _smbJWPlayer.setMute(false);
                        });
                        _bind(container, 'mouseleave', function () {
                            _smbJWPlayer.setMute(true);
                        });
                    }
                });
                _smbJWPlayer.on('adRequest', function (e) {
                    cLog('adRequest: ' + e.adposition + ', ' + e.client + ', ' + e.offset + ', ' + e.tag);
                    if (widgetConfig.isMuted == true)
                        jwplayer(_getPlayerElementId()).setMute(widgetConfig.isMuted);
                    else if (!moatMute)
                        jwplayer(_getPlayerElementId()).setVolume(widgetConfig.volume);
                });
                _smbJWPlayer.on('adPlay', function (e) {
                    if (moatApi) {
                        moatApi.dispatchEvent({
                            "type": "AdPlayed",
                            "adVolume": _checkPlayerVolume()
                        });
                        eventLog(` Moat: adPlayed`, `color:white; background: orange;`);
                    }
                });
                _smbJWPlayer.on('adImpression', function (e) {
                    var playerState = jwplayer(_getPlayerElementId()).getState();
                    cLog('adImpression event -- viewable=' + _isPlayerViewable() + '  // mute=' + jwplayer(_getPlayerElementId()).getMute() + '  //  playerState =' + playerState);
                    _adIsLoaded = true;
                    if (widgetConfig.isMuted == true)
                        _setMute();

                    if (!widgetConfig.startWhenViewable) {
                        // showDisplayAd check to see if display is showing, then pause.
                        if (_showDisplayAd) {
                            eventLog(`%c Adimpression - pausing ad container is shown -- will resume after disp ad`, `color:orange`);
                            trace(`Video loaded -- will resume after disp ad`, `info`);

                            jwplayer(_getPlayerElementId()).pause(true);
                        } else {
                            _initMoatOnAdTime = true; // ONLY for Play out of view
                            _showVideoUnit(); // ONLY for Play out of view
                        }
                    } else {
                        if (!_isPlayerViewable()) {
                            eventLog(` Adimpression - pausing player out of view`, `color:orange`);
                            cLog('adImpression and not viewable');
                            jwplayer(_getPlayerElementId()).pause(true);
                            _showVideoUnit();
                            if (!_checkPlayerStateTimeout)
                                clearTimeout(_checkPlayerStateTimeout);
                            _checkPlayerStateTimeout = setTimeout(_checkPlayerState, 5000);
                        }
                        if (_isPlayerViewable() && !_showDisplayAd) {
                            _initMoatOnAdTime = true;
                            _showVideoUnit();
                        } else if (_isPlayerViewable() && _showDisplayAd) {
                            jwplayer(_getPlayerElementId()).pause(true);
                            eventLog(` Adimpression - pausing ad container is shown -- will resume after disp ad`, `color:orange`)
                        } else if (!_showVideoAd && playerState == 'playing') {
                            cLog('Adimpression - pausing ad container is shown');
                            jwplayer(_getPlayerElementId()).pause(true);
                        }
                    }
                    if (widgetConfig.isMuted == true)
                        setTimeout(_setMute, 500);
                });
                _smbJWPlayer.on('adComplete', function (e) {
                    cLog('adComplete');

                    moatApi.dispatchEvent({
                        "type": "AdVideoComplete",
                        "adVolume": _checkPlayerVolume()
                    });
                    eventLog(` Moat: AdVideoComplete `, `color:white; background: blue;`);

                    _resetVideoUnit();

                    firstEx = null,
                        secondEx = null,
                        thirdEx = null,
                        moatApi = null; // will force re-init on adTime
                    eventLog(` moatApi: ${moatApi} `, `color:white; background: red;`);
                });
                _smbJWPlayer.on('adPause', function (e) {
                    cLog('adPause');
                    if (moatApi) {
                        moatApi.dispatchEvent({
                            "type": "AdPaused",
                            "adVolume": _checkPlayerVolume()
                        });
                        eventLog(` Moat: AdPaused`, `color:white; background: orange;`);
                    };
                });
                _smbJWPlayer.on('volume', function (e) {
                    // cLog('AdVolumeChange');
                    if (moatApi) {
                        moatApi.dispatchEvent({
                            "type": "AdVolumeChange",
                            "adVolume": _checkPlayerVolume()
                        });
                        eventLog(` Moat: AdVolumeChange, vol = ${_checkPlayerVolume()}`, `color:white; background: orange;`);
                    } else {
                        //cLog('AdVolumeChange');
                    }
                });
                _smbJWPlayer.on('mute', function (e) {
                    if (moatApi && !moatMute) {
                        moatMute = true;
                        // jwplayer(_getPlayerElementId()).setVolume(0)
                        //eventLog(` UNMUTE // vol = ${_getPlayerVolume()}`,`color: green; %c` );
                    } else {
                        moatMute = false;
                        jwplayer(_getPlayerElementId()).setVolume(widgetConfig.volume)
                        //eventLog(` MUTE // vol = ${_getPlayerVolume()}`,`color: red; %c` );
                    }
                });
                _smbJWPlayer.on('adTime', function (e) {
                    // cLog(`adTime - position = ${e.position}, duration = ${e.duration}`);
                    var currentQuartile = _checkVideoQuartile(e);
                    if (moatApi) {
                        if (currentQuartile) {
                            moatApi.dispatchEvent({
                                "type": currentQuartile,
                                "adVolume": _checkPlayerVolume()
                            });
                            eventLog(` ${currentQuartile} Reached // Volume ${_checkPlayerVolume()}`, `color:black; background: yellow;`);
                        }
                    } else if (!moatApi && _initMoatOnAdTime) {
                        var playerState = jwplayer(_getPlayerElementId()).getState()

                        moatApi = initMoatTracking(document.getElementById(_getPlayerElementId()), ids, e.duration, 'saambaajsvidint907431712010', e.tag);
                        moatApi.dispatchEvent({
                            "type": "AdVideoStart",
                            "adVolume": _checkPlayerVolume()
                        });
                        eventLog(` Moat: AdVideoStart (On adTime) // Volume = ${_checkPlayerVolume()} // playerState = ${playerState}`, `color:white; background: green;`);
                        // cLog(moatApi)
                        // cLog(e);
                    }
                });

                var _checkVideoQuartile = function (e) {
                    var remaining = Math.round(e.duration - e.position),
                        position = Math.round(e.position),
                        quartile = Math.round(e.duration / 4),
                        first = quartile,
                        second = (quartile * 2),
                        third = (quartile * 3);

                    if ((position == first) && !firstEx) {
                        firstEx = true;
                        return 'AdVideoFirstQuartile';

                    } else if ((position == second) && !secondEx) {
                        secondEx = true;
                        return 'AdVideoMidpoint';

                    } else if ((position == third) && !thirdEx) {
                        thirdEx = true;
                        return 'AdVideoThirdQuartile';
                    } else {
                        return null;
                    }
                };

                _smbJWPlayer.on('adSkipped', function (e) {
                    cLog('adSkipped');
                    _resetVideoUnit();
                });
                _smbJWPlayer.on('adStarted', function (e) {
                    var playerState = jwplayer(_getPlayerElementId()).getState();
                    eventLog(` adStarted // playerState = ${playerState}`, `color: yellow; %c`);
                });
                _smbJWPlayer.on('play', function (e) {
                    cLog('play event');
                });
                _smbJWPlayer.on('complete', function (e) {
                    cLog('complete');
                    _resetVideoUnit();
                });
                _smbJWPlayer.on('adError', function (e) {
                    cLog('adError - ' + e.type + ', ' + e.message + ', ' + e.tag);
                    cLog('fullError: ' + JSON.stringify(e));
                    _resetVideoUnit();
                });
                _smbJWPlayer.on('error', function (e) {
                    cLog('error - ' + e.type + ', ' + e.message + ', ' + e.tag);
                    cLog('fullError: ' + JSON.stringify(e));
                    _resetVideoUnit();
                });
                _smbJWPlayer.on('viewable', function () {
                    cLog('on viewable - ' + jwplayer(_getPlayerElementId()).getViewable());
                    _checkIfVideoInView();
                });
                _smbJWPlayer.on('beforePlay', function () {
                    cLog('beforePlay');
                });

            }
          */

    var _resetVideoUnit = function() {
      cLog('resetting');
      _adIsLoaded = false;
      _initMoatOnAdTime = false;

      if (_showVideoAd != false) {
        //_showVideoAd = false;  moved to hide ad unit
        if (_checkPlayerStateTimeout)
          clearTimeout(_checkPlayerStateTimeout);
        _hideVideoUnit();
      }
    };

    var _showVideoUnit = function() {
      if (widgetConfig.videoAdEnabled) {
        if (_currentFocus == 'ad') { // allow display ads to complete
          cLog('postpone video play until display ad done');
          if (_videoState == 'AdPlaying')
            lkqdVPAID.pauseAd();
          return;
        }

        _stopSlide();
        _stopDisplayAd();

        cLog('showing video ad unit - ' + _videoState);
        // hide items
        _itemCont.style.display = 'none';
        //if (widgetConfig.displayAdEnabled)
        _displayAdCont.style.display = 'none'
        _videoCont.style.display = 'block';
        // show ad unit
        _showVideoAd = true;
        _currentFocus = 'video';
        // if (_isPlayerViewable() && playerState == 'paused') { // TEMP
        if (_videoState == 'AdPaused' && (!widgetConfig.startWhenViewable || _isPlayerViewable())) {
          cLog('resuming (playing) ready video in showAdUnit');
          trace('resuming video', 'info')
          _initMoatOnAdTime = true;
          lkqdVPAID.resumeAd();
        }
        if (!moatApi) { //} && _initMoatOnAdTime) {
          moatApi = initMoatTracking(document.getElementById('smbPlayer'), _moatIds, lkqdVPAID.getAdDuration(), 'saambaajsvidint907431712010', widgetConfig.videoTag); // was e.Tag (FIND THIS)
        }
        raiseMoatEvent('AdVideoStart', lkqdVPAID.getAdVolume());
        trace('vidAd', 'price')
      } else { // skip video if tag is blank
        cLog('Video not enabled, skipping video');
        _hideVideoUnit();
      }
    };

    var _checkPlayerState = function() {
      if (_checkPlayerStateTimeout)
        clearTimeout(_checkPlayerStateTimeout);
      cLog('check player state = ' + _videoState + '  viewable=' + _isPlayerViewable());

      if (_showVideoAd && (_videoState != "AdPlaying" || _videoState != "AdPaused")) {
        cLog('invalid state, showing slides');
        _resetVideoUnit();
      } else if (_showVideoAd && _videoState == "AdPaused" && _isPlayerViewable() == false) {
        cLog('Re-Pausing in state check');
        lkqdVPAID.pauseAd();
      } else if (_showVideoAd && _videoState == "AdPaused" && _isPlayerViewable() == true) {
        cLog('Playing in state check');
        _initMoatOnAdTime = true;
        lkqdVPAID.resumeAd();
      }
    };

    var _getPlayerElementId = function() {
      return 'smbPlayer';
    };

    var _isSlideShowViewable = function() {
      return (_isElementVisible(document.getElementById(widgetItemContId)));
    }

    var _isPlayerViewable = function() {
      if (_isIphone())
        return (_isElementVisible(document.getElementById(_getPlayerElementId())));
      else
        return _isVideoContainerViewable;
    }

    var _checkIfVideoInView = function() {
      if (!_showVideoAd)
        return;
      cLog('is video in view - player state = ' + _videoState + '  viewable=' + _isPlayerViewable());
      if (_isPlayerViewable()) {
        if (_videoState == "AdPaused") {
          _initMoatOnAdTime = true;
          lkqdVPAID.resumeAd();
          cLog("resuming play video");
        }
      } else if (!(_videoState == "AdPlaying" || _videoState == "AdPaused")) {
        cLog('VideoInView - Invalid check state - hiding video : ' + _videoState);
        _resetVideoUnit();
      }
    }

    var _isElementVisible = function(el) {
      if (widgetConfig.visibility == '50') {
        var rect = el.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          efp = function(x, y) {
            return document.elementFromPoint(x, y)
          };

        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
          return false;

        // Return true if any of its four corners are visible
        return (
          el.contains(efp(rect.left, rect.top)) ||
          el.contains(efp(rect.right, rect.top)) ||
          el.contains(efp(rect.right, rect.bottom)) ||
          el.contains(efp(rect.left, rect.bottom)));
      } else {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
      }
    }

    var _isIphone = function() {
      return ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)));
    }

    var _hideVideoUnit = function() {
      cLog('Hiding Video');
      _showVideoAd = false;
      // Check to see if there is a display ad to show after video
      if (widgetConfig.displayAdEnabled && _displayAdHasRendered == true) {
        _showDisplayAdUnit();
        eventLog(`Showing Display Ad after Video`, `color: orange`);
        trace(`Showing Dislpay after video`, `info`)
        return;
      }
      _videoCont.style.zIndex = _hideZindex;
      _itemCont.style.display = 'block';
      _nextSlide();
    };

    // *
    // WIDGET FUNCTIONS
    // *
    var _getSelectedMarketInfo = function(e) {
      var markets = e && e.target;

      if (e)
        markets = markets.options;
      else
        markets = _marketSelect.options;

      for (var i = 0; i < markets.length; i++) {
        var market = markets[i];

        if (market.selected) {
          var marketInfo = {
            marketId: parseInt(market.value),
            marketName: market.innerHTML
          };
          return marketInfo;
        }
      }
    };

    // support for pause/play the player based on browser tab in view.
    (function() {
      var hidden = "hidden";

      // Standards:
      if (hidden in document)
        document.addEventListener("visibilitychange", onchange);
      else if ((hidden = "mozHidden") in document)
        document.addEventListener("mozvisibilitychange", onchange);
      else if ((hidden = "webkitHidden") in document)
        document.addEventListener("webkitvisibilitychange", onchange);
      else if ((hidden = "msHidden") in document)
        document.addEventListener("msvisibilitychange", onchange); // IE 9 and lower:
      else if ("onfocusin" in document)
        document.onfocusin = document.onfocusout = onchange; // All others:
      else
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

      function onchange(evt) {
        var v = "visible",
          h = "hidden",
          evtMap = {
            focus: v,
            focusin: v,
            pageshow: v,
            blur: h,
            focusout: h,
            pagehide: h
          };

        evt = evt || window.event;

      }

      // set the initial state (but only if browser supports the Page Visibility API)
      if (document[hidden] !== undefined)
        onchange({
          type: document[hidden] ? "blur" : "focus"
        });
    })();

    var _trimString = function(str, len) {
      if (str.length > len)
        return str.substring(0, len);
      else
        return str;
    };

    // EVENTS
    var _displayAdRequestTimeout = function() {
      if (_requestDisplayAdTimeoutTimer)
        clearTimeout(_requestDisplayAdTimeoutTimer);
      if (widgetConfig.useSession) { // if session timeout then reset it
        var isoSetTime = Date.now();
        sessionStorage.setItem(_displayAdTimeSessionKey, isoSetTime);
        resetDisplayAdRequestCount();
        widgetConfig.displayAdEnabled = true; // this event could only be fired if enabled by default so re-enable
        _requestDisplayAdTimeoutTimer = setTimeout(_displayAdRequestTimeout, widgetConfig.maxDisplayAdRequestTimeInSec * 1000);
        trace(`Re-set dispAd time to ${isoSetTime}`, 'info')
      } else {
        trace(`Disabling display ad requests`, 'warn')
        widgetConfig.displayAdEnabled = false;
      }
    };

    var _videoAdRequestTimeout = function() {
      if (_requestVideoTimeoutTimer)
        clearTimeout(_requestVideoTimeoutTimer);
      if (widgetConfig.useSession) { // if session timeout then reset it
        var isoSetTime = Date.now();
        sessionStorage.setItem(_videoAdTimeSessionKey, isoSetTime);
        sessionStorage.setItem(_videoAdRequestCountSessionKey, '0');
        _videoAdRequestCount = 0;
        widgetConfig.videoAdEnabled = true; // this event could only be fired if enabled by default so re-enable
        _requestVideoTimeoutTimer = setTimeout(_videoAdRequestTimeout, widgetConfig.maxVideoAdRequestTimeInSec * 1000);
        trace(`Re-set video time to ${isoSetTime}`, 'info')
      } else {
        trace(`Disabling video ad requests`, 'warn')
        widgetConfig.videoAdEnabled = false;
      }
    };

    var _onMarketChange = function(market) {
      _currentMarketId = market;
      _getPosts(_currentMarketId);
    };

    var _onSlideChange = function(count) {
      _itemCont.style.zIndex = _showZindex;

      if (widgetConfig.videoAdEnabled) {
        if (isAdReady()) {
          trace('showing ad found between slides', 'info');
          _showVideoUnit();
          return;
        }
      }

      var showIdx = count < _slideMaxCount ? count : _slideMaxCount;
      cLog('Slide count = ' + _slideIndex % showIdx);
      if ((widgetConfig.displayAdEnabled && _displayAdHasRendered) && ((_slideIndex % showIdx === 0) || (_isSlideShowViewable() == false))) {
        if (_showVideoAd == true)
          return; // we are already showing videoad

        _showDisplayAdUnit();
      } else { // this won't hit if max count = 1
        _nextSlide()
      }
    };

    var isAdReady = function() {
      return (_adIsLoaded && (_videoState == 'AdPlaying' || _videoState == 'AdPaused')); // _adIsLoaded is used to differentiate between and ad play and black video play.
    };

    // PUBLIC
    return {

      // Bootstraps app
      init: function(widget, config) {
        if (!widgetConfig.enabled) {
          console.warn('hiding international widget')
        } else {
          if (_isAdexBlocked()) {
            console.warn('adex is being blocked - widget disabled')
          } else {
            _widgetContainer = widget;
            _config = config;
            _createAnalytics();
            _createWidget();
          }
        }
      },
    }; // end public
  })(); // end module

  // *
  // Init widget after script dependencies have loaded
  // *
  var cbName = '__smbldr' + Math.round(Math.random() * 1000000), // jsonp callback
    cbConfigName = '__smbcfgldr' + Math.round(Math.random() * 1000000), // jsonp callback
    widgetCont = el.getByClassName(document, widgetClass)[0], // need the widget container to get data src
    widgetConfig = {
      partnerId: 0,
      partnerName: widgetCont.getAttribute('data-smb-partner-id') ? widgetCont.getAttribute('data-smb-partner-id') : '',
      playerId: widgetCont.getAttribute('data-smb-vid-player'),
      defaultSize: widgetCont.getAttribute('data-smb-size') ? widgetCont.getAttribute('data-smb-size') : '',
      enabled: true,
      isMuted: 0,
      volume: 1,
      videoRequestType: "vast",
      hoverUnMute: false,
      startWhenViewable: false,
      traceLevel: 0,
      visibility: 50,
      displayAdEnabled: false,
      videoAdEnabled: false,
      useSession: false,
      displayAdTimeout: 10 * 1000,
      prebidTimeout: 700,
      maxDisplayAdRequests: 0,
      maxDisplayAdRequestTimeInSec: 0,
      maxVideoAdRequests: 0,
      maxVideoAdRequestTimeInSec: 0,
      maxPosts: 20,
      optimizationLevel: 0,
      videoFile: 'https://saambaa-static.azureedge.net/JyRhjVLe-30100108.mp4',
      videoTag: '',
      videoId: '',
      displayAdId: '',
      displayAdSlot: '',
      bidders: [],
      bidCpms: null,
    };
  // Load all style assets dynamically
  var stylesToLoad = [{
    id: fontStyleId,
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700'
  }, {
    id: widgetSelecStyleId,
    href: assetBaseUrl + '/assets/select.css'
  }, {
    id: widgetStyleId,
    href: assetBaseUrl + '/assets/smb-vidad' + widgetConfig.defaultSize + '.css'
  }];

  stylesLoader(stylesToLoad);
  var formatBids = function(bids) {
    var preBids = [];
    if (bids && bids.constructor === Array) {
      let sep = '';
      let bidStr = '';
      for (var i in bids) {
        if (typeof bids[i].Value !== "undefined")
          bidStr = bidStr + sep + bids[i].Value;
        sep = ',';
      }
      preBids = JSON.parse(`[${bidStr}]`);
    }
    return preBids;
  };

  var formatCPMs = function(vals) {
    //      return JSON.parse(`${vals.Value}`);
    var CPMs = null;
    if (vals && vals.constructor === Array) {
      for (var i in vals) {
        if (typeof vals[i].Key !== "undefined" && vals[i].Key == "BidCpmAdjustment") {
          CPMs = JSON.parse(vals[i].Value);
          break;
        }
      }
    }
    return CPMs;
  };
  var getVideoIdFromTag = function(str) {
    let vidId = null;
    if (str != null) {
      let idx = str.indexOf('&sid=') + 5;
      if (idx > 0)
        vidId = str.substring(idx, idx + 6);
    }
    return vidId;
  };

  // gets widget configuration settings
  window[cbName] = function(data) {

    // widgetConfig.partnerId = 1; widgetConfig.marketId = 31;
    // widgetConfig.channelId = 32898;

    widgetConfig.partnerId = parseInt(data.partner);
    widgetConfig.marketId = parseInt(data.market);
    widgetConfig.channelId = parseInt(data.channel);
    widgetConfig.enabled = data.enabled;
  };

  window[cbConfigName] = function(data) {
    widgetConfig.isMuted = data.IsMuted;
    widgetConfig.volume = parseInt(data.Volume);
    widgetConfig.videoRequestType = data.VideoRequestType;
    widgetConfig.hoverUnMute = data.HoverUnMute;
    widgetConfig.startWhenViewable = data.StartWhenViewable;
    widgetConfig.traceLevel = data.TraceLevel;
    widgetConfig.visibility = data.Visibility;
    widgetConfig.displayAdEnabled = data.IsDisplayAdEnabled;
    widgetConfig.videoAdEnabled = data.IsVideoEnabled;
    widgetConfig.maxDisplayAdRequests = data.MaxDisplayAdRequests;
    widgetConfig.maxDisplayAdRequestTimeInSec = data.MaxDisplayAdRequestTimeInSec,
      widgetConfig.maxVideoAdRequests = data.MaxVideoAdRequests,
      widgetConfig.maxVideoAdRequestTimeInSec = data.MaxVideoAdRequestTimeInSec,
      widgetConfig.maxPosts = data.MaxPosts,
      widgetConfig.optimizationLevel = data.OptimizationLevel,
      widgetConfig.displayAdId = data.DisplayAdId;
    widgetConfig.displayAdSlot = data.DisplayAdSlot;
    widgetConfig.displayAdTimeout = data.DisplayAdTimeout * 1000;
    widgetConfig.useSession = data.UseSession;
    widgetConfig.prebidTimeout = data.PrebidTimeout;
    widgetConfig.analyticsSiteId = data.AnalyticsSiteId;

    //widgetConfig.videoFile = data.VideoFile;  // the black video used after ad
    widgetConfig.videoTag = data.VideoTag;
    widgetConfig.videoId = getVideoIdFromTag(data.VideoTag);
    widgetConfig.preBids = formatBids(data.PreBids);
    widgetConfig.bidCpms = formatCPMs(data.PreBidConfigs); //data.PreBidConfigs[0]);
  };

  widgetConfig.partnerName = widgetConfig.partnerName ? widgetConfig.partnerName : location.host.split(".").slice(-2).join(".").replace('.com', '');
  widgetConfig.playerId = 'smRnsmTB'; //'nhI3wNRn';
  cLog('PartnerName = ' + widgetConfig.partnerName + ', PlayerId = ' + widgetConfig.playerId);

  scriptsToLoadHead
  var scriptsToLoadHead = [{
    id: cbConfigName,
    /*          src: 'https://saambaa.com/widget/va/jw/assets/cfg/smb-cfg-' + widgetConfig.partnerName + '.js'  */
    src: apiBaseUrl + '/properties/' + widgetConfig.partnerName + '?callback=' + cbConfigName + '&wtype=300x350' + '&isMobile=' + _isMobileDevice() + '&cb=true'
  }, {
    id: googTagLibId,
    src: 'https://www.googletagservices.com/tag/js/gpt.js'
  }, {
    id: smbPrebid,
    src: '//saambaa.com/assets/js/smb-prebid.js'
  }, {
    id: cbName,
    src: '//saambaa.com/partner-status?callback=' + cbName + '&dataSrc=' + encodeURIComponent(widgetCont.getAttribute('data-src'))
  }, {
    id: 'googleAnalytics',
    src: 'https://www.google-analytics.com/analytics.js'
  }];

  scriptsLoader(scriptsToLoadHead, function() {
    VidWidget.init(widgetCont, widgetConfig);
  });
})();
