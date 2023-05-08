"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[101],{4765:function(e,t,n){n.d(t,{F:function(){return g},Z:function(){return u}});var a=n(7294),r=n(8733),l=n(795),i=n(6920),c=n(6799),o=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const g=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function u(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:g,siteUrl:u,siteDescription:d,siteImage:b,author:f,siteLanguage:E}=s,h={title:t?t+" | "+p:g,description:n||d,url:""+u+(i||""),image:""+u+(c||b)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,h.title),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{property:"og:image",content:h.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:image",content:h.image}),a.createElement("meta",{name:"twitter:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}},7835:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",span:"span",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"Docker sudo 없이 일반 유저에서 사용하기"),"\n",a.createElement(t.p,null,"docker를 사용하다보면 sudo를 사용해야하는 번거로움이 있다.\n이를 해결하기 위해 일반 유저에서도 docker를 사용할 수 있도록 설정해보자."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 6.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAR0lEQVR42i3KSQrAIBAAwfwoC8g4owbimov/f04HJNeitpAG8X6x2PHW8FbJZZLrxMnzW0NDR60hWhCt64U4ljnJ7GfiuBIfYsAiRlZesiQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="설치 후 사용하려고 하면 캡쳐와 같이 권한 문제가 발생"\n        title=""\n        src="/static/b9b8efba5f1d0b7c5f36e762488d5f32/7d769/image1.png"\n        srcset="/static/b9b8efba5f1d0b7c5f36e762488d5f32/5243c/image1.png 240w,\n/static/b9b8efba5f1d0b7c5f36e762488d5f32/ab158/image1.png 480w,\n/static/b9b8efba5f1d0b7c5f36e762488d5f32/7d769/image1.png 960w,\n/static/b9b8efba5f1d0b7c5f36e762488d5f32/87339/image1.png 1440w,\n/static/b9b8efba5f1d0b7c5f36e762488d5f32/9b427/image1.png 1894w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h4,null,"1. docker 그룹 생성 (없다면 생성 필요)"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo groupadd docker\n")),"\n",a.createElement(t.h4,null,"2. docker 그룹에 현재 사용자 추가"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo usermod -aG docker [username]\n")),"\n",a.createElement(t.h4,null,"3. docker 그룹에 현재 사용자 추가 확인"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"cat /etc/group | grep docker\n# 실행결과\n# docker:x:984:[username]\n")),"\n",a.createElement(t.h4,null,"4. docker 재시작"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo service docker restart\n")),"\n",a.createElement(t.h4,null,"5. ssh 재접속 후 docker 명령어 실행"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"재접속 하지 않을 경우 실행되지 않을 수 있음"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"docker ps\n# 실행결과\n# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(4765);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-docker-without-sudo-index-mdx-e7e51129e0c13b31124a.js.map