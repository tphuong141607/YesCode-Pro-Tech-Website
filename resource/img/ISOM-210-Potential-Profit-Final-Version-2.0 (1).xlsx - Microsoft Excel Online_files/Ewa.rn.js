/*! Version=16.0.8628.3703 */
Type.registerNamespace("Common.App.Rename");Common.App.Rename.m=function(){};Common.App.Rename.m.registerInterface("Common.App.Rename.m");Common.App.Rename.g=function(){};Common.App.Rename.g.registerInterface("Common.App.Rename.g");Common.App.Rename.h=function(){};Common.App.Rename.h.registerInterface("Common.App.Rename.h");Common.App.Rename.j=function(){this.e=Function.createDelegate(this,this.f)};Common.App.Rename.j.prototype={d:null,a:function(){return"Common.App.RenameFile"},c:function(n){var t,i;this.d=n;t=this;this.d.b(Common.App.Rename.i).c(Common.App.Rename.g).b(function(){return new Common.App.Rename.i(Common.a.c(),t.d.e(Common.App.Rename.h))}).a();i=this;this.d.b(Common.App.Rename.c).c(Common.App.Rename.h).b(function(){return new Common.App.Rename.c(Common.a.c())}).a()},b:function(){Common.a.b.d(this.e)},f:function(){Common.a.bf()&&Common.App.Rename.a.b().C(Common.a.D,Common.a.bc,Common.a.bN||$a.R)&&(Common.App.Rename.b.c().C(),Common.a.b.a("RenameDialogIsEnabled")&&(this.d.a(Common.App.Rename.c).f(Common.a.j,Common.a.bc),this.d.a(Common.App.Rename.g).a()))}};Common.App.Rename.n=function(){};Common.App.Rename.n.a=function(){Common.App.a.a().a(new Common.App.Rename.j,7)};Common.App.Rename.b=function(n,t,i,r,u,f,e,o){this.m=Function.createDelegate(this,this.y);this.n=Function.createDelegate(this,this.z);this.o=Function.createDelegate(this,this.A);this.p=Function.createDelegate(this,this.t);this.q=Function.createDelegate(this,this.B);this.r=Function.createDelegate(this,this.D);this.s=Function.createDelegate(this,this.F);this.l=Function.createDelegate(this,this.x);this.i=n;this.g=t;this.h=i;this.a=r;this.d=u;this.f=f;this.c=e;this.e=o};Common.App.Rename.b.c=function(){return Common.App.Rename.b.a||(Common.App.Rename.b.a=Common.App.Rename.b.d())};Common.App.Rename.b.d=function(){return new Common.App.Rename.b(Common.a.bf,new($$sc.u.$$(Common.dt))(function(){return Common.a.c()}),new($$sc.u.$$(Common.eA))(function(){return Common.a.Y}),Common.a.j,Common.a.w,function(){return Common.a.cY},Common.a.dP,Common.App.Rename.a.b().A)};Common.App.Rename.b.b=function(n,t){var i=Common.d.u(n);return t+i};Common.App.Rename.b.prototype={g:null,h:null,a:null,d:!1,f:null,c:!1,i:null,e:null,C:function(){this.b().a(3740310824,2147483648,this.l);this.b().a(2638199087,2147483648,this.s);this.b().a(1897077126,2147483648,this.r);this.b().a(3537588550,2147483648,this.q)},k:function(){return this.i()?this.f()?this.j()?this.v()?32:8:32:8:8},v:function(){return this.c?this.j().a():this.j().b()},x:function(){var n=Common.App.Rename.a.b().C(Common.a.D,Common.a.bc,Common.a.bN||$a.R);return n?32:8},F:function(){var n=this.v(),t=this.f();return Diag.a.a(4059649,203,50,"ShowRenameDisabledDialog: userIsAnonymous = {0}, userCanRename = {1}, userCanRenameInCurrentSession = {2}, userCanRenameInCoauthSessionsWithRenameCapableUsers = {3}",this.d,t,n,this.c),new Common.App.Rename.e(this.d,!t,!n,this.c),32},D:function(n,t,i,r,u){return i===1?this.k():Common.a.bb?this.k()===8?(this.b().c(2638199087,2),8):(Common.a.bb(u,this.p,this.o),32):8},t:function(n,t){if(n.OperationResult){this.w(n.OperationResult);return}this.E(t,n.NewName);this.G(n,Common.a.a().a().m);Common.a.b.a("DocumentNameInJewelInfoMenuIsEnabled")&&Common.a.a().A(!1)},E:function(n,t){var i={};i.NewName=t;n.a("File_Rename",i)},G:function(n,t){this.H(n.NewName);Common.a.ba=n.DirectInvokeDavUrl;var r=t(n.EditDocInClientUrl),i=new Common.eZ;i.c=this.a.a();i.a=r;i.b=n.EditDocInClientUrl;this.b().b(2391221446,2,i)},w:function(n){switch(n){case 1:var t=new CommonUI.e;t.h(0);t.bc($a.Q,$a.P,null);this.u()}},H:function(n){this.a.c(Common.App.Rename.b.b(this.a.a(),n));this.e(n)},A:function(n){var t=new CommonUI.e;t.h(0);n===1?t.bc($a.Q,$a.P,null):(Common.a.bi(25),t.bc($a.dC,$a.dB,null));this.u()},B:function(n,t,i){return i===1?this.k():Common.a.cA?(Common.a.cA(this.n,this.m),32):8},z:function(n,t){n.NewName!==Common.d.e(this.a.a())&&this.t(n,t)},y:function(){},u:function(){this.e(Common.d.e(this.a.a()))},b:function(){return this.g.a()},j:function(){return this.h.a()}};Common.App.Rename.k=function(n,t,i){this.e=Function.createDelegate(this,this.N);Common.App.Rename.k.initializeBase(this);this.d=n;this.b=t;this.c=i;this.u=Common.App.Rename.d.b()};Common.App.Rename.k.prototype={d:null,b:null,c:0,a:function(){var t={txtDocumentName:Common.d.e(this.b.a())},n;this.w($a.dA,this.e,t);n=document.getElementById("txtDocumentName");this.c>0&&(n.maxLength=this.c);n.focus()},N:function(n,t){if(n===1){var r=Common.d.e(this.b.a()),i=(t.txtDocumentName||"").trim();if(i!==r&&i!==""){this.d.b(1897077126,2,i);return}}Common.be.b().a("DoNothingResult",{Reason:"FileNameUnchanged"})}};Common.App.Rename.i=function(n,t){this.d=Function.createDelegate(this,this.e);this.b=n;this.c=t};Common.App.Rename.i.prototype={b:null,c:null,a:function(){this.b.a(2382951455,2147483648,this.d)},e:function(n,t,i){var r=32,u,f;return i===2&&(u=this.b.c(1897077126,1),u!==32?(this.b.c(2638199087,2),Common.be.b().a("FailedProcessingStep",{Reason:"RenameDisabled"}),r=8):(f=this.c.a().a(),f.a())),r}};Common.App.Rename.c=function(n){this.c=n;this.b=!1};Common.App.Rename.c.prototype={c:null,d:null,e:0,b:!1,f:function(n,t){this.d=n;this.e=t;this.b=!0},a:function(){return this.b?new Common.App.Rename.k(this.c,this.d,this.e):null}};Common.App.Rename.e=function(n,t,i,r){Common.App.Rename.e.initializeBase(this);this.a=new Common.App.Rename.l(n,t,i);this.b=r;this.h(0);this.l(1,$a.b);this.u=Common.App.Rename.f.b();this.bx($a.dJ,null);this.x("RenameRow")};Common.App.Rename.e.a=function(n,t,i){n.style.display="none";t.innerText=i};Common.App.Rename.e.prototype={a:null,b:!1,bn:function(){if(this.a.a){var n=this.b?$a.dK:$a.dF;Common.App.Rename.e.a(document.getElementById("ulRenameFileDisabled"),document.getElementById("labelDisabledMessage"),n)}else this.a.b?Common.App.Rename.e.a(document.getElementById("ulRenameFileDisabled"),document.getElementById("labelDisabledMessage"),$a.dH):this.c()},c:function(){this.a.e&&(document.getElementById("liRenameFileRenameDisabledSignIn").style.display="none");this.a.d&&(document.getElementById("liRenameFileRenameDisabledPermission").style.display="none");this.a.c&&(document.getElementById("liRenameFileRenameDisabledCoauth").style.display="none")}};Common.App.Rename.l=function(n,t,i){this.a=!n&&!t;this.b=!n&&!i;this.a||this.b||(this.e=!n,this.d=!t,this.c=!i)};Common.App.Rename.l.prototype={a:!1,b:!1,e:!1,d:!1,c:!1};Common.App.Rename.a=function(n,t,i,r,u,f,e,o,s,h,c,l){this.z=Function.createDelegate(this,this.L);this.y=Function.createDelegate(this,this.K);this.w=Function.createDelegate(this,this.G);this.x=Function.createDelegate(this,this.J);this.v=Function.createDelegate(this,this.F);this.A=Function.createDelegate(this,this.u);this.b=n;this.f=t;this.r=i;this.n=r;this.h=u;this.o=f;this.d=e;this.g=o;this.c=s;this.l=h;this.k=c;this.i=l};Common.App.Rename.a.d=function(){Common.k.B(Common.a.f)};Common.App.Rename.a.b=function(){return Common.App.Rename.a.a||(Common.App.Rename.a.a=Common.App.Rename.a.c())};Common.App.Rename.a.c=function(){return new Common.App.Rename.a(Common.a.c(),Common.t.a(),Common.f.a(),Common.c.a(),Common.a.j,Common.App.Rename.a.d,Common.e.F,Common.e.y,Common.Utils.a.a().c(Common.cc),Common.b.f(),Common.b.b(),Common.b.c())};Common.App.Rename.a.prototype={q:!1,b:null,f:null,r:null,n:null,c:null,h:null,o:null,d:null,g:null,a:null,m:0,l:!1,k:!1,i:!1,j:!1,p:!1,e:function(){return this.a.getAttribute("contentEditable")==="true"},C:function(n,t,i){return!this.b||!this.h||!this.o||!this.d||!this.g||!n||t<=0?(Common.a.a().a().o(),!1):(this.a=n,this.a.title=i,this.a.setAttribute("role","button"),this.a.setAttribute("Unselectable","on"),this.m=t,this.M(),this.q=!0,!0)},M:function(){this.f&&(this.f.a("blur",this.a,this.v),this.f.a("paste",this.a,this.x));this.r.a("keydown",this.a,this.w);this.n.a("msospPointerDown",this.a,this.y);this.n.a("msospPointerUp",this.a,this.z)},F:function(){return this.e()&&!this.j&&(this.l||this.g(this.a),this.B(),this.s(!1)),this.j=!1,!1},J:function(){return Diag.a.a(4281482,203,50,"Attempting to paste into the document title"),!0},G:function(n){return this.e()?this.H(n):this.I(n)},H:function(n){var i=n.a.keyCode,t=!1;switch(i){case 13:this.B();this.s(this.k||this.i);t=!0;break;case 9:this.l&&this.g(this.a);break;case 27:this.t();this.s(this.k||this.i);t=!0}return t},I:function(n){var i=n.a.keyCode,t=!1;switch(i){case 13:case 32:this.D(this.i);this.e()&&this.d(this.a);t=!0}return t},K:function(){return this.e()||(this.D(!1),this.e()&&(this.a.focus(),this.d(this.a),this.p=!0)),!1},L:function(){return this.p?(this.d(this.a),this.p=!1,!0):!1},E:function(){var n=this.b.c(1897077126,1);return n===32},B:function(){var i=Common.d.e(this.h.a()),n=this.a.innerText.trim(),t;n.length>this.m&&(n=n.substr(0,this.m));n!==i&&n!==""?(t=this.b.b(1897077126,2,n),t!==32?this.t():this.u(n)):this.t()},t:function(){this.u(Common.d.e(this.h.a()))},u:function(n){this.q&&(this.a.innerText=n,this.o())},D:function(n){if(this.E()){if(!this.e()){if(n&&(this.j=!0,this.a.blur()),this.a.setAttribute("contentEditable","true"),this.a.removeAttribute("Unselectable"),this.a.setAttribute("role","textbox"),this.a.style.width="auto",Sys.UI.DomElement.addCssClass(this.a,"EditableBreadcrumbItem"),this.c){var t=this;this.c.a(function(n){n.d(!0)})}n&&this.a.focus();Diag.a.a(9234188,203,50,"Rename document from header.")}}else this.b.c(2638199087,2)},s:function(n){if(this.a.removeAttribute("contentEditable"),this.a.setAttribute("Unselectable","on"),this.a.setAttribute("role","button"),Sys.UI.DomElement.removeCssClass(this.a,"EditableBreadcrumbItem"),this.c){var t=this;this.c.a(function(n){n.d(!1)})}n&&(this.a.blur(),this.a.focus())}};Common.App.Rename.d=function(){};Common.App.Rename.d.b=function(){return CommonUI.c.a(Common.App.Rename.d.a,$a.dz)};Common.App.Rename.f=function(){};Common.App.Rename.f.b=function(){return CommonUI.c.a(Common.App.Rename.f.a,$a.dD,$a.dI,$a.dG,$a.dE)};Common.App.Rename.k.registerClass("Common.App.Rename.k",CommonUI.c);Common.App.Rename.i.registerClass("Common.App.Rename.i",null,Common.App.Rename.g);Common.App.Rename.c.registerClass("Common.App.Rename.c",null,Common.App.Rename.h);Common.App.Rename.e.registerClass("Common.App.Rename.e",CommonUI.c);Common.App.Rename.b.a=null;Common.App.Rename.a.a=null;Common.App.Rename.d.a="<div class='WACDialogRow' id='DocumentNameBlock'> <label id='lblDocumentName' class='WACDialogLabel' for='txtDocumentName' >{0}<\/label> <input type='text' id='txtDocumentName' class='WACDialogInput'/> <\/div>";Common.App.Rename.f.a="<div class='WACDialogRow' id='RenameRow'> <label id='labelDisabledMessage' class='WACDialogLabel' >{0}<\/label> <div class='WACDialogRow' id='MultipleSuggestionsRow'> <ul id='ulRenameFileDisabled' class='WACDialogUList'> <li id='liRenameFileRenameDisabledSignIn'>{1}<\/li> <li id='liRenameFileRenameDisabledPermission'>{2}<\/li> <li id='liRenameFileRenameDisabledCoauth'>{3}<\/li> <\/ul> <\/div> <\/div>";Common.App.Rename.n.a();Type.registerNamespace("_Ewa");_Ewa.wH=function(n){this.c=n};_Ewa.wH.prototype={c:null,b:function(){return!this.c.b().r()||this.c.b().r().length<2},a:function(){return this.b()}};_Ewa.wJ=function(n){this.a=n};_Ewa.wJ.prototype={a:null,p:function(n,t,i){return this.a.b(i,t),$$sc.a.a(Boolean,!0)},o:function(n,t,i,r){return t.a===1897077126&&!!r&&r.a===1},q:function(){return!1},r:function(){return!1},dispose:function(){this.a=null}};_Ewa.oe=function(n){_Ewa.oe.initializeBase(this,[n])};_Ewa.oe.a=function(n){_Ewa.P.a(114,new _Ewa.oe(n))};_Ewa.oe.prototype={k:function(){var n=_Ewa.k.a(_Ewa.go,this.h.a(),115,this.cA()),t=this;_Ewa.e.cw(n,function(){t.l([new _Ewa.wJ(n.a())],null)},this.cA(),3)}};_Ewa.Fp=function(){};_Ewa.Fp.a=function(){_Ewa.d.a(function(n){_Ewa.og.a(n);_Ewa.oe.a(n)})};_Ewa.of=function(n,t){this.i=Function.createDelegate(this,this.l);this.j=Function.createDelegate(this,this.m);this.h=Function.createDelegate(this,this.k);_Ewa.of.initializeBase(this,[!1]);this.c=n;this.f=t};_Ewa.of.a=function(n){var t;switch(n.Errors[0].MessageId){case 440:t=2;break;case 441:t=1;break;case 442:t=4;break;default:t=5}return t};_Ewa.of.prototype={f:null,c:null,d:null,g:null,e:null,a:function(){Common.a.bb=this.h;this.d=Common.a.Y;Common.a.Y=new _Ewa.wH(this.c)},dispose:function(){Common.a.bb=null;Common.a.Y=this.d;this.d=null;this.c=null;_Ewa.BD.prototype.dispose.call(this)},b:function(n,t){var r=n.newFileName;if(!!r){var u=this.c.c().a().b(),i=this,f=this;_Ewa.ba.a(this.c.i(),function(n,t){return _Ewa.wI.a(i.c.c().a(),r,_Ewa.p.a(n,i.j),_Ewa.p.b(t,i.i),null,u)},function(n){return new _Ewa.M(0,n,0)},t)}},k:function(n,t,i){this.g=t;this.e=i;this.c.g().b(new _Ewa.Z(1897077126,_Ewa.w.a,2,3,null),{newFileName:n},null)},m:function(n){var u,f,t,r,i;_Ewa.S.a(n)||!n.Result?(u=_Ewa.of.a(n),f=[440,441,442,443,439],_Ewa.B.a(this.c).a().h(f),this.e(u)):(t=n.Result,r=this.c.j(),r.FullDocumentInfo.DownloadACopyUrl=t.DownloadACopyUrl,r.FullDocumentInfo.BreadcrumbDocName=t.NewFileName,r.WorkbookFileName=t.NewFileName,i={},i.NewName=t.NewFileName,i.DirectInvokeDavUrl=t.DirectInvokeDAVUrl,i.EditDocInClientUrl=t.EditDocInClientUrl,i.OperationResult=0,this.g(i,this.f))},l:function(){this.e(5)}};_Ewa.og=function(n){_Ewa.og.initializeBase(this);this.h=n;this.j()};_Ewa.og.a=function(n){n.a().a(_Ewa.DV.$$(_Ewa.go),115,new _Ewa.og(n))};_Ewa.og.prototype={h:null,l:null,k:null,b:function(){var n,i;if(!this.k){n=_Ewa.cH.a(_Ewa.go,_Ewa.z.a(),this.cA(),"Task",null);this.k=n.a;var t=_Ewa.k.a(Common.R,this.h.a(),132,this.cA()),r=_Ewa.k.a(Object,this.h.a(),150,this.cA()),u=this;_Ewa.e.cw(_Ewa.e.ws([r,t],this.cA(),3),function(){n.b(new _Ewa.of(u.h,t.a()))},this.cA(),3)}i=this;this.k.CW(function(n){i.i(n.a())})},dispose:function(){System.a.a(this.l);this.l=null;this.h=null;_Ewa.cc.prototype.dispose.call(this)}};_Ewa.wI=function(){};_Ewa.wI.a=function(n,t,i,r,u,f){var e=n.a(9,f);return e.newFileName=t,_Ewa.f.a(n,"RenameFile",e,i,r,u,0,null)};_Ewa.oe.registerClass("_Ewa.oe",_Ewa.P);_Ewa.of.registerClass("_Ewa.of",_Ewa.BD,_Ewa.go,Sys.IDisposable);_Ewa.og.registerClass("_Ewa.og",_Ewa.kc.$$(_Ewa.go));_Ewa.Fp.a();Type.registerNamespace("_Ewa");_Ewa.wK=function(n){this.a=n};_Ewa.wK.prototype={a:null,r:function(){return!1},p:function(n,t,i){var r=this.a.b(2382951455,2,i);return r!==2?$$sc.a.a(Boolean,!0):_Ewa.E.a(t.a)},o:function(n,t){return t.a===1204860550},q:function(){return!1}};_Ewa.oh=function(n){_Ewa.oh.initializeBase(this,[n])};_Ewa.oh.a=function(n){_Ewa.P.a(126,new _Ewa.oh(n))};_Ewa.oh.prototype={k:function(){var n=this;_Ewa.e.cw(_Ewa.k.a(Object,this.h.a(),150,this.cA()),function(){n.l([new _Ewa.wK(Common.a.c())],null)},this.cA(),3)}};_Ewa.oh.registerClass("_Ewa.oh",_Ewa.P);Type.registerNamespace("_Ewa");_Ewa.Fr=function(){};_Ewa.Fr.a=function(){_Ewa.d.a(_Ewa.oh.a)};_Ewa.Fr.a();