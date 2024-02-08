export class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetchError';
    }
}

export class DataError extends Error{
    constructor(message) {
        super(message);
        this.name = 'DataError';
    }
}

export class RenderError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RenderError';
    }
}