export class Ajax {
    static get(url, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 304) {
                    const obj = JSON.parse(xhr.response);
                    successCallback(obj)
                } else {
                    errorCallback(xhr);
                }
            }
        }
    }

    // static post(url, data, successCallback, errorCallback) {
    //     const xhr = new XMLHttpRequest();
    //
    //     xhr.open('POST', url);
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify(data));
    //
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200 || xhr.status === 304) {
    //                 const obj = JSON.parse(xhr.response);
    //                 successCallback(obj)
    //             } else {
    //                 errorCallback(xhr);
    //             }
    //         }
    //     }
    // }
}

