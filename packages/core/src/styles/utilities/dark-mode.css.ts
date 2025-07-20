import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../colors.css';

// Typography dark mode overrides
globalStyle('.dark h1', { color: colors.gray[100] });
globalStyle('.dark h2', { color: colors.gray[100] });
globalStyle('.dark h3', { color: colors.gray[100] });
globalStyle('.dark h4', { color: colors.gray[100] });
globalStyle('.dark p', { color: colors.gray[100] });
globalStyle('.dark span', { color: colors.gray[400] });
globalStyle('.dark label', { color: colors.gray[400] });

// Text color overrides
globalStyle('.dark .text-gray-900', { color: colors.gray[100] + ' !important' });
globalStyle('.dark .text-gray-700', { color: colors.gray[300] + ' !important' });
globalStyle('.dark .text-gray-600', { color: colors.gray[400] + ' !important' });

// Border and background overrides
globalStyle('.dark .border-gray-300', { borderColor: colors.gray[600] + ' !important' });
globalStyle('.dark .bg-gray-50', { backgroundColor: colors.gray[800] + ' !important' });
globalStyle('.dark .bg-white', { backgroundColor: colors.gray[900] + ' !important' });