interface Props {
  className?: string
  onClick?: () => void 
}

interface ButtonProps extends Props {
  type?: 'button' | 'submit' | 'reset'
}

function Button ({className, onClick, type}: ButtonProps) {
  // return 
}