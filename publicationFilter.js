(function($){
    $.book = $.book || {};
    $.extend($.book, {
        init : function(n, h) {
          this.initAtts(h);
          this.initRender(n);
        },
        initAtts : function(h){
            $(".list > dd").each(function(index,ele){
                    var height = $(ele).height();
                    if(height > h ){
                        $('<a href="javascript:void(0);" class="btn_out">展开</a>').insertBefore($(ele).find('div').first());
                        if(!$(ele).hasClass("brand_height")) {
                            $(ele).addClass("brand_height");
                        }
                        var d = $(ele).find(".btn_out");
                        d.bind('click', function(){
                            if(d.hasClass("btn_out")){
                                $(ele).removeClass("brand_height");
                                d.removeClass("btn_out").addClass("btn_in");
                                d.text("收起");
                            }else{
                                $(ele).addClass("brand_height");
                                d.removeClass("btn_in").addClass("btn_out");
                                d.text("展开");
                            }
                        });
                    }else{
                        if($(ele).hasClass("brand_height")) {
                            $(ele).removeClass("brand_height");
                        }
                    }                
            });
        },
        initRender : function(n){
            var o = $(".list");
            var z = $(".filtrate_relative");
            var a = o.find("dd").length;
            if( a > n) {
                z.show();
                o.find("dt").slice(n,a).hide();
                o.find("dd").slice(n,a).hide();
                z.bind('click', function(){
                    var s = z.find("span");
                    if(s.hasClass("on")){
                        o.find("dt").slice(n,a).show();
                        o.find("dd").slice(n,a).show();
                        s.removeClass("on").addClass("close");
                        s.text("收起选项");
                    }else{
                        o.find("dt").slice(n,a).hide();
                        o.find("dd").slice(n,a).hide();
                        s.removeClass("close").addClass("on");
                        s.text("展开选项");
                    }
                });
            }else{
                z.hide();
            }
        }
    });
    $.book.init(5, 24);
})(jQuery);
