---

layout: home
title: "Core Lab Interaction, Animations"
permalink: /css-animations/

---

notes

from to

@keyframes animationName {
  from {background-color: red;}
  to {background-color: yellow;}
}

.target{
	animation-name: example;
  animation-duration: 4s;
}


@keyframes animationName {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}


animation-name
animation-duration
animation-delay (can have negative time)
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode // keep current or last state (none, forwards, backwards)


