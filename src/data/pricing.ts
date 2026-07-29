export type PricingPeriod = 'monthly' | 'annually' | 'lifetime';
export type PricingAmount = number | 'custom' | null;

export interface PricingConfig {
  currency: {
    code: string;
    symbol: string;
    position: 'before' | 'after';
    decimals: number;
  };
  tax: {
    ratePercent: number;
    pricesIncludeTax: boolean;
    defaultShowWithTax: boolean;
    showToggle: boolean;
  };
  periods: PricingPeriod[];
  annualShowsMonthlyEquivalent: boolean;
  defaultCta: {
    labelKey: string;
    href: string;
  };
  features: Array<{ id: string; labelKey: string }>;
  plans: Array<{
    id: string;
    nameKey: string;
    taglineKey: string;
    highlighted?: boolean;
    badgeKey?: string;
    price: Partial<Record<PricingPeriod, PricingAmount>>;
    features: Record<string, string | boolean>;
    cta?: { labelKey: string; href: string };
  }>;
}

export const pricingConfig: PricingConfig = {
  currency: {
    code: 'AZN',
    symbol: '₼',
    position: 'after',
    decimals: 0,
  },
  tax: {
    ratePercent: 0,
    pricesIncludeTax: true,
    defaultShowWithTax: true,
    showToggle: false,
  },
  periods: ['monthly', 'annually'],
  annualShowsMonthlyEquivalent: true,
  defaultCta: {
    labelKey: 'cta-choose',
    href: '/contact',
  },
  features: [
    { id: 'projects', labelKey: 'feature-projects' },
    { id: 'team', labelKey: 'feature-team' },
    { id: 'storage', labelKey: 'feature-storage' },
    { id: 'analytics', labelKey: 'feature-analytics' },
    { id: 'custom-domain', labelKey: 'feature-custom-domain' },
    { id: 'priority-support', labelKey: 'feature-priority-support' },
    { id: 'sla', labelKey: 'feature-sla' },
    { id: 'white-label', labelKey: 'feature-white-label' },
  ],
  plans: [
    {
      id: 'starter',
      nameKey: 'plan-starter-name',
      taglineKey: 'plan-starter-tagline',
      price: {
        monthly: 19,
        annually: 180,
      },
      features: {
        projects: '1 Hesab',
        team: 'Anında',
        storage: '1,000 Mesaj/ay',
        analytics: 'Əsas Üslub',
        'custom-domain': true,
        'priority-support': false,
        sla: false,
        'white-label': false,
      },
      cta: {
        labelKey: 'cta-start-free',
        href: '/contact',
      },
    },
    {
      id: 'pro',
      nameKey: 'plan-pro-name',
      taglineKey: 'plan-pro-tagline',
      highlighted: true,
      badgeKey: 'badge-popular',
      price: {
        monthly: 39,
        annually: 370,
      },
      features: {
        projects: '1 Hesab',
        team: 'Səsli + Şəkil',
        storage: '10,000 Mesaj/ay',
        analytics: 'Xüsusi Persona',
        'custom-domain': true,
        'priority-support': true,
        sla: false,
        'white-label': false,
      },
    },
    {
      id: 'business',
      nameKey: 'plan-business-name',
      taglineKey: 'plan-business-tagline',
      price: {
        monthly: 79,
        annually: 750,
      },
      features: {
        projects: 'Çoxlu Hesab',
        team: 'Səsli + Şəkil',
        storage: 'Sərhədsiz',
        analytics: 'Tam Xüsusi',
        'custom-domain': true,
        'priority-support': true,
        sla: true,
        'white-label': true,
      },
    },
  ],
};