window.__require=function t(e,n,i){function o(s,r){if(!n[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!r&&l)return l(c,!0);if(a)return a(c,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){for(var u=s.split("/"),m="",d=u.length;d>0;)u[d]&&".."!=u[d]&&(m="/"+u[d]+m),d--;return c="./assets"+m,__quick_compile_project__.require(c,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+s+"'")}s=c}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){return o(e[s][1][t]||t)},p,p.exports,t,e,n,i)}return n[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<i.length;s++)o(i[s]);return o}({Kiss918GambleButtonUI:[function(t,e,n){"use strict";cc._RF.push(e,"bc5c2YTK/pAb4qX7Tj60IyX","Kiss918GambleButtonUI");var i=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function s(t){try{c(i.next(t))}catch(e){a(e)}}function r(t){try{c(i.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,r)}c((i=i.apply(t,e||[])).next())})},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const s=t("../../../../../../scripts/framework/gg"),r=t("../../../../../../scripts/HelperTools"),c=a(t("../../../../../../scripts/manager/AudioManager")),l=a(t("../../../../../../scripts/manager/GameSystemManager")),u=t("./Kiss918GambleEvent"),{ccclass:m,property:d}=cc._decorator;let p=class extends cc.Component{constructor(){super(...arguments),this.gambleBtnSFX="Sfx_ButtonClicks",this.requireDemo=!0,this.demoBtnPosition=new cc.Vec2(410,330),this.btnDemo=null,this.btnGamble=null,this.isActive=!1,this.onGambleButtonClicked=()=>{this.playGeneralClickSFX(),this.hideGambleButton(),s.gg.eventManager.emit(u.Kiss918GamblePanelEvent.Start)}}get gambleButton(){return this.btnGamble}get isActiveState(){return this.isActive}onLoad(){this.setupGambleButton(),this.registerEvent()}start(){return o(this,void 0,void 0,function*(){yield this.loadButtonAsset()})}showGambleButton(t){this.isActive||(this.isActive=!0,this.transitionInGambleButton(),t&&t())}hideGambleButton(t){this.isActive&&(this.isActive=!1,this.transitionOutGambleButton(),t&&t())}playGeneralClickSFX(){this.playAudio(this.gambleBtnSFX)}playAudio(t,e=!1){t&&c.default.getInstance().play(t,e)}stopAudio(t){t&&c.default.getInstance().stop(t)}transitionInGambleButton(){this.btnGamble.node.active=!0,cc.tween(this.btnGamble.node).set({x:730}).to(.5,{x:555},{easing:"sineOut"}).call(()=>{this.btnGamble.interactable=!0}).start()}transitionOutGambleButton(){this.btnGamble.interactable=!1,cc.tween(this.btnGamble.node).set({x:555}).to(.5,{x:730},{easing:"sineOut"}).call(()=>{this.btnGamble.node.active=!1}).start()}setupGambleButton(){const t=cc.instantiate(new cc.Node);t.name="ActivationButtonGroup",t.setParent(this.node.children[0]),t.setSiblingIndex(0),this.btnGamble=this.generateGambleButton(t,this.onGambleButtonClicked),this.requireDemo&&(this.btnDemo=this.generateDemoButton(t,()=>{console.warn("active demo, gamble coin amount will change..."),this.showGambleButton(),s.gg.eventManager.emit(u.Kiss918GamblePanelEvent.UpdateStartingAmount,-1)}))}generateGambleButton(t,e){let n=cc.instantiate(new cc.Node);n.name="GambleButton",n.setParent(t),n.setPosition(730,-215),n.setScale(1,1);const i=n.addComponent(cc.Sprite);i.type=cc.Sprite.Type.SIMPLE,i.sizeMode=cc.Sprite.SizeMode.RAW;const o=n.addComponent(cc.Button);return o.transition=cc.Button.Transition.SPRITE,o.node.on("click",e),n.addComponent(cc.Animation),o}generateDemoButton(t,e){let n=cc.instantiate(new cc.Node);n.name="DemoButton",n.setParent(t),n.setPosition(this.demoBtnPosition),n.setContentSize(250,40);const i=n.addComponent(cc.Sprite);i.type=cc.Sprite.Type.SLICED,i.sizeMode=cc.Sprite.SizeMode.CUSTOM;const o=n.addComponent(cc.Button);o.node.on("click",e),n.addChild(new cc.Node("Label"));const a=n.children[0].addComponent(cc.Label);return a.string="DemoGamble",a.node.active=!0,a.node.color=cc.Color.BLACK,o}registerEvent(){s.gg.eventManager.on(u.Kiss918GambleButtonEvent.Show,this.showGambleButton,this),s.gg.eventManager.on(u.Kiss918GambleButtonEvent.Hide,this.hideGambleButton,this)}loadButtonAsset(){return o(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("kiss918-std-gamble-button",(e,n)=>{if(e)return console.error(e);const i="/"+l.default.getInstance().getLanguageCode(),a=r.AsyncTask(t=>o(this,void 0,void 0,function*(){let e="textures"+i+"/Gamble";if(n.load(e,cc.SpriteAtlas,(t,e)=>{r.UItools.ChangeButtonSpriteFrame(this.btnGamble,e,{normalSprite:"Gamble1",pressedSprite:"Gamble2",disabledSprite:"Gamble3"})}),e="animations"+i+"/BtnGambleAnimation",n.load(e,cc.AnimationClip,(t,e)=>{const n=this.btnGamble.getComponent(cc.Animation);n.addClip(e),n.play(e.name).wrapMode=cc.WrapMode.Loop}),this.requireDemo){let t="textures/default_btn_normal";n.load(t,cc.SpriteFrame,(t,e)=>{this.btnDemo.getComponent(cc.Sprite).spriteFrame=e})}t()}));Promise.all([a]).then(()=>{t()})})})})}};i([d()],p.prototype,"gambleBtnSFX",void 0),i([d()],p.prototype,"requireDemo",void 0),i([d()],p.prototype,"demoBtnPosition",void 0),p=i([m],p),n.default=p,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/framework/gg":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0,"./Kiss918GambleEvent":"Kiss918GambleEvent"}],Kiss918GambleEvent:[function(t,e,n){"use strict";cc._RF.push(e,"a8181qrx9REqocsJvgxqgz5","Kiss918GambleEvent"),Object.defineProperty(n,"__esModule",{value:!0}),n.Kiss918GamblePanelEvent=n.Kiss918GambleButtonEvent=void 0,function(t){t.Show="Kiss918GambleButton.Show",t.Hide="Kiss918GambleButton.Hide"}(n.Kiss918GambleButtonEvent||(n.Kiss918GambleButtonEvent={})),function(t){t.UpdateStartingAmount="Kiss918GamblePanel.OnUpdateStartingAmount",t.Start="Kiss918GamblePanel.OnStart",t.Update="Kiss918GamblePanel.OnUpdate",t.Complete="Kiss918GamblePanel.OnComplete"}(n.Kiss918GamblePanelEvent||(n.Kiss918GamblePanelEvent={})),cc._RF.pop()},{}]},{},["Kiss918GambleButtonUI","Kiss918GambleEvent"]);