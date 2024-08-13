const queryParams = {};
(() => {
    try {
        let url = window.location.search;
        if (url) {
            url = decodeURIComponent(url);
        }
        const temp1 = url.split("?");
        if (temp1 && temp1.length > 1) {
            const temp2 = temp1[1].split("&");
            if (temp2 && temp2.length) {
                temp2.forEach((arr) => {
                    const temp3 = arr.split("=");
                    if (temp3 && temp3.length === 2) {
                        queryParams[temp3[0]] = temp3[1];
                    }
                }
                );
            }
        }
    } catch (err) {
        console.log(err);
    }
}
)();

var object = {
    jsonData: {
        userId: queryParams["userId"],
        env: queryParams["env"],
        gameId: "2RhSh3xTg9WIUd4mhb4vOcvaNyXsz6x-ImBLjmPYkehiAzFuvcRgAA==",
    },
    score: 0,
};

console.log('Query Params:', queryParams)
console.log('Object:', object)

function sendScore(score, user = 'vfrvr') {
    console.log('All Params:', score, user)
    const url = queryParams["env"];
    object.score = score;
    fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => {
        return res.json();
    }
    ).then((data) => {
        console.log(data);
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

