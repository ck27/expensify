import moment from "moment";
export default [{
    "id" : 1,
    "createdAt" : moment(0).subtract(4,"days").valueOf(),
    "description" : "Rent",
    "note": "",
    "amount":21000
}, {
    "id" : 2,
    "createdAt" : 0,
    "description" : "Water Bill",
    "note": "",
    "amount":2500
}, {
    "id" : 3,
    "createdAt" : moment(0).add(4,"days").valueOf(),
    "description" : "BESCOM Bill",
    "note": "",
    "amount":3500
}];