var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

var schema = new Schema({
    id: objectId,
    mdp: {type : String, required : true},
    mdpConfirm: {type : String, required : true},
    nom: {type : String, required : true},
    prenom: {type : String, required : true},
    //age: {type : Number, required : true},
    adresse: {type : String, required : true},
    ville: {type : String, required : true},
    codePostal: {type : Number, required : true},
    mail: {type : String, required : true, unique : true},
    tel: {type : String, required : true},
    //resTest: {type : String, required : true}
});

exports.model = mongoose.model("Recruteur", schema, "recruteurs");