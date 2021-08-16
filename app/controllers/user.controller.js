const db = require('../models/index');
var User = db.user;
var addUser = async (req, res) => {

    // insert in to database user 
   
    // let data = await User.create({ name: 'asad', email: 'asad@gmail.com', gender: 'laki-laki', address: 'banyuwangi', phone: '082216733679' });
// update
    // data.name = 'dummy';
    // await data.save();
    // console.log(data.dataValues)

    // destroy
    // data.destroy();
    // console.log(data.dataValues);

    //reload
    // data.name = 'dummy';
    // data.reload();

    // let data = await User.build({ name: 'miya', email: 'miya@gmail.com', gender: 'laki-laki', address: 'banyuwangi', phone: '082216733679' });

    // await data.save();
    //response
    let response = {
        data: "ok"
    }
    res.status(200).json(response);
}

var getAll = async (req, res) => {
    try {
        const users = await User.findAll({});
        if (users.length !== 0) {
            res.json({
                'status': 'OK',
                'message': '',
                'data': users
            })
        } else {
            res.json({
                'status': 'ERROR',
                'message': 'data kosong',
                'data': {}
            })
        }
    } catch (error) {
        res.json({
            'status': 'ERROR',
            'messages': error.message,
            'data': {}
        })
    }
}

// var getAll = function (req, res, next) {
//     User.findAll().then(user => {
//         res.json(user);
//     })
// }

//menampilkan data berdasarkan ID
var findOne = async (req, res) => {
    const id = req.params.id;
    User.findByPk(id).then(data => {
        res.send(data);
    }).catch (error => {
        res.status(500).send({
            message: 'Error data id=' + id
        })
    })
}
//update data
var updataUser = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: 'Update Success'
            })
        } else {
            res.send({
                message: `Cannot Update users id=${id}. data kosong atau tidak di temukan`,
            });
        }
    }).catch(error => {
        res.status(500).send({
            message: 'Update data Error with id=' + id
        })
    });
}

module.exports = {
    addUser,
    getAll,
    findOne,
    updataUser
}