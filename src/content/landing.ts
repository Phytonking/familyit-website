/**
 * Home page copy. Outcome-level, no product specifics. Product specifics that
 * are still unknown live in `siteConfig.product` as placeholders.
 */

import type { AudienceId } from "@/content/audiences";
import { siteConfig } from "@/config/site";

export const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "Questions" },
] as const;

export const hero = {
  headline: "Her phone updated overnight. Now she can't call you.",
  lede:
    "Small technology problems become big gaps in the lives of the people we love. FamilyIT is a care service for that technology, so staying connected, safe and independent doesn't depend on who happens to be free to help.",
  primaryCta: "Join the waitlist",
  secondaryCta: "See who it's for",
};

/** Real moments, written plainly. Rendered as a list, not cards. */
export const problemMoments = [
  {
    moment: "A pop-up says the computer has a virus and to call a number.",
    consequence: "By the time anyone finds out, the bank has been called too.",
  },
  {
    moment: "The video call connects, but there's no sound.",
    consequence: "Sunday's catch-up becomes twenty minutes of \"can you hear me now?\"",
  },
  {
    moment: "The tablet wants a password nobody remembers.",
    consequence: "Photos, messages and the one app she actually uses are locked away.",
  },
  {
    moment: "A new game asks a nine-year-old to chat with strangers.",
    consequence: "The settings that would stop it are six menus deep.",
  },
  {
    moment: "A care team of twelve shares one laptop and one login.",
    consequence: "Families call the front desk because nothing else works.",
  },
];

export const problem = {
  heading: "The problem isn't the people. It's that nobody is looking after the technology.",
  body: [
    "Phones, tablets, hearing aids, door cameras, patient portals: the people we care for live inside more technology than ever, and almost none of it was designed with them in mind. When it breaks, the job lands on whoever is nearest, usually a relative with their own full life.",
    "The result is quiet. Calls that stop. A parent who says \"it's fine\" because asking again feels like a burden. A child whose safety settings were never finished. A care home where staff spend their shift on IT instead of on residents.",
  ],
};

export const solution = {
  heading: "A service that cares for the technology, so you can care for the person.",
  body: [
    "FamilyIT takes ongoing responsibility for the devices, accounts and connections in someone's life. Not a one-off fix, but a relationship: someone who knows their setup, notices when something changes, and explains things patiently, as many times as it takes.",
    "We work with the person directly, in their language and at their pace, and keep the people who love them informed without taking over.",
  ],
  pillars: [
    {
      title: "Connected",
      body: "Calls, messages and photos keep flowing. When something breaks, it gets fixed before it becomes a silence.",
    },
    {
      title: "Safe",
      body: "Scams, strangers and risky settings are watched for and dealt with, with the person's dignity and privacy intact.",
    },
    {
      title: "Independent",
      body: "People keep doing things for themselves. Help arrives in a way that builds confidence rather than dependence.",
    },
  ],
};

export const benefits = {
  heading: "What changes, for everyone involved",
  groups: [
    {
      who: "For the person",
      items: [
        "Help from someone who knows them and their devices, not a call center.",
        "Explanations in plain words, repeated without judgement.",
        "Fewer scary moments, and a clear plan for what to do when one happens.",
      ],
    },
    {
      who: "For family and caregivers",
      items: [
        "You stop being the only line of defense for every password and pop-up.",
        "You hear about what matters, without having to check in constantly.",
        "Distance stops deciding how much you can help.",
      ],
    },
    {
      who: "For care teams",
      items: [
        "Staff time goes back to residents instead of routers.",
        "Residents stay in touch with their families on their own terms.",
        "One accountable place for the technology questions families ask.",
      ],
    },
  ],
};

export const audienceOverview: {
  id: AudienceId;
  title: string;
  summary: string;
  href: string;
}[] = [
  {
    id: "seniors",
    title: "Older relatives",
    summary: "Staying connected and safe at home, with patient help that respects experience.",
    href: "/solutions/seniors",
  },
  {
    id: "disabilities",
    title: "People with disabilities",
    summary: "Technology set up around how each person communicates, moves and sees the world.",
    href: "/solutions/disabilities",
  },
  {
    id: "children",
    title: "Children",
    summary: "Safer screens and honest conversations, with settings that actually get finished.",
    href: "/solutions/children",
  },
  {
    id: "care-centers",
    title: "Care centers",
    summary: "Resident technology handled, families informed, staff back to the work that matters.",
    href: "/solutions/care-centers",
  },
];

/** A genuine sequence, so numbering is appropriate here. */
export const steps = [
  {
    title: "Tell us about the person",
    body: "Who they are, what they use, what tends to go wrong and who should be kept in the loop. Ten minutes, no jargon.",
  },
  {
    title: "We get to know their setup",
    body: "We meet them, tidy up what's there, close the obvious gaps and write down how everything works in plain language.",
  },
  {
    title: "We stay",
    body: "Ongoing care: questions answered, changes noticed, problems fixed. You hear from us when it matters.",
  },
];

export const faqs = [
  {
    question: "What is FamilyIT, in one sentence?",
    answer:
      "An ongoing care service for the technology in the life of someone you love, so they stay connected, safe and independent without relying on whoever happens to be nearby.",
  },
  {
    question: "Who is it for?",
    answer:
      "Older relatives, people with disabilities, children, and the residents and staff of care centers. If you've ever been the family's unofficial IT department, it's for you too.",
  },
  {
    question: "Is this a one-off repair service?",
    answer:
      "No. We take ongoing responsibility rather than fixing one thing and leaving. That's what lets us notice changes early and build trust with the person over time.",
  },
  {
    question: "Do you talk to the person directly, or to me?",
    answer:
      "Both, and the balance is up to them. Many people prefer to deal with us themselves and have family kept informed. Others want a relative involved in every step. We follow their lead.",
  },
  {
    question: "How do you handle privacy?",
    answer:
      "We access only what is needed, explain what we're doing, and never keep copies of personal data. The person decides what their family can see. Our privacy policy covers the waitlist too.",
  },
  {
    question: "When does it launch, and where?",
    answer: `${siteConfig.product.launchWindow}, starting in ${siteConfig.product.initialRegions}. ${siteConfig.product.deliveryNote} Waitlist members hear first.`,
  },
  {
    question: "What does it cost?",
    answer: `${siteConfig.product.pricingNote} Joining the waitlist is free and carries no commitment.`,
  },
];
