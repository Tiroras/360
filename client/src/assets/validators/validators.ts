export const required = (value) => {
  if(value) return undefined;

  return "Поле должно быть заполненно"
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if(value && value.length > maxLength) {
    return `Максимальная длина ${maxLength} символов`;
  }

  return undefined;
}

export const minLengthCreator = (minLength: number) => (value: string) => {
  if(value && value.length < minLength) {
    return `Минимальная длина ${minLength} символов`;
  }

  return undefined;
}

