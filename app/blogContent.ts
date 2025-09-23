export const blogContent = [
  {
    id: "startup-to-scaleup",
    published: "09/19/2025",
    title: "From Startup Days to Scale-Up Life",
    description:
      "My experience going from start up land to big enterprise business.",
    image: "/techcompany.jpg",
    blogImage: "/techcompany.jpg",
    readTime: 5,
    content: `
        <blockquote style="font-size: 1.5rem; font-weight: bold;">From Startup to Scale-Up</blockquote>
<p>Changing careers is terrifying. You leave the comfort of what you know for the chaos of the unknown. For me, that leap took me from coding bootcamp to building software at scale—and it’s been the wildest ride of my life.</p>
<br/>

<blockquote style="font-size: 1.5rem; font-weight: bold;">Healthcare Download</blockquote>
<p>My first stop as a software engineer was at a company called <strong>Healthcare Download</strong>, a team that took a chance on a kid fresh out of bootcamp.</p>
<p>There, I learned the fundamentals—building small features, deploying code, testing, and shipping changes into production. The ecosystem was simple: a few repos, a few junior devs, and straightforward processes. I felt like I was thriving.</p>
<p>After a year, I left with the confidence that I could jump into any environment and immediately be useful. Or so I thought.</p>
<br/>

<blockquote style="font-size: 1.5rem; font-weight: bold;">Strongmind</blockquote>
<p>Next, I joined <strong>Strongmind</strong>, an edtech company filled with brilliant engineers. My first day delivered the biggest case of imposter syndrome I’d ever felt.</p>
<p>I was greeted with a diagram of the company’s entire ecosystem, which included:</p>
<br/>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Ruby on Rails repos</li>
  <li>Python repos</li>
  <li>C# and .NET repos</li>
  <li>Event-driven architecture</li>
  <li>AWS and Azure</li>
  <li>Adapters everywhere</li>
  <li>Microservices</li>
  <li>CI/CD pipelines</li>
  <li>DLQs</li>
  <li>And arrows crisscrossing everything like a spiderweb</li>
</ul>
<br/>
<p>It was beautiful. And it was terrifying. I knew I was in for a ride.</p>
<br/>

<blockquote style="font-size: 1.5rem; font-weight: bold;">Trial by Fire</blockquote>
<p>On one hand, I could feel this place was going to force me to grow in ways I hadn’t imagined. On the other hand, my confidence had just hit a new low.</p>

<p>That first month, I leaned hard on my teammates, asked countless questions, and put in long nights. Slowly, I started to feel more comfortable with Rails—setting up controller actions, working with views, and getting familiar with the framework itself.</p>

<p>But even as my Rails skills grew, my understanding of our overall systems was still painfully lacking. The repos, the integrations, the moving parts—it all felt like a massive puzzle I had only just begun to piece together.</p>

<p>At the same time, I was learning more than just code—I was learning processes, standups, planning, communication, team dynamics, and even how to hold my own during lunch conversations. The learning curve was brutal, but I refused to let it beat me.</p>
<br />

<blockquote style="font-size: 1.5rem; font-weight: bold;">Fast Forward</blockquote>
<p>Eight months later, I had my full-circle moment: I was asked to explain the user flow through our ecosystem to the entire engineering team.</p>
<p>If you’d told me on my first day that this would happen, I would’ve laughed in your face.</p>
<br/>

<blockquote style="font-size: 1.5rem; font-weight: bold;">Looking Back</blockquote>
<p>The leap from startup to scale-up has been the hardest and most rewarding experience of my career so far.</p>
<p>If you’re standing on the edge of a career change, nervous about what’s on the other side—take the leap. You’ll be amazed at what you’re capable of.</p>
        `,
  },
  {
    id: "fantasy-football",
    published: "07/17/2024",
    title: "Stuart AI",
    description:
      "Dive into how I recreated the Sleeper Fantasy App dashboard, pulling in real-time data from users' teams.",
    image: "/footballBlog.jpg",
    blogImage: "/footballBlogPost.jpg",
    readTime: 5,
    content: `
        <blockquote style="font-size: 1.5rem; font-weight: bold;">Fantasy Football & AI</blockquote>
            <p>Fantasy football is one of the most exciting and stressful things to participate in year after year. It's also one of the most rewarding experiences if you're a fan of the sport. However, keeping up with every single player's stats year after year can get a little overwhelming. That's where the idea to combine fantasy football and AI come into play. Imagine an app that that can give you expert analysis... like Stuart Scott, as well as AI breakdowns for in depth analysis.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Stuart AI</blockquote>
            <p>Stuart AI is a fantasy football app that has access to every single play for every single player that dates all the way back to 1999. It integrates with your Sleeper Fantasy account and pulls in real-time data from your team's stats. the long term goal with this is to have a one stop shop for all of your fantasy football needs. League dues, payouts, AI analytics, and so much more. In its current state you're able to see your league history including playoffs, able to type in two players and get AI insights for their historical stats, as well as get on the early waitlist for the full list of AI features.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Player Compare</blockquote>
            <p>One of the biggest struggles week in and week out is figuring out who to start and who to bench in your fantasy lineups. A LOT of analysis goes into this, and if you're not familiar with fantasy football, let me spell out how complex of a decision just deciding between two players can be. Let's take for example these two players, Brock Purdy and Jordan Love. They're quaterbacks for their respective teams. Some things you would want to consider when deciding who to start and who to bench would be the following:</p>
            <br/>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>What are their current season stats?</li>
                <li>What are their previous season stats against this opponent?</li>
                <li>Are they healthy?</li>
                <li>Are their receivers healthy?</li>
                <li>Is their running back healthy?</li>
                <li>Are they dealing with any Oline injuries/issues?</li>
                <li>Is there any news that would sway my decision one way or the other?</li>
                <li>Is the weather going to be a factor?</li>
                <li>Does one have more rushing upside than the other?</li>
                <li>Are they playing against a really good defense?</li>
                <li>Etc.</li>
            </ul>
            <br/>
            <p>
            Now all of this is just for one position, for one week. Can you imagine the effort required to do this for every position in your fantasy team for every week? It's a lot to keep up with. Stuart AI gathers all the data for you, combines it into a nice prompt to pass to an AI model and then returns the results. Not to mention it presents nice visual charts/graphs to help you make educated decisions if you don't want to fully rely on the AI. Also to help reduce calls and costs, we use Redis to cache data frequently and improve load times throughout the entire application. Users can currently make 10 calls per day to the API (gpt4.0-mini) and we're currently working on implementing tiered pricing structures to make it customizable for users.
            </p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Parlai</blockquote>
            <p>All of this fantasy football frenzy got us thinking that we can not only create AI player comparisons, but since we're gathering all of the player info anyway, wouldn't it be cool to see if we could help users with their sports bets as well? Currently users have the ability to check live prop odds for NFL players and see if it's wise to bet the over or under on those prop bets. In the future we plan to also allow users to create parlays to see which bets make sense and which don't.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">The Tech</blockquote>
            <p>Building this has given me a chance to really learn the ins and outs of AI SDKs, ShadCN, NextJS, Redis, Postgres and so many more design systems. It's given me a chance to collaborate with industry experts and learn from them. I'm really excited to see where this goes and what other cool things I can build with AI.</p>
        `,
  },
  {
    id: "my-journey",
    published: "07/15/2024",
    title: "My Journey",
    description:
      "Follow my journey from Realtor to Software Engineer. Sharing insights from my first year in the industry and lessons learned along the way.",
    image: "/journey.jpg",
    blogImage: "/journeyBlog.jpg",
    readTime: 10,
    lighter: true,
    content: `
    <blockquote style="font-size: 1.5rem; font-weight: bold;">03/2022</blockquote>
            <p>My journey began in March of 2022 when I decided to pursue a career in software engineering.
            The decision was not an easy one coming from 7 years of Real Estate experience, but with an enormous amount of 
            support from family and friends, I decided to enroll through the university of Arizona's full stack coding bootcamp.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">09/2022</blockquote>
            <p>The bootcamp was from September 2022 until December 2022 and was set to progress at an extremely fast rate. My parents decided to take me under their wing and take me through a pre course cirriculum to try to prepare me for such an edndeavor. So from April 21, 2022 when I wrote my first line of code until the start of the bootcamp I had already become familiar with HTML, CSS, JS, Node, MySQL, Express, and a good number of concepts in between. Fast forward to December 2022 and I had graduated with a certificate at the top of my class. I was so excited for what the future would hold, and couldn't wait to start my journey into the world of software engineering.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">01/2023</blockquote>
            <p>The next few months were a whirlwind of learning and growth. I was able to take on an internship with one of my best friends and work alongside him to build fun AI projects with real world applications. Not only that, but I also got a chance to see how hard it is to find a first job in the tech industry. Over the course of 3 months I ended up submitting about 150 applications with only 2 interviews. And finally, the opportunity presented itself... I was offered a 3 month long unpaid internship at a small startup called HCDL (Healthcare Download). I knew that if I could work hard and persevere, there might be a path to employment. Low and behold, after 2 months into my 3 month internship, I was offered a full time poisiton at HCDL!</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">08/2023</blockquote>
            <p>During my time at HCDL I learned a lot about the tech industry and how to work within a team environment. Countless hours of front end, back end, full stack, customer service, B2B relationship building, and more taught me what it really means to be a software engineer in a startup environment. This really ramped up my skill set until the bittersweet moment that it was time to part ways with HCDL.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Today</blockquote>
            <p>I'm currently looking for a position as a software engineer in any team environment. I'm passionate about building beautiful looking, fully functional sites, and excited to explore any opportunity that comes my way.</p>
        `,
  },
  {
    id: "captions-made-easy",
    title: "Captions Made Easy",
    description:
      "Build an AI based instagram caption generator with me. This tool makes creating captivating captions a breeze!",
    image: "/ai.jpg",
    blogImage: "/journeyBlog.jpg",
    readTime: 5,
    content: `
            <blockquote style="font-size: 1.5rem; font-weight: bold;">igcap.dev</blockquote>
            <p>Upon graduating from the University of Arizona's full stack coding bootcamp, I was struggling to find opportunities for newly graduated students. In order to expand my skillset and gain experience, I decided to take on an unpaid internship with one of my best friends. This internship was a great opportunity to finally adapt some AI into my projects and learn a lot about the tech industry.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">The Fork</blockquote>
            <p>Initially this project started off by being a fork from https://github.com/Nutlope/twitterbio repo to help users create twitter bios based on a prompt. This then evolved into an idea. What if I could take an image, a prompt, and help users create instagram captions based on different styles of popluar online presences. The fork was easy, the rest was a bit more involved. As this was the first AI project that I was going to work on, I really had to understand the OpenAI API model and how to use it. I also had to understand more about image urls and how it would even be possible to upload an image and get a response back depecting what was in that image. To my noob, post grad, mind... this seemed impossible. Luckily I had a friend in the field who held my hand through the process.</p>
            <br/>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Success</blockquote>
            <p>After about a week or so of building, I was finally able to use a variety of tech and storage solutions to get this thing working. One of the biggest issues we faced was how to store and display that image back to the user to let them know their image had been successfully uploaded. There were some ideas:</p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>Use local storage to store the image as a base64 string</li>
                <li>Use a database to store the image and the prompt</li>
                <li>Use a file system to store the image and the prompt</li>
                <li>Use an upcoming tech called Uploadthings to store the image and the prompt</li>
            </ul>
            <p>We decided to try local storage at first, but the strings were actually too long and it ended up impossible to store them there. So eventually we settled with trying https://uploadthing.com/. Built to be a better S3, this seemed like a quick efficient solution. We were able to get the image and the prompt back to the user and display it in the UI. The user can then click the "Generate Caption" button and see the caption generated by the AI. This was a huge success and I'm really proud of the work that I did.</p>
            <blockquote style="font-size: 1.5rem; font-weight: bold;">Looking forward</blockquote>
            <p>As the technology for image recognition and AI in general continues to improve, there is ample opportunity to update these projects to make them ever better and more sophisticated. I'm excited to see what the future holds for these projects and how they can continue to evolve and improve.</p>
        `,
  },
];
