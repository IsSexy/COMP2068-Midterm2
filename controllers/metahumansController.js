const Metahuman = require('../models/metahuman');
const mongoose = require('mongoose');

exports.index = (req, res) => {
	Metahuman.find()
	.then(metahumans => {
		res.render('metahumans/index', {
			metahumans: metahumans,
			title: 'List'
		});
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.redirect('/');
	});
};


exports.show = (req, res) => {
	Metahuman.findOne({
      _id: req.params.id
    })
	.then(metahuman => {
		res.render('metahumans/show', {
			title: metahuman.alias,
			metahumans: metahuman
		});
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.redirect('/metahumans');
	});
};


exports.new = (req, res) => {
	res.render('metahumans/new', {
		title: 'New MetaHuman'
	});
};


exports.edit = (req, res) => {
	Metahuman.findOne({
      _id: req.params.id
    })
	.then(metahuman => {
		res.render('metahumans/edit', {
			title: `Edit ${metahuman.alias}`,
			metahuman: metahuman
		});
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.redirect('/metahumans');
	});
};


exports.create = async (req, res) => {
	Metahuman.create(req.body.metahuman)
	.then(() => {
		res.redirect('/metahumans');
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.render('metahumans/new', {
			metahuman: req.body.metahuman,
			title: 'New MetaHuman'
		});
	});
};


exports.update = (req, res) => {
	Metahuman.updateOne({
      _id: req.body.id
    }, req.body.metahuman, {
      runValidators: true
    })
	.then(() => {
		req.flash('success', 'MetaHuman was updated');
		res.redirect('/metahumans')
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.redirect('metahumans/edit', {
			metahuman: req.body.metahuman,
			title: `Edit ${metahuman.alias}`
		});
	});
};


exports.destroy = (req, res) => {
	Metahuman.deleteOne({
      _id: req.body.id
    })
	.then(() => {
		req.flash('success', 'Metahuman was destroyed');
		res.redirect('/metahumans')
	})
	.catch(err => {
		req.flash('error', `ERROR: ${err}`);
		res.redirect('/metahumans');
	});
};