"use strict";

const Emotion = require("@emotion/css");

exports.emptyStyle = undefined;

exports.emptyStyleProperty = undefined;

exports.global = Emotion.Global;

exports.css_ = Emotion.css;

exports.important = prop => typeof prop === "string" ? prop + " !important" : prop;

exports.keyframes_ = Emotion.keyframes;
