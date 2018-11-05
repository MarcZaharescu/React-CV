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
      aboutme: `I will update this about me section later. This is just an example text to
    see what it looks like to have some text here. About 3 lines. I will update this about me section later.
    This is just an example text to see what it looks like to have some text here. About 3 lines.`,
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
        description: `Describe what I did here for about three lines. Describe what I
    did here for about three lines. Describe what I did here for
    about 2-3 lines`
      },
      {
        school: "Gheorghe Lazar National College",
        degree: "Maths with Computer-Science",
        year: "2009 - 2013",
        description: `Describe what I did here for about three lines. Describe what I
  did here for about three lines. Describe what I did here for
  about 2-3 lines`
      }
    ],

    workElements: [
      {
        company: "Tesco Plc",
        title: "Software Engineer",
        year: "2017 - present",
        description: `Describe what I did here for about three lines. Describe what I
    did here for about three lines. Describe what I did here for
    about 2-3 lines`
      },
      {
        company: "Talmix Plc",
        title: "Data Analyst",
        year: "2016 - 2017",
        description: `Describe what I did here for about three lines.Describe what I
  did here for about three lines.Describe what I did here for
  about 2-3 lines`
      }
    ],

    skillsElements: [
      {
        name: "JavaScript",
        level: "60%"
      },
      {
        name: "React",
        level: "30%"
      },
      {
        name: "NodeJs",
        level: "40%"
      },
      {
        name: "Redux",
        level: "30%"
      },

      {
        name: "Java",
        level: "50%"
      },
      {
        name: "AWS",
        level: "30%"
      },
      {
        name: "Git",
        level: "60%"
      }
    ]
  },

  projects: {
    projectProps: [
      {
        title: "Project1",
        image: "project1.png",
        description: "Description project1",
        href: "www.google.com"
      },
      {
        title: "Project2",
        image: "project2.png",
        description: "Description project2",
        href: "www.google.com"
      },
      {
        title: "Project3",
        image: "project3.png",
        description: "Description project3",
        href: "www.google.com"
      },
      {
        title: "Project4",
        image: "project4.png",
        description: "Description project4",
        href: "www.google.com"
      },
      {
        title: "Project5",
        image: "project2.png",
        description: "Description project5",
        href: "www.google.com"
      }
    ]
  },
  contact: {
    contactProps: {
      heading: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit.`
    }
  }
};

export default data;
