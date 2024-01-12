// Concepto: Errores y herencia

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor (temperature) {
    super(`The temperature is ${temperature} ! Overheating !`)
    this.temperature = temperature
  }
}

export const checkHumidityLevel = humidityPercentage => {
  if (humidityPercentage >= 70) throw new Error('Oops')
}

export const reportOverheating = temperature => {
  if (!temperature) throw new ArgumentError()
  if (temperature > 500) throw new OverheatingError(temperature)
}

export const monitorTheMachine = actions => {
  try {
    actions.check()
  } catch (error) {
    if (error instanceof ArgumentError) actions.alertDeadSensor()
    else if (error instanceof OverheatingError) {
      if (error.temperature > 500 && error.temperature < 600) actions.alertOverheating()
      else actions.shutdown()
    } else throw error
  }
}

console.log(reportOverheating(520))
