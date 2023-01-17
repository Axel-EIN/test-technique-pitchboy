const fs = require('fs'); // Import du module FileSystem pour lire/écrire les fichiers
const path = require('path'); // Import du Path Resolver (résout un problème avec les chémins des sous dossiers dans NodeJS)
const towns = require(path.resolve(__dirname,"..", "..","..","resources",'laposte_hexasmal.json')); // Import et transformation JSON => JavaScript

// RETRIEVE ALL
const getTowns = ((req, res) => {
    res.json(towns);
});

// QUERY ONE POSTALCODE
const getTownQuery = ((req, res) => {
    const postalCode = req.query.postalcode;
    const townsResult = towns.filter(town => town.fields.code_postal == postalCode);

    if (townsResult.length < 1) {
        return res.status(404).send("This postal code don't match to any towns.");
    }
    res.json(townsResult);
});

// UPDATE
const updateTown = ((req, res) => {
    const id = req.params.recordID;
    const index = towns.findIndex(town => town.recordid == id);
    if (index === -1) {
        return res.status(404).send("This town doesn't exists in the database.");
    }
    const updatedTown = {
        recordid: towns[index].recordid,
        datasetid: req.body.datasetid? req.body.datasetid : towns[index].datasetid,
        fields: {
            nom_de_la_commune: req.body.fields.nom_de_la_commune? req.body.fields.nom_de_la_commune : towns[index].fields.nom_de_la_commune,
            libelle_d_acheminement: req.body.fields.libelle_d_acheminement? req.body.fields.libelle_d_acheminement : towns[index].fields.libelle_d_acheminement,
            code_postal: req.body.fields.code_postal? req.body.fields.code_postal : towns[index].fields.code_postal,
            coordonnees_gps: req.body.fields.coordonnees_gps? req.body.fields.coordonnees_gps : towns[index].fields.coordonnees_gps,
            code_commune_insee: req.body.fields.code_commune_insee? req.body.fields.code_commune_insee : towns[index].fields.code_commune_insee
        },
        geometry: {
            type: req.body.geometry.type? req.body.geometry.type : towns[index].geometry.type,
            coordinates: req.body.geometry.coordinates? req.body.geometry.coordinates : towns[index].geometry.coordinates
        },
        record_timestamp: req.body.record_timestamp? req.body.record_timestamp : towns[index].record_timestamp
    };
    towns[index] = updatedTown;
    fs.writeFileSync(path.resolve(__dirname,"..", "..","..","resources",'laposte_hexasmal.json'), JSON.stringify(towns));
    res.status(200).json("This town has been updated.");
});

// DELETE
const deleteTown = ((req, res) => {
    const id = req.params.recordID;
    const index = towns.findIndex(town => town.recordid == id);
    if (index === -1) {
        return res.status(404).send("This town doesn't exists in the database.");
    }
    towns.splice(index, 1);
    fs.writeFileSync(path.resolve(__dirname,"..", "..","..","resources",'laposte_hexasmal.json'), JSON.stringify(towns));
    res.status(200).json("This town has been deleted.");
});

module.exports = {
    getTowns,
    getTownQuery,
    updateTown,
    deleteTown
};
