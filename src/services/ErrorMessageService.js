export default class ErrorMessageService {

    generateErrorMessage(field, errorType, options = null) {
        switch (errorType) {
            case 'required':
                return `${field} is required.`;
                break;
            case 'min':
                return `${field} should contain at least ${options} characters.`;
                break;
            case 'email':
                return 'Please, provide correct email address.';
                break;
            case 'password_confirmation':
                return 'Password does not match confirmation.';
                break;
            default:
                return 'Unknown error.';
                break;
        }
    }
}