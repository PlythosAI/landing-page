import type { Metadata } from "next";
import BusinessSolutionsClientPage from "./BusinessSolutionsClientPage";

export const metadata: Metadata = {
  title: "PlythosAI - Business Solutions",
  description: "Customized AI solutions for your business needs.",
  icons: {
    icon: "https://storage.googleapis.com/cosmic-project-image-assets/images/64edf6ff-8552-43bd-a445-183f57f441b5/Group_152.png",
  },
};

export default function BusinessSolutionsPage() {
  return <BusinessSolutionsClientPage />;
}