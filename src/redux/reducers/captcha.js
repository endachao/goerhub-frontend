import constants from "../constants";

const initialState = {
    captchaId: null
}

export default (state = initialState, action = {type: ''}) => {
    const {type} = action
    switch (type) {
        case constants.GET_CAPTCHA:
            return {...state, captchaId: "x"}
        default:
            return state
    }
}
