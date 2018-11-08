const data = {
  common: {
    navigationLinks: [
      { to: "/#home", text: "HOME" },
      { to: "/#about-me", text: "ABOUT" },
      { to: "/#resume", text: "RESUME" },
      { to: "/#projects", text: "PROJECTS" },
      { to: "/#contact", text: "CONTACT" }
    ],

    socialMediaIcons: [
      {
        url: "https://www.instagram.com/marczaha/",
        className: "fa-instagram"
      },
      {
        url: "https://www.facebook.com/marc.zaharescu",
        className: "fa-facebook"
      },
      {
        url: "https://github.com//MarcZaharescu",
        className: "fa-github"
      },
      {
        url: "https://linkedin.com/in/marczaharescu/",
        className: "fa-linkedin"
      },
      {
        url: "https://www.twitter.com/marczaharescu",
        className: "fa-twitter"
      }
    ],

    messages: {
      nameValidationError: "* Please input a name",
      emailValidationError: "* Please input a valid email",
      subjectValidationError: "* Please input a valid subject",
      messageValiatioError: "* Please input a message max 600 chars",
      banner: {
        succesful: "The message has been sent.",
        error:
          "Unfortunately the message could not be sent, check the fields above."
      }
    }
  },

  home: {
    homeProps: {
      name: "Marc",
      profession: "Software Engineer",
      location: "London",
      summary:
        "I'm currenly focusing on Node, React and Redux web applications."
    }
  },

  about: {
    aboutProps: {
      aboutme: [
        {
          p: `I am very ambitious individual with high interest in technology. I graduated with a 1st Degree with Honours in Artificial Intelligence with Computer Science Bsc from The University of Birmingham and
              now I am pursuing a software engineering career at Tesco PLC. Here I'm building web applications using React, Redux and NodeJS but I got also exposed to AWS lambdas and Terraform.`
        },
        {
          p: `Recently I tried to challenge myself to build at least 1 end to end app in my free time every month so let's see how this goes.`
        }
      ],
      name: "Marc Zaharescu",
      city: "London",
      country: "United Kingdom",
      street: "22 Bletchley Street",
      postcode: "N1 7NX",
      phone: "+40752071299",
      email: "zaharescumarc10@gmail.com"
    }
  },
  resume: {
    educationElements: [
      {
        school: "University of Birmingham",
        degree: "Artificial Intelligence with Computer-Science Bsc",
        year: "2013 - 2017",
        description: [
          {
            p: `I graduated with 1st Degree with Honours in summer 2017. Most of the projects I developed during university were java based applications but I also undertook courses on C/C++, OCaml, Haskell and Matlab.`
          },
          {
            p: `My final year dissertation was built around a product recommender system that I developed from scratch with the aim to recommend clothes to consumers using Natural Language Processing, Sentiment Analysis and Image Similarity.`
          },
          {
            p: `However probably the most exciting time about my university time was during the exchange programs and projects I took part to: Asia as the Global Future, Study China Program and APYE Thailand. Here I met some extremely talented and like-minded people with whom I am still close friends today.`
          }
        ]
      },
      {
        school: "Gheorghe Lazar National College",
        degree: "Maths with Computer-Science",
        year: "2009 - 2013",
        description: [{ p: `Romanian Bachalaurreate Diploma 9.11 out of 10` }]
      }
    ],

    workElements: [
      {
        company: "Tesco Plc",
        title: "Software Engineer",
        year: "2017 - present",
        description: [
          {
            p: `I am currenlty working in an agile and high profile web team, delivering critical functionality (login and registration) on top of an account management application.
               Experienced with many modern web frameworks and tools: NodeJS, React, Redux, Jest, Sass, Webpack. Our apps are built with Jenkins CI/CD pipelines and wrapped into Docker containers.`
          },
          {
            p: `Worked for 3 months on the main groceries android app using: Kotlin, Java, Dagger2, Gradle.
           And I have recently become part of the out-of-hours support team with the responsibility of troubleshooting and rectifying production problems.`
          }
        ]
      },
      {
        company: "Talmix Plc",
        title: "Data Analyst",
        year: "2016 - 2017",
        description: [
          {
            p: `Here I worked during my industrial placement program.
                I got the chance to work closely with industry experts and learn how to be proactive and find answers to problems with limited support.
                My main dutites included financial data modeling and analytics.`
          },
          {
            p: `In addition, I was also in charge of developing and customizing the company’s CRM (Salesforce) in Apex (java based language) and
                develop Google Chrome Extensions to enhance several business
                processes.
                This was a great experience that helped me build upon my analytical and problem solving skills by
                working in an agile environment.`
          }
        ]
      }
    ],

    skillsElements: [
      {
        name: "JavaScript",
        level: "70%"
      },
      {
        name: "React",
        level: "50%"
      },
      {
        name: "NodeJs",
        level: "60%"
      },
      {
        name: "Redux",
        level: "30%"
      },

      {
        name: "Java",
        level: "55%"
      },
      {
        name: "AWS",
        level: "30%"
      },
      {
        name: "Git",
        level: "80%"
      }
    ]
  },

  projects: {
    projectProps: [
      {
        title: "Clothes Recommender System",
        image: "project1.png",
        description:
          "NLP, Sentiment Analysis and Image Similarity app to recommend most suitable product based on a imput query",
        href: "https://github.com/MarcZaharescu/Product-Recomender-System"
      },

      {
        title: "React CV application",
        image: "project2.png",
        description: "A React, Nodejs CV template web app",
        href: "https://github.com/MarcZaharescu/react-cv"
      }
    ]
  },

  contact: {
    contactProps: {
      heading: `If you have an interesting project you'd want me to work on, you just want to catch up or you have some suggestions/improvements I could benefit from, feel free send me a message below!`
    }
  }
};

export default data;
