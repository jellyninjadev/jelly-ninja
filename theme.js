import { base, dark, utils } from 'grommet'
import { deepMerge } from 'grommet/utils'

const result = {
  global: {
    font: {
      family: 'Roboto',
      weight: 300
    }
  },
  heading: {
    level: {
      1: {
        font: {
          family: 'Amatic SC',
          weight: 300
        }
      }
    }
  },
  button: {
    extend: {
      textTransform: 'uppercase'
    }
  }
}

console.log(result)

export default result
