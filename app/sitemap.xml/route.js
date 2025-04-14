export async function GET() {
    const siteUrl = 'https://runready.co';
  
    const pages = [
      '', // homepage
      'performance-program',
      'what-to-expect',
      'careers',
      'FAQ',
      'starter-package',
      'experience',
      'raceready'
    ];
  
    const urls = pages.map((page) => {
      return `
        <url>
          <loc>${siteUrl}/${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    });
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      ${urls.join('')}
      ${await getYouTubeVideoEntries(siteUrl)}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }

  const getYouTubeVideoEntries = (siteUrl) => {
    const videos = [
        {
          id: "TXruquAvLN0",
          title: "Episode 00: Setting the Pace",
          description: "Nick Lo and Rob Smith, Co-Founders of RunAsYouAre, are in a brainstorming session planning the episode structure for their new docu-series on the development of RunReady—the running health brand designed to improve comfort and performance.",
          publishedAt: "2024-10-10",
        },
        {
          id: "noUyyQtoOMI",
          title: "Episode 01/10: The Start Line",
          description: "At the core of RunReady is the team at RunAsYouAre. Made up of Run Specialists, Community Coordinators, Merchandising, Operations, Physiotherapists, Web Developers and more. In Episode 1 we meet the unique and multi-talented team while getting a glimpse into everyone involved in bringing the world a new way to assess your movement, match you with the right running footwear, and prescribe exercises to help you run comfortably and perform at your best.",
          publishedAt: "2024-10-17",
        },
        {
          id: "otCmHsjwTlg",
          title: "Episode 02/10: A New Way To Run",
          description: "RunReady has evolved from many forms over the years beginning way back in the Vancouver Running Co. & PhysioRoom days; Own the Run, Take Flight, and SeaWheeze Unclinic were all ways for us to begin working with our community on a better way to approach running. What began as an alignment in views from Nick and Rob on ensuring runners understood their bodies and how they move when they run, has become a path forward into evolving a system to truly evaluate a runners movement and match to exactly the right footwear and exercise programming.",
          publishedAt: "2024-10-25",
        },
        {
          id: "GHGoiw8ePt4",
          title: "Episode 03/10: Blueprint In Motion",
          description: "DAMP is the basis of the RunReady Performance Program (Assess, Match, Prescribe). Developed in-house at RunAsYouAre over the past 14 months by our team of Physiotherapists, Run Specialists and Developers and delivered via our proprietary software that standardizes the process of assessing and matching customers to the right footwear and exercises, ensuring decreased injury rates, increased customer loyalty and happier, healthier runners.",
          publishedAt: "2024-10-31",
        },
        {
          id: "c-Kqfbq7oLw",
          title: "Episode 04/10: Every Move Counts",
          description: "Running isn’t just about covering ground. It’s about moving freely, feeling stronger, and being ready for any type of run. Our team of physios at RunReady has developed exercise programs that support you, no matter where you’re starting from. In this episode, get a behind-the-scenes look at how we’ve crafted these exercise programs to make running feel easier and keep you prepared to go the distance. Every move counts when it’s designed just for you.",
          publishedAt: "2024-11-07",
        },
        {
          id: "vXIrkA0aajU",
          title: "Episode 05/10: Trial and Error",
          description: "While RunReady is primarily Physiotherapist informed, the technology behind RunReady plays a massive role in ensuring many parts of the platform work together. From programming our assessment protocols to building the organization and functions around a massive shoe database, right through to how we administer an exercise program for runners of all types, the RunReady tech team, led by Larry Lau, has to understand a vast array of scenarios and applications for RunReady while ensuring it is user friendly and scalable. Not a small task by any stretch.",
          publishedAt: "2024-11-14",
        },
        {
          id: "7lJ_l_NbvfY",
          title: "Episode 06/10: Health First",
          description: "Running better starts with understanding how your body moves. Episode 6 focuses on Assess, the first step of the RunReady Performance Program. RunReady Physiotherapists analyze movement to uncover the insights your body needs, whether it's shock absorption, energy return, or stability. This three-step process lays the foundation to match you with the right footwear and exercises, helping you run more comfortably and perform better.",
          publishedAt: "2024-11-22",
        },
        {
          id: "4BZN5d6gaqw",
          title: "Episode 07/10: Beyond the Sole",
          description: "Every great run starts beyond the sole. Episode 07 of the RunReady Performance Program takes you inside Match—the second step where graded footwear is matched to your unique movement. This process delivers recommendations that are precise, personal, and designed to help you run healthier and more comfortably. Grading nights bring runners into the process, allowing us to test and fine-tune our grades so every shoe recommendation performs exactly as intended.",
          publishedAt: "2024-11-28",
        },
        {
          id: "AVD_yb703eg",
          title: "Episode 08/10: Tailored for You",
          description: "The final step of the RunReady Performance Program is Prescribe—tailored exercises built to help your body handle running challenges, making every run feel smoother and more efficient. In Episode 08, RunReady physiotherapist Sean Sawer explains how foundational research and testing helped shape the Prescribe step. Learn how these exercises focus on improving your body's ability to absorb impact and bounce back, keeping you moving stronger with less effort.",
          publishedAt: "2024-12-05",
  
        },
        {
          id: "V9IArtPSYIo",
          title: "Episode 09/10: Runner's High",
          description: "A few weeks back, we were at The Running Event in Austin—a big moment to share our vision for the future of RunReady. It was all about connecting with brands and showing how the RunReady Performance Program will help people run healthier, feel better, and perform their best. Episode 09 takes you behind the scenes of those conversations and gives you a look at what's next.",
          publishedAt: "2024-12-16",
        },
        {
          id: "Cd5Y4qH5-cA",
          title: "Episode 10/10: The Path Forward",
          description: "2024 set the stage. Now, in 2025, we’re taking the next step forward: helping people run healthier. Everywhere. The RunReady Performance Program is launching at RunAsYouAre. This first-of-its-kind system is built on three steps for better running: Assess, Match, and Prescribe. This is where running evolves. Where health and performance come together in ways that inspire, challenge, and push boundaries. Because better running doesn’t just happen—it’s built, step by step.",
          publishedAt: "2025-01-23",
        },
      ];

  return videos.map(video => `
    <url>
      <loc>${siteUrl}/</loc>
      <video:video>
        <video:thumbnail_loc>https://img.youtube.com/vi/${video.id}/default.jpg</video:thumbnail_loc>
        <video:title><![CDATA[${video.title}]]></video:title>
        <video:description><![CDATA[${video.description}]]></video:description>
        <video:content_loc>https://www.youtube.com/watch?v=${video.id}</video:content_loc>
        <video:publication_date>${video.publishedAt}</video:publication_date>
      </video:video>
    </url>
  `).join('');
}