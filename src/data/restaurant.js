// Edit this file only: all site content lives here.
export const restaurant = {
  name: "Wiki Burger",
  tagline: "طعم يستاهل التجربة",
  intro: "برجر، ساندوتشات فراخ وبطاطس مقرمشة في قلب بنها.",
  address: "شارع 2 - مبنى 3، محافظة القليوبية، مصر",
  plusCode: "F5GH+MC Banha 2",
  phone: "010 31188600",
  phoneHref: "tel:01031188600",
  hours: "مفتوح حتى حوالي 2:30 صباحًا",
  rating: 4.8,
  reviews: 159,
  priceRange: "E£1–200 للفرد",
  services: ["تناول في المطعم", "تيك أواي"],
  // Replace with the real embed URL from Google Maps (Share > Embed a map)
  mapEmbed: "https://www.google.com/maps?q=F5GH%2BMC+Banha&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=F5GH%2BMC+Banha",
};

// Placeholder menu: replace name/desc/price/image. Empty image shows an emoji placeholder.
const item = (emoji, n) => ({ emoji, name: `منتج ${n} (مثال)`, desc: "وصف مختصر يُستبدل لاحقًا", price: "00", image: "", badge: "" });
export const menu = {
  "برجر": [item("🍔", 1), { ...item("🍔", 2), badge: "الأكثر طلبًا" }, item("🍔", 3)],
  "فراخ": [item("🍗", 1), item("🍗", 2), item("🍗", 3)],
  "ساندوتشات": [item("🥪", 1), item("🌯", 2), item("🥪", 3)],
  "إضافات": [item("🍟", 1), item("🥤", 2), item("🧅", 3)],
};

export const features = [
  { icon: "🍔", title: "برجر وفراخ", text: "تخصصنا برجر وساندوتشات فراخ." },
  { icon: "🍽️", title: "تناول في المطعم", text: "مكان مريح وهادئ للقعدة." },
  { icon: "🛍️", title: "تيك أواي", text: "اطلب وخد وجبتك معاك." },
  { icon: "🌙", title: "مفتوح لآخر الليل", text: "نستقبلك حتى حوالي 2:30 ص." },
];

export const reviewThemes = [
  { icon: "🍔", text: "طعم برجر رائع" },
  { icon: "🍗", text: "فراخ مقرمشة" },
  { icon: "😊", text: "طاقم ودود" },
  { icon: "🛋️", text: "أجواء مريحة ولطيفة" },
  { icon: "✨", text: "أكل نظيف" },
];

// Replace "image" with real photo paths (e.g. /images/burger.jpg)
export const gallery = [
  { emoji: "🍔", label: "برجر", image: "" },
  { emoji: "🥪", label: "ساندوتش فراخ", image: "" },
  { emoji: "🍟", label: "بطاطس", image: "" },
  { emoji: "🛋️", label: "المطعم من الداخل", image: "" },
  { emoji: "🍗", label: "فراخ مقرمشة", image: "" },
  { emoji: "🥤", label: "مشروبات", image: "" },
];

export const nav = [
  { href: "#about", label: "عن المطعم" }, { href: "#menu", label: "المنيو" },
  { href: "#reviews", label: "التقييمات" }, { href: "#gallery", label: "المعرض" },
  { href: "#location", label: "الموقع" },
];
