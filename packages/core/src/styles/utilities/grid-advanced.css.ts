import { globalStyle } from '@vanilla-extract/css';

// Grid rows
globalStyle('.grid-rows-1', { gridTemplateRows: 'repeat(1, minmax(0, 1fr))' });
globalStyle('.grid-rows-2', { gridTemplateRows: 'repeat(2, minmax(0, 1fr))' });
globalStyle('.grid-rows-3', { gridTemplateRows: 'repeat(3, minmax(0, 1fr))' });
globalStyle('.grid-rows-4', { gridTemplateRows: 'repeat(4, minmax(0, 1fr))' });
globalStyle('.grid-rows-5', { gridTemplateRows: 'repeat(5, minmax(0, 1fr))' });
globalStyle('.grid-rows-6', { gridTemplateRows: 'repeat(6, minmax(0, 1fr))' });
globalStyle('.grid-rows-none', { gridTemplateRows: 'none' });

// Row span
globalStyle('.row-span-1', { gridRow: 'span 1 / span 1' });
globalStyle('.row-span-2', { gridRow: 'span 2 / span 2' });
globalStyle('.row-span-3', { gridRow: 'span 3 / span 3' });
globalStyle('.row-span-4', { gridRow: 'span 4 / span 4' });
globalStyle('.row-span-5', { gridRow: 'span 5 / span 5' });
globalStyle('.row-span-6', { gridRow: 'span 6 / span 6' });
globalStyle('.row-span-full', { gridRow: '1 / -1' });

// Row start/end
[1, 2, 3, 4, 5, 6, 7].forEach(value => {
  globalStyle(`.row-start-${value}`, { gridRowStart: `${value}` });
  globalStyle(`.row-end-${value}`, { gridRowEnd: `${value}` });
});
globalStyle('.row-start-auto', { gridRowStart: 'auto' });
globalStyle('.row-end-auto', { gridRowEnd: 'auto' });

// Grid flow
globalStyle('.grid-flow-row', { gridAutoFlow: 'row' });
globalStyle('.grid-flow-col', { gridAutoFlow: 'column' });
globalStyle('.grid-flow-dense', { gridAutoFlow: 'dense' });
globalStyle('.grid-flow-row-dense', { gridAutoFlow: 'row dense' });
globalStyle('.grid-flow-col-dense', { gridAutoFlow: 'column dense' });

// Auto columns
globalStyle('.auto-cols-auto', { gridAutoColumns: 'auto' });
globalStyle('.auto-cols-min', { gridAutoColumns: 'min-content' });
globalStyle('.auto-cols-max', { gridAutoColumns: 'max-content' });
globalStyle('.auto-cols-fr', { gridAutoColumns: 'minmax(0, 1fr)' });

// Auto rows
globalStyle('.auto-rows-auto', { gridAutoRows: 'auto' });
globalStyle('.auto-rows-min', { gridAutoRows: 'min-content' });
globalStyle('.auto-rows-max', { gridAutoRows: 'max-content' });
globalStyle('.auto-rows-fr', { gridAutoRows: 'minmax(0, 1fr)' });