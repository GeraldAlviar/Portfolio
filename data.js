/**
 * SITE CONTENT
 * Populated from your Google Sites portfolio.
 * The `url` fields for projects currently point to your Google Sites pages —
 * you can keep those, or later swap them for GitHub Pages case studies.
 */

const siteData = {
  profile: {
    name: "Gerald John Alviar",
    tagline: "Contemplative analyst, inspired by logic and meaning.",
    title: "Data Analyst / BI Developer",
    location: "Philippines · Open to remote (UK/EU hours)",
    avatar: "https://yourusername.github.io/images/headshot.jpg?Text=GA",
  },

  contact: {
    phone: "+639760560181",
    email: "geraldino619@gmail.com",
    linkedin: "https://www.linkedin.com/in/geraldalviar/",
    resumeUrl: "https://drive.google.com/file/d/1Sv0SXnFJ7SoFpT9qWP0dHBLozi0VpGrQ/view?usp=sharing",
    scheduleUrl: "",
  },

  highlight: {
    label: "Microsoft 365 Certified Excel Expert",
    url: "https://www.credly.com/earner/earned/badge/45a2d254-91e0-42cf-aa93-9fe9fd519bef",
  },

  about: {
    description: `
      <p>Hi! I'm Gerald John Alviar, a Data Analyst and BI Specialist with a passion for turning raw data into actionable insights. I work across all phases of data analysis, from collection and preparation to advanced analytics and visualization.</p>
      <p>I'm a <strong>Microsoft 365 Certified Excel Expert</strong>, with deep experience in data modeling, analysis, and presentation. I also work extensively with Power BI (including Deneb / Vega-Lite), SQL (PostgreSQL, MySQL), Google Looker Studio, and Tableau.</p>
      <p>I've participated in DAXdakan community meetups at Microsoft PH and AIM — casual, in-person gatherings for Power BI and DAX practitioners — and offer tailored training in Excel, Power BI, and data visualization. I'm available for short-term projects and part-time longer-term engagements.</p>
    `,
    callout: {
      label: "Community",
      title: "DAXdakan — Microsoft PH & AIM",
      description: "Community meetups on DAX and Power BI held at Microsoft Philippines and the Asian Institute of Management. Full recap pages linked under Community.",
    },
  },

  experience: [
    { title: "Data Operations Analyst",          company: "Serve First CX (UK)",                 year: "2023 – Current" },
    { title: "Marketing Data Analyst",              company: "Innovatial Inc.",                     year: "2022" },
    { title: "B.Sc. Computer Science",           company: "University of Batangas",              year: "2022" },
    { title: "Data Analyst (Freelance)",         company: "Cellnet Cloud Technology Ltd.",       year: "2021" },
    { title: "Associate in Computer Technology", company: "Datamex Computer College",            year: "2012" },
  ],

  skills: [
    {
      title: "Reporting & Visualization",
      items: ["Microsoft Excel (Expert)", "Power BI", "Deneb / Vega-Lite", "Tableau", "Looker Studio", "Google Sheets"],
    },
    {
      title: "Data Modeling",
      items: ["Power Query (M)", "Power Pivot", "DAX", "PostgreSQL", "MySQL"],
    },
    {
      title: "Automation & Pipelines",
      items: ["Power BI Service", "Excel VBA", "Google Apps Script", "BigQuery"],
    },
  ],

  socials: [],

  memberships: [],

  contactActions: [
    { name: "Email",    value: "geraldino619@gmail.com", url: "mailto:geraldino619@gmail.com" },
    { name: "Phone",    value: "+63 976 056 0181",       url: "tel:+639760560181" },
    { name: "LinkedIn", value: "Connect on LinkedIn",    url: "https://linkedin.com/in/geraldalviar/" },
    { name: "Resume",   value: "View on Google Drive",   url: "https://drive.google.com/file/d/1Sv0SXnFJ7SoFpT9qWP0dHBLozi0VpGrQ/view?usp=sharing" },
  ],

  footer: {
    copyright: "© 2025 Gerald John Alviar",
  },

  // PROJECTS — ordered by strategic priority
  projects: [
    {
      title: "2025 PBI Pinas Data Challenge",
      tech: "Power BI · DAX · Deneb / Vega-Lite",
      desc: "Entry for the 2025 Power BI Pinas Data Challenge — a national community competition showcasing Philippine data storytelling.",
      url: "https://sites.google.com/view/gerald-alviar/personal-works/2025-pbi-pinas-data-challenge",
      linkText: "View on Google Sites",
    },
    {
      title: "MySQL Masterclass — Capstone",
      tech: "MySQL · SQL",
      desc: "Capstone project completing the MySQL Masterclass curriculum. Covers advanced query design, joins, and data modeling.",
      url: "https://sites.google.com/view/gerald-alviar/capstones-masterclass/capstone-mysql-masterclass",
      linkText: "View on Google Sites",
    },
    {
      title: "Market Data Analysis",
      tech: "Power BI · Data Modeling",
      desc: "Capstone project analyzing market data trends, delivered as part of the Masterclass program.",
      url: "https://sites.google.com/view/gerald-alviar/capstones-masterclass/2024MarketDataAnalysis",
      linkText: "View on Google Sites",
    },
    {
      title: "Human Resources Data Set",
      tech: "Power BI · HR Analytics",
      desc: "End-to-end HR analytics dashboard covering headcount, turnover, and workforce composition.",
      url: "https://sites.google.com/view/gerald-alviar/personal-works/human-resources-data-set",
      linkText: "View on Google Sites",
    },
    {
      title: "MySQL Masterclass",
      tech: "MySQL · Curriculum",
      desc: "Complete MySQL Masterclass exercises and notes — foundational and advanced SQL patterns.",
      url: "https://sites.google.com/view/gerald-alviar/capstones-masterclass/mysql-masterclass",
      linkText: "View on Google Sites",
    },
    {
      title: "MMARAS MMDA Analysis",
      tech: "Tableau · Data Storytelling",
      desc: "Personal analysis project exploring the Metro Manila Accident Recording and Analysis System (MMARAS) dataset.",
      url: "https://sites.google.com/view/gerald-alviar/personal-works/mmaras",
      linkText: "View on Google Sites",
    },
    {
      title: "SQL Murder Mystery",
      tech: "SQL · Problem Solving",
      desc: "Community SQL challenge — investigating a fictional murder case using SQL queries and deductive reasoning.",
      url: "https://sites.google.com/view/gerald-alviar/capstones-masterclass/2024MurderMystery",
      linkText: "View on Google Sites",
    },
    {
      title: "Power BI Overview",
      tech: "Power BI · Training",
      desc: "Overview walkthrough of Power BI's capabilities — reporting, modeling, and visualization fundamentals.",
      url: "https://sites.google.com/view/gerald-alviar/personal-works/power-bi-overview",
      linkText: "View on Google Sites",
    },
  ],

  // SPEAKING & COMMUNITY — real credibility signal
  speaking: [
    {
      title: "DAXdakan @ Microsoft PH",
      venue: "Microsoft Philippines",
      desc: "Community IRL meeting on DAX fundamentals and patterns, delivered at Microsoft Philippines.",
      url: "https://sites.google.com/view/gerald-alviar/techtogether/daxdakan-microsoft-ph",
    },
    {
      title: "DAXdakan again @ AIM",
      venue: "Asian Institute of Management",
      desc: "Another Power-BI focused casual meeting delivered at the Asian Institute of Management.",
      url: "https://sites.google.com/view/gerald-alviar/techtogether/daxdakan-again-aim",
    },
  ],

  certifications: [
    {
      title: "Microsoft Excel Expert (Microsoft 365 Apps)",
      issuer: "Microsoft",
      desc: "Expert-level certification covering advanced formulas, data modeling, and macros.",
      url: "https://www.credly.com/earner/earned/badge/45a2d254-91e0-42cf-aa93-9fe9fd519bef",
    },
    {
      title: "Microsoft Excel Associate (Microsoft 365 Apps)",
      issuer: "Microsoft",
      desc: "Foundational certification for spreadsheet creation and data management.",
      url: "https://www.credly.com/earner/earned/badge/3528d434-7b12-421a-8f17-9db11031095b",
    },
    {
      title: "Intro to Data Science",
      issuer: "Cisco",
      desc: "Foundational concepts in data science and analytics.",
      url: "https://www.credly.com/earner/earned/badge/95db5fad-3384-4e1b-8482-55237ab6f380",
    },
    {
      title: "DevNet Associate",
      issuer: "Cisco",
      desc: "Cisco certification for software and automation skills.",
      url: "https://www.credly.com/earner/earned/badge/27396c2e-d331-4650-982f-4ef3140495cf",
    },
  ],

  recommendations: [
    {
      quote: "Contracted Gerald to design and develop a custom Excel dashboard with key metrics, visualizations, graphs, and filters: including month-over-month and year-over-year comparisons across multiple dimensions. Two follow-up walkthrough sessions were included for feedback and refinement.",
      author: "Luigi Roxas",
      title: "Freelance client · Excel and Power BI Dashboard Development · October 2025",
      linkedinUrl: "https://www.linkedin.com/in/luigiroxas/",
    },
    {
      quote: "I had the pleasure of working with Gerald, a highly skilled and Microsoft Certified Data Analyst, and I can confidently say he is an insightful and detail-oriented professional. Gerald has a solid understanding of data modeling, visualization, and business intelligence tools — and consistently transforms data sets into clear, actionable insights. His continuous desire for learning and growth truly sets him apart. What impressed me most was not just his technical ability, but also his collaborative approach and eagerness to learn. He's proactive, reliable, and always ready to go the extra mile to ensure accuracy and deliver value in every project.",
      author: "Nik Bergs",
      title: "Customer Success Executive @ Serve First CX · April 2025",
      linkedinUrl: "https://www.linkedin.com/in/nik-bergs/",
    },
    {
      quote: "I have had the pleasure of working with Gerald through Serve First, he is a team player, very adept at helping his colleagues and team mates how to get set up for business. When I had a problem with staging my machine, he was very patient, helpful and understanding, working out how to overcome all compliance issues.",
      author: "Karon Kell",
      title: "Worked with Gerald at Serve First · February 2025",
      linkedinUrl: "https://www.linkedin.com/in/karonkell/",
    },
    {
      quote: "1-on-1 training on Google Sheets, Excel, and Power BI, delivered in both English and Tagalog. Sessions were clear, patient, and tailored to what I actually needed to learn.",
      author: "Rani Amarnani",
      title: "Private client · June 2026",
      linkedinUrl: "",
    },
  ],
};
