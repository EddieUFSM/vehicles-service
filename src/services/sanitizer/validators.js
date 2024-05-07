import mongoose from 'mongoose'

export const isArray = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if(schemaAttribute.enum) verifyValidEnumForArray(schemaAttribute.enum, value)
  if(schemaAttribute.max) verifyMaxLengthArray(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinLengthArray(schemaAttribute.min, value)
  if (!Array.isArray(value)) {
    throw { 
      message: `Expected Array, but received '${typeof value}'.`,
      status: 400,
      internalErrorCode: 1007
    }
  }
}

export const isBoolean = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if (typeof value !== 'boolean') {
    throw {
      message: `Expected a boolean, but received '${typeof value}'.`,
      status: 400,
      internalErrorCode: 1003
    }
  }
  return
}

export const isConvertableToDecimal128 = (value) => typeof value !== 'string' && typeof value !== 'number'? false : true

export const isDate = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if (!(value instanceof Date && !isNaN(value))) {
    throw {
      message: `Expected a valid Date object, but received '${typeof value}'.`,
      status: 400,
      internalErrorCode: 1003,
    }
  }
}

export const isNumber = (schemaAttribute, value)=> {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if(schemaAttribute.max || schemaAttribute.min === 0) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min || schemaAttribute.min === 0) verifyMinValue(schemaAttribute.min, value)
  if (typeof value !== 'number') throw { 
    message: `Expected a number, but received '${typeof value}'.`,
    status: 400,
    internalErrorCode: 1002
  }
  return
}

export const isRequired = (value) => {
  if (value === undefined || value === null || value === '') {
    throw { 
      message: 'The attribute is required.',
      status: 400,
      internalErrorCode: 1000
    } 
  }
}

export const isString =(schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(!schemaAttribute.required && (value === undefined || value === null || value === '')) return
  if(schemaAttribute.maxlength) verifyMaxLengthString(schemaAttribute.maxlength, value)
  if(schemaAttribute.minlength) verifyMinLengthString(schemaAttribute.minlength, value)
  if (typeof value !== 'string') {
    throw { 
      message: `Expected a string, but received '${typeof value}'.`,
      status: 400,
      internalErrorCode: 1001
    } 
  }
  return
}

export const isTimestamp = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return

  if(value > 9999999999999) {
    throw {
      message: 'Invalid timestamp.',
      status: 400,
      internalErrorCode: 1004
    }
  }

  if (value % 1 !== 0) {
    throw {
      message: 'Invalid timestamp.',
      status: 400,
      internalErrorCode: 1004
    }
  }
  
  if (typeof value !== 'number' || isNaN(value) || value <= 0) {
    throw {
      message: 'Invalid timestamp.',
      status: 400,
      internalErrorCode: 1004
    }
  }

  const timestamp = new Date(value)

  if (isNaN(timestamp.getTime())) {
    throw {
      message: 'Invalid timestamp.',
      status: 400,
      internalErrorCode: 1005
    }
  }
}

export const isValidObjectId = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if (!mongoose.Types.ObjectId.isValid(value) || value.length !== 24 || typeof value !== 'string') {
    throw { 
      message: 'Invalid ObjectId.',
      status: 400,
      internalErrorCode: 1001
    } 
  }
  return
}

export const isValidBuffer = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if (!Buffer.isBuffer(value)) {
    throw { 
      message: 'Invalid Buffer.',
      status: 400,
      internalErrorCode: 1001
    } 
  }
  return
}

export const isValidDecimal128 = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  if(!validateNumericString(value)) {
    throw {
      message: 'Invalid Decimal128.',
      status: 400,
      internalErrorCode: 1001
    }
  }
  if(!isConvertableToDecimal128(value)) {
    throw {
      message: 'Invalid Decimal128.',
      status: 400,
      internalErrorCode: 1001
    }
  }

  return
}

export const isValidMap = (schemaAttribute, value) => {
  if(schemaAttribute.required) isRequired(value)
  if(schemaAttribute.enum) verifyEnumValue(schemaAttribute, value)
  if(schemaAttribute.max) verifyMaxValue(schemaAttribute.max, value)
  if(schemaAttribute.min) verifyMinValue(schemaAttribute.min, value)
  if(!schemaAttribute.required && (value === undefined || value === null)) return
  const { of, validate } = schemaAttribute
  if(typeof value !== 'object' ) {
    throw {
      message: 'Invalid Map.',
      status: 400,
      internalErrorCode: 1001
    }
  }

  if (typeof value !== 'object' || value === null) {
    if (of && validate) {
      for (const [, value] of value.entries()) {
        if (!of.validate(value)) {
          throw {
            message: 'Invalid key to Map.',
            status: 400,
            internalErrorCode: 1001
          }
        }
      }
    }
  }
}

export const validateNumericString = (value) => typeof value === 'string'? /^[\d.]+$/.test(value) : true

export const verifyEnumValue = (schemaAttribute, value) => {
  if (!schemaAttribute.enum.includes(value)) {
    throw { 
      message: `Invalid value. The value must be one of the following: ${schemaAttribute.enum.join(', ')}.`,
      status: 400,
      internalErrorCode: 1006
    }
  }
}

export const verifyMinLengthArray = (minLength, attribute) => {
  if (!Array.isArray(attribute) || attribute.length < minLength) {
    throw { 
      message: `The array length must be at least ${minLength}.`,
      status: 400,
      internalErrorCode: 1008
    }
  }
}

const verifyMaxLengthArray = (maxLength, attribute) => {
  if (!Array.isArray(attribute) || attribute.length > maxLength) {
    throw {
      message: `The array length must not exceed ${maxLength}.`,
      status: 400,
      internalErrorCode: 1009,
    }
  }
}

export const verifyMinLengthString = (minLength, attribute) => {
  if (attribute.length < minLength) {
    throw {
      message: `The string length must be at least ${minLength}.`,
      status: 400,
      internalErrorCode: 1008,
    }
  }
}

export const verifyMaxLengthString = (maxLength, attribute) => {
  if (attribute.length > maxLength) {
    throw {
      message: `The string length must not exceed ${maxLength}.`,
      status: 400,
      internalErrorCode: 1009,
    }
  }
}

export const verifyValidEnumForArray = (enumValues, attribute) => {
  if (!Array.isArray(attribute) || !attribute.every((value) => enumValues.includes(value))) {
    throw {
      message: `Invalid value in the array. The values must be one of ${enumValues.join(', ')}.`,
      status: 400,
      internalErrorCode: 1010,
    }
  }
}

export const verifyMinValue = (min, attribute) => {
  
  if (attribute < min) {
    throw { 
      message: `Value ${attribute} is less than the minimum value setted.`,
      status: 400,
      internalErrorCode: 1007
    }
  }
}

export const verifyMaxValue = (max, attribute) => {
  if (attribute > max) {
    throw { 
      message: `Value ${attribute} is greater than the maximum value setted.`,
      status: 400,
      internalErrorCode: 1007
    }
  }
}
