import { globalStyle } from '@vanilla-extract/css';

// Container type
globalStyle('.\\\\\\\\@container', { containerType: 'inline-size' });
globalStyle('.\\\\\\\\@container\\\\/normal', { containerType: 'normal' });
globalStyle('.\\\\\\\\@container\\\\/size', { containerType: 'size' });

// Container queries - xs (320px)
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:text-sm }', { fontSize: '0.875rem' });
globalStyle('@container (min-width: 20rem) { .\\\\\\\\@xs\\\\\\\\:text-base }', { fontSize: '1rem' });

// Container queries - sm (384px)
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:text-base }', { fontSize: '1rem' });
globalStyle('@container (min-width: 24rem) { .\\\\\\\\@sm\\\\\\\\:text-lg }', { fontSize: '1.125rem' });

// Container queries - md (448px)
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:grid-cols-2 }', { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' });
globalStyle('@container (min-width: 28rem) { .\\\\\\\\@md\\\\\\\\:text-lg }', { fontSize: '1.125rem' });

// Container queries - lg (512px)
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:grid-cols-3 }', { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' });
globalStyle('@container (min-width: 32rem) { .\\\\\\\\@lg\\\\\\\\:text-xl }', { fontSize: '1.25rem' });

// Container queries - xl (576px)
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:grid-cols-4 }', { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' });
globalStyle('@container (min-width: 36rem) { .\\\\\\\\@xl\\\\\\\\:text-2xl }', { fontSize: '1.5rem' });

// Container queries - 2xl (672px)
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:block }', { display: 'block' });
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:flex }', { display: 'flex' });
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:grid }', { display: 'grid' });
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:hidden }', { display: 'none' });
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:grid-cols-6 }', { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' });
globalStyle('@container (min-width: 42rem) { .\\\\\\\\@2xl\\\\\\\\:text-3xl }', { fontSize: '1.875rem' });