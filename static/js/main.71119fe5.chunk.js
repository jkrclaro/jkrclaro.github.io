(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/me.8a619748.png"},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(22),a(24),a(4)),c=a(5),s=a(8),u=a(6),m=a(7),d=a(32),h=a(31),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("ul",{className:"nav justify-content"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/workout"},"Workout"))))}}]),t}(r.a.Component),p=a(33),f=a(28),g={textDecoration:"underline"},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("p",null,"My name is John Claro, I'm 24 years old and I'm a passionate developer interested in web development, software engineering and tons of other stuff."),r.a.createElement("p",null,"I graduated with Applied Computing in Waterford Institute of Technology from 2012-2016."),r.a.createElement("p",null,"I live in Dublin, Ireland."),r.a.createElement("p",null,"I worked for Ireland's leading online media company from 2016-2018 as a Python Software Developer."),r.a.createElement("p",null,"I'm currently working on ",r.a.createElement("a",{href:"https://humblepage.com"},"Humblepage"),"."),r.a.createElement("p",null,"If you want to contact me, you can reach me via one of the following communication channels:"),r.a.createElement("ul",null,r.a.createElement("li",null,"via ",r.a.createElement("a",{href:"mailto:jkrclaro@gmail.com",style:g},"email")),r.a.createElement("li",null,"send me a message on ",r.a.createElement("a",{href:"https://www.github.com/jkrclaro",target:"_blank",rel:"noopener noreferrer",style:g},"github")),r.a.createElement("li",null,"reach out to me on ",r.a.createElement("a",{href:"https://www.twitter.com/jkrclaro",target:"_blank",rel:"noopener noreferrer",style:g},"twitter")),r.a.createElement("li",null,"connect with me on ",r.a.createElement("a",{href:"https://www.linkedin.com/in/jkrclaro",target:"_blank",rel:"noopener noreferrer",style:g},"linkedin")))),r.a.createElement("div",{className:"col-lg-2 mb-3"},r.a.createElement("img",{src:f,className:"img-fluid"}))))}}]),t}(r.a.Component),E=a(10),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={workout:a.generateWorkout()},a.random=a.random.bind(Object(E.a)(Object(E.a)(a))),a.generateWorkout=a.generateWorkout.bind(Object(E.a)(Object(E.a)(a))),a.randomWorkout=a.randomWorkout.bind(Object(E.a)(Object(E.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"random",value:function(e){return Math.floor(Math.random()*e)}},{key:"generateWorkout",value:function(){var e="chest",t="legs",a="back",n="arms",r="core",l={0:{0:[e,n,a,r,t,"shoulders"],1:[e,n,a,r,t,"shoulders"],2:[e,n,a,r,t,"shoulders"],3:[e,n,a,r,t,"shoulders"],4:[e,n,a,r,t,"shoulders"],5:[e,n,a,r,t,"shoulders"]},1:{0:[e,n],1:[a,r],2:[r,t],3:[n,r],4:[t,n],5:["shoulders",t]},12:{0:[e,"shoulders"],1:[t,a],2:[r,n],3:[e,t],4:["shoulders",a],5:[r,n]}},o={core:{"#1":["Plank","Bottoms Up","Spider Crawl"],"#2":["Cross-Body Crunch","Elbow to Knee","Cocoons"],"#3":["Reverse Crunch","Air Bike","3/4 Sit-Up"]},chest:{"#1":["Pushups","Incline Push-Up","Single-Arm Push-Up"],"#2":["Pushups (Close and Wide Hand Positions)","Push-Ups With Feet Elevated","Isometric Wipers"],"#3":["Clock Push-Up","Push-Up Wide"]},shoulders:{front:["Front Barbell Raise"],rear:["Standing Bent-Over With Dumbbells","Seated Bent-Over With Dumbbells","Seated Bent-Over On An Incline Bench / Exercise Ball"],middle:["Dumbbell Side Raise"]},arms:{biceps:["Wide-Grip Standing Barbell Curl","Hammer Curls","Biceps Curl To Shoulder Press"],triceps:["Dumbbell Floor Press","Weighted Bench Dip","Standing Dumbbell Triceps Extension"],forearms:["Wrist Rotations with Straight Bar","Finger Curls","Standing Palms-Up Barbell Behind The Back Wrist Curl"]},legs:{hamstrings:["Romanian Deadlift with Dumbbells","Stiff-Legged Dumbbell Deadlift","Dumbbell Clean"],quads:["Dumbbell Squat","Dumbbell Goblet Squat","Dumbbell Lunges"],calf:["Standing Dumbbell Calf Raise"]},back:{lower:["Superman"],middle:["One-Arm Dumbbell Row","Bent Over Two-Dumbbell Row With Palms In","Bent Over Two-Dumbbell Row"],lats:["Pullups","Chin-Up","Wide-Grip Pull-Up","V-Bar Pullup","Wide-Grip Rear Pull-Up"]}},i=new Date,c=(i.getMonth(),i.getDay()),s=l[0][c],u=[];for(var m in s){var d=s[m];console.log(d);var h=o[d];console.log(h);var b={muscleToDo:d,exercisesToDo:[]};for(var p in h){var f=h[p],g=f[this.random(f.length)];b.exercisesToDo.push(g)}u.push(b)}return u}},{key:"randomWorkout",value:function(){var e=this.generateWorkout();this.setState({workout:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-3 mb-3"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("span",{onClick:this.randomWorkout,className:"btn btn-primary"},"Generate")),r.a.createElement("div",null,this.state.workout.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h1",null,e.muscleToDo),r.a.createElement("ul",null,e.exercisesToDo.map(function(e,t){return r.a.createElement("li",{key:t},e)})))})))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:v}),r.a.createElement(p.a,{path:"/workout",component:k}))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:""},r.a.createElement("div",{className:"main-body jkrclaro-bg"},r.a.createElement("div",{className:"sub-body"},r.a.createElement("div",{className:"App-header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"container"},r.a.createElement(w,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(16);a.n(j).a.load({google:{families:["Arial:400","sans-serif"]}}),o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.71119fe5.chunk.js.map