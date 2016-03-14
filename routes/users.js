require('../models/Demandeur');
require('../models/Recruteur');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var demandeur = mongoose.model('Demandeur');
var recruteur = mongoose.model('Recruteur');


utilDemandeur = {
	create: function(req, res){
		var d = new demandeur({
		    mdp: req.body.mot_de_passe,
		    mdpConfirm: req.body.mot_de_passe2,
		    nom: req.body.nom,
		    prenom: req.body.prenom,
		    //age: req.body.age,
		    adresse: req.body.Adresse,
		    ville: req.body.ville,
		    codePostal: req.body.code_postal,
		    mail: req.body.email,
		    tel: req.body.telephone,
		    //resTest: {type = String, required = true}
		});

		d.save(function(err){
			if(err) throw err;
		})

		console.log("Utilisateur : '"+d.name+"' créé !\n");
		console.log("Entrée en bdd: "+d);
	}
}

utilRecruteur = {
	create: function(req, res){
		var r = new recruteur({
		    mdp: req.body.mot_de_passe,
		    mdpConfirm: req.body.mot_de_passe2,
		    nom: req.body.nom,
		    prenom: req.body.prenom,
		    //age: req.body.age,
		    adresse: req.body.Adresse,
		    ville: req.body.ville,
		    codePostal: req.body.code_postal,
		    mail: req.body.email,
		    tel: req.body.telephone,
		    //resTest: {type = String, required = true}
		});

		r.save(function(err){
			if(err) throw err;
		})

		console.log("Utilisateur : '"+r.name+"' créé !\n");
		console.log("Entrée en bdd: "+r);
	}
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/espaceRecruteur', function(req, res, next){

});

router.post('/espaceDemandeur', function(req, res, next){
	utilDemandeur.create;
	res.render("espaceDemandeur");
});

module.exports = router;
