import SimpleReactValidator from "simple-react-validator";

export default class ValidatorService {

    getValidator() {
        return new SimpleReactValidator({
            password_confirmation: {
                rule: function(confirmation, password){
                    return password[0] === confirmation;
                }
            },
            communicationType: {
                rule: function(object){
                    return object.product || object.brand;
                }
            },
        });
    }
}