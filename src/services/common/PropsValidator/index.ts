export default class PropsValidator {
  static includes<T>(
    values: Array<T>,
    input: T,
    componentName?: string
  ): boolean {
    if (!values.includes(input)) {
      console.error(
        `[\x1B[31m🙀${componentName ? ` ${componentName}` : ''}]`,
        'Validation failed, expected one of these values: ',
        values.join(', ')
      )
    }
    return values.includes(input)
  }
}
