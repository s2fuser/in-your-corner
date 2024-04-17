const EmbeddedCodeModel = require("../models/EmbeddedCode");
const RegisteredUsers = require("../models/RegisteredUsers");

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
        });
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
    let name = 'Sample'
    let email = 'sample'
    let message = 'sample'

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'magizhan009@gmail.com',
            pass: 'Magizhan@1879'
        }
    });

    let info = await transporter.sendMail({
        from: 'magizhan009@gmail.com',
        to: 'manimaranraina2501@gmail.com',
        subject: 'New Contact Form Submission',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
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