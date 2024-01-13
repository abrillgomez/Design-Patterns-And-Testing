import { errorCodes } from "./codes"

// DRY
export const getErrorMessage = (code) => {
  if(code === 'try_again') {
    return 'Por favor pruebe nuevamente.'
  }
  if(code === 'card_expired') {
    return 'Tarjeta expirada.'
  }
  if(code === 'contact_us') {
    return 'Contáctese con nuestro soporte.'
  }
  return 'Algo ocurrió con la aplicación.'
}

export const getErrorMessageMap = (code) => errorCodes[code] || "Algo ocurrió con la aplicación.";

// switch
export const getErrorMessageSwitch = (code) => {
  switch(code) {
    case 'try_ again':
      return "Por favor pruebe nuevamente.";
    case 'card_expired':
      return "Tarjeta expirada."
    case 'contact_us':
      return "Contáctese con nuestro soporte."
    default:
      return 'Algo occurión con la aplicación.'
  }
}