export class Ajax {
    static get(successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:4001/comments');
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if(xhr.status === 200 || xhr.status === 304) {
                    const obj = JSON.parse(xhr.response);
                    successCallback(obj)
                } else {
                    errorCallback(xhr);
                }
            }
        }
    }
}