const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatCurrency(value: number): string {
  return currency.format(value);
}

/** Dates from the API are UTC ISO strings without a zone suffix; treat them as UTC. */
export function formatDate(isoUtc: string): string {
  const date = new Date(isoUtc.endsWith('Z') ? isoUtc : `${isoUtc}Z`);
  return date.toISOString().slice(0, 10);
}
