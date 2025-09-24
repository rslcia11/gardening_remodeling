
import {
  Leaf,
  Droplets,
  Shovel,
  Paintbrush,
  Hammer,
  PenToolIcon as Tool,
  Snowflake,
  AlertTriangle,
  Truck,
} from "lucide-react";

export const services = {
  gardening: [
    {
      icon: <Leaf className="service-icon-svg" />,
      title: "Lawn Maintenance",
      description:
        "We provide professional cutting, fertilization, and customized treatments to keep your lawn green and healthy all year round.",
      features: ["Professional lawn cutting", "Scheduled fertilization", "Weed treatment"],
    },
    {
      icon: <Droplets className="service-icon-svg" />,
      title: "Irrigation Systems",
      description:
        "We install and repair efficient irrigation systems that ensure proper hydration of your garden, saving water and keeping your plants in optimal condition.",
      features: [
        "Installation of automatic sprinkler systems",
        "Repair and maintenance of existing systems",
        "Seasonal system adjustments and optimization",
      ],
    },
    {
      icon: <Shovel className="service-icon-svg" />,
      title: "Garden Maintenance",
      description:
        "We keep your garden looking its best year-round with professional care tailored to your landscape",
      features: ["Soil aeration", "Removal of leaves and branches", "Shrub pruning"],
    },
  ],
  remodeling: [
    {
      icon: <Paintbrush className="service-icon-svg" />,
      title: "Interior Remodeling",
      description:
        "We completely transform your interior spaces with modern and functional designs that reflect your personal style and improve your daily quality of life.",
      features: ["Kitchen and bathroom renovation", "Floor and finish installation", "Custom space design"],
    },
    {
      icon: <Hammer className="service-icon-svg" />,
      title: "Construction and Additions",
      description:
        "We carry out construction and expansion projects that increase the value of your property, from new rooms to complete structures with the highest quality standards.",
      features: ["Home additions", "Structure construction", "Facade renovation"],
    },
    {
      icon: <Tool className="service-icon-svg" />,
      title: "Finishes and Details",
      description:
        "We specialize in high-quality finishes and details that make a difference, from professional painting to custom carpentry.",
      features: ["Interior and exterior painting", "Carpentry and custom details"],
    },
  ],
  winter: [
    {
      icon: <Snowflake className="service-icon-svg" />,
      title: "Snow Removal",
      description:
        "We keep your spaces safe and accessible during winter with our professional snow removal service for residences and businesses, available 24/7.",
      features: ["Driveway and sidewalk clearing", "Roof snow removal", "24/7 emergency service"],
    },
    {
      icon: <AlertTriangle className="service-icon-svg" />,
      title: "De-icing Services",
      description:
        "We prevent the formation of dangerous ice with professional applications of salt and other de-icing agents, keeping your spaces safe throughout the winter.",
      features: ["Salt and sand application", "Preventive treatment", "Eco-friendly solutions available"],
    },
    {
      icon: <Truck className="service-icon-svg" />,
      title: "Winter Preparation",
      description:
        "We prepare your property to face winter with comprehensive services that include plant protection, pipe insulation, and preventive maintenance.",
      features: ["Garden and plant protection", "Heating system maintenance", "Preventive inspection"],
    },
  ],
};
