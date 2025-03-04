import { Link } from "react-router-dom";


export const navbarData = [
  {
    id: "1",
    name: "About Us",
    link: "/about-us",
  },
  {
    id: "2",
    name: "Industries",
    link: "/industries",
  },
  {
    id: "3",
    name: "Services",
    submenu: [
      {
        id: "3.1",
        name: "Manual Testing ",
        submenu: [
          {
            id: "3.1.1",
            name: "Function Testing",
            submenu: [
             {

              id: "3.1.1.1",
              name: "User Acceptance Testing",
              link: "/user-acceptance-testing",
             },
             {

              id: "3.1.1.2",
              name: "Usability Testing",
              link: "usability-testing",
             },
             {

              id: "3.1.1.3",
              name: "UI/UX Testing",
              link: "/ui-ux-testing",
             },
             {

              id: "3.1.1.4",
              name: "Function (Manual) Testing",
              link: "functional-manual-tesing",
             },
             {

              id: "3.1.1.5",
              name: "API Testing",
              link: "/api-testing",
             }

            ]
          },
          {
            id: "3.1.2",
            name: "Application Testing",
            submenu: [
              {
                id: "3.1.1.1",
                name: "MobileApp Testing",
                link: "/mobileapp-testing"
              },
              {
                id: "3.1.1.2",
                name: "DesktopApp Testing",
                link: "/desktopapp-testing"
              },
              {
                id: "3.1.1.3",
                name: "Application Testing",
                link: "/application-testing"
              }
            ]
          },
          {
            id: "3.1.3",
            name: "compatibility Testing ",
            link: "/compatibility-testing",
          },
          {
            id: "3.1.4",
            name: "Performance Testing",
            link: "/performance-testing",
          },
          {
            id: "3.1.5",
            name: "Regression Testing",
            link: "/regression-testing",
          },
      
        ],
      },
      {
        id: "3.2",
        name: "Automation Testing",
        submenu: [
          {
            id: "3.2.1",
            name: "Selenium Testing",
            submenu: [
              {
                id: "3.2.1.1",
                name: "Web App Automation Testing",
                link: "/webapp-testing",
              },
              {
                id: "3.2.1.2",
                name: "Selenium Cross Browser Testing",
                link: "/selenium-testing",
              },
              {
                id: "3.2.1.3",
                name: "Regression Automation Testing",
                link: "/regression-automation",
              },
              {
                id: "3.2.1.4",
                name: "IOS Automation Testing",
                link: "/ios-testing",
              },
              {
                id: "3.2.1.5",
                name: "Functional Automation Testing",
                link: "/functional-testing",
              },
              {
                id: "3.2.1.6",
                name: "API Automation Testing",
                link: "/api-auto-testing",
              },
              {
                id: "3.2.1.7",
                name: "Automation Framework Design ",
                link: "/automation-framework",
              },
              {
                id: "3.2.1.8",
                name: "Database Automation Testing",
                link: "/database-testing",
              },
            ],
          },
          {
            id: "3.2.2",
            name: "JMeter",
            link: "/jmeter",
          },
          {
            id: "3.2.3",
            name: "Appium Testing",
            link: "/appium-testing",
          },
        ],
      },
      {
        id: "3.3",
        name: "Security Testing",
        link: "/security-testing",
      },
      {
        id: "3.4",
        name: "EPR Testing ",
        link: "/erp-testing",
      },
      {
        id: "3.5",
        name: "VR/AR Testing ",
        link: "/VARAR",
      },
      {
        id: "3.6",
        name: "Game Testing ",
        link: "/game-testing",
      },
      {
        id: "3.7",
        name: "Next Generation Testing ",
        link: "/nextgenaration-testing",
      },
      {
        id: "3.8",
        name: "Emerging Testing Services",
        link: "/emerging-testing-services",
      },
      {
        id: "3.9",
        name: "QA Management Services ",
        link: "/qa-management",
      },
      {
        id: "3.10",
        name: "QA Internship ",
        link: "/internship",
      },
    ],
  },
  {
    id: "4",
    name: "Blog",
    link: "/blogs",
  },
  {
    id: "5",
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: "6",
    name: "Career",
    link: "/careers",
  },
];




export const FooterData1 = [
  {
    id: "1",
    text: "AboutUs",
    link: "/about-us",
  },
  {
    id: "2",
    text: "Industries",
    link: "/industries",
  },
  {
    id: "3",
    text: "Services",
    link: "/service/",
  },
  {
    id: "4",
    text: "Careere",
  },
  {
    id: "5",
    text: "Blog",
  },
  {
    id: "6",
    text: "Contacts",
    link: "/contact",
  },
];
export const FooterData2 = [
  {
    id: "1",
    text: "Privacy policy",
    path: "Resources",
  },
  {
    id: "2",
    text: "Terms of use",
  },
  {
    id: "3",
    text: "Cookies",
  },
];
export const FooterData3 = [
  {
    id: "1",
    text: "Support",
  },
  {
    id: "2",
    text: "Customer support",
  },
  {
    id: "3",
    text: "Media",
  },
  {
    id: "4",
    text: "Marketing",
  },
];

export const cardData = [
  {
    id: "0",
    title: "DHARA",
    text: "They're honest, transparent, and committed to delivering excellent quality. Any company that wants to get things done in a timely and efficient manner can approach QA Vision ",
  },
  {
    id: "1",
    title: "ADITYA",
    text: "They're an experienced team that easily adopts processes depending on our needs.",
  },
  {
    id: "2",
    title: "RACHNA",
    text: "QA Vision's work received positive acclaim for timely execution.",
  },
  {
    id: "3",
    title: "DHARA",
    text: "QA Vision's work received positive acclaim for timely execution.",
  },
  {
    id: "4",
    title: "RACHNA",
    text: "They're honest, transparent, and committed to delivering excellent quality. Any company that wants to get things done in a timely and efficient manner can approach QA Vision ",
  },
];

