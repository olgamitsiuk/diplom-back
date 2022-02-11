// TODO:
const crypto = require("crypto")
const model = require("../models/user");
const modelSession = require("../models/session");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new model(request.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        return response.json(element);
    });
}
exports.get = function (request, response) {
    console.log("Run GET");
    model.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allData);
        }
    );
}

exports.getOne = function (request, response) {
    const {user_id} = request.params;
    model.find({_id: user_id},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allData);
        }
    );
}

exports.put = function (request, response) {
    console.log("Run PUT");
    const element = new model (request.body);
    model.findByIdAndUpdate(
        request.body._id,
        element,
        {}, // new:true -       ID
        function (err, result) {
            if (err) {console.log(err); response.send(err);}
            response.send(result);
        }
    );
}

exports.delete = function (request, response) {
    console.log("Run DELETE");
    model.findByIdAndDelete(
        request.body._id,
        {},
        function (err) {
            if (err) response.send(err);
            response.sendStatus(200);
        }
    );
}

exports.findByEmail = function (request, response) {
    const {email} = request.params;
    model.find({email: email},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            //if(allData.length > 0) return
            response.json(allData);
        }
    );
}

exports.tryLogin = function (request, response) {
    const {email} = request.params;
    const {password} = request.params;
    model.find({email: email, password: password},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
              if(allData.length === 0) {
                response.send(false);

            } else {
            let useSession = new modelSession();
            useSession.user_id = allData[0]._id;
            useSession.created_at= Date();
            useSession.last_activity_at =Date();
            useSession.data["user"] = allData[0];
            useSession.save(function (err) {
                if (err) {
                    console.log(err);
                    return err;
                }
                return response.send(useSession._id);
            });}
        }
    );
}
exports.getSessionById = function (request, response) {
    console.log("Get Session");
    const {session_id} = request.params;
    modelSession.find({_id: session_id},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allData);
        }
    );
}

exports.testByEmail = function (request, response) {
    const {email} = request.params;
    model.find({email: email},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            console.log("test by email:")
            console.log(allData)
            if (allData.length > 0) {
                response.send(true)
            } else {
                response.send(false)
            }
        }
    );
}

exports.findByEmailPswd = function (request, response) {
    const {email} = request.params;
    const {password} = request.params;
    model.find({email: email, password: password},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            //console.log("find by email and password:");
            response.json(allData);
        }
    );
}

exports.deleteSession = function (request, response) {
    console.log("Run DELETE Session");
    // могу перенести все данные о сессии - например - время выхода
    modelSession.findByIdAndDelete(
        request.body._id,
        {},
        function (err) {
            if (err) response.send(err);
            response.sendStatus(200);
        }
    );
}

exports.updateSessionTime = function (request, response) {
    console.log("update session time");
    modelSession.updateOne(
        {_id: request.body._id},
        {last_activity_at: Date()},
        function (err, result) {
            if (err) {console.log(err); response.send(err);}
            response.send(result);
        }
    );
}