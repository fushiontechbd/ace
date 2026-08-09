/**
 * Live BDT exchange rates.
 *
 * We fetch from open.er-api.com (free tier, no API key required, supports
 * 162 currencies). The result is cached for one hour by Next.js so we don't
 * hammer the upstream on every request. If the upstream call fails we fall
 * back to a known-good static map so the page never breaks.
 *
 * The figures returned are mid-market rates. The product team has asked us
 * to apply a flat 4 BDT markup before displaying — see RATE_MARKUP_BDT.
 */

export const SUPPORTED_CURRENCIES = [
  "SGD",
  "AED",
  "SAR",
  "MYR",
  "QAR",
  "KWD",
  "OMR",
  "BHD",
  "GBP",
  "USD",
] as const;

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

export type RateMap = Record<SupportedCurrency, number>;

/** Flat markup added to the mid-market rate before display. */
export const RATE_MARKUP_BDT = 4;

/** Last-resort values if the upstream API is unreachable. */
const FALLBACK_RATES: RateMap = {
  SGD: 90.42,
  AED: 33.18,
  SAR: 32.45,
  MYR: 25.7,
  QAR: 33.46,
  KWD: 397.2,
  OMR: 316.85,
  BHD: 322.4,
  GBP: 154.2,
  USD: 122.6,
};

type ErApiResponse = {
  result: "success" | "error";
  rates?: Record<string, number>;
};

export async function fetchBdtRates(): Promise<{
  rates: RateMap;
  liveRates: boolean;
}> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { rates: FALLBACK_RATES, liveRates: false };

    const data = (await res.json()) as ErApiResponse;
    if (data.result !== "success" || !data.rates) {
      return { rates: FALLBACK_RATES, liveRates: false };
    }

    const usdToBdt = data.rates.BDT;
    if (!usdToBdt || !Number.isFinite(usdToBdt) || usdToBdt <= 0) {
      return { rates: FALLBACK_RATES, liveRates: false };
    }

    const out: Partial<RateMap> = {};
    for (const ccy of SUPPORTED_CURRENCIES) {
      const usdToCcy = data.rates[ccy];
      if (usdToCcy && Number.isFinite(usdToCcy) && usdToCcy > 0) {
        // 1 USD = `usdToCcy` units of CCY, and 1 USD = `usdToBdt` BDT.
        // Therefore 1 CCY = usdToBdt / usdToCcy BDT.
        out[ccy] = usdToBdt / usdToCcy;
      } else {
        out[ccy] = FALLBACK_RATES[ccy];
      }
    }
    return { rates: out as RateMap, liveRates: true };
  } catch {
    return { rates: FALLBACK_RATES, liveRates: false };
  }
}
