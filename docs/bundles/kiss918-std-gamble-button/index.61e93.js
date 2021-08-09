window.__require=function t(e,n,o){function i(r,s){if(!n[r]){if(!e[r]){var c=r.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!s&&l)return l(c,!0);if(a)return a(c,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){for(var u=r.split("/"),d="",m=u.length;m>0;)u[m]&&".."!=u[m]&&(d="/"+u[m]+d),m--;return c="./assets"+d,__quick_compile_project__.require(c,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+r+"'")}r=c}var p=n[r]={exports:{}};e[r][0].call(p.exports,function(t){return i(e[r][1][t]||t)},p,p.exports,t,e,n,o)}return n[r].exports}for(var a="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({Kiss918GambleButtonUI:[function(t,e,n){"use strict";cc._RF.push(e,"bc5c2YTK/pAb4qX7Tj60IyX","Kiss918GambleButtonUI");var o=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,a){function r(t){try{c(o.next(t))}catch(e){a(e)}}function s(t){try{c(o.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(r,s)}c((o=o.apply(t,e||[])).next())})},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const r=t("../../../../../../scripts/HelperTools"),s=a(t("../../../../../../scripts/manager/AudioManager")),c=a(t("../../../../../../scripts/manager/GameSystemManager")),{ccclass:l,property:u}=cc._decorator;let d=class extends cc.Component{constructor(){super(...arguments),this.gambleBtnSFX="Sfx_ButtonClicks",this.gambleClassName="Kiss918RedBlackPanelPrefab_FruityFuffi",this.requireDemo=!0,this.demoBtnPosition=new cc.Vec2(410,330),this.btnDemo=null,this.btnGamble=null,this.onGambleButtonClicked=()=>{this.playGeneralClickSFX(),this.transitionOutGambleButton(),this.triggerActiveGamePanel()}}onLoad(){this.setupGambleButton()}start(){return i(this,void 0,void 0,function*(){yield this.loadButtonAsset()})}showGambleButton(t){this.transitionInGambleButton(),t&&t()}hideGambleButton(t){this.transitionOutGambleButton(),t&&t()}triggerActiveGamePanel(){this.node.getComponent(this.gambleClassName).activeGamblePanel()}playGeneralClickSFX(){this.playAudio(this.gambleBtnSFX)}playAudio(t,e=!1){t&&s.default.getInstance().play(t,e)}stopAudio(t){t&&s.default.getInstance().stop(t)}transitionInGambleButton(){this.btnGamble.node.active=!0,cc.tween(this.btnGamble.node).set({x:730}).to(.5,{x:565},{easing:"sineOut"}).call(()=>{this.btnGamble.interactable=!0}).start()}transitionOutGambleButton(){this.btnGamble.interactable=!1,cc.tween(this.btnGamble.node).set({x:565}).to(.5,{x:730},{easing:"sineOut"}).call(()=>{this.btnGamble.node.active=!1}).start()}setupGambleButton(){const t=cc.instantiate(new cc.Node);t.name="ActivationButtonGroup",t.setParent(this.node),t.setSiblingIndex(0),this.btnGamble=this.generateGambleButton(t,this.onGambleButtonClicked),this.requireDemo&&(this.btnDemo=this.generateDemoButton(t,()=>{this.showGambleButton()}))}generateGambleButton(t,e){let n=cc.instantiate(new cc.Node);n.setParent(t),n.setPosition(730,-180),n.setScale(1.146,1.146);const o=n.addComponent(cc.Sprite);o.type=cc.Sprite.Type.SIMPLE,o.sizeMode=cc.Sprite.SizeMode.RAW;const i=n.addComponent(cc.Button);return i.transition=cc.Button.Transition.SPRITE,i.node.on("click",e),n.addComponent(cc.Animation),i}generateDemoButton(t,e){let n=cc.instantiate(new cc.Node);n.setParent(t),n.setPosition(this.demoBtnPosition),n.setContentSize(250,40);const o=n.addComponent(cc.Sprite);o.type=cc.Sprite.Type.SLICED,o.sizeMode=cc.Sprite.SizeMode.CUSTOM;const i=n.addComponent(cc.Button);i.node.on("click",e),n.addChild(new cc.Node("Label"));const a=n.children[0].addComponent(cc.Label);return a.string="DemoGamble",a.node.active=!0,a.node.color=cc.Color.BLACK,i}loadButtonAsset(){return i(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("kiss918-std-gamble-button",(e,n)=>{if(e)return console.error(e);const o="/"+c.default.getInstance().getLanguageCode(),a=r.AsyncTask(t=>i(this,void 0,void 0,function*(){let e="textures"+o+"/Gamble";if(n.load(e,cc.SpriteAtlas,(t,e)=>{r.UItools.ChangeButtonSpriteFrame(this.btnGamble,e,{normalSprite:"Gamble1",pressedSprite:"Gamble2",disabledSprite:"Gamble3"})}),e="animations"+o+"/BtnGambleAnimation",n.load(e,cc.AnimationClip,(t,e)=>{const n=this.btnGamble.getComponent(cc.Animation);n.addClip(e),n.play(e.name).wrapMode=cc.WrapMode.Loop}),this.requireDemo){let t="textures/default_btn_normal";n.load(t,cc.SpriteFrame,(t,e)=>{this.btnDemo.getComponent(cc.Sprite).spriteFrame=e})}t()}));Promise.all([a]).then(()=>{t()})})})})}};o([u()],d.prototype,"gambleBtnSFX",void 0),o([u()],d.prototype,"gambleClassName",void 0),o([u()],d.prototype,"requireDemo",void 0),o([u()],d.prototype,"demoBtnPosition",void 0),d=o([l],d),n.default=d,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0}]},{},["Kiss918GambleButtonUI"]);