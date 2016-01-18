define(function(require, exports, module){
  require('./m.notify')($);
  require('./m.confirm')($);
  require('./m.btn')($);

  var scrollTop = require('./m.scrolltotop'),
      Share = require('./m.share'),
      Login = require('./m.login'),
      win = window,
      WD_CONFS = win.WD_CONFS;

  Share.init(WD_CONFS.share_confs, WD_CONFS.share);

  if (!win['WD']) win['WD'] = {};
  //win['WD'].scrollTop = scrollTop;

  $(function(){
    FastClick.attach(document.body);

    //我的订单，我的优惠券的登录验证
    $('#J_linkMyOrders, #J_linkMyCoupons').on('click', function(){
        var url = $(this).data('url');
        Login.init({
            shop_id:WD_CONFS.shop_id,
            onLogin:function(){
                location.href = url;
            }
        })
    });
      
  });

  scrollTop.init(WD_CONFS.scrollTopConfig);

  $.extend(win['WD'], {
    ajax: function(opts){
      opts = $.extend({
        override: true,
        dataType: 'json',
        errorMsg: '操作失败，请稍后再试',
        cache: false
      }, opts || {});

      if (opts.override) {
        var onSuccess = opts.success,
            onError = opts.error;

        opts.success = function(data){
          if (data && data.status == 'success') {
            if (onSuccess) onSuccess.call(this, data.data);
          } else {
            var msg = data.msg || opts.errorMsg;
            if (onError) onError.call(this, msg);
            else $.notify(msg);
          }
        };

        opts.error = function(){
          $.notify(opts.errorMsg);
        }
      }

      return $.ajax(opts);
   },

   ajaxForm: function(form, opts){
      opts = opts || {};
      var $form = $(form),
          url = $form.attr('action'),
          method = $form.attr('method') || 'get';

      opts = $.extend(true, {
        url: url,
        type: method,
        data: $form.serialize(),
        btnToggle: true
      }, opts);

      if (opts.btnToggle) {
        var $btn = $form.find(':input[type=submit]');
        if (!opts.beforeSend)
          opts.beforeSend = function(){
            $btn.btn('loading');
          };
        if (!opts.complete)
          opts.complete = function(){
            $btn.btn('reset');
          };
        delete opts.btnToggle;
      }

      return WD.ajax(opts);
    },

    isWeixin: function(){
      var ua = navigator.userAgent.toLowerCase();
      return (ua.indexOf('micromessenger') >= 0 || typeof WeixinJSBridge != 'undefined');
    }
  });

});

(function(){
  $.extend(true,WD_CONFS, window.PAGE_CONFS)

  //Handlebars helper
  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 - v2 < 0) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 - v2 <= 0) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 - v2 > 0) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 - v2 >= 0) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
  });

  Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);
          
      return {
          "+": lvalue + rvalue,
          "-": lvalue - rvalue,
          "*": lvalue * rvalue,
          "/": lvalue / rvalue,
          "%": lvalue % rvalue
      }[operator];
  });

  Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
  })


})();