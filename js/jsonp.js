function getTip(data) {
    data = data[1];
    console.log(data);
    let TipArray = [];
    for (let index=0; index < data.length; index++) {
        TipArray[index] = data[index][0];
    }
    window.setGoogleSearchTip(TipArray);
}