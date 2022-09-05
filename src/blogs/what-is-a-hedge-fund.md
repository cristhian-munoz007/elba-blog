## What's a hedge fund

September 5, 2022

A Hedge fund is one of the types of investment funds / money managers that manage large sums of money. What differentiates a hedge fund from the rest, is that it promises to give **uncorrelated** returns with the market.

I work for one of them in London. With offices all over the world.

- [What's a hedge fund](#whats-a-hedge-fund)
  - [How they do it?](#how-they-do-it)
  - [Fees](#fees)
  - [Strategies](#strategies)
    - [Statistical arbitrage](#statistical-arbitrage)
  - [Main components of a Quant Fund](#main-components-of-a-quant-fund)
    - [Research](#research)
      - [Ghost patterns](#ghost-patterns)
    - [Portfolio Management](#portfolio-management)
    - [Technology - Execution](#technology---execution)
  - [How it feels? Just like in Billions in Netflix](#how-it-feels-just-like-in-billions-in-netflix)
  - [Fun facts](#fun-facts)
  - [Rennaisance.](#rennaisance)
  - [Closing thoughts](#closing-thoughts)

If you're a very wealthy individual or company you'll have a lot of money invested in the market in one way or another. Either through stocks/ETFs/bonds/etc, or by your own company being susceptible to market movements. You're happy to play the markets and ride and die with them, but maybe there's another set of money you don't want to be exposed to the same risks. You'd use a hedge fund to diversify your investments in that case.

For example, when the COVID crisis of 2020 hit all markets went negative by a large percentage. Most funds are correlated with the market because of their business and what they stand by. Since hedge funds are uncorrelated, you would hope they won't be affected regardless of what happens in the market. So if all your positions are down 25%, maybe your positions in the hedge fund will be up 2%?

So a hedge fund **used** to be understood as a way to protect your money.

Now, it's more of a fund where investors end up putting their money in the hope that they'll beat the market and get outsized returns (15% on a bull market, %20+ on bear market)

### How they do it?

Depends on the strategy of the hedge fund. But they usually combine four main things: Long, Short, Leverage, Hedging.

1. **Long**. When you go long on a stock, you're expecting the value to go up. Warren Buffet takes *long only* positions as part of his Value Investing strategy.
2. **Short**. When you short a stock, you're hoping the value to go down actually. Did you see the Gamestop saga last year? Basically, Melvin Capital (a short-only hedge fund) was betting on Gamestop to lose value because they thought it was a shit business.
3. **Leverage**. This means using borrowed money to increase the size of your positions. Let's say you know Coca Cola will go up 2%. You only have $100 to put in, so your profit will be $2 only. But if you borrow $400 from your friends, you could put $500, make $10 and return the 400 back to your friends. You turned a 2% profit into a 10% profit.
4. **Hedging**. Hedging is a way to structure positions and trades so that you minimize your losses if you lose. 

There are funds that are leveraged up to 15x in their positions. In simple terms, they're taking 15 times the risk they could've initially.

That doesn't sound like protecting the investors money right?

Yes and No.

Most funds hedge each position using another position to minimize risk. For example:

Let's say I buy $10 million worth of Apple in January, and the price starts decreasing but I want to hold my position because I really believe in Apple. In february, I can buy an option to short Apple for $5 million (An option gives me the **ability** to execute a trade on a particular day, **only if I want to**). 

Therefore, if the price of apple keeps falling and my initial $10 million investment is at a further loss, simultaneosuly my $5 million short position will be winning!

And if the price of Apple recovers, then I just don't have to execute the option.

That way I always either win, or win and lose but by much smaller ammounts. 

This is **hedging**, and it's supposed to be the bread a butter of a hedge fund, and partially the way they can tell investors they protect their capital.


### Fees

They charge a lot in comparison. There are many fee structures, but the typical structure is called **2/20**. A charge of 2% over the capital managed, and 20% over the profits above a threshold. Example: 

A hedge fund manages $10 billion for their investors, that year the performance was 15%, and the threshold is 4%. 

The 2% over capital managed will be a fee of `$10 billion * 2% = $200 million`, and the performance fee will be:

`$10 billion * (15-4)% performance above threshold * 20% = $220 million `

Total fees for the year: `$200m + $220m = $420 billion`

### Strategies

A strategy is like the philosophy a fund will follow to try and make money. It depends on the skills and expertise of the people. 

There are many strategies to be honest, and Investopedia will tell you more [here](https://www.investopedia.com/articles/investing/111313/multiple-strategies-hedge-funds.asp)

I'll chat a bit about the one we use at [WorldQuant](https://worldquant.com/): Statistical Arbitrage, or StatArb.

#### Statistical arbitrage

It's a combination of long/short, market neutral, and quant. 

**We are quants**. The algorithms tell us the positions, and they deploy the positions as well. There's no one going around studying companies like Buffet would do. We use massive amounts of data, mathematics, and computing power.

We take thousands of positions a day, we trade thousands of names, and hundreds of millions of dollars in a single day.

I can't give you our numbers, but if we had $20 billion to manage, and we decide to go with 4x leverage, then we'd aim to reach $40 billion in long positions, and $40 billion in short positions at the same time.

Effectively we would be taking $80 billion worth of positions in the market, half betting things go up, and the other half betting things go down.

The idea of having the exact same amount for long and short is to be **market neutral**. No matter what happens in the market we're covered. Example:

I go long $10m on Apple, and also short $10m on Facebook. If anything happens in the tech industry and the whole tech market looses value, then my Apple position will hurt, but my Facebook one will make me money. I don't care about the tech market, all I care about is whether Apple's price swings more or less than Facebook's price.

### Main components of a Quant Fund

A quantitative fund will require 3 main roles to be covered: research, portfolio creation, and the tech to execute fast.

#### Research

**Alpha** stands for a piece of information that makes you money. Let's say the data tells you that whenever it rains more than usual in Paris you should short the restaurants industry because people don't go out as much and the companies will miss their expected earnings. The alpha is the correlation between rain and restaurants.

This can make you money for a while, **until it doesn't.** The competition is fierce, and it won't be long before another competitor fund figures this alpha out as well. As soon as enough people know about this opportunity, the opportunity then disappears. 

So the researchers need to be looking for more alphas constantly because they expire quickly!

##### Ghost patterns

This is a funny one. A ghost pattern is basically an alpha nobody understands. 

The data is telling you how to make money, yet you're there wondering: *what the hell? why?* Have you ever heard: *correlation doesn't imply causation*? Well it's similar if not the same. 

These are actually the preferred sources of alpha. Reason being that the hardest it is too make sense of them, the more likely no other competitor will find them too.

#### Portfolio Management

An alpha gives you an edge, but Portfolio Managers need to transform that edge into positions. They bring the right combination of alpha, hedges, and sizes so that every day we have a portfolio that is market neutral and it's making money based on some edge information.

#### Technology - Execution

This scientific and quantitative approach leads us to having tons of positions, and having to trade tons of money a day. And trading itself is expensive! in fees. All that has to happen quickly enough.

The amount of positions we have and the amount of trading we do can't be handled by humans.
Besides that, execution has to be sub second, otherwise we miss opportunities or the trade becomes more expensive. 

Plus there need to be an infrastructure that makes research, and backtesting, and data available and able to scale. That's our business.


### How it feels? Just like in Billions in Netflix

All I'm gonna say is that it's very intellectual. It feels like a library. There's not all that noise of traders in the background, and bosses doing politics and talking about projects that will never get done. 

Most people have PhDs in physics, astrophysics, mathematics, ... and they're insanely smart and data driven. Something like 80% of the whole company codes in some shape or form.

I wish I was closely as smart as some of these guys, but at least I'm sitting near them.

My team is in the execution side, but we actually do a lot of things: Infra, Data Analysis, UIs, Portfolio Management (we have our own money to manage), Transaction Cost Analysis. The team is a mix of all kinds of profiles. Super diverse and interdisciplinary.

In my line of command, I'm just three people away from the CEO, who's a billionaire. 

Have you every watched **Billions** in Netflix? We're **Axe Capital**. 

### Fun facts

1. **The notice period and non-compete agreements.** Hedge funds make you give notice periods of at least 3 months, with a non-compete of 6 months. 

    What that means, is that you need to tell them 3 months in advance of when you're going to leave. During those three months, they don't let you work at all. But they pay you. 

    And for 6 months you can't work with a competitor. 

    So it's like a 6 month holiday with 3 months paid.

    The idea is that you don't take any intellectual property or algorithms outside.

    For portfolio managers, it's not 3 and 6, but 6 and 12. Or even 12 and 24.

2. **The compensation.** Compensation is higher than in big investment banks, and bonuses are huge for portfolio managers. I know people whose base salary is £150k, but their bonus will be around $10 million.

3. **Funds have to be the right size.** It's not always a good business for the fund to simply grow in size. Meaning it's better to stay small and product great returns, that to grow and produce average or low returns.

4. **Most funds fail.** The fail rate of hedge funds is just as much as those of startups.

5. **Performance is an issue for most funds**. Most funds are too expensive (the 2% fee) and take too much risk to feel like it's worth vs a single ETF or an Asset Manager.

6. **The amount of money in this industry is insane.** The heads of the top funds are billionaires themselves. It's so much money that some funds even close to outside investors.

Ken Griffin from Citadel just bough a copy of the U.S. constitution for 43 million just cause his son asked him to ... [read here](https://www.bloomberg.com/news/articles/2021-12-09/ken-griffin-s-son-told-him-you-have-to-buy-the-constitution)

### Rennaisance.

I added this subsection merely if you're curious about a sucess story. 

Rennaisance Technologies is the best performing money manager in the world. It's one of those funds that it's closed to investors, and it only manages the employees money. In other words, the employees are so rich, there's no need to manage more capital and charge fees.

James Simons is a pretty inspiring person, specially if you like science and mathematics. I totally recommend a book on his fund and story: [The Man Who Solved the Market](https://www.goodreads.com/book/show/43889703-the-man-who-solved-the-market) 

But for a quick primer watch [this](https://www.youtube.com/watch?v=lji-jNsXmAM) on youtube. 

There are other extremely sucessful funds, which you'll see in that youtube channel too. The best ones are: Citadel, Jane Street, DE Shaw, Two Sigma, HRT, and Millenium (parent of WorldQuant) of course :)

### Closing thoughts

Anyway, that's my world now. As a finance person it's great, but as an engineer it's even better. 

That feeling that everyone understands and shares code, yet they're main job is to be mathematical geniuses... agh. fuck. 

Code is money. Literally.

---

If you want to chat about **anything** in this post, please reach out to any of the below social media and hit me with the line:
 
 >I see a pattern


<p>&nbsp;  </p>

<p align="center">
 [Back to the notes?](/home)
 </p>