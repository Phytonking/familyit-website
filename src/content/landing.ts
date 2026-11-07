/**
 * Marketing copy for the landing page. Nothing here depends on real-world
 * facts (phone, address, prices); those live in `src/config/site.ts`.
 */

import type { IconName } from "@/components/icons";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  examples: string[];
};

export const services: Service[] = [
  {
    icon: "wifi",
    title: "Home Wi-Fi and networking",
    description:
      "Dead spots, dropouts and slow streaming fixed for good. We survey your home, place or replace gear, and secure the whole network.",
    examples: ["Mesh Wi-Fi setup", "Router security", "Guest networks"],
  },
  {
    icon: "devices",
    title: "Device setup and troubleshooting",
    description:
      "New phone, laptop, tablet or printer? We move your data, connect everything and make sure it all talks to each other.",
    examples: ["Data transfer", "Printer setup", "Slow computer tune-ups"],
  },
  {
    icon: "shield",
    title: "Parental controls and online safety",
    description:
      "Age-appropriate screen time, content filters and app limits set up across every device, explained so you stay in control.",
    examples: ["Screen Time and Family Link", "Content filters", "Safe gaming"],
  },
  {
    icon: "lock",
    title: "Backups and passwords",
    description:
      "Never lose photos or get locked out again. We set up automatic backups and a password manager the whole family can use.",
    examples: ["Photo backups", "Password managers", "Two-factor login"],
  },
  {
    icon: "heart",
    title: "Help for older relatives",
    description:
      "Patient, unhurried support for parents and grandparents: video calls, large text, scam awareness and simple written guides.",
    examples: ["Video calling", "Accessibility settings", "Scam protection"],
  },
  {
    icon: "home",
    title: "Smart-home setup",
    description:
      "Doorbells, thermostats, lights and speakers installed, connected and working together, with privacy settings sorted.",
    examples: ["Smart speakers", "Cameras and doorbells", "Thermostats"],
  },
];

export const steps = [
  {
    title: "Tell us what's going on",
    description:
      "Call, email or use the form below. Describe the problem in your own words. No tech vocabulary needed.",
  },
  {
    title: "Pick remote or in-home",
    description:
      "Many issues are solved in a quick screen-share session. For Wi-Fi, new gear or hands-on jobs, we come to you.",
  },
  {
    title: "We fix it and explain it",
    description:
      "You get a working setup plus a short, plain-English summary so you know what changed and what to do next time.",
  },
];

export const trustPoints: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "chat",
    title: "Plain English, always",
    description:
      "We explain what we're doing as we go and never make you feel silly for asking.",
  },
  {
    icon: "check",
    title: "No fix, no fee",
    description:
      "If we can't solve the problem you booked us for, you don't pay for the session.",
  },
  {
    icon: "clock",
    title: "Patient by design",
    description:
      "Sessions are never rushed. Older relatives and nervous beginners are our speciality.",
  },
  {
    icon: "badge",
    title: "Background-checked technicians",
    description:
      "Everyone who visits your home is vetted, insured and happy to show ID at the door.",
  },
  {
    icon: "lock",
    title: "Your privacy respected",
    description:
      "We only access what's needed to fix the problem and we never keep copies of your data.",
  },
  {
    icon: "sparkle",
    title: "Follow-up included",
    description:
      "Something not quite right afterwards? Every job comes with 30 days of follow-up support.",
  },
];

export const faqs = [
  {
    question: "Do you offer remote support or do you need to visit?",
    answer:
      "Both. Most software problems, account issues and settings can be handled in a secure remote session where you watch everything we do. For Wi-Fi, hardware installs and smart-home work we come to your home.",
  },
  {
    question: "Which devices and brands do you support?",
    answer:
      "Windows and Mac computers, iPhone and Android phones, iPads and tablets, smart TVs, printers, game consoles, and popular smart-home brands such as Google, Amazon, Apple, Ring and Nest.",
  },
  {
    question: "How quickly can you help?",
    answer:
      "Remote sessions are often available the same day. In-home visits are usually scheduled within two to three working days, with priority slots for care-plan members.",
  },
  {
    question: "Is remote access safe?",
    answer:
      "Yes. We use a one-time session code that you start and can end at any moment. You see every click on your screen, and access disappears completely when the session finishes.",
  },
  {
    question: "Can you help my parents even if I live far away?",
    answer:
      "Absolutely. Many of our customers book on behalf of a relative. We coordinate with you, work patiently with them, and send you both a summary afterwards.",
  },
  {
    question: "What happens if you can't fix the problem?",
    answer:
      "If we can't solve the issue you booked us for, you don't pay for that session. If the fix needs a part or a replacement device, we'll give you honest advice on what to buy and help set it up.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No. Single sessions and home visits are pay-as-you-go. The Family Care Plan is month to month and you can cancel any time.",
  },
];
