function loadApp(width = 1200 ,height = 500) {
    $('#book').turn({
        width: width,
        height: height,
        elevation: 50,
        gradients: true,
        autoCenter: true
    });
}
export {loadApp};

loadApp();


