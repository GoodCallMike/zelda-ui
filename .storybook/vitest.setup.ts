import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

beforeAll(() => {
  setProjectAnnotations([projectAnnotations]);
});
