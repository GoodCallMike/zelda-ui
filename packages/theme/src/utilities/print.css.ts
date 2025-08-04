import { globalStyle } from '@vanilla-extract/css';

// Print display utilities
globalStyle('@media print { .print\\\\\\\\:block }', { display: 'block' });
globalStyle('@media print { .print\\\\\\\\:inline-block }', {
  display: 'inline-block',
});
globalStyle('@media print { .print\\\\\\\\:inline }', { display: 'inline' });
globalStyle('@media print { .print\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@media print { .print\\\\\\\\:inline-flex }', {
  display: 'inline-flex',
});
globalStyle('@media print { .print\\\\\\\\:table }', { display: 'table' });
globalStyle('@media print { .print\\\\\\\\:inline-table }', {
  display: 'inline-table',
});
globalStyle('@media print { .print\\\\\\\\:table-caption }', {
  display: 'table-caption',
});
globalStyle('@media print { .print\\\\\\\\:table-cell }', {
  display: 'table-cell',
});
globalStyle('@media print { .print\\\\\\\\:table-column }', {
  display: 'table-column',
});
globalStyle('@media print { .print\\\\\\\\:table-column-group }', {
  display: 'table-column-group',
});
globalStyle('@media print { .print\\\\\\\\:table-footer-group }', {
  display: 'table-footer-group',
});
globalStyle('@media print { .print\\\\\\\\:table-header-group }', {
  display: 'table-header-group',
});
globalStyle('@media print { .print\\\\\\\\:table-row-group }', {
  display: 'table-row-group',
});
globalStyle('@media print { .print\\\\\\\\:table-row }', {
  display: 'table-row',
});
globalStyle('@media print { .print\\\\\\\\:flow-root }', {
  display: 'flow-root',
});
globalStyle('@media print { .print\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@media print { .print\\\\\\\\:inline-grid }', {
  display: 'inline-grid',
});
globalStyle('@media print { .print\\\\\\\\:contents }', {
  display: 'contents',
});
globalStyle('@media print { .print\\\\\\\\:list-item }', {
  display: 'list-item',
});
globalStyle('@media print { .print\\\\\\\\:hidden }', { display: 'none' });

// Print colors
globalStyle('@media print { .print\\\\\\\\:text-black }', { color: '#000000' });
globalStyle('@media print { .print\\\\\\\\:text-white }', { color: '#ffffff' });
globalStyle('@media print { .print\\\\\\\\:text-gray-500 }', {
  color: '#6b7280',
});
globalStyle('@media print { .print\\\\\\\\:text-gray-600 }', {
  color: '#4b5563',
});
globalStyle('@media print { .print\\\\\\\\:text-gray-700 }', {
  color: '#374151',
});
globalStyle('@media print { .print\\\\\\\\:text-gray-800 }', {
  color: '#1f2937',
});
globalStyle('@media print { .print\\\\\\\\:text-gray-900 }', {
  color: '#111827',
});

globalStyle('@media print { .print\\\\\\\\:bg-white }', {
  backgroundColor: '#ffffff',
});
globalStyle('@media print { .print\\\\\\\\:bg-black }', {
  backgroundColor: '#000000',
});
globalStyle('@media print { .print\\\\\\\\:bg-gray-50 }', {
  backgroundColor: '#f9fafb',
});
globalStyle('@media print { .print\\\\\\\\:bg-gray-100 }', {
  backgroundColor: '#f3f4f6',
});
globalStyle('@media print { .print\\\\\\\\:bg-gray-200 }', {
  backgroundColor: '#e5e7eb',
});
globalStyle('@media print { .print\\\\\\\\:bg-gray-300 }', {
  backgroundColor: '#d1d5db',
});

// Print page breaks
globalStyle('@media print { .print\\\\\\\\:break-before-auto }', {
  breakBefore: 'auto',
});
globalStyle('@media print { .print\\\\\\\\:break-before-avoid }', {
  breakBefore: 'avoid',
});
globalStyle('@media print { .print\\\\\\\\:break-before-all }', {
  breakBefore: 'all',
});
globalStyle('@media print { .print\\\\\\\\:break-before-avoid-page }', {
  breakBefore: 'avoid-page',
});
globalStyle('@media print { .print\\\\\\\\:break-before-page }', {
  breakBefore: 'page',
});
globalStyle('@media print { .print\\\\\\\\:break-before-left }', {
  breakBefore: 'left',
});
globalStyle('@media print { .print\\\\\\\\:break-before-right }', {
  breakBefore: 'right',
});
globalStyle('@media print { .print\\\\\\\\:break-before-column }', {
  breakBefore: 'column',
});

globalStyle('@media print { .print\\\\\\\\:break-inside-auto }', {
  breakInside: 'auto',
});
globalStyle('@media print { .print\\\\\\\\:break-inside-avoid }', {
  breakInside: 'avoid',
});
globalStyle('@media print { .print\\\\\\\\:break-inside-avoid-page }', {
  breakInside: 'avoid-page',
});
globalStyle('@media print { .print\\\\\\\\:break-inside-avoid-column }', {
  breakInside: 'avoid-column',
});

globalStyle('@media print { .print\\\\\\\\:break-after-auto }', {
  breakAfter: 'auto',
});
globalStyle('@media print { .print\\\\\\\\:break-after-avoid }', {
  breakAfter: 'avoid',
});
globalStyle('@media print { .print\\\\\\\\:break-after-all }', {
  breakAfter: 'all',
});
globalStyle('@media print { .print\\\\\\\\:break-after-avoid-page }', {
  breakAfter: 'avoid-page',
});
globalStyle('@media print { .print\\\\\\\\:break-after-page }', {
  breakAfter: 'page',
});
globalStyle('@media print { .print\\\\\\\\:break-after-left }', {
  breakAfter: 'left',
});
globalStyle('@media print { .print\\\\\\\\:break-after-right }', {
  breakAfter: 'right',
});
globalStyle('@media print { .print\\\\\\\\:break-after-column }', {
  breakAfter: 'column',
});
