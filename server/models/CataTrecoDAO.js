const fs = require('fs')
const mongoose = require('mongoose')

const { cataTreco } = require('../config/db')

const getCataTreco = (req, res, next) => {
    cataTreco
        .find({status: 1})
        .sort({ dateCreate: -1 })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}


const getAllCataTreco = (req, res, next) => {
    cataTreco
        .find()
        .sort({ dateCreate: -1 })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const postCataTreco = (req, res, next) => {
    let newCataTreco =  new cataTreco(req.body)

    newCataTreco.protocol = newCataTreco.protocol + Math.floor(1 + Math.random() * 9000);

    if(newCataTreco.protocol === newCataTreco.protocol){
        newCataTreco.protocol = newCataTreco.protocol + Math.floor(1 + Math.random() * 9000);
    }
    
    newCataTreco
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            res.status(400).json('Internal server error')
        })
}

const setStatus = (req, res) => {
    console.log(req.body)
	cataTreco.updateOne(
		{ _id: mongoose.Types.ObjectId(req.body._id) },
        { status: req.body.status,
            dateOcurr: req.body.dateOcurr },
		(err, response) =>
			err ? res.status(202).json(err) : res.status(200).json(response)
    )
}

const deleteCataTreco = (req, res, next) => {
    cataTreco
        .deleteOne({'_id' : req.params.id})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getTotalPerMonth = async () => {
	const ct = await findAllCt()
	const date = new Date()

	const months = []

	for (let i = 1; i <= 12; i++) {
		let total = 0
		let start = new Date(`${date.getFullYear()}-${i}-1`).getTime()
		let end = new Date(
			`${date.getFullYear()}-${i == 12 ? 1 : i + 1}-1`
		).getTime()

		ct.forEach(element => {
			if (element.dateCreate >= start && element.dateCreate < end) total++
		})
		months.push(total)
	}

	return months
}

async function findAllCt() {
	try {
		const respose = await cataTreco.find().exec()
		return respose
	} catch (err) {
		return err
	}
}

const getDataCtDashboard = async (req, res) => {
	const now = new Date()

	const ct = await findAllCt()

	// Total reports
	const totalCtYear = await getTotalPerMonth()

	// Total Cts current month
	const totalCtMonth = totalCtYear[now.getMonth()]

	// Total Done reports
	let totalClosed = 0
	let totalPending = 0
	const month = now.getMonth() + 1
	const year = now.getFullYear()

	const start = new Date(`${year}-${month}-1`).getTime() // Current month start
	const end = new Date(
		`${month == 12 ? year + 1 : year}-${month == 12 ? 1 : month + 1}-1`
	).getTime() // Current month end

	ct.map(cata => {
		if (cata.dateCreate >= start && cata.dateCreate < end) {
			if (cata.status == 1)
				// Pending
				totalClosed++
			else if (cts.status == 2)
				// Closed
				totalPending++
		}
	})

	res.status(200).json({
		bookmark: {
			month: now.getMonth(),
			totalCt: totalCtMonth,
			closedCt: totalClosed,
			openCt: totalPending
		},
		// lineChart: {
		// 	/* All months in the year */
		// 	data: totalCtYear
		// },
		doughnutChart: {
			labels: [
				'Centro',
				'Borúsia',
				'Atlântida Sul',
				'Serramar',
				'Laranjeiras',
				'Mariápolis',
				'Palmital'
			],
			data: totalCtYear
		},
		map: {
			list: [
				{
					anchor: {
						lat: -29.892021,
						long: -50.272171
					}
				},
				{
					anchor: {
						lat: -29.895021,
						long: -50.272371
					}
				}
			]
		}
	})
}
    
module.exports = {setStatus, getCataTreco, postCataTreco, deleteCataTreco, getAllCataTreco, getDataCtDashboard}