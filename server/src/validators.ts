import Ajv from 'ajv'
const ajv = new Ajv()

export const validateMediaControlRequest = ajv.compile<MediaControlRequest>(mediaControlRequestSchema)
export const validateMediaPreparationRequest = ajv.compile<MediaPreparationRequest>(mediaPreparationRequestSchema)
