window.__require=function t(e,i,a){function s(n,r){if(!i[n]){if(!e[n]){var o=n.split("/");if(o=o[o.length-1],!e[o]){var u="function"==typeof __require&&__require;if(!r&&u)return u(o,!0);if(l)return l(o,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){for(var c=n.split("/"),d="",h=c.length;h>0;)c[h]&&".."!=c[h]&&(d="/"+c[h]+d),h--;return o="./assets"+d,__quick_compile_project__.require(o,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+n+"'")}n=o}var p=i[n]={exports:{}};e[n][0].call(p.exports,function(t){return s(e[n][1][t]||t)},p,p.exports,t,e,i,a)}return i[n].exports}for(var l="function"==typeof __require&&__require,n=0;n<a.length;n++)s(a[n]);return s}({Kiss918RedBlackPanelConst_FruityFuffi:[function(t,e){"use strict";cc._RF.push(e,"bda2eq8tY5AoItLx+LS38b1","Kiss918RedBlackPanelConst_FruityFuffi"),cc._RF.pop()},{}],Kiss918RedBlackPanelEnum_FruityFuffi:[function(t,e,i){"use strict";cc._RF.push(e,"9456emzTY1Igoi98UH8kQy1","Kiss918RedBlackPanelEnum_FruityFuffi"),Object.defineProperty(i,"__esModule",{value:!0}),i.Kiss918Choices_FruityFuffi=i.Kiss918Status_FruityFuffi=void 0,function(t){t[t.Active=1]="Active",t[t.Inactive=0]="Inactive"}(i.Kiss918Status_FruityFuffi||(i.Kiss918Status_FruityFuffi={})),function(t){t[t.Red=1]="Red",t[t.Black=2]="Black"}(i.Kiss918Choices_FruityFuffi||(i.Kiss918Choices_FruityFuffi={})),cc._RF.pop()},{}],Kiss918RedBlackPanelEvent_FruityFuffi:[function(t,e){"use strict";cc._RF.push(e,"5911bB1Z/BL8IYrsCMPFMV0","Kiss918RedBlackPanelEvent_FruityFuffi"),cc._RF.pop()},{}],Kiss918RedBlackPanelModel_FruityFuffi:[function(t,e,i){"use strict";cc._RF.push(e,"840f91sY8ZMMrT3AUyccupj","Kiss918RedBlackPanelModel_FruityFuffi"),Object.defineProperty(i,"__esModule",{value:!0}),i.Kiss918RedBlackPanelModel_FruityFuffi=void 0,i.Kiss918RedBlackPanelModel_FruityFuffi=class{constructor(){this.redBlackActive=!1,this.redBlackResult=null,this.lastCardResults=[]}},cc._RF.pop()},{}],Kiss918RedBlackPanelModule_FruityFuffi:[function(t,e,i){"use strict";cc._RF.push(e,"57c7fNhhypOHp6rfM/C5vZt","Kiss918RedBlackPanelModule_FruityFuffi");var a=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))(function(s,l){function n(t){try{o(a.next(t))}catch(e){l(e)}}function r(t){try{o(a.throw(t))}catch(e){l(e)}}function o(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,r)}o((a=a.apply(t,e||[])).next())})};Object.defineProperty(i,"__esModule",{value:!0});const s=t("../../../../../../scripts/HelperTools"),l=t("./Kiss918RedBlackPanelEnum_FruityFuffi"),n=t("./Kiss918RedBlackPanelModel_FruityFuffi");class r extends cc.Component{static init(){this.data=new n.Kiss918RedBlackPanelModel_FruityFuffi}static getRedBlackPanelStatus(){return this.data.redBlackActive}static setRedBlackPanelStatus(t){this.data.redBlackActive=Boolean(t)}static setRedBlackResult(t){this.data.redBlackResult=t}static getLastCardsResults(){return this.data.lastCardResults}static clearRedBlackResult(){this.data.redBlackResult=null,this.data.lastCardResults=[]}static getRedBlackResult(t,e){return a(this,void 0,void 0,function*(){return new Promise(i=>{const a=s.GetRandomInterger(1,52),n=a<=26?l.Kiss918Choices_FruityFuffi.Black:l.Kiss918Choices_FruityFuffi.Red;let r=0;t===n&&(r=2*e);const o={cardResult:a,winAmount:r,playerBalance:r};this.setRedBlackResult(o),this.addLastCardResult(o.cardResult),i(o)})})}static addLastCardResult(t){this.data.lastCardResults.length>=7&&this.data.lastCardResults.shift(),this.data.lastCardResults.push(t)}}i.default=r,r.data=null,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"./Kiss918RedBlackPanelEnum_FruityFuffi":"Kiss918RedBlackPanelEnum_FruityFuffi","./Kiss918RedBlackPanelModel_FruityFuffi":"Kiss918RedBlackPanelModel_FruityFuffi"}],Kiss918RedBlackPanelPrefab_FruityFuffi:[function(t,e,i){"use strict";cc._RF.push(e,"ca79aQ5MHlCjYD9IPcWUn8c","Kiss918RedBlackPanelPrefab_FruityFuffi");var a=this&&this.__decorate||function(t,e,i,a){var s,l=arguments.length,n=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(l<3?s(n):l>3?s(e,i,n):s(e,i))||n);return l>3&&n&&Object.defineProperty(e,i,n),n},s=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))(function(s,l){function n(t){try{o(a.next(t))}catch(e){l(e)}}function r(t){try{o(a.throw(t))}catch(e){l(e)}}function o(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,r)}o((a=a.apply(t,e||[])).next())})},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});const n=t("../../../../../../scripts/framework/gg"),r=t("../../../../../../scripts/HelperTools"),o=l(t("../../../../../../scripts/manager/AudioManager")),u=l(t("../../../../../../scripts/manager/GameSystemManager")),c=l(t("../../../../standardized/kiss918/button/scripts/Kiss918GambleButtonUI")),d=t("./Kiss918RedBlackPanelEnum_FruityFuffi"),h=l(t("./Kiss918RedBlackPanelModule_FruityFuffi")),{ccclass:p,property:f}=cc._decorator;let m=class extends cc.Component{constructor(){super(...arguments),this.redBlackGroup=null,this.btnCollect=null,this.btnRed=null,this.btnBlack=null,this.labelChooseRedOrBlack=null,this.labelLastCard=null,this.labelYouWin=null,this.labelDealerWin=null,this.labelBank=null,this.labelDoubleTo=null,this.labelWinAmount=null,this.currentResult=null,this.lastResults=null,this.cardAtlas=null,this.dummyPlayerBalanceManager={balance:0},this.buttonUI=null,this.mainSpriteAtlas=null,this.bgm="Fruit_Gamble_BGM",this.resultAnimSFX="Fruit_Gamble_CardShaking",this.pickSFX="Fruit_Gamble_Pick_Card_Click",this.winSFX="Fruit_Gamble_WIN",this.loseSFX="Fruit_Gamble_LOSE",this.genClickSFX="Sfx_ButtonClicks"}onLoad(){this.registerEvent(),this.setupProperty(),this.node.getChildByName("SafeArea").active=!1}start(){return s(this,void 0,void 0,function*(){yield this.loadRedBlackAssets(),this.setupRedBlackModule(),this.buttonUI=this.node.getComponent(c.default)})}showGambleButton(){this.buttonUI.showGambleButton()}hideGambleButton(){this.buttonUI.hideGambleButton()}activeGamblePanel(){this.clearUpPreviousPresentation(),this.dummyPlayerBalanceManager.balance<=0&&(this.dummyPlayerBalanceManager.balance=733.33),h.default.setRedBlackPanelStatus(d.Kiss918Status_FruityFuffi.Active),this.node.getChildByName("SafeArea").active=!0,this.redBlackGroup.active=!0,this.playAudio(this.bgm,!0),this.resetBettingUI(),this.HandleTargetNode(this.btnCollect,!0),this.updateBettingInfomation(),this.updateLastCardsResult(),this.enableButtons()}inActiveGamblePanel(){this.stopCardResultAnimation(),this.disableButtons(),this.stopAudio(this.bgm),h.default.setRedBlackPanelStatus(d.Kiss918Status_FruityFuffi.Inactive),this.redBlackGroup.active=!1,this.node.getChildByName("SafeArea").active=!1}pickedRed(){return s(this,void 0,void 0,function*(){this.playAudio(this.pickSFX),this.disableButtons(),this.HandleTargetNode(this.btnCollect,!1);const t=yield this.getRedBlackResult(d.Kiss918Choices_FruityFuffi.Red);this.showResult(t)})}pickedBlack(){return s(this,void 0,void 0,function*(){this.playAudio(this.pickSFX),this.disableButtons(),this.HandleTargetNode(this.btnCollect,!1);const t=yield this.getRedBlackResult(d.Kiss918Choices_FruityFuffi.Black);this.showResult(t)})}collectMoney(){this.inActiveGamblePanel()}clearUpPreviousPresentation(){n.gg.eventManager.emit("HUDPrefab.onWiningLineAndSymbolClear"),n.gg.eventManager.emit("BigWinAnim.OnSpaceOrSpinButtonDown"),o.default.getInstance().stopAll(),this.playAudio(this.genClickSFX)}showResult(t){return s(this,void 0,void 0,function*(){const e=t.winAmount>0;this.updatePlayerBalance(t.playerBalance),this.updateBettingLabelResult(t),this.updateCurrentCardsResult(t.cardResult),this.updateLastCardsResult(),yield r.Delay(2),this.resetBettingUI(),e?(this.HandleTargetNode(this.btnCollect,!0),this.enableButtons()):(this.stopCardResultAnimation(),this.inActiveGamblePanel())})}resetBettingUI(){this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!1),this.labelWinAmount.string="0",this.labelBank.string=this.dummyPlayerBalanceManager.balance.toString(),this.labelDoubleTo.string=(2*this.dummyPlayerBalanceManager.balance).toString(),this.playCardResultAnimation()}getRedBlackResult(t){return h.default.getRedBlackResult(t,this.dummyPlayerBalanceManager.balance)}getCardSpriteFrame(t){return{smallCard:this.cardAtlas.getSpriteFrame("Small_"+r.Pad(t,2)),bigCard:this.cardAtlas.getSpriteFrame("Big_"+r.Pad(t,2))}}updateBettingLabelResult(t){t.winAmount>0?(this.labelWinAmount.string=t.winAmount.toString(),this.labelBank.string=t.playerBalance.toString(),this.labelDoubleTo.string=(2*t.playerBalance).toString(),this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!0),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!0),this.playAudio(this.winSFX)):(this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!0),this.HandleTargetNode(this.labelWinAmount,!1),this.playAudio(this.loseSFX))}updateBettingInfomation(){this.labelBank.string=this.dummyPlayerBalanceManager.balance.toString(),this.labelDoubleTo.string=(2*this.dummyPlayerBalanceManager.balance).toString()}updatePlayerBalance(t){this.dummyPlayerBalanceManager.balance=t}disableButtons(){this.btnRed.enabled=!1,this.btnBlack.enabled=!1,this.btnCollect.enabled=!1}enableButtons(){this.btnRed.enabled=!0,this.btnBlack.enabled=!0,this.btnCollect.enabled=!0}HandleTargetNode(t,e){t&&(t.node.active=e)}updateLastCardsResult(){const t=h.default.getLastCardsResults();for(let e=0,i=t.length;e<i;e++){const i=this.lastResults.children[e],a=t[e],s=this.getCardSpriteFrame(a);i.active=!0,i.getComponent(cc.Sprite).spriteFrame=s.smallCard}}updateCurrentCardsResult(t){this.stopCardResultAnimation();const e=this.getCardSpriteFrame(t);this.currentResult.spriteFrame=e.bigCard}playCardResultAnimation(){this.currentResult.getComponent(cc.Animation).play(),this.playAudio(this.resultAnimSFX,!0)}stopCardResultAnimation(){this.currentResult.getComponent(cc.Animation).stop(),this.stopAudio(this.resultAnimSFX)}playAudio(t,e=!1){t&&o.default.getInstance().play(t,e)}stopAudio(t){t&&o.default.getInstance().stop(t)}registerEvent(){n.gg.eventManager.on("HUDPrefab.onWiningLineAndSymbolClear",this.hideGambleButton,this),n.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.hideGambleButton,this),n.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.hideGambleButton,this)}setupRedBlackModule(){h.default.init()}setupProperty(){}loadRedBlackAssets(){return s(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("kiss918-gamble-redblack-fruity-fuffi",(e,i)=>{if(e)return console.error(e);const a="/"+u.default.getInstance().getLanguageCode(),l=r.AsyncTask(t=>s(this,void 0,void 0,function*(){let e="textures"+a+"/GambleUI";i.load(e,cc.SpriteAtlas,(t,e)=>{this.mainSpriteAtlas=e,r.UItools.ChangeButtonSpriteFrame(this.btnRed,this.mainSpriteAtlas,{normalSprite:"Red_01",pressedSprite:"Red_02"}),r.UItools.ChangeButtonSpriteFrame(this.btnBlack,this.mainSpriteAtlas,{normalSprite:"Black_01",pressedSprite:"Black_02"}),r.UItools.ChangeButtonSpriteFrame(this.btnCollect,this.mainSpriteAtlas,{normalSprite:"Collect_01",pressedSprite:"Collect_02"}),this.labelDealerWin.spriteFrame=e.getSpriteFrame("dealer_wins"),this.labelLastCard.spriteFrame=e.getSpriteFrame("LastCards"),this.labelChooseRedOrBlack.spriteFrame=e.getSpriteFrame("Choose")}),e="common/sounds/",i.load([e+this.bgm,e+this.resultAnimSFX,e+this.pickSFX,e+this.winSFX,e+this.loseSFX],cc.AudioClip,(t,e)=>{for(const i of e)o.default.getInstance().add(i.name,i)}),t()}));Promise.all([l]).then(()=>{t()})})})})}};a([f(cc.Node)],m.prototype,"redBlackGroup",void 0),a([f(cc.Button)],m.prototype,"btnCollect",void 0),a([f(cc.Button)],m.prototype,"btnRed",void 0),a([f(cc.Button)],m.prototype,"btnBlack",void 0),a([f(cc.Sprite)],m.prototype,"labelChooseRedOrBlack",void 0),a([f(cc.Sprite)],m.prototype,"labelLastCard",void 0),a([f(cc.Sprite)],m.prototype,"labelYouWin",void 0),a([f(cc.Sprite)],m.prototype,"labelDealerWin",void 0),a([f(cc.Label)],m.prototype,"labelBank",void 0),a([f(cc.Label)],m.prototype,"labelDoubleTo",void 0),a([f(cc.Label)],m.prototype,"labelWinAmount",void 0),a([f(cc.Sprite)],m.prototype,"currentResult",void 0),a([f(cc.Node)],m.prototype,"lastResults",void 0),a([f(cc.SpriteAtlas)],m.prototype,"cardAtlas",void 0),m=a([p],m),i.default=m,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/framework/gg":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0,"../../../../standardized/kiss918/button/scripts/Kiss918GambleButtonUI":void 0,"./Kiss918RedBlackPanelEnum_FruityFuffi":"Kiss918RedBlackPanelEnum_FruityFuffi","./Kiss918RedBlackPanelModule_FruityFuffi":"Kiss918RedBlackPanelModule_FruityFuffi"}]},{},["Kiss918RedBlackPanelConst_FruityFuffi","Kiss918RedBlackPanelEnum_FruityFuffi","Kiss918RedBlackPanelEvent_FruityFuffi","Kiss918RedBlackPanelModel_FruityFuffi","Kiss918RedBlackPanelModule_FruityFuffi","Kiss918RedBlackPanelPrefab_FruityFuffi"]);