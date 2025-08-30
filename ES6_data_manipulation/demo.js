#!/usr/bin/node

// Allocate 16 bytes (128 bits) of memory
let buffer = new ArrayBuffer(16);

// Create a typed array view over that buffer
let int32View = new Int32Array(buffer);

int32View[0] = 42;
int32View[1] = 100;
console.log(int32View); // Int32Array(4) [42, 100, 0, 0]
