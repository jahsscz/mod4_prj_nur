const routeLog = require('../models/RouteLog');
const routeService = require('../services/ors.services');
exports.getRoute = async (req, res) => {
    try {
        const data = await routeLog.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: "Error: " + error
        })
    }
}

exports.createRoute = async (req, res) => {
    try {
        const resposne = await routeService.getRoute()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error: " + error
            })
        });
        const data = await routeLog.create({...req.body, result: resposne});
        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: "Error: " + error
        })
    }
}

exports.updateRoute = async (req, res) => {
    try {

        const data = await routeLog.findOne({
            where: {
                id: req.params.id
            }
        });
        if (data) {
            const response = await routeService.getRoute(req.body.start, req.body.end, req.body.profile)
            .then((data) => {
                res.json(data);
            })
            await routeLog.update({...req.body,result:response}, {
                where: {
                    id: req.params.id
                }
            });
        res.json(201).json({
            message: "Data updated successfully"
        });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error: " + error
        })
    }
}


exports.deleteRoute = async (req, res) => {
    try {
        const data = await routeLog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: "Error: " + error
        })
    }
}


exports.getRouteById = async (req, res) => {
    try {
        const data = await routeLog.findByPk(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: "Error: " + error
        })
    }
}
