Figure.prototype.sphere = (r = 10, count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];
    const twoPi = 2 * Math.PI;

    // t = 0 .. Pi
    // f  = 0..2*Pi
    // x = R * sin(t) * cos(f)
    // y = R * sin(t) * sin(f)
    // z = R * cos(f)

    const df = 2 * Math.PI / count;
    const dt = twoPi / count;
    let t = 0;
    while (t < Math.PI) {
        let f = 0;
        while (f < twoPi) {
            points.push(new Point(
                r * Math.sin(t) * Math.sin(f),
                r * Math.cos(t),
                r * Math.sin(t) * Math.cos(f),
            ));
            f += df;
        }
        t += dt;
    }

    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            if ((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }
    return new Subject(points, edges, polygons);
};