// lib/contact.ts

export type ContactDetail = {
  label: string;
  body: string;
};

export type TravelCard = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  details: ContactDetail[];
  cta: { label: string; href: string };
};

export const CONTACT = {
  intro:
    "Reach out to us for admissions, course details, or any queries. We're here to help you discover more about Alva's Institute of Medical Science and Research Centre.",
  call: {
    label: "Call Us",
    href: "tel:+919379525826",
    display: "+91 93795 25826",
  },
  email: {
    label: "Send Email",
    href: "mailto:office@aimsarc.org",
    display: "office@aimsarc.org",
  },
  office: {
    title: "Medical College Office",
    subtitle: "Alva's Institute of Medical Sciences & Research Centre",
    address:
      "Alva's Institute of Medical Science and Research Centre, Mijar, Moodbidri, Dakshina Kannada – 574227, Karnataka, India.",
    mobile: {
      label: "Mobile",
      display: "9448130574",
      href: "tel:+919448130574",
    },
    email: {
      display: "office@aimsarc.org",
      href: "mailto:office@aimsarc.org",
    },
  },
  travel: [
    {
      id: "railway",
      title: "Nearest Railway Station",
      subtitle: "Mangaluru Junction (MAJN) / Central (MAQ)",
      badge: "32 KM Distance • ~45 Min Drive",
      details: [
        {
          label: "Primary Hub",
          body: "Connects major express routes via Konkan Railway & South Western Railway.",
        },
        {
          label: "Travel & Transport",
          body: "Direct prepaid taxis and frequent express buses connect the station straight to Mijar.",
        },
      ],
      cta: {
        label: "View Train Route Directions",
        href: "https://www.google.com/maps/dir/Mangaluru+Junction+railway+station/13.0181825,74.9691416",
      },
    },
    {
      id: "airport",
      title: "Nearest Airport",
      subtitle: "Mangaluru International Airport (IXE)",
      badge: "22 KM Distance • ~35 Min Drive",
      details: [
        {
          label: "Flight Network",
          body: "Direct daily domestic flights (Mumbai, Bengaluru, Delhi) & international Gulf routes.",
        },
        {
          label: "Highway Access",
          body: "Smooth ~35-min drive via NH 169 with official airport cabs and rentals directly to campus.",
        },
      ],
      cta: {
        label: "View Airport Route Directions",
        href: "https://www.google.com/maps/dir/Mangaluru+International+Airport,+Bajpe+Main+Rd,+Kenjar,+Mangaluru,+Karnataka+574142/13.0181825,74.9691416",
      },
    },
  ] as TravelCard[],
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4707.928662359481!2d74.97006163094092!3d13.020080124886903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4ab7d71aaa709%3A0xeb982b8e9454d721!2sAlva%27s%20Institute%20of%20Medical%20Science%20and%20Research%20Center!5e1!3m2!1sen!2sin!4v1787042760720!5m2!1sen!2sin",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=13.018361,74.969028",
    appleMaps:
      "https://maps.apple.com/?ll=13.018361,74.969028&q=Alva%27s+Institute+of+Medical+Science+and+Research+Centre",
  },
};
