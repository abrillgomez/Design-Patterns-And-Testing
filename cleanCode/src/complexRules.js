// KISS
import { MIN_RULE_LENGHT } from "./constants/rules"

export const matchRuleComplex = (rule, value) => {
  if (value.length === rule.length && rule.length > 3) {
    if (!rule.startsWith) {
      return true
    }
    if (value.startsWith(rule.startsWith)) {
      return true
    }
  }
  return false
}

export const matchRuleComplexSimple = (rule, value) =>
  (value.length === rule.length && rule.length > MIN_RULE_LENGHT)  &&
  (!rule.startsWith || value.startsWith(rule.startsWith));

export const fetchFruits = () => {
  const fruits = ['Frutilla', 'Banana', 'Pera']
  fruits.push('Manzana')

  // No se hace así porque es una constante.
  fruits = [...fruits, 'Manzana']
}