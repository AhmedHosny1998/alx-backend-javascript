function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);
    
    // Create a new Int8Array view on the buffer
    const int8View = new Int8Array(buffer);
    
    // Check if the position is within the range of the array
    if (position >= length || position < 0) {
        throw new Error('Position outside range');
    }
    
    // Set the value at the specified position
    int8View[position] = value;
    
    // Return the ArrayBuffer
    return buffer;
}
