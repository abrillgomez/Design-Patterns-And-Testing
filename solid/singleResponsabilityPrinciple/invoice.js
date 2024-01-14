import { CANADA, USA } from "./countries"
import { CANADA_TAX, USA_TAX } from "./taxes"

calculateTax(country) {
    if (country === USA){
      return this.price * USA_TAX
    } else if (country === CANADA) {
      return this.price * CANADA_TAX
    } else {
      throw new Error('Unsopported country')
    }
}