import { redirect } from "next/navigation";

export default function RulesAndRegulationsPage() {
  redirect("/programs?tab=rules-and-regulations");
}