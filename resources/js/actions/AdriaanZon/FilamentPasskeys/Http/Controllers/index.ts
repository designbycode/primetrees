import PasskeyConfirmationController from './PasskeyConfirmationController'
import PasskeyLoginController from './PasskeyLoginController'
import PasskeyRegistrationController from './PasskeyRegistrationController'
const Controllers = {
    PasskeyConfirmationController: Object.assign(PasskeyConfirmationController, PasskeyConfirmationController),
PasskeyLoginController: Object.assign(PasskeyLoginController, PasskeyLoginController),
PasskeyRegistrationController: Object.assign(PasskeyRegistrationController, PasskeyRegistrationController),
}

export default Controllers