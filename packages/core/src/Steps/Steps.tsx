import type { HTMLAttributes, ReactNode } from 'react';
import { createContext, useContext, Children, cloneElement, isValidElement } from 'react';
import { cn } from '../styles';

interface StepsContextValue {
  current: number;
  status: 'wait' | 'process' | 'finish' | 'error';
  direction: 'horizontal' | 'vertical';
  size: 'default' | 'small';
  totalSteps: number;
}

const StepsContext = createContext<StepsContextValue | null>(null);

interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  /** Current step index */
  current?: number;
  /** Current step status */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /** Direction of steps */
  direction?: 'horizontal' | 'vertical';
  /** Size of steps */
  size?: 'default' | 'small';
  /** Step items */
  children: ReactNode;
}

interface StepProps extends HTMLAttributes<HTMLDivElement> {
  /** Step title */
  title?: ReactNode;
  /** Step description */
  description?: ReactNode;
  /** Step icon */
  icon?: ReactNode;
  /** Step status override */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /** Internal step index */
  stepIndex?: number;
}

/**
 * Steps component for displaying progress through a sequence.
 */
export const Steps = ({
  current = 0,
  status = 'process',
  direction = 'horizontal',
  size = 'default',
  children,
  className,
  ...props
}: StepsProps) => {
  const contextValue: StepsContextValue = {
    current,
    status,
    direction,
    size,
    totalSteps: Children.count(children),
  };

  return (
    <StepsContext.Provider value={contextValue}>
      <div
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row items-center',
          className
        )}
        {...props}
      >
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return (
              <>
                {cloneElement(child, { ...child.props, stepIndex: index })}
                {direction === 'horizontal' && index < contextValue.totalSteps - 1 && (
                  <div className={cn(
                    'flex-1 h-px mx-4',
                    index < current ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                  )} />
                )}
              </>
            );
          }
          return child;
        })}
      </div>
    </StepsContext.Provider>
  );
};

const Step = ({
  title,
  description,
  icon,
  status: stepStatus,
  stepIndex = 0,
  className,
  ...props
}: StepProps) => {
  const context = useContext(StepsContext);
  if (!context) throw new Error('Step must be used within Steps');

  const { current, status: stepsStatus, direction, size } = context;
  
  const getStepStatus = () => {
    if (stepStatus) return stepStatus;
    if (stepIndex < current) return 'finish';
    if (stepIndex === current) return stepsStatus;
    return 'wait';
  };

  const currentStatus = getStepStatus();

  const getStatusClasses = () => {
    switch (currentStatus) {
      case 'finish':
        return 'bg-blue-500 text-white border-blue-500';
      case 'process':
        return 'bg-blue-500 text-white border-blue-500';
      case 'error':
        return 'bg-red-500 text-white border-red-500';
      default:
        return 'bg-white text-gray-400 border-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-600';
    }
  };

  const getConnectorClasses = () => {
    const isCompleted = stepIndex < current;
    return isCompleted 
      ? 'bg-blue-500' 
      : 'bg-gray-300 dark:bg-gray-600';
  };

  const iconSize = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
  const iconTextSize = size === 'small' ? 'text-xs' : 'text-sm';

  const renderIcon = () => {
    if (icon) {
      return <div className="flex items-center justify-center w-full h-full">{icon}</div>;
    }

    if (currentStatus === 'finish') {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }

    if (currentStatus === 'error') {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      );
    }

    return <span className={iconTextSize}>{stepIndex + 1}</span>;
  };

  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-row pb-8 last:pb-0' : 'flex-col items-center',
        className
      )}
      {...props}
    >
      <div className={cn('flex items-center', direction === 'vertical' ? 'flex-col mr-4' : 'mb-2')}>
        <div
          className={cn(
            'flex items-center justify-center border-2 rounded-full font-medium transition-colors bg-white dark:bg-gray-800',
            iconSize,
            getStatusClasses()
          )}
        >
          {renderIcon()}
        </div>
        
        {direction === 'vertical' && (
          <div className={cn('w-px h-8 mt-2', getConnectorClasses())} />
        )}
      </div>

      <div className={cn('flex-1', direction === 'vertical' ? 'min-h-8' : 'text-center')}>
        {title && (
          <div className={cn(
            'font-medium',
            currentStatus === 'error' ? 'text-red-500' : 'text-gray-900 dark:text-gray-100',
            size === 'small' ? 'text-sm' : 'text-base'
          )}>
            {title}
          </div>
        )}
        {description && (
          <div className={cn(
            'text-gray-500 dark:text-gray-400 mt-1',
            size === 'small' ? 'text-xs' : 'text-sm'
          )}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

Steps.Step = Step;