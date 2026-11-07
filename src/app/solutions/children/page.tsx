import { SolutionPage, solutionMetadata } from "@/components/solution-page";

const slug = "children";

export const metadata = solutionMetadata(slug);

export default function Page() {
  return <SolutionPage slug={slug} />;
}
