"use strict"

export function push(v, a) {
	v.push(a)
}

export function _norm(a) {
	if (a === undefined) return null
	return a
}

export function _get(a, k) {
	if (a instanceof Map) return _norm(a.get(k))
	return a[k]
}

export function _set(a, k, x) {
	if (a instanceof Map) a.set(k, x)
	else a[k] = x
	return x
}

export function len(a) {
	if (a instanceof Map) return a.size
	return a.length
}
