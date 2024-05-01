const EmbeddedCodeModel = require("../models/EmbeddedCode");
const RegisteredUsers = require("../models/RegisteredUsers");
// const { Op } = require('sequelize');

const getCode = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll();
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const getProLife = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll({
            where: {
                genre: 'Pro-Life Voices'
            }
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const getStories = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll({
            where: {
                genre: 'Stories'
            }
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const getTrellesTunes = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll({
            where: {
                genre: `Trelle's Tunes`
            }
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const getShorts = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll({
            where: {
                genre: `Shorts`
            }
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const getMovies = async (req, res) => {
    try {
        const data = await EmbeddedCodeModel.findAll({
            where: {
                genre: `Documentries / Movies`
            }
            // where: {
            //     [Op.or]: [
            //         { genre: `Documentries / Movies` },
            //         { genre: `Pro-Life Voices` },
            //         { genre: `Stories` },
            //         { genre: `Trelle's Tunes`}
            //     ]
            // }
        });
        console.log('Query executed successfully. Data:', data);
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const registerUser = async (req, res) => {
    try {
        const data = await RegisteredUsers.create({
            registerEmail: req.body.email
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const login = async (req, res) => {
    try {
        const data = await RegisteredUsers.findAll({
            where: {
                registerEmail: req.body.email
            }
        });
        return res.json({ message: 'success', data: data });
    } catch (err) {
        return res.json({ message: 'error', data: err.message });
    }
};

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const contact = async (req, res) => {
    // let name = 'Sample'
    // let email = 'sample'
    // let message = 'sample'

    let transporter = nodemailer.createTransport({
        // service: ' secure.emailsrvr.com',
        host: 'secure.emailsrvr.com',
        port: 465, // SMTP port
        secure: true, // Use SSL/TLS
        auth: {
            user: 'webmaster@inyourcorner.tv',
            pass: 'FxqJh6QBrMe3@gJ'
        }
    });

    let info = await transporter.sendMail({
        from: 'webmaster@inyourcorner.tv',
        to: 'sathishravikumar46@gmail.com',
        // to: 'steven@brightherd.com',
        subject: req.body.subject,
        html: `<h2>Contact Us</h2>
    
        <p>You have received a new message from a visitor:</p>
        
        <p><strong>Name:</strong> ${req.body.fname} ${req.body.lname}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Subject:</strong> ${req.body.subject}</p>
        
        <p><strong>Details:</strong></p>
        <p>${req.body.Details}</p>
        
        <p>Thank You.<br>
        </p>`
    });

    console.log('Message sent: %s', info.messageId);

    res.send('Email sent successfully!');
}

module.exports = {
    getCode,
    registerUser,
    login,
    getTrellesTunes,
    getStories,
    getProLife,
    getShorts,
    getMovies,
    contact
}