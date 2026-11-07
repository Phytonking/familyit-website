/**
 * Copy for the four solution pages. Outcome-level, no product specifics.
 */

import type { AudienceId } from "@/content/audiences";

export type Solution = {
  id: AudienceId;
  slug: string;
  /** Short label for navigation. */
  navLabel: string;
  /** Page <title> (template appends the site name). */
  title: string;
  /** Meta description, under 160 characters. */
  description: string;
  hero: {
    headline: string;
    lede: string;
  };
  problem: {
    heading: string;
    body: string[];
  };
  solution: {
    heading: string;
    body: string[];
  };
  benefits: {
    heading: string;
    items: { title: string; body: string }[];
  };
  faqs: { question: string; answer: string }[];
  /** Heading above the waitlist form on this page. */
  waitlistHeading: string;
};

export const solutions: Solution[] = [
  {
    id: "seniors",
    slug: "seniors",
    navLabel: "For older relatives",
    title: "Technology care for older relatives",
    description:
      "Patient, ongoing help with phones, tablets and computers so older parents stay connected, safe from scams and independent at home.",
    hero: {
      headline: "She has a lifetime of knowing how things work. Her phone keeps changing the rules.",
      lede:
        "FamilyIT gives older adults a patient, familiar person who looks after their technology over time, so staying in touch and staying safe doesn't depend on a visit from the grandchildren.",
    },
    problem: {
      heading: "Independence shouldn't end at the login screen",
      body: [
        "Most technology is designed by and for people in their twenties. Updates move buttons overnight. Scam calls and fake virus warnings are aimed squarely at older adults, and they work. The result is a slow retreat: the tablet goes in a drawer, video calls stop, and \"I didn't want to bother you\" becomes the most common sentence in the family.",
        "Family members do their best from a distance, but a ten-minute problem can take a weekend to solve over the phone, and nobody is watching between the crises.",
      ],
    },
    solution: {
      heading: "One person who knows their setup, and knows them",
      body: [
        "We start by meeting the person, not the devices. We learn how they like to communicate, what they use every day, and what has gone wrong before. Then we tidy up, write down how everything works in large, plain print, and stay.",
        "Help is unhurried and repeatable. Nobody is made to feel slow. Family can be kept informed as much or as little as the person wants.",
      ],
    },
    benefits: {
      heading: "What changes",
      items: [
        {
          title: "Calls and photos keep coming",
          body: "The connection to family is treated as essential, and fixed first when something breaks.",
        },
        {
          title: "Scams get caught early",
          body: "Suspicious calls, messages and pop-ups have a trusted person to check with before anything is clicked or paid.",
        },
        {
          title: "Confidence comes back",
          body: "Patient, repeated explanations build skills instead of dependence. The tablet comes out of the drawer.",
        },
        {
          title: "Family stops guessing",
          body: "Relatives hear about what matters without having to interrogate anyone about their settings.",
        },
      ],
    },
    faqs: [
      {
        question: "My parent is wary of strangers touching their devices. How do you handle that?",
        answer:
          "Slowly, and on their terms. We introduce ourselves properly, explain everything before we do it, and never take remote control without them watching. Trust is the product; we don't rush it.",
      },
      {
        question: "Can I be involved even though I live far away?",
        answer:
          "Yes. You can be the person who sets things up and receives updates, while your parent deals with us directly day to day. The level of involvement is theirs to choose.",
      },
      {
        question: "What if they don't use much technology at all?",
        answer:
          "That's often where we help most. A phone that reliably makes calls, a way to see photos and a plan for suspicious messages can be the whole job, and that's a good job.",
      },
    ],
    waitlistHeading: "Join the waitlist for an older relative",
  },
  {
    id: "disabilities",
    slug: "disabilities",
    navLabel: "For people with disabilities",
    title: "Technology care for people with disabilities",
    description:
      "Technology set up and looked after around how each person communicates, moves and perceives, with ongoing support that respects independence.",
    hero: {
      headline: "Technology promised access. It delivers settings menus.",
      lede:
        "FamilyIT works with people with disabilities to make their devices fit them, and keeps them fitting as apps, updates and needs change. Person first, always.",
    },
    problem: {
      heading: "Accessibility exists. Someone still has to make it work",
      body: [
        "Modern devices carry remarkable accessibility features: screen readers, switch control, live captions, voice control, magnification, simplified layouts. Very little of it is on by default, much of it breaks with updates, and each app behaves differently. Setting it up well takes expertise most families don't have and most stores don't offer.",
        "When it fails, a person can lose their way of communicating, reading or controlling their home, and the fix is treated as a technical ticket rather than what it is: an interruption to someone's independence.",
      ],
    },
    solution: {
      heading: "Set up around the person, maintained as life changes",
      body: [
        "We start with how someone already communicates, moves and perceives, and configure devices to match, working alongside any therapists, support workers or family they choose to involve. We document the setup so it can be restored quickly, and we check in as needs and software evolve.",
        "Support is delivered in the way the person prefers: text, voice, video, in person, or through a trusted support person. We follow the person's lead on how much anyone else is involved.",
      ],
    },
    benefits: {
      heading: "What changes",
      items: [
        {
          title: "Devices that actually fit",
          body: "Accessibility settings tuned to the individual, across every device and the apps they rely on.",
        },
        {
          title: "Nothing is lost to an update",
          body: "Setups are documented and restored quickly when software changes break them.",
        },
        {
          title: "Support in your own channel",
          body: "Help arrives in whatever form works: typed, spoken, signed over video, or via a support person.",
        },
        {
          title: "Independence, not oversight",
          body: "The person decides who is informed and who can help. We support autonomy rather than monitoring.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you work with people with cognitive and learning disabilities as well as physical and sensory ones?",
        answer:
          "Yes. The approach is the same: start from how the person communicates and what they want to do, build the setup around that, and support in a consistent, predictable way.",
      },
      {
        question: "Can you coordinate with my occupational therapist or support worker?",
        answer:
          "Yes, with your permission. Good accessibility setups are a team effort, and we'd rather build on recommendations you already trust than start from scratch.",
      },
      {
        question: "Will you push me toward new devices?",
        answer:
          "No. We start with what you own and what already works for you. If something would genuinely help, we'll say so plainly and leave the decision to you.",
      },
    ],
    waitlistHeading: "Join the waitlist for accessibility-focused care",
  },
  {
    id: "children",
    slug: "children",
    navLabel: "For children",
    title: "Safer technology for children",
    description:
      "Parental controls finished properly, safety settings kept current and honest guidance for families, so children explore online with peace of mind at home.",
    hero: {
      headline: "You read the parenting guide. The settings were still six menus deep.",
      lede:
        "FamilyIT helps families make children's devices safer and keep them that way, with age-appropriate settings that are actually finished and honest guidance as kids grow.",
    },
    problem: {
      heading: "Safety features are everywhere and finished nowhere",
      body: [
        "Every console, tablet, app and school laptop has its own parental controls, each in a different place and each changed by the next update. Most families get partway through, get interrupted, and hope for the best. Meanwhile games add chat, apps add purchases, and children are better at finding workarounds than anyone expects.",
        "The stakes are real: contact from strangers, content that isn't age-appropriate, bills nobody authorised, and sleep lost to screens that were supposed to be off.",
      ],
    },
    solution: {
      heading: "Settings that get finished, and stay finished",
      body: [
        "We set up each device and account for the child's age, explain to parents what was done and why, and keep the setup current as apps and the child change. We also help families have the conversations that settings can't replace, with honest, non-alarmist guidance.",
        "We never surveil children or read their messages. We configure safety and give parents clear, proportionate visibility that they can explain to their kids.",
      ],
    },
    benefits: {
      heading: "What changes",
      items: [
        {
          title: "Every device, done properly",
          body: "Consoles, tablets, phones and school laptops configured for the child's age, with nothing left half-finished.",
        },
        {
          title: "Current, not set-and-forget",
          body: "Settings reviewed as apps update and children grow, so protection keeps pace.",
        },
        {
          title: "Peace of mind without spying",
          body: "Proportionate visibility parents can be open about, instead of secret monitoring that erodes trust.",
        },
        {
          title: "Fewer arguments",
          body: "Clear, consistent limits across devices mean fewer negotiations at bedtime.",
        },
      ],
    },
    faqs: [
      {
        question: "What ages do you cover?",
        answer:
          "From a child's first shared tablet through to teenagers managing their own phones. The settings and the conversation change with age, and so does our advice.",
      },
      {
        question: "Will my child know what has been set up?",
        answer:
          "We recommend they do, in an age-appropriate way. Children accept limits better when they understand them, and openness protects the relationship.",
      },
      {
        question: "Can you help with devices from school?",
        answer:
          "Within what the school allows, yes. We can also help you understand what the school has already configured so home and school rules line up.",
      },
    ],
    waitlistHeading: "Join the waitlist for your family",
  },
  {
    id: "care-centers",
    slug: "care-centers",
    navLabel: "For care centers",
    title: "Resident technology care for care centers",
    description:
      "Managed technology support for residents of care homes and day centers: staff time protected, residents connected to families, one accountable partner.",
    hero: {
      headline: "Your staff trained for care. They spend their shift on Wi-Fi passwords.",
      lede:
        "FamilyIT gives care centers an accountable partner for residents' personal technology, so staff get their time back, residents stay connected to their families and families stop calling the front desk about tablets.",
    },
    problem: {
      heading: "Resident technology is nobody's job, so it becomes everyone's",
      body: [
        "Residents arrive with phones, tablets, hearing devices and streaming subscriptions. Families expect video calls to just work. Your IT provider covers the nurse station, not Mrs. Alvarez's iPad. The gap is filled by care staff, activity coordinators and whoever is on shift, at the expense of the work they were hired for.",
        "The cost is hidden but real: staff hours, family frustration, safeguarding risk from scams targeting residents, and isolation when a device quietly stops working.",
      ],
    },
    solution: {
      heading: "A managed service for resident technology",
      body: [
        "FamilyIT takes ownership of residents' personal devices and connections as a service to your center. We onboard each resident respectfully, keep their family informed where they wish, and handle the day-to-day so your team doesn't have to.",
        "For leadership, that means one partner, clear reporting and a story for families about how you keep their loved ones connected. For staff, it means fewer interruptions and a number to hand over instead of a problem to absorb.",
      ],
    },
    benefits: {
      heading: "What changes",
      items: [
        {
          title: "Staff time returns to care",
          body: "Technology requests go to us, not to whoever is passing the lounge.",
        },
        {
          title: "Residents stay connected",
          body: "Video calls, photos and messages kept working, so family contact doesn't depend on a good day.",
        },
        {
          title: "Families kept in the loop",
          body: "Relatives hear from us directly about their loved one's technology, on the terms the resident sets.",
        },
        {
          title: "Safeguarding support",
          body: "Scam attempts on residents are caught early and reported to your team.",
        },
      ],
    },
    faqs: [
      {
        question: "How does this fit alongside our existing IT provider?",
        answer:
          "We don't touch your clinical or corporate systems. We cover residents' personal devices and the connectivity they need, and we coordinate with your IT provider where the two meet, such as resident Wi-Fi.",
      },
      {
        question: "Who pays: the center or the family?",
        answer:
          "We're designing for both models and will discuss what suits your center during early access. Join the waitlist and tell us about your community so we can follow up appropriately.",
      },
      {
        question: "Can you work with residents who have dementia or other cognitive conditions?",
        answer:
          "Yes, with care and in partnership with your staff and the family. Simple, consistent setups and gentle, repeated support are at the heart of how we work.",
      },
    ],
    waitlistHeading: "Join the waitlist for your care center",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
