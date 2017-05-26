$(function(){
    $('.search').on('click',function(){
        $('.nav,.search-nav').addClass('searching');
        // $('.bag-click').removeClass('bag');
        $('.right-btn').addClass('right-btn-click');
    })
    $('.bag').on('click',function(){
        $('.nav,.search-nav').removeClass('searching');
        $(this).removeClass('right-btn-click');
        // $('.bag-click').addClass('bag');
    })
    $('.left-btn').on('click',function(){
        $('.nav .lists .ulis.now').toggleClass('clicking');
        $('.bag').toggleClass('click');
    })

        var uls=$('.column .span-ul');
        uls.each(function(i,v){
            $(v).on('click',function(){
                if($(window).outerWidth(true) < 770){
                    $(this).toggleClass('click').find('ul,span').toggleClass('click');
                }else{
                    return;
                }
            })
        });


    var aimgs=$('.carousel .aimgs > a');
    var lis=$('.carousel .lis li');
    var leftbtn=$('.carousel .btn-left .left');
    var rightbtn=$('.carousel .btn-right .right');

    moveTo=function(el,dir) {
        if(dir=='right'){
            aimgs.filter('.active')
                .removeClass('active')
                .addClass('left-out')
                .delay(800).queue(function(){
                $(this).removeClass('left-out').dequeue();
            });
            $(el).addClass('right-in');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right-in').addClass('active');
        }else if(dir=='left'){
            aimgs.filter('.active')
                .addClass('right-out')
                .delay(800).queue(function(){
                    $(this).removeClass('right-out active').dequeue();
            });
            $(el).addClass('left-in');
            $(el).get(0).offsetWidth;
            $(el).removeClass('left-in').addClass('active');
        }
        lis.filter('.active').removeClass('active');
        lis.eq($(el).index()).addClass('active');
    }
    moveRight=function(){
        var active=aimgs.filter('.active');
        var el=active.next().length? active.next() : aimgs.eq(0);
        moveTo(el,'right');
    }
    moveLeft=function(){
        var active=aimgs.filter('.active');
        var el=active.prev().length? active.prev() : aimgs.eq(-1);
        moveTo(el,'left');
    }

    leftbtn.on('click',moveLeft);
    rightbtn.on('click',moveRight);
    lis.each(function(i,v){
        $(v).on('click',function(){
            var s=aimgs.filter('.active').index();
            if(s==i)return;
            if(s<i){
                moveTo(aimgs.eq(i),'right');
            }else{
                moveTo(aimgs.eq(i),'left');
            }
        })
    })









})