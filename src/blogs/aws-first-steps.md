## AWS (1/2): First Steps

August 29, 2022

The cloud is inevitable, much like Thanos and Max Verstappen. 

I have 4 years of professional career, yet unfortunately never had the chance to work with cloud. If you're a developer in Costa Rica, by the nature of the companies there you'll most likely need to know about these things if you don't already do. 

This post is about what I did to get acquinted with the cloud, and my thoughts on what this whole thing means for developers and companies alike. Use this as an intro for your own journey into learning about it.


- [AWS (1/2): First Steps](#aws-12-first-steps)
  - [How to jump into it (Split this into generally and what I did)](#how-to-jump-into-it-split-this-into-generally-and-what-i-did)
  - [Basic cloud architecture for a static site](#basic-cloud-architecture-for-a-static-site)
  - [Certification path](#certification-path)
  - [Little cheat](#little-cheat)
  - [Closing thoughts](#closing-thoughts)

---

I've worked in investment banks and hedge funds, where the cloud is not really a massive thing partly because of the structure of the businesses, and partly because of the slow tech dinosaurs they are.

Was always curious about it, and I mean, it sounded like the kind of thing that made tons of sense to business people, not necesarily to engineers. And since I like both business and tech, maybe I should've paid more attention earlier. Jokes on me.

I met a guy had amazing career in the best investment bank in the world and was earning the big bucks in his early 40s. And then he literally told me this one day at the office (circa 2020): 

> I always hear about this thing called git. But I don't know what it is...

> --<cite> A VP at Goldman Sachs</cite>

Yeah, that's just... idk... you make your conclussions. Obviously most developers at GS know what git is, but this guy had been working in Slang all his life. How can somenone not know GIT!? Well, as a young developer with 4 years in, I kind of felt similar by not having any real experience with the cloud, and worse than anything, such poor awareness.

### How to jump into it (Split this into generally and what I did)

Amazon AWS is probably the most famous and the most impressive. I knew some basic stuff because of Software Design interview questions. But if you've ever had one of those interviews, you know you can go ahead asuming everything is a black box :) 

There are tons of courses and certifications, and etc. But I went ahead and used Educative.io where they have this little course called: ["The Good Parts of AWS: Cutting through the Clutter"](https://www.educative.io/courses/good-parts-of-aws). Basically a few AWS engineers telling you like: 

>Hey there are these services, for these purposes, for which honestly, you don't need to go more research trying to find the best option.

>Because these products are either the best option, or the default one for everybody, and the default for everybody is more often than not the best one for almost everybody. 

>So don't waste time.

Hell yeah, super quick way of knowing what's up in Cloud regarding compute, storage, queues, security, content delivery, and media streaming. If you trust them, which I did hehe, it's a holy grail for lazy people.


### Basic cloud architecture for a static site

The course I describe above actually has a practical component where you end up with a final "Hello World" site hosted in the cloud. I took the opportunity and actually **built this whole blog** literally just to feel that I was building something more useful than just following a tutorial. So that instead of deploying their application, I could deploy my damn blog. #Entrepreneur #WorkForYourself #RobertKiyosaki 

Here's the final architecture, which ends up being way more complete and extensive than I would have expected. But it includes the following technologies:

1. **CloudFormation**: creates and deploys your infrastructure based on some config file. (IAC like in K8s). It's also used in combination with all the below to create three multiple environments like staging, and production.
2. **CodeBuild** and **CodePipeline**: for automatic CI/CD of your code (like a Gitlab)
3. **EC2**: 2 instances for compute (the equivalent of the physical boxes)
4. **ELB**: load balancing between your 2 instances (like NGINX)
5. **Auto Scaling**: this is part of EC2, but basically how to configure for automatic scaling (K8s has feautures that allow for max and min compute power in the clusters).
6. **Route 53**: DNS server to map your domain (kind of like NGINX but loads simpler)
7. **AWS Certificate Manager**: create certificates to go from HTTP to HTTPS. 
8. **NAT Gateway**: Network security that would force any request to the EC2 instances to go throught ELB (which has security thanks to the certificates)

Looks something like this:

<iframe src="https://drive.google.com/file/d/143eB6vU6l2luxY4Pa12HAlUjf7nkcjDF/preview" width="550" height="420" allow="autoplay"></iframe>

Anyway, totally recommend the course. Or doing something similar that's better than just a tutorial or the whole book of AWS selling you their stuff and you getting certified.

The main reason is because we're software engineers. And we know options are there, and will always be. But what we should know about is what the default options are like and the basic knowledge so that we can expand when needed. Otherwise, it'd be the same mistake we make when we're too eager to learn and we focus on having a super long recipe of technologies in own resume.

### Certification path

Amazon has a cool [certification path](https://aws.amazon.com/certification/?trk=dc557659-52ab-4a28-b2b8-0b1fb90235db&sc_channel=ps&sc_campaign=acquisition&sc_medium=GC-TC-DIG-P|PS-GO|Brand|Desktop|AW|Training%20and%20Certification|Certification|UKIR|EN|Text|xx|SEM|PMO21-12347&s_kwcid=AL!4422!3!465713397254!e!!g!!aws%20certification%20path&ef_id=EAIaIQobChMI37GVgN37-QIVtoBQBh1SnQ8xEAAYASAAEgILb_D_BwE:G:s&s_kwcid=AL!4422!3!465713397254!e!!g!!aws%20certification%20path) that teaches you everything you need to know about the services, including the billing. Technically you could become a consultant after doing a couple. I don't know who's going to hire you just like that, but maybe your company will pay more. 

I think I'll do the *Foundational* for some **Certified** general awareness. And maybe even then jumping to *Associate* (requires a year of experience using AWS Cloud) in the *Solutions Architect* or *Developer* track.

Anything else requires some work experience in the field to get the most out of them.

### Little cheat

There's a little cheat here, and **an advice** as well. Always do the easiest and simplest as long as your product is staying to its core. 

I **did not deploy this blog in AWS** at the end jeje. It was a bit cumbersome and too feature full. Always go lightweight, to avoid being opinionated unncesarily. Any python developer will relate to this one: 

>> If you can go for FastAPI or Flask then go for them instead of a fully fledged heavy solution like Django. 

And if you're a seassoned developer having to deal with people jumping into trends left and right you'd know the following:

>> Always go for the monolith if you can! Most of the times there's no need for a micro services architechture no matter how nice that might sound.

This site is a static notebook with no DBs, passwords, internal systems, blah blah. So no real need for load balancing, and network security and all that jazz. And even if I ever become famous and loads of people try to hit this... I might need some more compute or network bandwidth guaranteed, but never more complexity (maybe some load balancing). 

Anyway, the tutorial was too complete, and I didn't want to pollute the repo with loads of lines that I'll never touch again, and worse than anything!: **might cost me money!**

I used another vendor called: [Netlify](https://app.netlify.com/). It took me 5 minutes to deploy the webiste. 

They connect to your github repo, pull the code, run all the necessary npm orchestra, and deploy to an URL. 

They also configure your DNS, so that you can change the address they give you (something like: [https://main--celadon-crisp-f3c89f.netlify.app/](https://main--celadon-crisp-f3c89f.netlify.app/)) to a domain you own. 

I even was able to buy the domain directly in there because I didn't have one. Searched for it, paid for it, and they configured everything automatically. It took me like an hour to choose which DNS domain I wanted to buy because **elba.tech** was taken already and **elba.io** was too expensive. Lol

Every time I push code into my main branch in github, they automatically re-deploy. **It takes 3 minutes** from when I hit push, to when I can see the changes reflected in [elba.fyi](https://www.elba.fyi). That's glorious bro.

Obviously there was a benefit to doing the whole thing and learning more and being hooked with AWS, but I've learnt that doing tutorials and things like that don't really stick with me. Also, after a few years coding you build the confidence that you'll figure it out anyway. 

### Closing thoughts

The cloud is very cool, and it offers way too much. I mean, Amazon had an amazing technology group, and lots of infrastructure at the most perfomant level.

And now they allow you to contract them to do it for you. Sounds like a good deal in practice. 

This is my first time playing with the cloud, but it did leave me with some impressions which you can read [here](/blog?post=aws-first-insights).

___


If you want to chat about **anything** in this post, please reach out to any of the below social media and hit me with the line:
 
 > I have a secret