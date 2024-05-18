import { Question } from "@/types/Question";

export const questions: Question[] = [
  {
    question: "Which command is used to start a Next.js development server?",
    options: ["npm start", "next dev", "npm run dev", "next start"],

    answer: 2,
  },

  {
    question: "What is the purpose of the Link component in Next.js?",
    options: [
      "To style text as a hyperlink",
      "To navigate between pages without a full page reload",
      "To import external CSS files",
      "To define metadata for the page",
    ],
    answer: 1,
  },

  {
    question: "What is the purpose of the Image component in Next.js?",
    options: [
      "To render SVG graphics",
      "To optimize images for faster loading",
      "To add decorative images",
      "To create image galleries",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following statements about the Layout component is incorrect?",
    options: [
      "A layout is UI that is shared between multiple routes",
      "Layouts are Server Components by default but can be set to a Client Component.",
      "The root layout is defined at the top level of the app directory and applies to all routes",
      "Layouts can't fetch data",
    ],

    answer: 3,
  },

  {
    question:
      "What is the primary and recommended way to navigate between routes in Next.js?",
    options: [
      "Using the useRouter hook (Client Components)",
      "Using the native History API",
      "Using the <Link> Component",
      "Using the redirect function (Server Components)",
    ],

    answer: 2,
  },

  {
    question:
      "Which of the following attributes can be added to the Link component for accessibility purposes?",
    options: ["role", "title", "aria-label", "tabIndex"],

    answer: 2,
  },

  {
    question:
      "Which file convention is commonly used to create UI that is shared across multiple routes?",
    options: ["components", "page", "partials", "layout"],
    answer: 3,
  },

  {
    question: "Which statement about Routes is incorrect?",

    options: [
      "Files are used to create UI that is shown for a route segment",
      "Folders are used to define routes",
      "Each route segment is mapped to a corresponding segment in a URL path.",
      "You can't nest folders inside each other",
    ],

    answer: 3,
  },
  {
    question:
      "Which sequence of properties is required for the Image component in Next.js?",
    options: [
      "src, alt, width, height",
      "quality, placeholder, src, width",
      "priority, srcSet, decoding, loading",
      "alt, src, onLoad, height",
    ],

    answer: 0,
  },

  {
    question:
      "Next.js supports different ways of styling your application, including:",
    options: [
      "Global CSS",
      "CSS Modules",
      "Tailwind CSS",
      "All the options are correct",
    ],
    answer: 3,
  },
];
