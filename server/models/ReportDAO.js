const fs = require('fs')
const mongoose = require('mongoose')
const { report, user } = require('../config/db')

const path = require('path');


const getReport = (req, res, next) => {
	report
		.find()
		.sort({ dateCreate: -1 })
		.exec((err, result) => {
			if (err)
				res.status(400).json(err)
			else {
				let images64base = result.map(element =>
					element.images.map(pic => {
                        let image;
                        try {
                            image =  fs.readFileSync(pic);
                        } catch (error) {
                            image = fs.readFileSync(path.join(__dirname, '..', 'public', 'uploads', 'no-image-found.png'))
                        }
						return new Buffer(image).toString('base64')
					})
				)
				result.forEach(
					(element, index) =>
						(element['images'] = images64base[index])
				)
				res.status(200).json({ result })
			}		
		})
}

const setReport = (req, res, next) => {
	const newReport =  new report(req.body) 				// Criar o novo report a ser inserido

	const paths = new Array()									// tratar as imagens

    if (req.files)
        req.files.forEach(pic => paths.push(pic.path))
	
	newReport.images = paths								// sobrescrever o value de images do body

	newReport.save()
		.then(e => 		
			res.status(200).json('Successfuly request')		// save new report
		).catch(err => 
			res.status(400).json('Internal server error')
		)
}

const getTotalPerMonth = async () => {
	const reports = await findAllReports()
	const date = new Date()

	const months = []

	for (let i = 1; i <= 12; i++) {
		let total = 0
		let start = new Date(`${date.getFullYear()}-${i}-1`).getTime()
		let end = new Date(
			`${date.getFullYear()}-${i == 12 ? 1 : i + 1}-1`
		).getTime()

		reports.forEach(element => {
			if (element.dateCreate >= start && element.dateCreate < end) total++
		})
		months.push(total)
	}

	return months
}

async function findAllReports() {
	try {
		const respose = await report.find().exec()
		return respose
	} catch (err) {
		return err
	}
}

const getDataDashboard = async (req, res) => {
	const now = new Date()

	const reports = await findAllReports()

	// Total reports
	const totalReportYear = await getTotalPerMonth()

	// Total reports current month
	const totalReportMonth = totalReportYear[now.getMonth()]

	// Total Done reports
	let totalClosed = 0
	let totalPending = 0
	const month = now.getMonth() + 1
	const year = now.getFullYear()

	const start = new Date(`${year}-${month}-1`).getTime() // Current month start
	const end = new Date(
		`${month == 12 ? year + 1 : year}-${month == 12 ? 1 : month + 1}-1`
	).getTime() // Current month end

	reports.map(report => {
		if (report.dateCreate >= start && report.dateCreate < end) {
			if (report.status == 1)
				// Pending
				totalClosed++
			else if (report.status == 2)
				// Closed
				totalPending++
		}
	})

	res.status(200).json({
		bookmark: {
			month: now.getMonth(),
			totalReports: totalReportMonth,
			closedReports: totalClosed,
			openReports: totalPending
		},
		lineChart: {
			/* All months in the year */
			data: totalReportYear
		},
		// doughnutChart: {
		// 	labels: [
		// 		'Centro',
		// 		'Borúsia',
		// 		'Atlântida Sul',
		// 		'Serramar',
		// 		'Laranjeiras',
		// 		'Mariápolis',
		// 		'Palmital'
		// 	],
		// 	data: [1, 1, 1, 1, 1, 1, 1]
		// },
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

const setStatus = (req, res) =>
	report.updateOne(
		{ _id: mongoose.Types.ObjectId(req.body._id) },
		{ status: req.body.status },
		(err, response) =>
			err ? res.status(202).json(err) : res.status(200).json(response)
	)

const getStatus = (req, res) =>
	report
		.find()
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })

const deleteReport = (req, res, next) => {
	report
		.deleteOne({'_id' : req.params.id})
		.then(data => {
			res.status(200).json(data)
		}).catch(err => {
			res.status(400).json(err)
		})
}

module.exports = { getReport, setReport, getDataDashboard, setStatus, getStatus, deleteReport }
