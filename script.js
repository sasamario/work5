$(function(){
   $(".text-start").click(function(){
     $(".text-start").css("display","none")
     $('.typist')
     .typist({ speed: 12 })
     .typistAdd('ささま：ようこそ。ささまのポートフォリオダンジョンへ。')
     .typistPause(1000)
     .typistAdd('このサイトはドラゴンクエストふうポートフォリオサイトです。')
     .typistPause(1000)
     .typistAdd('てきにきをつけてたのしんでくれ...さらば。\n')
     .typistPause(1000)
     .typistAdd('P.S.ドラクエはモンスターズしかやったことがありません。')
     .typistPause(1000)
     .typistAdd('おわり')
     .append('<span class="tenmetsu next1">＞</span>');
   });
});

$(function(){
  $(".enemy-text-start").click(function(){
    $(".enemy-text-start").css("display","none")
    $('.typist2')
    .typist({ speed: 12})
    .typistAdd('HTMLとCSSとJAVASCRIPTがあらわれた。')
    .typistPause(1000)
    .typistAdd('ささまはどうする？\n')
    .typistPause(1000)
    .typistAdd('つづく。')
    .append('<span class="tenmetsu next2">＞</span>');
   $(".next2").click(function(){
     $(".typist2").css("display","none")
     $('.typist3')
     .typist({ speed: 12 })
     .typistAdd('ささまはぷろげーとやどっといんすとーるでしゅぎょうした。')
     .append('<span class="tenmetsu next2">＞</span>');
   });
  });
});
