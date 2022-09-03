## AWS (2/2): First Insights

August 29, 2022

I'm so late to the party that I expect you to find all of this obvious, then ... rest assured I'm aware of that, and sorry for your time loss. Anyway, below is a quick analysis/chitchat on how businesses are structured, the commoditization of engineers, how it will affect our priorities as software teams. To the point in which some of the [hard truths I hold dear in my short career so far](/blog?post=things-i-learnt-swe) will be challenged.


- [AWS (2/2): First Insights](#aws-22-first-insights)
  - [Zero Cost for a small business](#zero-cost-for-a-small-business)
  - [What about big businesses](#what-about-big-businesses)
    - [What's your real value add?](#whats-your-real-value-add)
    - [Migration shouldn't be that hard](#migration-shouldnt-be-that-hard)
    - [Multi-cloud strategy](#multi-cloud-strategy)
    - [When is the cloud not for you?](#when-is-the-cloud-not-for-you)
  - [What does this mean for developers?](#what-does-this-mean-for-developers)
    - [Cost over mantainability](#cost-over-mantainability)
    - [We're competing against these guys](#were-competing-against-these-guys)
- [Leaving thoughts](#leaving-thoughts)


### Zero Cost for a small business

The costs are absurdly low. I don't mean to drill on the costs too much but just to give an idea: let's say you have an application for filling taxes for medical clinics in Costa Rica. For which you can change $100 a month.

You have the application hosted in EC2, and using let's say dynamo DB tables. And you manage to get 5 users in the first year.

A user in the clinic visits the page at most 5 times in the day. And if well structured that means 40-60 reads of the database during the day.

Let's calculate those reads:

`5 users * 60reads * 360 days = 10,800 reads a year`

10.8k reads a year, and you know how much a million reads cost? $0.25! You have almost 990k reads left before you have to pay additionally. That's 99 years if your business doesn't grow (sad af :( ). All while you're taking $500 a month in revenue from those clinics.

Obviously you have to add the rest of the costs (like EC2, API gateway, some lamdas, Cognito, etc...) but the scale of things gives you an idea. 

### What about big businesses

I skipped the medium size businesses cause I have nothing insightful to say. However, I've been working at big firms (first one was 35k employees, and now 800+), and a few things come to mind:

#### What's your real value add?

Dropbox recently migrated into using Amazon S3. What's Amazon S3? Storage.
Really bro? A company that sells cloud storage to users simply went and used Amazon under the hood.

Take that as a positive or a negative. But it really shows that companies are really focusing on having to sell something way beyond the technology, but also how to access it. We've all heard that cliché example from that marketing professor that pretty much goes like this:

>> What does Starbucks sell? (10 seconds of silence) Starbucks doesn't sell coffee, it sells THE CONVENIENCE!

>> What's McDonals' business? (the burgers ... ?) NO! The Real Estate!

Every time you see exclamation marks try to read that thinking of either a) A very proud middle aged white man. Or b) a multilevel marketing lad from ZRII selling you some eye opening stuff (been there done that).

Anyway, whether Cloud affects your business or not, if you have any kind of tech inhouse, it will as well. Cause if you don't move, you're gonna have three problems:

1. More efficient competitors.
2. Highly specialized people maintaining legacy code, yet producing no progress and charging very high salaries.
3. Trouble hiring, cause who in their god damn mind would like to work in a company where they have to stay on Saturdays doing Business Continuity Plans about turning on and off some machines and ensure they actually come up.

#### Migration shouldn't be that hard

It's worth noting that **most companies run their own version of the cloud anyway**. They have lots of infra and servers and teams built around making it seamless for other teams of developers to request more machines, more resources, upgrades, manage infra through Infrastructure as Code, etc...

Your application is scaling? Great, write a ticket with your new K8s requirements and someone in the infra team will approve and it'll get automatically deployed.

So basically for most of us, that layer of abstraction has always been there and will never go away. Similarly, the jobs of those infra people are not going away either. They'll just evolve from managing inhouse infrastructure throught terraform, to managing cloud infrastructure by whatever console the provider gives.

One tip tho. And I borrow this from James Cowling's interview in the [StaffEng](https://staffeng.com/) podcast:

> If you're an infrastructure team in charge of storage. Don't name your team after your product. For example don't name it Titan if that's the name of the database you manage. Because even if it helps product branding and etc... You'll have a tough time if your team then moves from Titan to Amazon S3 and then how are you going to name your team? So just call it "Storage" from the beginning.

> -- <cite> Paraphrased from James Cowling, ex-Dropbox Staff Engineer</cite>

#### Multi-cloud strategy

In my previous company, we brought a lot of executives from AWS as technology leaders. I assume the idea was for them to help us push cloud as the technology strategy. Yet, we still got a contract that was almost as big with Google Cloud, their main competitor.

I can think of two reasons. One, to make it easier for developers to choose what they work better with, and two: risk. Ever heard of never put all your eggs in the same basket?

In the past AWS has been down for more than 2 hours. Once in [2011](https://aws.amazon.com/message/65648/), and I think sometime last year [too](https://www.theguardian.com/technology/2021/dec/15/amazon-down-web-services-outage-netflix-slack-ring-doordash-latest). And what happened when that's the case? Netflix is down, Coinbase is down, Slack is down, and the list goes on...

We can't afford that. Not in trading. And even if we could, we now can't because there is a precedence and we know better. So we have to act better. And so the strategy is then going multi cloud.

Which raises a very interesting question. Can smaller niched providers bundle up together in order to provide a distributed fail-safe service that can compete against those of more mature companies like AWS's or GCP's?

<p align="center">
![cloudVendors](https://www.avenga.com/wp-content/uploads/2021/05/Avenga-magazine-Cloud-service-providers-comparison.png)

*[Top Cloud Service Providers: A Quick Comparison](https://www.avenga.com/magazine/top-cloud-service-providers/)*
</p>

#### When is the cloud not for you?

There are various reasons as to why the cloud is not your best option. However, most likely none of these really apply to you. And even if the cloud is not 100% the best option, or 90%, then once everybody is in the cloud and the cloud is the default, then remeber the rule above?:

>> The default option is more often than not the best option overall. 

But anyway, some reasons as to why it might not be the best for you:

1. **Speed**. If you're business and technology depends on too many services talking to each other throught REST then it might be a pain. Or if the cloud provider doesn't have any nearby big servers in the geography you operate in. 

1. **Speed again**. I can't picture a systematic market making software deploying strategies at the sub 100ms speed need into the exchanges when there's cloud security infrastructure in the middle. I mean these guys struggle hard enough having to write in C, Rust, and No-GC Java just to gain a few seconds, for tech infra to add additional network latency. 

2. **Security**. If you're part of a secretive hedge fund, like I am, then you don't want anybody to know anything about your trades/work/data/perfomance/etc. (It's so crazy that hedge funds would rather pay you 6 months of salary in which you don't do/see anything before you go to the next shop. Basically so that the fund evolves without you know knowing how. After 6 months what you knew probably isn't useful anymore. This industry is crazy dude.)

3. **Integrations with products you use**. For example we use a proprietary database technology that is so much better than SQL for our needs. But it doesn't integrate well with Google Cloud when it comes to users, permisssions, passwords, etc. So we dumped the Cloud idea because the Database provides us way more value.

4. **Hardware requirements**. The cloud can provide you with very powerful machines, but if your business requires something extraordinary then Idk... 

5. **You can't deal with lack of control**. This is both a pro and a con of the cloud. Con: you can't control loads of things. Pro: (and this is the Costa Rican in me talking) You can't control things, but you got someone to blame so who cares lol! 

### What does this mean for developers?

#### Cost over mantainability

The way we code, the way we interview, the way we structure our deployments, our environments, everything is changing. Everytime you go to an interview, you're asked about algorithmic perfomance and data structures. The emphasis is always optimizing execution and storage for the sake of scalability and performance.

Which is good, and we should always be wary of that.

However, when you go into the actual job, you realize your boss doesn't prioritize that. What your boss prioritizes (and I do too) is the following:

>> Write clear code that anybody can understand.

 What that means is not only nice looking code that anybody can undestand, but also code that if you're on holidays anybody else can fix if things go South. That if they fire you or you desire to leave, it's easy to maintain and thus replace you with the next engineer. 

 Maintainability over everything almost always. That keeps a team in good spirit, attracts talent (even if it sounds like you're less special), and it's most of the times harder to do than to actually write the most efficient code. 

 But those days might be gone now. Cause every second in the cloud costs money, every dev/uat environment duplicates the cost of production, every failed pipeline you run will cost money. Basically if you're like me and learn by lots of trial and error before much scientific or theorical approach :( then we'll be expensive guys if we're fully hosted.

 My flatmate is a Finance Director at a Startup since a couple of months ago, and he's coming after the engineering costs of AWS. Believe me this guy is a HAWK! and even after spending like 2 years doing lots of meditation and prioritizing his life a lot differently. We've been hypothesizing together about why the compute costs are so high in his startup (Series C already), so I've joined that side and we both have the same intellectual stimulus.

 If you're an engineer trying to deliver value and getting promoted from Senior to Staff, probably worth taking a look at this before your finance guy comes and takes all the credit for the idea :)

 Having the wrong engineering approach to the cloud can really make or do for a tech company now. It can be a differentiator in profits, which after this last tech crash is important again? (inshallah). Careers will be made on cutting costs and refactoring cloud services in all these kinds of places. 

#### We're competing against these guys

It's shocking the amount of services that these guys provide. And how well they do it. 

I'd like to think of myself as a generalist, and a generalist can be tempted to feel like doing infra (Kafka, K8s, Authentication, ...) inhouse is a great oportunity to build something, and just learn tons. But just like with most else, this is more and more of a lost battle for generalists. 

My brother's company is migrating their Data Lake stack into the cloud. I don't remember the exact details, nor that I actually want to share them ;) but he was telling me how long it took for AWS to do a full restore of a database backup vs. how long it took for their own internal scripts do it. It was in the scale of minutes vs. days.

So imagine, every piece of your work is in competition with what the guys in AWS can do. Do you really think you can beat 30-40 great Amazon engineers focusing just in this?

There's an argument that you probably can do many more different things as a **Data Engineer**, but for most big companies where data is so sentive then they'll probably invest. You know what they say:

> Bring generalists to build, and then the specialists to scale.

But overall is hard to compete against these guys when it comes to SRE (site reliability engineering) and SWE (software engineering) as well. 

As a *SWE*, If you're ever been in a system desing interview you probably know about the [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem). Basically life telling you hey you need to make tradeoffs, and this is not some *"hey we're just being realistic here"*, this is a *by the laws of mathematics, you gotta chose who to f marry kill*.

<p align="center">
![capTheorem](https://miro.medium.com/max/473/1*rxTP-_STj-QRDt1X9fdVlA.png)

*[CAP Theorem by Vivek Singh](https://medium.com/system-design-blog/cap-theorem-1455ce5fc0a0)*
</p>

And here's one that helps understand a bit better what the tradoff mean:

<p align="center">
![capTheorem](https://jvns.ca/images/drawings/cap.png)

*[A Critique of the CAP Theorem by Julia Evans](https://jvns.ca/blog/2016/11/19/a-critique-of-the-cap-theorem/)*
</p>


I wouldn't be surprised if these guys' economies of scale soon enough allow us to break the *practical* (not theoretical) barriers of the theorem. Like they have so many servers and so much compute power that they're in memory solutions are good enough to guarante correctness or partition tolerance almost always (99.9999% of the times). And then puff, we can drop the C or the P from the theorem. 

In your system designs (which I plan to write loads on later) you're always facing not only existential trade offs like the above. But when you get to real life you go and face also simplicity, SDLC, cost, ... tradeoffs. Which make you wonder more often than not: Do I really need this? Do I really need correctness? Do I really need those extra 300ms? Can I live with this bug? Do I really need to always be running somehow for my clients?

As a **SWE/SRE**, each of those questions weight on the 5 9's goal. And how much effort you put. And even if you decide to go for 5 9's, bet you can't lol. But guess who can?

<p align="center">
![Five9sbyAWS](https://d2908q01vomqb2.cloudfront.net/9e6a55b6b4563e652a23be9d623ca5055c356940/2021/01/05/Achieving-five-nines-in-the-cloud.jpg)

*[Achieving “five nines” in the cloud for justice and public safety](https://aws.amazon.com/blogs/publicsector/achieving-five-nines-cloud-justice-public-safety/)*
</p>


So if you're responsible for some infrastructure or any software architecture in your company. Now you're competing against a comercial *benchmark*. There's not more easy fooling of the business analyts when we tell them: *hey you know, our job is hard*, and basically do no effort to pump the numbers up. Can you keep the shop running for as long as Amazon would and for a similar price?

So here's something to think about: We as software engineers provide a lot of value to organizations by trying to optimize for the right tradeoffs. That's what makes us engineers and give us seniority over simply being developers. Amazon AWS is kind of taking those tradeoffs away. Does that affect your job security or does it empower you to make your life easier?


## Leaving thoughts

If you're a friend of mine in Costa Rica, you probably work in Cloud already, either support or consulting, or any of that sort. You know tons more than I do, and you probably are seeing all of this in the first row. And great for you!

If not, better start building some awareness on it, cause most of the tech jobs in Costa Rica are heading towards needing some bits of cloud knowledge. The kind of projects that Gorilla, Smash, GFT, and all those contractor companies do usually doesn't fit in either of the 4 reasons listed above as to why not use the cloud. These guys are doing the devops, building apps, doing front end for SaaS kind of projects... and those are perfect candidates for cloud hosting given that they're lots of fun and critical, but not that deep. 

To be fair, I just interviewed with a couple of companies in Costa Rica, and I have a feeling that my Cloud inexperience costed me a senior position. I write about that [here](/blog?post=interviewing-in-costarica).

Cloud is inevitable, much like Thanos and Max Verstappen. 
 
 --- 

If you want to chat about **anything** in this post, please reach out to any of the below social media and hit me with the line:
 
 >I have a secret


