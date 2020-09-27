const url = "https://spreadsheets.google.com/feeds/list/1-cvS-r8_Xf9-CMedUa3BFR-2AulcdfCuzI8YswUR7hk/1/public/full?alt=json";

window.onload = fetchData

function fetchData() {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            data = result.feed.entry;
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
}

function parseKey(obj, key) {
    return obj["gsx$" + key].$t.trim();
}