import {
  Droplet,
  Sparkles,
  ShowerHead,
  Smile,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface ProductCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  variants?: string[];
  variantNote: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "hair-care",
    name: "Hair Care",
    icon: Droplet,
    tagline: "Shampoos, oils & custom formulas",
    description:
      "23 shampoo formulations developed in our in-house R&D lab and manufactured under GMP conditions — from everyday cleansing to targeted hair-fall and scalp-care variants.",
    variants: [
      "Amla",
      "Hibiscus Shine",
      "Amla Bhringraj",
      "Herbal 7-in-1",
      "Biotin",
      "Keratin",
      "Caffeine Hair Fall Control",
      "Protein Complex",
      "Scalp Renewal",
      "Argan Oil",
      "Silk Protein",
      "Moroccan Oil",
      "Shea Butter Moisture",
      "Anti-Dandruff",
      "Charcoal Detox",
      "Oil Control",
      "Volume Lift",
      "Anti-Frizz",
      "Onion Black Seed",
      "Rice Water",
      "Aloe Hydration",
      "Apple Cider Balance",
      "Peppermint Fresh Scalp",
    ],
    variantNote:
      "Plus a range of hair oil variants and fully custom formulas on request.",
  },
  {
    id: "soap-collection",
    name: "Soap Collection",
    icon: ShowerHead,
    tagline: "Science-formulated artisan soaps",
    description:
      "A wide range of soap formulations developed in-house and manufactured under GMP conditions, built for brands that want a distinctive, reorder-worthy bar.",
    variantNote: "Full variant range available on request — contact us for the current catalogue.",
  },
  {
    id: "skin-care",
    name: "Skin Care",
    icon: Sparkles,
    tagline: "Formulations your customers will reorder",
    description:
      "Moisturizers, serums, and cleansers developed in-house and manufactured under GMP conditions, formulated for performance and repeat purchase.",
    variantNote: "Full variant range available on request — contact us for the current catalogue.",
  },
  {
    id: "lip-care",
    name: "Lip Care",
    icon: Smile,
    tagline: "Balms and treatments",
    description:
      "Lip care formulations developed in-house and manufactured under GMP conditions.",
    variantNote: "Full variant range available on request — contact us for the current catalogue.",
  },
  {
    id: "colour-cosmetics",
    name: "Colour Cosmetics",
    icon: Palette,
    tagline: "Colour formulations built to perform",
    description:
      "Colour cosmetics developed in-house and manufactured under GMP conditions.",
    variantNote: "Full variant range available on request — contact us for the current catalogue.",
  },
];
