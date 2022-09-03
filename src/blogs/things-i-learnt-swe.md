## Things I've learnt in my Software Engineering career so far

Last edited Sep 1, 2022

Below are a few points that pretty much I try to remember myself every so often. Would like to say they're pieces of wisdom I've collected. Some are my coworkers', some are from my own pains and tears. Each of them could turn into a post in themselves when I get the time to do so.

- [Things I've learnt in my Software Engineering career so far](#things-ive-learnt-in-my-software-engineering-career-so-far)
  - [Naming is really tough, but it's crucial](#naming-is-really-tough-but-its-crucial)
  - [Avoid side effects](#avoid-side-effects)
  - [Don't force re-usability, only if used more than twice](#dont-force-re-usability-only-if-used-more-than-twice)
  - [The art of dependencies](#the-art-of-dependencies)
  - [Think about today, and today only](#think-about-today-and-today-only)
  - [The best way to increase test coverage](#the-best-way-to-increase-test-coverage)
  - [10x developers do exist](#10x-developers-do-exist)
  - [Only refactor after providing comments](#only-refactor-after-providing-comments)
  - [Breath gives you confidence](#breath-gives-you-confidence)
  - [Depth gives you money](#depth-gives-you-money)
  - [Nothing worse than companies with strict delimited roles.](#nothing-worse-than-companies-with-strict-delimited-roles)
  - [A reliable engineer > A productive coder](#a-reliable-engineer--a-productive-coder)
  - [Too many coders, few engineers](#too-many-coders-few-engineers)
  - [There's nothing really boring in tech. You just don't know shit about that field](#theres-nothing-really-boring-in-tech-you-just-dont-know-shit-about-that-field)
  - [Always why, never what](#always-why-never-what)
  - [A little Power Point can go a long way](#a-little-power-point-can-go-a-long-way)
  - [Documentation is key](#documentation-is-key)
  - [Don't focus so hard on trying to have a "portofolio"](#dont-focus-so-hard-on-trying-to-have-a-portofolio)


### Naming is really tough, but it's crucial 

Everything in life can be solved with "another layer of abstraction". What does that mean? I don't care how this function works, who wrote it, when it was written, etc... All I care about is that if its name is *print_error_to_file(error_message, file)*, it will indeed print the *error_message* into the *file* I tell it to. AND NOTHING ELSE! 

If your variable is named *MAX_NUM_OF_SIMULTANEOUS_OPEN_CONNECTIONS*, then I know what it is about. If this thing is inside a class called *DatabaseClient*, then I think it's obvious what is for. No need for the docstring, and more importantly **no need for me to spend time making sure I know what your function is doing**.

It's a hard job! It's so hard, yet so important, that when I first had to mentor an apprentice (She basically didn't know any coding) this was the point I'd emphasize the most. She is incredibly smart, and I know that coding and understanding things was never going to be an issue, but university was not going to teach her these things which make your code so much better. Also, giving a good and accurate name to a variable proves that you know and understand what you're doing :) So it's always a nice push to keep improving those points. 

As your code gets more and more complex, because so is the business, the more you'll appreciate this:

<code style="font-size: 12px">List<> fxInstruments = positions.stream().filter(position -> position.positionType != "FX").map(pos -> pos.instrument) ...;

</code>

instead of this:

<code style="font-size: 12px">List<> instr = positions.stream().filter(x -> x.positionType != "FX").map(e -> e.instrument) ...;


</code>

### Avoid side effects

If a function's name is *print_error_to_file(error_message, file)*, then please make sure that's all it does. 

I don't want to call that function and then be surprised that you also threw an exception, closed another file, sorted a hashmap I was using somewhere else, or modified the error message with some prefixes, suffixes, etc...

My previous boss used to say that every function should be a single line or lambda. Or something like that, hehe. I think it's a bit extreme, but nonetheless if you were to follow it you'd to keep things specific, and you'll end up doing the ONLY ONE THING you were meant to be doing.


### Don't force re-usability, only if used more than twice

I think we all have this urge to always write re-usable code. But that's a trap, and a pretty bad one. It can lead to the below:

1. Forcing too many parameters in a function is an antipattern in itself. 
1. Forcing re-usability can force the renaming the function. And that's a massive no no (Read above).
1. It can lead to spaguetthi code, specially in JAVA which is a particularly powerful language to do these kinds of things. We all know that guy who really writes *the future-proof code* and then you have to CTRL+Click (Jetbrains) for an hour trying to find the actual implementation of the abstract class. 
1. It can lead you to having weird imports and dependencies. Code from very different domains being shared, or some super important functions being put in *Utils files. 
1. Some functions are not **utils** or **helpers**, they are the whole freaking logic. So don't force them in to being static and shared if it just messes up your whole design patterns. Keeping a team of people aligned on a software architecture and design pattern is a lot harder than the bug that will come from forgetting to update 2 functions.
1. Too general of a function can just make it slower for someone to understand the big picture of your code. 

### The art of dependencies 

Structuring your modules and infrastructure around their dependencies on each other is such an art, that honestly I don't know what to say. 

### Think about today, and today only

When we're writing code we're always thinking about how we can make it generalizable and re-usable. We're tempted to write the code that will never need renaming, and that can scale quickly. There's a massive tradeoff when we do that: check the above point on forcing re-usability.

Another tradeoff is complexity, and **complexity is never sexy**.

Contrary to what most people think, doing the simplest that will not scale well is the best way to start. Write good, specific code, rather than general boilerplate everybody will be happy to delete.

Worry when you get close to that future, when you're application is proven to be useful and starts needing to scale. You'll get time to worry about that new today. You have lots of other things to prove first.

### The best way to increase test coverage

By deleting code. 

<p align="center">
![satisfactionMeme](https://i.kym-cdn.com/entries/icons/facebook/000/006/077/so_good.jpg)
</p>

### 10x developers do exist 

The "10x Developer" is a joke around the internet. It's about this guy that's way too good and provide exponentially more impact than most other developers in the team. Think about it as a person that's 10 times better than you and it takes you 5 min to realize that this person is the best asset of the team. If they decides to leave the team, uffa! will be screwed.

I know one 10x developer, maybe 2, but the second one is still on trial in my head.

The one 10x developer is probably 5x better than I was when I first became mid. Meaning he had 5/6 years of experience, and I had 2/3 but he was 5 times ahead of me in all senses. If that person went on holidays, we'd all notice sometimes for the good reasons, sometimes for bad ones, like we depended too much on him and he didn't pass the baton sufficiently to every body else.

He was the main lead for our strategic product. This microservices platform handling tons of intraday requests, some of them would require insanes amounts of processing, and some other would be the opposite but needed to be quick!

He would be leading the technical decissions, the design, the infrastructure, the deployment processes, the product management. What we call in Costa Rica: Soyla!

My boss (the Staff Engineer) was his boss, and he was very very good at delegating. He delegated lots of responsibilities to the 10x (a senior engineer) engineer and made his career extremely good at a very yound age. I bet his salary wasn't great in comparison, but his learning and growth was massive. 

Anyway, if he's 5x better than me then I must be assuming I'm 2x? **No**.

The above made him 5x, **he had other traits that made him 10x**. Like his social skills, his mentoring, his ability to lead and teach junior developers. If you're good, you'll be able to leverage people below you to increase your impact.

What usually makes a developer 10x, is they themselves being absurdely good (5x/6x), and then leveraging good people (a few 1x/2x/3x) to work on his stuff and we help them round up to 10x.

### Only refactor after providing comments

Every developer has this urge to refactor. Specially if they're Mid/Senior and they actually have the time for it. Looking at someone else's code is equivalent to looking at how somebody thinks, which is naturally different than yours.  

There's no biggest hurt to your confidence than waking up after a productive day to figure out your mid/senior developer in another timezone just re-wrote your whole code. Not only it hurts confidence of the junior people, but it also is a terrible learning exercise if you don't take the time to explain why the code is better in case it was indeed mis structured. 

Also, it can be totally misleading. If a junior did a good job, then why do I feel entitled to refactor it so that it fits my mental models? The goal should not be to train juniors to think like I do.

Note, this applies to any developer refactoring any other developer. Regardless of seniority. It's a matter of touch that will go a long way for you.

### Breath gives you confidence

Being able to do bits and pieces of everything give you a lot of confidence that you can learn whatever. Also gives you a better criteria to opine when the conversation falls out of your main domain. It expands your comfort zones, teaches you a lot, and helps you explore new areas in case you weren't set on a field of passion. 

Breath can turn you into a generalist and get you skills that will help in the future.

### Depth gives you money

Unfortunately, depth is what gives you money. This applies to absolutely everything in every field. An specialist is way more likely to make money by following a traditional path than a curious generalist that hasn't found its way. There will always be exceptions, and within the top 5% of the population, generalist are probably the better off. But for the rest of us mortals it's the opposite. 

Might not be as fun, but the people with the best leverage are those that know way too much and are hard to find. If a recruiter comes to you saying: 

>>Team X at Facebook is triying to build its London presence and they're hiring 5 good engineers with 5+ years of experience, any OOP language works. 

Then you know your leverage for negotiation is not going to be as good as of this guy's: 

>>Citadel wants to optimize its Options trading platform. 5 years of Options Equity Front Office experience. 

### Nothing worse than companies with strict delimited roles.

This is just an opinion, but I hate companies that have PM -> QA -> DEV -> DEVOPS -> Business Analyst. You have to go through so many hurdles to speak to the right person, and worse of all, each of them blame the other. 

### A reliable engineer > A productive coder

An engineer you can trust to deliver and has good habits but is slow and not so technical, is so much better than an engineer that produces tons of code that nobody uses and that doens't put his skin in the game when the tasks are boring. 

### Too many coders, few engineers

I think this a sympton of the way many companies are structured. Where the developers are shielded by QA people, business analyts, project manager, product managers, testers, devops, and terrible bosses. 

Programming should be in a way the most menial of all tasks of engineering. The architecture, the tradeoffs, the habits, the SDLCs, the technical debt, all those are things we should be doing from the beginning. The problem is that the more we wear all those hats the less we code, and most people get discouraged by that. 

I've noticed that companies have this role of Architect, and team lead, and they lots of scrum, and Jira. Naturally junior and mid people are just staff picking up tickets. And once they get to lead and architect don't pass on the batton and empower their juniors. And that's also natural, I mean why would they give their job to someone else if that's how the company is structured. 

Great coding should take you from junior to mid, but that's it. Shouldn't take you anywhere higher. 

### There's nothing really boring in tech. You just don't know shit about that field

I used to criticize UI dev a lot, now that's 80% of my job. And it's tough dude.

I used to hate infra. Then I suffered through Kubernetes and ended up loving it. Nothing makes you feel more like a proper engineer than setting up pipelines and the rules around how you want code to flow into environments and things like that.

**Fields in tech are like dancing**. You say you don't like it at first, but in reality you just don't know how to dance and so you feel awkward. 

### Always why, never what

Don't write a comment explaining what the code does. We can tell from the code.
But please write **why** it does what it does if it has any funky logic. 

This is crucial specailly in legacy systems, where the people that wrote the code had left, or the code is so ancient that only God knows why it does what it does.  

I cannot tell you the amount of times I saw formulas dividing positions in portfolios by 25. To this day I hope they figured out why it was doing so, but needless to say nobody dared to change it.

### A little Power Point can go a long way

When I started my first job I had to design an UI. The codebase was in Angular, and Javacript and I didn't know either. So I used PowerPoint to design the UI and share with the business users so that they would be able to have an idea of what I was doing, and also play with the design themselves. Such as small thing, but they went crazy.

To be fair, I worked on a Venture Capital, so my power point skills were atop back then. Beautiful clean slides that would look like a pdf with no stupid childish shit in them.

Also, with Data Issues, don't always wait on the business or the data analysis people to come up with the answers and the excels. Do it yourself, and learn a bit. I certainly believe that one of the things that convinced my boss to hire me was that I was the only young person that he had met that could solve one of his interview questions in Excel.

>> *"But I'm an engineer, I code I don't design and do excel"* 

Fuck your ego.

### Documentation is key

Learning what to document, and when to document is very important. But also put a lot of effort into it. Make it look pretty. Making a good impression is key, even if it's poorly written :). 

Most of us have the benefit of English as a second language, so use that pass to prioritize writing a lot, doing a lot of diagrams, a lot of subtitles, over perfectly written documents. Documentation is not an user manual, it doesn't have to be too formal. 

### Don't focus so hard on trying to have a "portofolio"

Poeple say that these days you gotta have a portfolio and a packed github to make it to the top firms in the top cities. I can't advice that for two reasons. 

1. I'm not like that, and I've made it. Focus on internships to start. Work for no money that's fine.
1. Porfolios built by simply following tutorials are kind of a waste of time. 
1. It'd be pretty sad to tell a naturally creative person to focus too much on Computer Science if their hobbies are idk, dancing which is time consuming as well. Be a well-rounded person, that's much better for your mental health and will pay off in life. No rush.


---

If you want to chat about **anything** in this post, please reach out to any of the below social media and hit me with the line:
 
 > "Consejos de mi tía Panchita"