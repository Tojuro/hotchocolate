(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[13],{1075:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n(6),a=n(10),c=n.n(a),o=n(461),i=n(464),u=n(588),d=n(44),s=n(466);function l(e,t){var n;return e?t?t.expandable?t:null!==(n=t.parent)&&void 0!==n?n:e:e:void 0}function b(e){var t=Object(s.b)();return e.triggerCreate({name:"",expandable:!1,metadata:{id:t,kind:"document"}})}function f(e){var t=Object(s.c)();return e.triggerCreate({name:"",expandable:!0,metadata:{id:t,kind:"folder"}})}var m=n(90),j="root-menu",p=function(){var e=Object(i.f)(j),t=Object(d.useCallback)(Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return n=e.item.treeModel,t.next=4,f(n);case 4:e.hide();case 5:case"end":return t.stop()}}),t)}))),[e]),n=Object(d.useCallback)(Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return n=e.item.treeModel,t.next=4,b(n);case 4:e.hide();case 5:case"end":return t.stop()}}),t)}))),[e]);return Object(m.jsxs)(u.b,{id:j,children:[Object(m.jsx)(u.a,{onClick:n,children:"New Document"}),Object(m.jsx)(u.a,{onClick:t,children:"New Folder"})]})};var x=n(619),h=n(469),O=n(477),v=n(596),k=n(540),w=n(479),C=n(543),g=n(478),y=n(495),I=n(489),N=n(502),F=n(485),D=n(472),T=n(480),S=n(462),A=n(991),M=n(471),P=n(503),R=n(482),E=n(496),H=n(513),L=n(942),z=n(780);var J=n(499);function U(e){var t=Object(i.f)(e);return Object(d.useCallback)(Object(o.a)(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}if(n=t.item.node,!(r=l(n.model,n))){e.next=6;break}return e.next=6,f(r);case 6:t.hide();case 7:case"end":return e.stop()}}),e)}))),[t])}function V(e){var t=Object(i.f)(e);return Object(d.useCallback)(Object(o.a)(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}if(n=t.item.node,!(r=l(n.model,n))){e.next=6;break}return e.next=6,b(r);case 6:t.hide();case 7:case"end":return e.stop()}}),e)}))),[t])}function q(e){var t=Object(i.f)(e);return Object(d.useCallback)(Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(t.item.node.triggerRename(),t.hide());case 1:case"end":return e.stop()}}),e)}))),[t])}var B="document-menu",G=function(){var e=Object(S.b)(),t=Object(J.a)(B),n=V(B),r=U(B),a=q(B),c=Object(d.useCallback)((function(){if(t){var n,r=t.item.node;(null!==(n=r.parent)&&void 0!==n?n:r.model).remove(r),e(h.a.deleteDocument({documentId:r.metadata.id})),t.hide()}}),[t,e]);return Object(m.jsxs)(u.b,{id:B,children:[Object(m.jsx)(u.a,{onClick:a,children:"Rename"}),Object(m.jsx)(u.a,{onClick:n,children:"New Document"}),Object(m.jsx)(u.a,{onClick:r,children:"New Folder"}),Object(m.jsx)(u.a,{onClick:c,children:"Delete"})]})};var K="folder-menu",Q=function(){var e=Object(S.b)(),t=Object(J.a)(K),n=V(K),r=U(K),a=q(K),c=Object(d.useCallback)((function(){if(t){var n,r=t.item.node;(null!==(n=r.parent)&&void 0!==n?n:r.model).remove(r),e(h.a.deleteFolder({folderId:r.metadata.id})),t.hide()}}),[t,e]);return Object(m.jsxs)(u.b,{id:K,children:[Object(m.jsx)(u.a,{onClick:a,children:"Rename"}),Object(m.jsx)(u.a,{onClick:n,children:"New Document"}),Object(m.jsx)(u.a,{onClick:r,children:"New Folder"}),Object(m.jsx)(u.a,{onClick:c,children:"Delete"})]})};var W=function(){var e=Object(S.b)(),t=Object(S.c)(D.c.selectIsUserSignedIn),n=Object(S.c)(D.c.selectIsFetchingUser),a=Object(S.c)(T.c.selectActiveId),i=Object(F.b)(N.b.selectActiveNodeId),s=Object(F.c)(x.b.selectSearchTerm),J=Object(d.useRef)([]),U=Object(d.useRef)(),V=Object(u.c)(B),q=Object(u.c)(K),W=Object(u.c)(j),Y=function(e,t){return{getNodes:function(n,r,a){return e?Object(L.a)(t.pipe(Object(A.a)(1),Object(z.a)((function(t){return Object(M.getChildrenByFilter)(e,null===r||void 0===r?void 0:r.metadata.id,a?function(e){return a({name:e})}:void 0).then((function(e){return function(e,t,n){return e.map((function(e){var r=e.id,a=e.name,c=e.kind;return{name:a,expanded:t.includes(r)||n,expandable:"folder"===c,metadata:{id:r,kind:"folder"===c?"folder":"document"}}}))}(e,t,!!a)}))})))):Promise.resolve([])},comparer:function(e,t){return"folder"===e.metadata.kind&&"folder"===t.metadata.kind||"document"===e.metadata.kind&&"document"===t.metadata.kind?e.name.localeCompare(t.name,"en",{sensitivity:"base"}):"folder"===e.metadata.kind&&"document"===t.metadata.kind?-1:1},validate:function(t,n){return Object(o.a)(c.a.mark((function r(){var a,o,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==(a=R.a.getSegments(t)).length){r.next=3;break}return r.abrupt("return",Promise.resolve(P.a.fail("An empty path is invalid.")));case 3:if(o=n?n.metadata.id:null!==e&&void 0!==e?e:"",i=a[a.length-1],H.d.test(i)){r.next=8;break}return Object(E.e)(i),r.abrupt("return",Promise.resolve(P.a.fail("Invalid name.")));case 8:return r.next=10,Object(M.isNameTaken)(o,i);case 10:if(!r.sent){r.next=13;break}return Object(E.d)(i),r.abrupt("return",Promise.resolve(P.a.fail('A document with name "'.concat(a[1],'" already exists.'))));case 13:return r.abrupt("return",Promise.resolve(P.a.success()));case 14:case"end":return r.stop()}}),r)})))()}}}(a,Object(F.b)(x.b.selectExpandedFolders)),Z=Object(d.useCallback)((function(e,t){if(!t.metadata)throw new Error("Metadata should be there.");switch(t.metadata.kind){case"folder":q(e,{node:t});break;case"document":V(e,{node:t})}}),[V,q]),$=Object(d.useCallback)((function(e){W(e,{treeModel:U.current})}),[W]),_=Object(I.a)((function(t,n,r){switch(t.preventDefault(),t.stopPropagation(),n.selected||(Object(y.f)(n.model),n.selected=!0),n.metadata.kind){case"document":e(h.a.activateOrOpenDocument({documentId:n.metadata.id,isHistory:!1,isPreview:r}));break;case"folder":n.toggleExpanded(),e(N.a.activateNode({id:n.metadata.id}))}}),25,[e]),ee=function(e,t){return _(e,t,!0)},te=function(e,t){return _(e,t,!1)},ne=function(e){var t=i.subscribe(function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e,n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n=e.subscribeFor(function(){var t=Object(o.a)(c.a.mark((function t(n){var a,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(r.a)(n),t.prev=1,a.s();case 3:if((o=a.n()).done){t.next=23;break}i=o.value,t.t0=i.kind,t.next="collapsed"===t.t0?8:"created"===t.t0?10:"expanded"===t.t0?13:"renamed"===t.t0?15:"reset-filter"===t.t0?17:"set-filter"===t.t0?19:21;break;case 8:return re(i.node),t.abrupt("break",21);case 10:return t.next=12,ae(i.node);case 12:return t.abrupt("break",21);case 13:return ce(i.node),t.abrupt("break",21);case 15:return oe(i.node),t.abrupt("break",21);case 17:case 19:return ie(e),t.abrupt("break",21);case 21:t.next=3;break;case 23:t.next=28;break;case 25:t.prev=25,t.t1=t.catch(1),a.e(t.t1);case 28:return t.prev=28,a.f(),t.finish(28);case 31:case"end":return t.stop()}}),t,null,[[1,25,28,31]])})));return function(e){return t.apply(this,arguments)}}(),"collapsed","created","expanded","renamed","reset-filter","set-filter");s&&s.length>0&&e.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(s.toLowerCase())})),J.current.push((function(){return t.unsubscribe()})),J.current.push((function(){return n()})),U.current=e},re=function(t){e(x.a.collapseFolder({folderId:t.metadata.id}))},ae=function(){var t=Object(o.a)(c.a.mark((function t(n){var r,a,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"document"===n.metadata.kind?n.metadata.exists?(n.metadata.closeTabAfterCreation?e(h.a.saveAndCloseNewDocument({documentId:n.metadata.id,documentName:n.name,folderId:null===(r=n.parent)||void 0===r?void 0:r.metadata.id,isHistory:!1})):e(h.a.saveNewDocument({documentId:n.metadata.id,documentName:n.name,folderId:null===(a=n.parent)||void 0===a?void 0:a.metadata.id,isHistory:!1})),delete n.metadata.exists,delete n.metadata.closeTabAfterCreation):e(h.a.createAndSaveDocument({documentId:n.metadata.id,documentName:n.name,folderId:null===(o=n.parent)||void 0===o?void 0:o.metadata.id})):e(h.a.createFolder({folderId:n.metadata.id,folderName:n.name,parentFolderId:null===(i=n.parent)||void 0===i?void 0:i.metadata.id}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ce=function(t){e(x.a.expandFolder({folderId:t.metadata.id}))},oe=function(t){"document"===t.metadata.kind?e(h.a.renameDocument({documentId:t.metadata.id,name:t.name})):e(h.a.renameFolder({folderId:t.metadata.id,newFolderName:t.name}))},ie=function(e){i.pipe(Object(A.a)(1)).subscribe(function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e,n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},ue=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=l(U.current,null===(t=U.current)||void 0===t?void 0:t.selectedNodes[0]))){e.next=4;break}return e.next=4,b(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=l(U.current,null===(t=U.current)||void 0===t?void 0:t.selectedNodes[0]))){e.next=4;break}return e.next=4,f(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e(x.a.changeDocumentSearchTerm({searchTerm:n})),!U.current){t.next=9;break}if(!(n.length>0)){t.next=7;break}return t.next=5,U.current.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));case 5:t.next=9;break;case 7:return t.next=9,U.current.resetFilter();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),le=function(){e(D.a.signIn())};function be(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.selected||(Object(y.f)(t.model),t.selected=!0),e.next=3,t.ensureVisible();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t){return je.apply(this,arguments)}function je(){return(je=Object(o.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=10;break}if(!(r=t.find((function(e){return e.metadata&&e.metadata.id&&e.metadata.id===n})))){e.next=7;break}return e.next=5,be(r);case 5:e.next=8;break;case 7:Object(y.f)(t);case 8:e.next=11;break;case 10:Object(y.f)(t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){var e=J.current;return function(){for(var t;t=e.pop();)t();U.current=void 0}}),[]),Object(m.jsx)(w.k,{children:Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.i,{children:"Documents"}),Object(m.jsx)(w.h,{}),Object(m.jsx)(O.c,{title:"New document",disabled:!t,onClick:ue,children:Object(m.jsx)(g.s,{})}),Object(m.jsx)(O.c,{title:"New folder",disabled:!t,onClick:de,children:Object(m.jsx)(g.t,{})})]}),Object(m.jsx)(v.a,{searchTerm:s,onSearchTermChange:se}),n?Object(m.jsx)(k.a,{}):t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w.j,{children:Object(m.jsx)(y.c,{id:"documents",itemHeight:y.b,provider:Y,onContextMenu:$,onInitialized:ne,children:function(e){return Object(m.jsx)(y.d,{id:e.id,depth:e.depth,name:e.name,path:e.path,expanded:e.expanded,expandable:e.expandable,node:e,onClick:ee,onDoubleClick:te,onContextMenu:Z,renderIcon:X})}})}),Object(m.jsx)(Q,{}),Object(m.jsx)(G,{}),Object(m.jsx)(p,{})]}):Object(m.jsx)(C.a,{title:"Sign in to save documents",icon:Object(m.jsx)(g.c,{}),children:Object(m.jsx)(O.a,{onClick:le,primary:!0,children:"Sign in"})})]})})};function X(e){return"folder"===e.metadata.kind?Object(m.jsx)(y.e,{color:"yellow",children:e.expanded?Object(m.jsx)(g.o,{}):"creation"===e.editMode?Object(m.jsx)(g.t,{}):Object(m.jsx)(g.n,{})}):Object(m.jsx)(y.e,{color:"blue",children:"creation"===e.editMode?Object(m.jsx)(g.s,{}):Object(m.jsx)(g.l,{})})}},596:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r,a,c,o,i=n(178),u=n(489),d=n(44),s=n(168),l=n(477),b=n(478),f=n(90),m=Object(d.memo)(Object(d.forwardRef)((function(e,t){var n=e.searchTerm,r=e.onSearchTermChange,a=Object(d.useRef)(null),c=Object(d.useRef)(null),o=Object(u.a)((function(e){r(e.target.value.trim())}),250,[r]),i=Object(d.useCallback)((function(e){o(e),c.current.style.display=e.currentTarget.value.length>0?"flex":"none"}),[o]),s=Object(d.useCallback)((function(){var e;null===(e=a.current)||void 0===e||e.focus()}),[]);return Object(d.useEffect)((function(){var e=a.current,t=c.current;n&&n.length>0?(e.value=n,t.style.display="flex"):t.style.display="none"}),[n]),Object(f.jsx)(j,{ref:t,onClick:s,children:Object(f.jsxs)(h,{children:[Object(f.jsx)(p,{children:Object(f.jsx)(b.x,{})}),Object(f.jsx)(x,{ref:a,placeholder:"Find...",onChange:i}),Object(f.jsx)(l.c,{ref:c,onClick:function(){r(""),a.current.value="",c.current.style.display="none"},children:Object(f.jsx)(b.j,{})})]})})}))),j=s.d.div(r||(r=Object(i.a)(["\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  height: 44px;\n  max-height: 44px;\n  padding: 0 8px;\n"]))),p=s.d.div(a||(a=Object(i.a)(["\n  display: flex;\n  flex: 0 0 24px;\n  align-items: center;\n  justify-content: center;\n\n  & > svg {\n    fill: "," !important;\n  }\n"])),(function(e){return e.theme.accentColor1})),x=s.d.input(c||(c=Object(i.a)(["\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 0 9px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 0.2s ease;\n  user-select: initial;\n"])),(function(e){return e.theme.accentColor1}),(function(e){return e.theme.accentColor4})),h=s.d.div(o||(o=Object(i.a)(["\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid ",";\n  padding: 0 5px;\n  height: 30px;\n  background-color: ",";\n  transition: background-color 0.2s ease, border-color 0.2s ease,\n    box-shadow 0.2s ease;\n  cursor: text;\n\n  &:focus-within {\n    border-color: ",";\n    background-color: ",";\n    box-shadow: 0 0 4px 0 ",";\n\n    & > "," {\n      background-color: ",";\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n\n    & > "," {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.theme.accentColor3}),(function(e){return e.theme.accentColor4}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.accentColor1}),x,(function(e){return e.theme.mainColor}),(function(e){return e.theme.mainColor}),x,(function(e){return e.theme.mainColor}))},942:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(600),a=Object(r.a)((function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}}));function c(e,t){var n="object"===typeof t;return new Promise((function(r,c){var o,i=!1;e.subscribe({next:function(e){o=e,i=!0},error:c,complete:function(){i?r(o):n?r(t.defaultValue):c(new a)}})}))}}}]);