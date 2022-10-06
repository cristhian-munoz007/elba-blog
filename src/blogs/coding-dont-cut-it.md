## Coding don't cut it anymore - The job market

I was recently reading this article about how [complexity kills software developers](https://www.infoworld.com/article/3639050/complexity-is-killing-software-developers.html) by Scott Carey, and there was a particular item that got me thinking about a tangent. 

Overall, his point is that complexity has made our jobs a lot harder. My point or focus, is that even if essential complexity is growing naturally, we have abused the job market and took accidental complexity to a next level. A level in which we damaged our businesses, and the job market will start to correct that.

I'd like to think that Carey would agree with me to a certain extent given that the line that caught me thinking about all of this was this one:

> “Given the demand for software developers today, companies don’t have the leverage to push developers towards a mental model of primarily delivering value to their customers,” Etheridge said. **“Getting more engineers to think that way is a challenge.”**

- [Coding don't cut it anymore - The job market](#coding-dont-cut-it-anymore---the-job-market)
  - [Too many options out there.](#too-many-options-out-there)
  - [The job market fostered accidental complexity.](#the-job-market-fostered-accidental-complexity)
    - [Looking back, it holds](#looking-back-it-holds)
      - [Increased demand](#increased-demand)
      - [Entitlement](#entitlement)
    - [Looking forward, it won't hold](#looking-forward-it-wont-hold)
      - [Coding don't cut it anymore](#coding-dont-cut-it-anymore)

In the subsection of *Essential vs Accidental* complexity, the author talks about how business requirements are complex and thus our software has to evolve into more complexity to bridge that gap. That's **essential** complexity.

However, we also put lots of tooling, and technologies, and design, and layers and layers of abstraction that eventually bite us back. That's **accidental** complexity.

Such accidental complexity is hard to avoid, it'd probably take for us to be very senior to become good at it. I adventure to say it's nevertheless impossible to avoid. For three main reasons: 

1. there's too many options, 
2. we love what we do among anything else, 
3. and the job market let us abuse number 2.

### Too many options out there. 

Especially with all the cloud offerings, but also all the new libraries coming out and teams wanting to stay on top. 

Essential complexity comes quick, and it usually means success. But it leads into scenarios that if you've been part of the industry for a bit are not hard to imagine.

Think about how suddently a monolithic software that was meant to perform a couple of tasks, is now a microserivces platform running on Kubernetes, has 5 different types of DevOps files for gitlab and terraform,  uses Prometheus, and Jaeger, and Vertx, and Kafka, and only God knows where the hell are the logs... 

And in a few months, leadership finds a cheaper cloud vendor and you have to migrate, and now you're behind 3 versions on Kafka, and all the new hires don't like Vertx because they used Spring elsewhere...

Talking about new hires and new grads, that leads me to the next reason.

### The job market fostered accidental complexity.

> “Given the demand for software developers today, companies don’t have the leverage to push developers towards a mental model of primarily delivering value to their customers,” Etheridge said. “Getting more engineers to think that way is a challenge.”

Looking back, that's totally true. Looking forward, I don't think that will hold. 

#### Looking back, it holds

But first let's look at why that holds at the time the author wrote that.

Technology became essential to the world. To the point where companies finally realized that without it they couldn't compete. It became more obvious when the companies with the best margin were the technology ones like AWS, Google, Meta. 

It replicated accross to other industries like finance. Where industries that always relied on exceptional customer relationships with their clients, now had to focus into low touch and fee compression. 

Anyway going on with this is just cliché.

##### Increased demand

That change in the world, demanded more engineering folks. And for some time there were not enough. The salaries started rising. But the industries couldn't grow as fast because there were not enough people.

Then more people started graduating and switching careers and the gap started closing. Productivity went up, salaries kept going up as well.

Then, jobs and people kept going up. But certain companies figured the talent wasn't up to their standards. So salaries kept going up but only for certain technologists in certain industries. It became the top (idk 10/20%) companies compeeting for the same talent. Which drove salaries for those people even higher, and created a gap with the rest of tech fellows.

In the meantime jobs like web services in the most famous languages (Java, Python) became a lot cheaper, because there were a lot of people able to do it. And even were outsourced in masses to developing economies. 

But there was that group of fellows in high demand that companies had to compete with. (I'm going to include myself there because new grads in big tech and finance are part of that group, and I'm not going to say anything possitive anyway :)) And suddently we wanted to use flashy technologies, and didn't want to touch 20 year old code that worked way better than newer code, and wanted to create impact on the team by migrating from one technology to the next hottest. 

Sometimes that's necessary, for example moving from Angular to React to be more future proof, but it's hard to justify you want to move from React to Vue for example. But those were what we thought are the easy paths to create impact. And that we would justify as necessary to the business since we need to stay up to date, and be in the edge so that we could attract the top talent. 

(Parentheses: And also not going to lie, doing those things allowed us to do some **RDD**. My ex managing director explained me that sometimes developers want to put weird technologies in places it doesn't really make sense, or it does but it's not needed. All just so that they can build their resume for the next job. RDD stands for Resume Driven Development.)

##### Entitlement

We love to do what we do. To play with new stuff, and see what's out there, and get a feeling for it. And reinvent the wheel sometimes. And be opinionated and criticize software that just works perfectly fine. And work on the newest stuff, and evangelize it. All that's stuff it's pretty **flashy!** And we deserve to do it. That's why we chose this profession, to have fun and exercise it.

But also sometimes the most impactful work for the business is not the flashiest. It's the one about touching the old code and changing one line and suffering through the deployment process, or using excel, or vim into a file, or using power point, or keep the code running in a certain way which works perfectly even if you have the urge to re-write the shit out of it for no reason.

Doing those kinds of work keeps you business aligned. Sometimes it's not flashy, and you code a lot less, but engineering is bigger than coding.

In the past, given the high demand for us, **we could get away with not doing those things.** We could get away with saying you know what: if your company isn't doing the latest or coolest tech, and if you don't let me do experiments and create impact the way I want, and have my own agenda while you pay me the big bucks, and just work half the day, then I'm just going to **leave**. Because Amazon is hiring like crazy, and I come from Microsoft so they'll like me, and they'll pump my salary at the end of the day.

We could complain to our bosses: hey why are not better at pusing back on the Product/Project manager and telling him/her to fuck off while I create an event-driven logging system so that I can see the logs in a UI rather than in a box, because I dont know how to use the linux CLI.

I mean loyalty is dead anyway. The culture is now to move quickly and often to increase compensation (not gonna lie, **it's the only way sometimes**), and the social pressure has turned into celebrating moving often rather than climbing up in stability.

So those factors created an environment where we were entitled to play with the cool stuff to a certain extend, because we could just jump shit otherwise.

#### Looking forward, it won't hold

Now, the tech world is crashing. And there's a lot of us engineers anyway. 

Too many people that were meant to do other things are now in the field becuase of the high pay. And I figure that if the high pay goes away, so will they (and I - because I am a mercenary too).

A tech world crashing in valuation and cash flow means that the salary inflation is going to stop. 

The world is a constant cycle of expansion and contraction until it finds balance. But the balance is lost eventually. Or we never knew we achieved it, and we loss it and start the cycle again.

It's been 22 years of expansion. Expansion of jobs, salaries, ego, importance, university graduates, careers, certification paths, outsourcing, company valuations, VC money... Now it would be natural to have a time of contraction in a few of those in the list.

I'm part of [**Blind**](https://www.teamblind.com/). It's a community you can access only with your corporate email, and it's mostly software engineers in big tech, finance, etc... The way it works is that it is annonymous and you can post polls, and questions, and gossip, and ask for advice. I've used it a couple of times to ask people in the company I was interviewing with whether the salary that company was offering me was good enough or not according to the insiders. It's pretty useful.

Anyway, every day I see posts about Amazon and Microsoft freezing hiring. Google thinking of layoffs, Meta doing the layoffs already. Other companies rescinding the offers to their interns. I recently checked for MSFT jobs in Costa Rica and found a lot less that in May when I last checked.

Anyway lots of gossip on that front. But gossip in Blind has historically became true. 

Harsher times are comming. And it's natural. And I think it's **healthy**! Because it will reduce the number of us in the field that simply joined by proximity and that without the lack of passion wouldn't survive the pace of the field anyway. It might for a second help fight the deflationary pressure the crash will put on salaries. But it's a challenge, a challenge for me and for you who are just starting on this. 

But jobs will be lost, and **so is lost the massive leverage software developers used to have to do whatever the fuck we wanted to do.** 

Now, every company will have to re-evaluate the business impact of their tech force. And only those who are aligned with it will keep their leverage. 

##### Coding don't cut it anymore

I'm reading the book [The Passionate Programmer](https://www.goodreads.com/book/show/6399113-the-passionate-programmer) ([download](https://github.com/media-lib/prog_lib/blob/master/general/Chad%20Fowler%20-%20The%20Passionate%20Programmer,%202nd%20edition.pdf) by Chad Fowler. Let me leave you with 3 pieces of golden text from chapter 1, *Tip 3 - Coding don't cut it anymore*:

> If all they needed was a code robot, it would be easy
to hire someone in another country to do that kind of work. If you
want to stay relevant, you’re going to have to dive into the domain of
the business you’re in.

> [...] this team had something special. Being the keepers
and protectors of our enterprise data, they actually knew the business
domain better than almost any business analyst we had [...] While us geeks were looking at them disdainfully, the business for which they worked recognized a ton of value in them.

> Imagine how much easier life would be if everyone you had to work with really understood how software development works. You wouldn’t have to explain to them why it’s a bad idea to return 30,000
records in a single page on a web application or why they shouldn’t
pass out links to your development server. This is how your business
clients feel about you: Imagine how much easier it would be to work with these programmers if they just understood what I was asking them for without me having to dumb everything down and be so ridiculously specific! And, guess what? It’s the business that pays your salary.

This is the one thing that finance, especially hedge funds do right. Align the technology interests with the profits, over exploratory and over controlled environments that are too technologically mature.

And again, I think it's healthy. I don't know if that should be the actual equilibrium the industry should head towards. But I feel that a little contraction was necessary to humble us down and for us young developers to become less entitled and more ready to dig on any kind of tech our company needs us to. Because we will learn a lot, and if we stand past this hiring freezes and layoffs and etc, we'll probably going to excel at it.


---

If you want to chat about **anything** in this post, please reach out to any of the below social media and hit me with the line:
 
 >It's complex mate!


<p>&nbsp;  </p>

<p align="center">
 [Back to the notes?](/home)
 </p>