import { describe, expect, it } from 'vitest';
import { formatCurrency, formatDate } from './format';

describe('format', () => {
  it('formats currency in USD', () => {
    expect(formatCurrency(165.5)).toBe('$165.50');
  });

  it('treats API dates without a zone as UTC', () => {
    expect(formatDate('2026-01-21T23:30:00')).toBe('2026-01-21');
  });
});
