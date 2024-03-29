import { cn } from '@/lib/client/utils'
import { InputHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInProps } from '@/variants'
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  selected: boolean
  disabled?: boolean
  className?: string
  name: string
  value: string
  children?: React.ReactNode
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      id,
      className,
      children,
      name,
      value,
      selected,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        {...fadeInProps}
        transition={{
          delay: 0.2,
          duration: 0.3,
        }}
        className={cn(
          'flex items-center justify-start w-full p-4 rounded-sm border border-[#E5E5EC] transition-all duration-200',
          'focus-within:border-brand-main-green400',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          selected && 'border-brand-main-green400 border bg-main-green-green50',
        )}
      >
        <input
          id={id}
          name={name}
          value={value}
          type="radio"
          ref={ref}
          disabled={disabled}
          className="hidden"
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            'flex items-center',
            'cursor-pointer',
            'text-sm font-medium text-gray-700 transition-all duration-200',
            'w-full pl-2',
            disabled && 'opacity-50 cursor-not-allowed',
            selected && 'font-bold',
            className,
          )}
        >
          <div
            className={cn(
              'w-4 h-4 rounded-full bg-text-main-whiteFF border border-[#E5E5EC] transition-all duration-200 ',
              'hover:border-brand-main-green400',
              selected && 'border-brand-main-green400 border-4',
            )}
          ></div>
          <span className="ml-2">{label}</span>
          {children}
        </label>
      </motion.div>
    )
  },
)

RadioButton.displayName = 'RadioButton'
export default RadioButton
