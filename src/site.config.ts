export const SITE_CONFIG = {
  title: "Botaz AI - Avtomatik Satış və Müştəri Xidməti",
  url: "https://botaz.online",
  whatsappNumber: "994513985171",
  whatsappDefaultMessage: "Salam, Botaz AI haqqında ətraflı məlumat almaq istəyirəm.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },
  // Planlara uyğun dinamik WhatsApp linki yaradan funksiya
  getWhatsappUrlForPlan(planName: string, periodType: string) {
    const periodText = periodType === 'annual' ? 'İllik' : 'Aylıq';
    const message = `Salam, Botaz AI-ın "${planName}" (${periodText}) planı ilə maraqlanıram. Ətraflı məlumat almaq istəyirəm.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
};