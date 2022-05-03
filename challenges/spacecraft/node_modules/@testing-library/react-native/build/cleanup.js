"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanup;
exports.addToCleanupQueue = addToCleanupQueue;
let cleanupQueue = new Set();

function cleanup() {
  cleanupQueue.forEach(fn => fn());
  cleanupQueue.clear();
}

function addToCleanupQueue(fn) {
  cleanupQueue.add(fn);
}