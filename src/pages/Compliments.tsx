import { useState } from 'react';
import './Pages.css';

const compliments = [
  "You know how in the ocean there are pearls in oysters ones that look soo beautiful, thats what your eyes look like and you have two of them!!😳😳",
  "Just go to the nearest mirror I cant see you right now but just look at yourself, god you look so amazing!!💕",
  "You know how when a shooting star crosses the sky, everyone makes a wish? I stopped wishing the day I met you — you’re the wish come true. 💕",
  "I was looking at the night sky there was the moon and stars around and the clouds were covering the moon and moving around it looked beautiful, and I thought nice try still nowhere near as beautiful as my C.P.U!!😍😍",
  "I remember telling you this once life without you is black and white you are the shine that brings colour in my life and you light up every room from being so beautiful!!💖💖",
  "You know when autocorrect actually gets your sentence right on the first try? That’s how rare someone like you is.😊",
  "This is me right now: while(1) { fallForHer(); } 🧑‍💻🧑‍💻",
  "You really are one of the strongest people I know, I really admire your strength and how amazing you are at life low times come but I want to cheer you on during those and celebrate the high times with you, you make me want to be a better person.🥰🥰",
  "You are not perfect, you are perfectly fucked up, too perfectly fucked up just know that you deserve to win and all the success that you want and theres this dumb fuck somewhere rooting for you, cheering you to do better and win😊😊",
  "Your smile is the most beautiful warm thing I have ever seen or experinced, so go ahead and smile I am smiling too somewhere thinking of you!🥰🥰",
  "I read this somewhere and it really stuck you are the best thing that happened to me ever someitmes I miss you so much it hurts I want to write \"I miss you\" on a rock and throw it at you to make you feel how much it hurts.🫣",
  "Whatever you are doing wherever you are, you got this you will always pull through you are my strong queen and I will always be rooting for you!!💖",
  "You know the best part of my day any day is when my phone rings and its ur call just that moment I feel se excited to see you, to hear your voice🫣🫣",
  "You have the most beautiful voice I sometimes just get zoned out listening to your voice and cant pay attention to what you are saying😳😳",
  "I wish you could see yourself through my eyes then maybe you wil understand how I feel about you because all the things I say and write are never enough💕💕",
  "I love how smart you are, you are so good with money and just generally are street smart, I am so thankful for everything I got to learn and keep learning from you Ill never order food without a coupon now😉😉",
  "God I wish you could see your smile once just go to the mirror and smile once for me and see how beautiful you are💖💖",
  "Every message you send after some silence is the best feeling ever better tham any high and any feeling🫣🫣",
  "I miss you so much all the time, all I want is to spend time with you just to hear your voice💕",
  "You know the worst feeling ever is knowing you are upset or angry and it gets even worse when its because of me Im sorry if I ever hurt you thats the last thing I ever want to do💖",
  "Here just gonna leave this here: 😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘",
  "I admire how strong you are you go through a lot and even though you go to the verge of giving up you never do thats the most beautiful thing I have seen I hope you win at whatever it is you are doing now or in the future.😊😊",
  "You are on my mind every minute of every day I am writing code I think of you Im driving I think of you Im stuck in a meeting I cant wait for it to get over to call you, I dont know if you will ever realize this but its weird how much I think of you🫣🫣",

];

export default function Compliments() {
  const [text, setText] = useState('');
  const [lastText, setLastText] = useState('');

  const handleClick = () => {
    let newText;
    do {
      newText = compliments[Math.floor(Math.random() * compliments.length)];
    } while (newText === lastText && compliments.length > 1);

    setText(newText);
    setLastText(newText);
  };

  return (
    <div className="page">
    <h4>I dont know where I am now but I am definitely thinking of you, go ahead...</h4>
      <button onClick={handleClick} className="button">
        Press for Compliments and Thoughts
      </button>
      {text && <p className="compliment">{text}</p>}
    </div>
  );
}