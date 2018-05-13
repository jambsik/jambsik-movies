export class JmbFetch {
    static _headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    static _method(method, url, opts) {
        return fetch(url, {...opts, method, ...this._headers});
    }

    static get(url, opts = {}) {
        return this._method('GET', url, opts).then(res => res.json());
    }
}
