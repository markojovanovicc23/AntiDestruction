const generateHTML = (pageName) => {
    return `
     
     <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>WORKOUT > ${pageName}</div>
    </div>
     `;
  };


  const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
      user-select:none;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
      user-select:none;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
      user-select:none;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };




switch (window.location.hostname) {
    case "www.brazzers.com":
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML("PORNS")
        break;
        case "www.pornhub.com":
            document.head.innerHTML = generateSTYLES();
            document.body.innerHTML = generateHTML("PORNS")
            break;
                case "www.buzzsneakers.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "www.buzzsneakers.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "www.buzzsneakers.me":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "www.blic.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("BLICOVCI")
                break;
                case "xhamster.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.sportvision.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "www.sportvision.me":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "www.sportvision.group":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "planetasport.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("AIR FORCE 1")
                break;
                case "onlyfans.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.xvideos.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "theporndude.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "theporndude.org":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.mozzartbet.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "admiralbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.mozzartsport.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.mozzartbet.co.ke":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "superliga.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.mozzartbet.ng":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "bettingguide.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "mybettingsites.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.balkanbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.merkurxtip.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.sportytrader.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.olbg.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "betway.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "gg.co.uk":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.xnxx.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.eporner.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "hqporner.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "beeg.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.youporn.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "spankbang.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.porntrex.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "xmoviesforyou.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "stripchat.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.tuborg.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("ALCOHOL")
                break;
                case "carlsbergsrbija.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("ALCOHOL")
                break;
                case "www.beerstyle.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("ALCOHOL")
                break;
                case "xvideos2.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.mts.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("ALCOHOL")
                break;
                case "xvideos.click":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "eurovision.tv":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("DESTRUCTION")
                break;
                case "meridianbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.maxbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.pinnbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "soccerbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "vavada.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "vavada-ee.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "pink.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("DESTRUCTION")
                break;
                case "ge.xhamster.desi":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "xhamster1.desi":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "rajwap.cc":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "xhopen.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "torn-porn.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "xhvid.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "daftsex.app":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "txxx.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.porntube.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "cumloader.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "porndoe.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.porngo.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "ww38.hentaiheroe.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "porngo.su":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.bigporn.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "hdpornfree.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.hdpornmax.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "pornxo.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "fuck-videos.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "m.porngo.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.playboy.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.foxporns.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "bangbros.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "xgx.mobi":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.balkanjizz.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "hqtube.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.porn.biz":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "herexxxtube.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "easyporn.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.realitykings.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.homepornking.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "ok.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.pornhat.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "kingsofreal.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.pornkings.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "pornking.info":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "apornvideo.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "freshporno.net":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.filthykings.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.filthyporn.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.cherrynudes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "gotanynudes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.nudespuri.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.redtube.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.pornpics.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "nastypornpics.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.pornpics.de":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.auntmia.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "yespornpics.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.4tube.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.tube8.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.xxxfiles.tv":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "fuckmoral.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "redhdtube.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.xxxvideos247.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.tnaflix.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "porno4days.biz":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.trendyporn.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.perfectgirls.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "vxxx.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "netfapx.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "pornmz.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "pornmz.biz":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.pornky.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "gamdom.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "pornky.asia":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.sexvid.xxx":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "czechzvideo.co":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.erome.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.timesunion.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.gamblingsites.org":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.gambling.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.sports.betmgm.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "promo.nj.betmgm.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.circusbet.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "palmslots.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "caesarspalaceonline.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.caesars.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "miakhalifa.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "thepornmap.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PORNS")
                break;
                case "www.bet365.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.fanduel.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "sportsbook.fanduel.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "casino.fanduel.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "account.www.fanduel.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.draftkings.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "sportsbook.draftkings.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.unibet.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.unibet.nu":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "sports.bwin.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.mcdonalds.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "kfc.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.kfc.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.bk.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.burgerking.co.uk":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.arbys.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.tacobell.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.yum.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.subway.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.chick-fil-a.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.chipotle.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.jackinthebox.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.fiveguys.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.dairyqueen.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.starbucks.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.culvers.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "littlecaesars.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.jimmyjohns.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.whitecastle.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.pandaexpress.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.wendys.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.dunkindonuts.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.dominos.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.panerabread.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.pizzahut.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.sonicdrivein.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.popeyes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.papajohns.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "whataburger.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.hardees.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.zaxbys.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.carlsjr.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.bojangles.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "ir.wingstop.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.raisingcanes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.jerseymikes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.steaknshake.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.in-n-out.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.elpolloloco.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.qdoba.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.checkers.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "deltaco.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.firehousesubs.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.papamurphys.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.timhortons.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.churchs.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.moes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.mcalistersdeli.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.jasonsdeli.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.marcos.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.baskinrobbins.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.auntieannes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "www.bostonmarket.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("FAST FOOD")
                break;
                case "shadowspins.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.pepsi.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CARBONATED DRINKS")
                break;
                case "www.coca-colacompany.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CARBONATED DRINKS")
                break;
                case "www.coca-cola.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CARBONATED DRINKS")
                break;
                case "www.miamiherald.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "casino.partycasino.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "games.paddypower.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "blaze.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.888casino.it":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.fortunecoins.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.wowvegas.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.jackpotcitycasino.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.brabet.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.betano.pt":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.leovegas.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "funrize.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.coolbet.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("CASINO")
                break;
                case "www.nytimes.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PROPAGANDA")
                break;
                case "www.libertynation.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PROPAGANDA")
                break;
                case "www.nyfoundling.org":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("PROPAGANDA")
                break;
                case "www.snickers.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.twix.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.nutella.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.thehersheycompany.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.nestle.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.nestle.rs":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.nestle.co.uk":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.ferrero.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.ferreronorthamerica.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.mars.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "www.mondelezinternational.com":
                document.head.innerHTML = generateSTYLES();
                document.body.innerHTML = generateHTML("JUNK FOOD")
                break;
                case "pornmate.com":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "bestpornsites.org":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "porngeek.com":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "thepornlinks.com":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "bestpornsites.org":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "porngeek.com":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case "thepornlinks.com":
                  document.head.innerHTML = generateSTYLES();
                  document.body.innerHTML = generateHTML("PORNS")
                  break;
                  case ".com":
                    document.head.innerHTML = generateSTYLES();
                    document.body.innerHTML = generateHTML("PORNS")
                    break;
}