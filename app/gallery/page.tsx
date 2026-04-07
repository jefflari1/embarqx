import type { Metadata } from "next";
import { GalleryPageContent } from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery — The World EmbarqX Creates",
  description:
    "An immersive visual preview of the atmosphere, scale, and emotion of premium EmbarqX themed cruise experiences.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
