import axios from "axios";

import {
    PARTNER_PAGE,
    PARTNER_PAGE_FULFILLED,
    PARTNER_PAGE_REJECTED,

    TRAFFIC,
    TRAFFIC_FULFILLED,

    AFFLUENCE,
    AFFLUENCE_FULFILLED,

    PROMOTIONS,
    PROMOTIONS_FULFILLED,

    TYPICAL_CUSTOMER,
    TYPICAL_CUSTOMER_FULFILLED,
} from "../constants/ActionTypes";
import CookieService from "../services/CookieService";

const token = new CookieService().getJwt();

export function fechPartnerPageData(payload) {
    return async (dispatch, getState) => {
        dispatch({
            type: PARTNER_PAGE,
        });
        try {
            await dispatch(fetchTraffic());
            await dispatch(fetchAffluence());
            // await dispatch(fetchPromotions());
            await dispatch(fetchTypicalCustomer());
            dispatch({
                type: PARTNER_PAGE_FULFILLED,
            });
        } catch (error) {
            dispatch({
                type: PARTNER_PAGE_REJECTED,
            });
        }
    }
}

function fetchTraffic(payload) {
    return async (dispatch, getState) => {
        dispatch({
            type: TRAFFIC,
        });
        try {
            // const response = await axios({
            //     method: "get",
            //     url: "http://wayconnect.herokuapp.com/establishments/1/traffic",
            //     headers: {
            //         "Authorization": `Token ${token}`
            //     },
            // });
            dispatch({
                type: TRAFFIC_FULFILLED,
                payload: {
                    "month": {
                        "start_date": "2018-05-01T00:00:00Z",
                        "end_date": "2018-05-31T23:59:59.999999Z",
                        "traffic": [
                            74,
                            249,
                            64,
                            48,
                            62,
                            14,
                            19
                        ]
                    },
                    "year": {
                        "start_date": "2018-01-01T00:00:00Z",
                        "end_date": "2018-12-31T23:59:59.999999Z",
                        "traffic": [
                            74,
                            249,
                            64,
                            48,
                            62,
                            14,
                            19
                        ]
                    }
                }
            });
        } catch (error) {
            throw new Error();
        }
    }
}

function fetchAffluence(payload) {
    return async (dispatch, getState) => {
        dispatch({
            type: AFFLUENCE,
        });
        try {
            // const response = await axios({
            //     method: "get",
            //     url: "http://wayconnect.herokuapp.com/establishments/1/affluence",
            //     headers: {
            //         "Authorization": `Token ${token}`
            //     },
            // });
            dispatch({
                type: AFFLUENCE_FULFILLED,
                payload: {
                    "start_date": "2018-05-01T00:00:00Z",
                    "end_date": "2018-05-31T23:59:59.999999Z",
                    "affluence": [
                        1.5263157894736843,
                        1.736842105263158,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.05263157894736842,
                        0.5263157894736842,
                        0,
                        1.1578947368421053,
                        1.9473684210526316,
                        3.210526315789474,
                        0.5789473684210527,
                        1.368421052631579,
                        0.8947368421052632,
                        0.7894736842105263,
                        13.31578947368421,
                        0,
                        0.10526315789473684,
                        0.3157894736842105,
                        0.3684210526315789
                    ]
                }
            });
        } catch (error) {
            throw new Error();
        }
    }
}

function fetchPromotions(payload) {
    return async (dispatch, getState) => {
        dispatch({
            type: PROMOTIONS,
        });
        try {
            const response = await axios({
                method: "get",
                url: "http://wayconnect.herokuapp.com/establishments/1/discount_activations",
                headers: {
                    "Authorization": `Token ${token}`
                },
            });
            dispatch({
                type: PROMOTIONS_FULFILLED,
                payload: response.data
            });
        } catch (error) {
            throw new Error();
        }
    }
}

function fetchTypicalCustomer(payload) {
    return async (dispatch, getState) => {
        dispatch({
            type: TYPICAL_CUSTOMER,
        });
        try {
            // const response = await axios({
            //     method: "get",
            //     url: "http://wayconnect.herokuapp.com/establishments/1/typical_customer",
            //     headers: {
            //         "Authorization": `Token ${token}`
            //     },
            // });
            dispatch({
                type: TYPICAL_CUSTOMER_FULFILLED,
                payload: {
                    "age": 57.858369098712444,
                    "gender": {
                        "value": 0.16789787687,
                        "label": "Female"
                    },
                    "relationship_status": {
                        "value": 0.2832618025751073,
                        "label": "Married"
                    },
                    "work_status": {
                        "value": 0.17,
                        "label": "Employed"
                    },
                    "country": {
                        "value": 0.008583690987124463,
                        "label": "Afghanistan",
                    }
                }
            });
        } catch (error) {
            throw new Error();
        }
    }
}