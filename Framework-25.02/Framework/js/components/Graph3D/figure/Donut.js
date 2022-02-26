Figure.prototype.donut = (r = 2, count = 10, R = 6) => {
    const points = [];
    let t = 0;
    const dt = 2 * Math.PI / count;
    //const f= Math.PI * 5 / 10;
    //const s = Math.PI * 15 / 10 ;
    while (t < 2 * Math.PI) {
        points.push(new Point(
            (R + r * cos(Math.PI * 15 / 10 )) * cos(Math.PI * 5 / 10),
            (R + r * cos(Math.PI * 15 / 10 )) * sin(Math.PI * 5 / 10),
            0
        ));
        t += dt;
    }
    return new Subject(points);
}