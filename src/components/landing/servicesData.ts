import {
  Sun,
  Truck,
  Construction,
  Grid3x3,
  Square,
  Building2,
  Box,
  Anchor,
  Ruler,
  Calculator,
  Route as RouteIcon,
  Droplets,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import tar from "@/assets/service-tar.jpg";
import paving from "@/assets/service-paving.jpg";
import roadworks from "@/assets/service-roadworks.jpg";
import kerbs from "@/assets/service-kerbs.jpg";
import work1 from "@/assets/client/work-1.jpeg.asset.json";
import work2 from "@/assets/client/work-2.jpeg.asset.json";
import work4 from "@/assets/client/work-4.jpeg.asset.json";
import work5 from "@/assets/client/work-5.jpeg.asset.json";
import work6 from "@/assets/client/work-6.jpeg.asset.json";
import work7 from "@/assets/client/work-7.jpeg.asset.json";
import work8 from "@/assets/client/work-8.jpeg.asset.json";
import work9 from "@/assets/client/work-9.jpeg.asset.json";

export type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  img: string;
};

export const services: Service[] = [
  {
    slug: "solar-installations",
    title: "Solar Installations",
    desc: "Grid-tied and hybrid solar power systems for homes, businesses and remote sites.",
    icon: Sun,
    img: work7.url,
  },
  {
    slug: "plant-hire",
    title: "Plant Hire",
    desc: "Reliable construction plant and equipment for hire — operated or dry-hire.",
    icon: Truck,
    img: work4,
  },
  {
    slug: "tar-surfacing",
    title: "Tar Surfacing",
    desc: "Premium hot-mix asphalt surfacing engineered for durability and a flawless finish.",
    icon: Construction,
    img: tar,
  },
  {
    slug: "paving",
    title: "Paving",
    desc: "Interlocking and decorative paving for driveways, walkways and commercial spaces.",
    icon: Grid3x3,
    img: paving,
  },
  {
    slug: "kerbing",
    title: "Kerbing",
    desc: "Precision kerbing for roads, parking areas and stormwater control.",
    icon: Square,
    img: work6,
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    desc: "Turnkey building works from foundations to handover — residential and commercial.",
    icon: Building2,
    img: kerbs,
  },
  {
    slug: "concrete-works",
    title: "Concrete Works",
    desc: "Reinforced concrete slabs, foundations, retaining walls and structural pours.",
    icon: Box,
    img: work8,
  },
  {
    slug: "rigging",
    title: "Rigging",
    desc: "Certified rigging for heavy lifts, plant relocation and structural installations.",
    icon: Anchor,
    img: work5,
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    desc: "Design, analysis and certification of safe, code-compliant structures.",
    icon: Ruler,
    img: roadworks,
  },
  {
    slug: "quantitative-analysis",
    title: "Quantitative Analysis",
    desc: "Detailed BOQs, cost estimation and quantity surveying to keep budgets on track.",
    icon: Calculator,
    img: work2,
  },
  {
    slug: "road-works",
    title: "Road Works",
    desc: "End-to-end road construction, rehabilitation, line-marking and resurfacing.",
    icon: RouteIcon,
    img: work1,
  },
  {
    slug: "sewage",
    title: "Sewage",
    desc: "Sewer reticulation, drainage and wastewater infrastructure done to spec.",
    icon: Droplets,
    img: work6,
  },
  {
    slug: "cleaning-services",
    title: "Cleaning Services",
    desc: "Post-construction, industrial and routine cleaning for sites and facilities.",
    icon: Sparkles,
    img: work9,
  },
];
