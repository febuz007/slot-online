window.__require=function e(t,a,s){function i(n,o){if(!a[n]){if(!t[n]){var r=n.split("/");if(r=r[r.length-1],!t[r]){var c="function"==typeof __require&&__require;if(!o&&c)return c(r,!0);if(l)return l(r,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){for(var d=n.split("/"),u="",h=d.length;h>0;)d[h]&&".."!=d[h]&&(u="/"+d[h]+u),h--;return r="./assets"+u,__quick_compile_project__.require(r,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+n+"'")}n=r}var p=a[n]={exports:{}};t[n][0].call(p.exports,function(e){return i(t[n][1][e]||e)},p,p.exports,e,t,a,s)}return a[n].exports}for(var l="function"==typeof __require&&__require,n=0;n<s.length;n++)i(s[n]);return i}({Kiss918RedBlackPanelConst:[function(e,t){"use strict";cc._RF.push(t,"19d31p/U4NG+o17pAyxWHHr","Kiss918RedBlackPanelConst"),cc._RF.pop()},{}],Kiss918RedBlackPanelEnum:[function(e,t,a){"use strict";cc._RF.push(t,"dea7f/C1glNT7Atj7KcW05l","Kiss918RedBlackPanelEnum"),Object.defineProperty(a,"__esModule",{value:!0}),a.Kiss918Choices=a.Kiss918Status=void 0,function(e){e[e.Active=1]="Active",e[e.Inactive=0]="Inactive"}(a.Kiss918Status||(a.Kiss918Status={})),function(e){e[e.Red=1]="Red",e[e.Black=2]="Black"}(a.Kiss918Choices||(a.Kiss918Choices={})),cc._RF.pop()},{}],Kiss918RedBlackPanelEvent:[function(e,t,a){"use strict";cc._RF.push(t,"df86clfu+lAg7ji8ZCzKUVu","Kiss918RedBlackPanelEvent"),Object.defineProperty(a,"__esModule",{value:!0}),a.Kiss918RedBlackPanelEvent_GreatBlue=void 0,function(e){e.OnStartGamble="GamblePanelEvent.OnStartGamble",e.OnEndGamble="GamblePanelEvent.OnEndGamble"}(a.Kiss918RedBlackPanelEvent_GreatBlue||(a.Kiss918RedBlackPanelEvent_GreatBlue={})),cc._RF.pop()},{}],Kiss918RedBlackPanelModel:[function(e,t,a){"use strict";cc._RF.push(t,"8456dRJsPFEGJmjt1UdIAnV","Kiss918RedBlackPanelModel"),Object.defineProperty(a,"__esModule",{value:!0}),a.Kiss918RedBlackPanelModel=void 0,a.Kiss918RedBlackPanelModel=class{constructor(){this.redBlackActive=!1,this.redBlackResult=null,this.lastCardResults=[]}},cc._RF.pop()},{}],Kiss918RedBlackPanelModule:[function(e,t,a){"use strict";cc._RF.push(t,"34b46xjd1dJfKKidj3lRhxb","Kiss918RedBlackPanelModule");var s=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))(function(i,l){function n(e){try{r(s.next(e))}catch(t){l(t)}}function o(e){try{r(s.throw(e))}catch(t){l(t)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(n,o)}r((s=s.apply(e,t||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});const i=e("../../../../../../scripts/HelperTools"),l=e("./Kiss918RedBlackPanelEnum"),n=e("./Kiss918RedBlackPanelModel");class o extends cc.Component{static init(){this.data=new n.Kiss918RedBlackPanelModel}static getRedBlackPanelStatus(){return this.data.redBlackActive}static setRedBlackPanelStatus(e){this.data.redBlackActive=Boolean(e)}static setRedBlackResult(e){this.data.redBlackResult=e}static getLastCardsResults(){return this.data.lastCardResults}static clearRedBlackResult(){this.data.redBlackResult=null,this.data.lastCardResults=[]}static getRedBlackResult(e,t){return s(this,void 0,void 0,function*(){return new Promise(a=>{const s=i.GetRandomInterger(1,52),n=s<=26?l.Kiss918Choices.Black:l.Kiss918Choices.Red;let o=0;e===n&&(o=2*t);const r={cardResult:s,winAmount:o,playerBalance:o};this.setRedBlackResult(r),this.addLastCardResult(r.cardResult),a(r)})})}static addLastCardResult(e){this.data.lastCardResults.length>=7&&this.data.lastCardResults.shift(),this.data.lastCardResults.push(e)}}a.default=o,o.data=null,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"./Kiss918RedBlackPanelEnum":"Kiss918RedBlackPanelEnum","./Kiss918RedBlackPanelModel":"Kiss918RedBlackPanelModel"}],Kiss918RedBlackPanelPrefab:[function(e,t,a){"use strict";cc._RF.push(t,"f2333TNAUVDQZcO4qhvUBoK","Kiss918RedBlackPanelPrefab");var s=this&&this.__decorate||function(e,t,a,s){var i,l=arguments.length,n=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(l<3?i(n):l>3?i(t,a,n):i(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n},i=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))(function(i,l){function n(e){try{r(s.next(e))}catch(t){l(t)}}function o(e){try{r(s.throw(e))}catch(t){l(t)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(n,o)}r((s=s.apply(e,t||[])).next())})},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const n=e("../../../../../../scripts/framework/gg"),o=e("../../../../../../scripts/HelperTools"),r=l(e("../../../../../../scripts/manager/AudioManager")),c=l(e("../../../../../../scripts/manager/GameSystemManager")),d=l(e("../../../../standardized/kiss918/button/scripts/Kiss918GambleButtonUI")),u=e("./Kiss918RedBlackPanelEnum"),h=e("./Kiss918RedBlackPanelEvent"),p=l(e("./Kiss918RedBlackPanelModule")),{ccclass:B,property:R}=cc._decorator;let g=class extends cc.Component{constructor(){super(...arguments),this.redBlackGroup=null,this.btnCollect=null,this.btnRed=null,this.btnBlack=null,this.labelChooseRedOrBlack=null,this.labelLastCard=null,this.labelYouWin=null,this.labelDealerWin=null,this.labelBank=null,this.labelDoubleTo=null,this.labelWinAmount=null,this.currentResult=null,this.lastResults=null,this.cardAtlas=null,this.playerInfoManager={accWinAmount:0},this.buttonUI=null,this.mainSpriteAtlas=null,this.bgm="GreatBlue_Gamble_BGM",this.resultAnimSFX="GreatBlue_Gamble_CardShaking",this.pickSFX="GreatBlue_Gamble_PickCard_Click",this.winSFX="GreatBlue_Gamble_Pick_WIN",this.loseSFX="GreatBlue_Gamble_Pick_LOSE",this.genClickSFX="Sfx_ButtonClicks"}onLoad(){this.registerEvent(),this.setupProperty()}start(){return i(this,void 0,void 0,function*(){yield this.loadRedBlackAssets(),this.setupRedBlackModule(),this.buttonUI=this.node.getComponent(d.default)})}showGambleButton(){this.buttonUI.showGambleButton()}hideGambleButton(){this.buttonUI.hideGambleButton()}activeGamblePanel(){this.clearUpPreviousPresentation(),p.default.setRedBlackPanelStatus(u.Kiss918Status.Active),this.redBlackGroup.active=!0,this.playAudio(this.bgm,!0),this.resetBettingUI(),this.HandleTargetNode(this.btnCollect,!0),this.updateBettingInfomation(),this.updateLastCardsResult(),this.enableButtons()}inActiveRedBlackPanel(){this.stopCardResultAnimation(),this.disableButtons(),this.stopAudio(this.bgm),n.gg.eventManager.emit(h.Kiss918RedBlackPanelEvent_GreatBlue.OnEndGamble,this.playerInfoManager.accWinAmount),p.default.setRedBlackPanelStatus(u.Kiss918Status.Inactive),this.redBlackGroup.active=!1}pickedRed(){return i(this,void 0,void 0,function*(){this.playAudio(this.pickSFX),this.disableButtons(),this.HandleTargetNode(this.btnCollect,!1);const e=yield this.getRedBlackResult(u.Kiss918Choices.Red);this.showResult(e)})}pickedBlack(){return i(this,void 0,void 0,function*(){this.playAudio(this.pickSFX),this.disableButtons(),this.HandleTargetNode(this.btnCollect,!1);const e=yield this.getRedBlackResult(u.Kiss918Choices.Black);this.showResult(e)})}collectMoney(){this.inActiveRedBlackPanel()}showResult(e){return i(this,void 0,void 0,function*(){const t=e.winAmount>0;this.updatePlayerBalance(e.playerBalance),this.updateBettingLabelResult(e),this.updateCurrentCardsResult(e.cardResult),this.updateLastCardsResult(),yield o.Delay(2),this.resetBettingUI(),t?(this.HandleTargetNode(this.btnCollect,!0),this.enableButtons()):(this.stopCardResultAnimation(),this.inActiveRedBlackPanel())})}resetBettingUI(){this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!1),this.labelWinAmount.string="0",this.labelBank.string=this.playerInfoManager.accWinAmount.toString(),this.labelDoubleTo.string=(2*this.playerInfoManager.accWinAmount).toString(),this.playCardResultAnimation()}getRedBlackResult(e){return p.default.getRedBlackResult(e,this.playerInfoManager.accWinAmount)}getCardSpriteFrame(e){return{smallCard:this.cardAtlas.getSpriteFrame("Small_"+o.Pad(e,2)),bigCard:this.cardAtlas.getSpriteFrame("Big_"+o.Pad(e,2))}}clearUpPreviousPresentation(){n.gg.eventManager.emit("HUDPrefab.onWiningLineAndSymbolClear"),n.gg.eventManager.emit("BigWinAnim.OnSpaceOrSpinButtonDown"),r.default.getInstance().stopAll(),this.playAudio(this.genClickSFX)}onReceiveWinAmountUpdateEvent(e){this.playerInfoManager.accWinAmount=0,this.playerInfoManager.accWinAmount=e<=0?733.33:e}updateBettingLabelResult(e){e.winAmount>0?(this.labelWinAmount.string=e.winAmount.toString(),this.labelBank.string=e.playerBalance.toString(),this.labelDoubleTo.string=(2*e.playerBalance).toString(),this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!0),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!0),this.playAudio(this.winSFX)):(this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!0),this.HandleTargetNode(this.labelWinAmount,!1),this.playAudio(this.loseSFX))}updateBettingInfomation(){this.labelBank.string=this.playerInfoManager.accWinAmount.toString(),this.labelDoubleTo.string=(2*this.playerInfoManager.accWinAmount).toString()}updatePlayerBalance(e){this.playerInfoManager.accWinAmount=e}disableButtons(){this.btnRed.enabled=!1,this.btnBlack.enabled=!1,this.btnCollect.enabled=!1}enableButtons(){this.btnRed.enabled=!0,this.btnBlack.enabled=!0,this.btnCollect.enabled=!0}HandleTargetNode(e,t){e&&(e.node.active=t)}updateLastCardsResult(){const e=p.default.getLastCardsResults();for(let t=0,a=e.length;t<a;t++){const a=this.lastResults.children[t],s=e[t],i=this.getCardSpriteFrame(s);a.active=!0,a.getComponent(cc.Sprite).spriteFrame=i.smallCard}}updateCurrentCardsResult(e){this.stopCardResultAnimation();const t=this.getCardSpriteFrame(e);this.currentResult.spriteFrame=t.bigCard}playCardResultAnimation(){this.currentResult.getComponent(cc.Animation).play(),this.playAudio(this.resultAnimSFX,!0)}stopCardResultAnimation(){this.currentResult.getComponent(cc.Animation).stop(),this.stopAudio(this.resultAnimSFX)}playAudio(e,t=!1){e&&r.default.getInstance().play(e,t)}stopAudio(e){e&&r.default.getInstance().stop(e)}registerEvent(){n.gg.eventManager.on("HUDPrefab.onWiningLineAndSymbolClear",this.hideGambleButton,this),n.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.hideGambleButton,this),n.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.hideGambleButton,this),n.gg.eventManager.on(h.Kiss918RedBlackPanelEvent_GreatBlue.OnStartGamble,this.onReceiveWinAmountUpdateEvent,this)}setupRedBlackModule(){p.default.init()}setupProperty(){}loadRedBlackAssets(){return i(this,void 0,void 0,function*(){return new Promise(e=>{cc.assetManager.loadBundle("kiss918-gamble-redblack-great-blue",(t,a)=>{if(t)return console.error(t);const s="/"+c.default.getInstance().getLanguageCode(),l=o.AsyncTask(e=>i(this,void 0,void 0,function*(){let t="textures"+s+"/GambleUI";a.load(t,cc.SpriteAtlas,(e,t)=>{this.mainSpriteAtlas=t,o.UItools.ChangeButtonSpriteFrame(this.btnRed,this.mainSpriteAtlas,{normalSprite:"Red_01",pressedSprite:"Red_02",disabledSprite:"Red_03"}),o.UItools.ChangeButtonSpriteFrame(this.btnBlack,this.mainSpriteAtlas,{normalSprite:"Black_01",pressedSprite:"Black_02",disabledSprite:"Black_03"}),o.UItools.ChangeButtonSpriteFrame(this.btnCollect,this.mainSpriteAtlas,{normalSprite:"Collect_01",pressedSprite:"Collect_02"}),this.labelDealerWin.spriteFrame=t.getSpriteFrame("dealer_wins"),this.labelLastCard.spriteFrame=t.getSpriteFrame("LastCards"),this.labelChooseRedOrBlack.spriteFrame=t.getSpriteFrame("Choose")}),t="common/sounds/",a.load([t+this.bgm,t+this.resultAnimSFX,t+this.pickSFX,t+this.winSFX,t+this.loseSFX],cc.AudioClip,(e,t)=>{for(const a of t)r.default.getInstance().add(a.name,a)}),e()}));Promise.all([l]).then(()=>{e()})})})})}};s([R(cc.Node)],g.prototype,"redBlackGroup",void 0),s([R(cc.Button)],g.prototype,"btnCollect",void 0),s([R(cc.Button)],g.prototype,"btnRed",void 0),s([R(cc.Button)],g.prototype,"btnBlack",void 0),s([R(cc.Sprite)],g.prototype,"labelChooseRedOrBlack",void 0),s([R(cc.Sprite)],g.prototype,"labelLastCard",void 0),s([R(cc.Sprite)],g.prototype,"labelYouWin",void 0),s([R(cc.Sprite)],g.prototype,"labelDealerWin",void 0),s([R(cc.Label)],g.prototype,"labelBank",void 0),s([R(cc.Label)],g.prototype,"labelDoubleTo",void 0),s([R(cc.Label)],g.prototype,"labelWinAmount",void 0),s([R(cc.Sprite)],g.prototype,"currentResult",void 0),s([R(cc.Node)],g.prototype,"lastResults",void 0),s([R(cc.SpriteAtlas)],g.prototype,"cardAtlas",void 0),g=s([B],g),a.default=g,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/framework/gg":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0,"../../../../standardized/kiss918/button/scripts/Kiss918GambleButtonUI":void 0,"./Kiss918RedBlackPanelEnum":"Kiss918RedBlackPanelEnum","./Kiss918RedBlackPanelEvent":"Kiss918RedBlackPanelEvent","./Kiss918RedBlackPanelModule":"Kiss918RedBlackPanelModule"}]},{},["Kiss918RedBlackPanelConst","Kiss918RedBlackPanelEnum","Kiss918RedBlackPanelEvent","Kiss918RedBlackPanelModel","Kiss918RedBlackPanelModule","Kiss918RedBlackPanelPrefab"]);