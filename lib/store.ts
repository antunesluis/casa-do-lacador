export const store = {
  name: "Casa do Laçador",
  description: "Artigos gaúchos, pilchas e vestimenta tradicional em Tenente Portela, RS.",
  phone: "+5555999586442",
  phoneDisplay: "(55) 99958-6442",
  street: "Rua Tapuias, 95",
  city: "Tenente Portela",
  region: "RS",
  instagram: "https://www.instagram.com/casadolacadortp/",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.street}, ${store.city}, ${store.region}`)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${store.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
