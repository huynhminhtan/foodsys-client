(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{VGiR:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),s=a.n(n),r=a("p0pE"),p=a.n(r),c=a("GIZZ"),u=a.n(c),i=a("3eXy"),o=a("7Qib"),y=a("3Unq"),l=i["a"].queryPostList;t["default"]=u()(y["b"],{namespace:"post",subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){Object(o["g"])("/post",e.pathname)&&t({type:"query",payload:p()({status:2},e.query)})})}},effects:{query:s.a.mark(function e(t,a){var n,r,p,c;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,p=a.put,e.next=4,r(l,n);case 4:if(c=e.sent,!c.success){e.next=10;break}return e.next=8,p({type:"querySuccess",payload:{list:c.data,pagination:{current:Number(n.page)||1,pageSize:Number(n.pageSize)||10,total:c.total}}});case 8:e.next=11;break;case 10:throw c;case 11:case"end":return e.stop()}},e)})}})}}]);