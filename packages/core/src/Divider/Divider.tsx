import { withOverrides } from 'zelda-ui-theme';
import { cn } from '../styles';
import { Typography } from '../Typography';
import styles from './Divider.module.css';

export interface DividerProps {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Divider variant */
  variant?: 'solid' | 'dashed' | 'magical';
  /** Text content for labeled divider */
  children?: React.ReactNode;
  /** Text alignment for labeled divider */
  textAlign?: 'left' | 'center' | 'right';
  /** Custom className */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  children,
  textAlign = 'center',
  className,
  testId,
}: DividerProps) => {
  if (children) {
    return (
      <div
        className={cn(
          'flex items-center gap-4 my-4',
          orientation === 'vertical' && 'flex-col h-full',
          className,
        )}
        data-testid={testId}
      >
        {textAlign !== 'left' && (
          <div
            className={cn(
              'flex-1',
              styles.divider,
              styles[variant],
              styles[orientation],
            )}
          />
        )}
        <Typography
          variant="body"
          className="text-gray-500 dark:text-gray-400 whitespace-nowrap"
        >
          {children}
        </Typography>
        {textAlign !== 'right' && (
          <div
            className={cn(
              'flex-1',
              styles.divider,
              styles[variant],
              styles[orientation],
            )}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={withOverrides(
        cn(styles.divider, styles[variant], styles[orientation], 'my-4'),
        className,
      )}
      data-testid={testId}
    />
  );
};
