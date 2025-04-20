#!/usr/bin/env node
"use strict"

Object.getOwnPropertyNames(Math).forEach((name) => {
	global[name] = Math[name]
})

const exit = process.exit

import assert from "assert"

import * as core from '../src/core.mjs';
for (const [key, value] of Object.entries(core)) {
  if (typeof value === 'function') {
    globalThis[key] = value;
  }
}

/**
 * Creates a range of numbers, similar to Python's range function.
 * @param {number} start - The start value (included if provided as first arg, otherwise 0)
 * @param {number} stop - The end value (excluded)
 * @param {number} step - The step value (default 1)
 * @returns {Array} - Array containing the range of numbers
 */
function range() {
	let start, stop, step

	// Parse arguments similar to Python's range
	if (arguments.length === 1) {
		start = 0
		stop = arguments[0]
		step = 1
	} else if (arguments.length === 2) {
		start = arguments[0]
		stop = arguments[1]
		step = 1
	} else if (arguments.length === 3) {
		start = arguments[0]
		stop = arguments[1]
		step = arguments[2]
	} else {
		throw new Error("range requires at least one argument")
	}

	// Validate inputs
	if (step === 0) {
		throw new Error("range() step argument must not be zero")
	}

	const result = []

	// Handle positive and negative steps
	if (step > 0) {
		for (let i = start; i < stop; i += step) {
			result.push(i)
		}
	} else {
		for (let i = start; i > stop; i += step) {
			result.push(i)
		}
	}

	return result
}
