// Resources shown on the Resources section.
// To add a link, add an object { name, desc, url } to the right category.

const resources = [
  {
    id: "dsa",
    title: "DSA & Competitive Programming",
    desc: "Practice problems daily and build strong problem-solving skills.",
    links: [
      { name: "LeetCode", desc: "Interview-style coding problems", url: "https://leetcode.com/" },
      { name: "CodeChef", desc: "Contests and beginner practice", url: "https://www.codechef.com/" },
      { name: "Codeforces", desc: "Regular competitive contests", url: "https://codeforces.com/" },
      { name: "GeeksforGeeks", desc: "DSA concepts with examples", url: "https://www.geeksforgeeks.org/" },
      { name: "TakeUForward", desc: "Striver's DSA sheets and videos", url: "https://takeuforward.org/" },
      { name: "CP-Algorithms", desc: "Reference for CP algorithms", url: "https://cp-algorithms.com/" },
    ],
  },
  {
    id: "academics",
    title: "College Academics",
    desc: "Courses and lectures for semester subjects like DBMS, OS and CN.",
    links: [
      { name: "NPTEL", desc: "IIT lectures and certifications", url: "https://nptel.ac.in/" },
      { name: "SWAYAM", desc: "Free government online courses", url: "https://swayam.gov.in/" },
      { name: "Coursera", desc: "University courses online", url: "https://www.coursera.org/" },
      { name: "Gate Smashers", desc: "YouTube: DBMS, OS, CN, TOC", url: "https://www.youtube.com/@GateSmashers" },
      { name: "CS50 (Harvard)", desc: "Best intro to computer science", url: "https://cs50.harvard.edu/x/" },
      { name: "MIT OpenCourseWare", desc: "Free MIT course material", url: "https://ocw.mit.edu/" },
    ],
  },
  {
    id: "webdev",
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript and React by building projects.",
    links: [
      { name: "MDN Web Docs", desc: "Reference for HTML, CSS and JS", url: "https://developer.mozilla.org/" },
      { name: "React Docs", desc: "Official React tutorial", url: "https://react.dev/learn" },
      { name: "freeCodeCamp", desc: "Free full-stack curriculum", url: "https://www.freecodecamp.org/" },
      { name: "The Odin Project", desc: "Project-based web dev path", url: "https://www.theodinproject.com/" },
      { name: "JavaScript.info", desc: "Modern JavaScript tutorial", url: "https://javascript.info/" },
      { name: "W3Schools", desc: "Quick examples to try out", url: "https://www.w3schools.com/" },
    ],
  },
  {
    id: "jobs",
    title: "Internship & Job Prep",
    desc: "Find internships, prepare for interviews and build your resume.",
    links: [
      { name: "Internshala", desc: "Internships for students", url: "https://internshala.com/" },
      { name: "LinkedIn Jobs", desc: "Jobs and professional network", url: "https://www.linkedin.com/jobs/" },
      { name: "Unstop", desc: "Hackathons, contests and hiring", url: "https://unstop.com/" },
      { name: "Wellfound", desc: "Startup jobs and internships", url: "https://wellfound.com/" },
      { name: "InterviewBit", desc: "Interview preparation", url: "https://www.interviewbit.com/" },
      { name: "Overleaf CV Templates", desc: "Clean LaTeX resume templates", url: "https://www.overleaf.com/gallery/tagged/cv" },
    ],
  },
  {
    id: "opensource",
    title: "Open Source & GitHub",
    desc: "Make your first contribution and grow through open source.",
    links: [
      { name: "First Contributions", desc: "Step-by-step first PR guide", url: "https://github.com/firstcontributions/first-contributions" },
      { name: "Good First Issue", desc: "Beginner-friendly issues", url: "https://goodfirstissue.dev/" },
      { name: "GitHub Skills", desc: "Interactive GitHub courses", url: "https://skills.github.com/" },
      { name: "Open Source Guides", desc: "How open source works", url: "https://opensource.guide/" },
      { name: "Google Summer of Code", desc: "Paid open source program", url: "https://summerofcode.withgoogle.com/" },
      { name: "Hacktoberfest", desc: "Open source event every October", url: "https://hacktoberfest.com/" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Development",
    desc: "Set up your developer tools and learn version control.",
    links: [
      { name: "VS Code", desc: "Code editor", url: "https://code.visualstudio.com/" },
      { name: "Git", desc: "Download Git", url: "https://git-scm.com/" },
      { name: "Pro Git Book", desc: "Free book to learn Git", url: "https://git-scm.com/book/en/v2" },
      { name: "Learn Git Branching", desc: "Visual Git practice", url: "https://learngitbranching.js.org/" },
      { name: "GitHub Docs", desc: "Getting started with GitHub", url: "https://docs.github.com/en/get-started" },
      { name: "Node.js", desc: "Run JavaScript on your machine", url: "https://nodejs.org/" },
    ],
  },
];

export default resources;
