(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,s||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"3a37544e","chunk-0206bfa0":"17fa80e3","chunk-04b93936":"ff42b4aa","chunk-13a6037e":"78485c24","chunk-16015154":"1b34de7b","chunk-17977988":"9c231abc","chunk-2c06842c":"b5115afe","chunk-2d208d90":"e4289446","chunk-2d21d0e2":"b86d4400","chunk-2d22c123":"25d12bab","chunk-2e80bb9a":"d3620fce","chunk-3145fe0f":"0f3c0b1c","chunk-319206de":"5a141d4b","chunk-328f70dd":"8aa8f98b","chunk-3807499c":"cd15a7a9","chunk-3dc647fd":"3610f583","chunk-4cdd78c0":"262f68ab","chunk-4fde0a08":"b74707e5","chunk-515a8379":"0422a7fc","chunk-53ccb27e":"0538410e","chunk-59974754":"ef0dfab8","chunk-766a929b":"923c19b4","chunk-839300a6":"182d1e91","chunk-c796899c":"21afdba9","chunk-dbb9869e":"55dff55e",comple:"9a5b046c",creditos:"a07e1167",glosario:"bea8591c",intro:"457e6fbd",referencias:"e8b528d9",tema1:"3b76e33e",tema2:"b7522690",tema3:"eefc96eb",tema4:"02195e02"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-319206de":"31d6cfe0","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"52d50900","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"8741b056","chunk-766a929b":"ab90e00f","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"40f305fb",creditos:"1560dfa7",glosario:"88226d10",intro:"0e433876",referencias:"ee9c0f83",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=n("2877"),s=Object(l["a"])(c,i,r,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Prospectiva de la educación en Colombia",descripcionCurso:"En el presente componente se plantean temas referentes a la forma en cómo se compone la educación en Colombia, se abordan los distintos bloques educativos de los estudiantes en Colombia. Se definen conceptos del diseño universal de aprendizaje, el cual describe la educación inclusiva, también se tratan temas como el pensamiento de diseño, que ofrecerá una perspectiva de aplicación en la educación. Finalmente, se exponen los diferentes ambientes educativos que se aplican en la actualidad con el apoyo de las distintas herramientas tecnológicas, ofreciendo un ambiente innovador para el entorno educativo.",imagenBannerPrincipal:n("ceaa"),fondoBannerPrincipal:n("a9c8")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Sistema educativo colombiano",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Definición",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Generalidades",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Diseño universal para el aprendizaje",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Origen",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Definición",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Principios",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Pensamiento de diseño",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Metodología",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Fases",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Ambientes educativos innovadores",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Ambientes de aprendizaje multimodales",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Ambientes de aprendizaje digitales",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Ambientes híbridos <em>(Blended Learning)</em>",hash:"t_4_3"},{icono:"far fa-file-alt",numero:"4.4",titulo:"Ambientes móviles <em>(Mobile Learning)</em>",hash:"t_4_4"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{texto:"Cáceres, C. A. (2019). Educación virtual un nuevo desafío. Revista Reto.",tipo:"PDF",descarga:"downloads/Educacion_virtual_un_nuevo_desafio.pdf"},{texto:"CAST. (2018). Las pautas de UDL.",tipo:"Página web",link:"http://udlguidelines.cast.org"},{texto:"Audiovisuales UNED. (2019). DUA. Diseño universal para el aprendizaje – educación inclusiva y modelo pedagógico",tipo:"Video YouTube",link:"https://www.youtube.com/watch?v=u8tK8UkoAmM"},{texto:"<em>Design Thinking</em>. (2020) Comunidad online de apoyo.",tipo:"Página web de recursos de apoyo",link:"https://www.designthinking.services/"}],glosario:[{termino:"Ambiente educativo",significado:"Es un entorno físico en el cual se encuentran los aprendices, reciben información, interactúan y se comunican entre ellos mediante actividades de aprendizaje."},{termino:"Diseño",significado:"Actividad creativa innovadora que proyecta objetos útiles."},{termino:"Kinestésico",significado:"prendizaje basado en el procesamiento de la información asociada con los movimientos y sensaciones del cuerpo. "},{termino:"Prototipo",significado:"Modelo original y primer ensamblaje de un producto."}],referencias:[{referencia:"Alba, C. (2012). Aportaciones del diseño universal para el aprendizaje y de los materiales digitales en el logro de la enseñanza accesible. Universidad Complutense de Madrid. "},{referencia:"Alba, C., Sánchez, J. & Zubillaga, A. (2011). Diseño universal para el aprendizaje (DUA) Pautas para su introducción en el currículo. ",link:"https://www.educadua.es/doc/dua/dua_pautas_intro_cv.pdf"},{referencia:"Brown, T. (2008). Design Thinking. Harvard Business Review. ",link:"https://hbr.org/2008/06/design-thinking"},{referencia:"Cáceres, C. A. (2019). Educación virtual un nuevo desafío. Revista RETO, 6(1), p. 11-19. ",link:"https://doi.org/10.23850/23338059.1896"},{referencia:"Departamento Nacional de Planeación. (2018). La educación en Colombia. DNP. ",link:"https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-educacion/Paginas/subdireccion-de-educacion.aspx"},{referencia:"Espinoza-Poves, J., Miranda-Vílchez, W. & Chafloque-Céspedes, R. (2019). Los estilos de aprendizaje Vark en estudiantes universitarios de las escuelas de negocios. Propósitos y Representaciones, 7(2), p. 384-414. ",link:"https://dx.doi.org/10.20511/pyr2019.v7n2.254"},{referencia:"Ministerio de Educación Nacional. (s.f.). Sistema educativo colombiano. Mineducación. ",link:"https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Sistema-de-educacion-basica-y-media/233839:Sistema-educativo-colombiano"},{referencia:"Osorio, L. (2010). Ambientes híbridos de aprendizaje: elementos para su diseño e implementación. Revista Sistemas de la Asociación Colombiana de Ingenieros de Sistemas (Acis), (117), p. 73."},{referencia:"Santiago, R. (2015). Mobile learning: nuevas realidades en el aula. Grupo Océano."},{referencia:"Serrano, M. & Blázquez, P. (2014). Design Thinking. Lidera el presente. Crea el futuro. ESIC Editorial."},{referencia:"Tobón, S. (2005). Formación basada en competencias. Pensamiento complejo, diseño curricular y didáctica. ECOE Ediciones. "},{referencia:"Troncoso, K. (2017). Diseño universal para el Aprendizaje (DUA). Una educación inclusiva y para todos. Educación Escuela Viva. ",link:"https://centroescuelaviva.wixsite.com/centroescuelaviva/post/__dua"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Iván Mauricio González",cargo:"Instructor",centro:"Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda"},{nombre:"Vilma Lucía Perilla Méndez",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Correctora de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura – Regional Santander"},{nombre:"María Cristina Hurtado Zúñiga",cargo:"Experta temática",centro:"Centro de Diseño Tecnológico Industrial (DCTI) – Regional Valle"},{nombre:"Zvi Daniel Grosman",cargo:"Diseñador instruccional",centro:"Centro Agropecuario La Granja – Regional Tolima"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},a9c8:function(e,a,n){e.exports=n.p+"img/banner-bg.48b74884.png"},ceaa:function(e,a,n){e.exports=n.p+"img/banner-img.07b11d3f.png"}});
//# sourceMappingURL=app.eba6b7a2.js.map