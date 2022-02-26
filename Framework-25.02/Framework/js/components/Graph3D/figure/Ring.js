Figure.prototype.ring = (R = 15, count = 50) => {
    const points = [];
    const dt = 2 * Math.PI / count;
    for (let z = 0; z < 5; z++) {
        let t = 0;
        while (t < 2 * Math.PI) {
            points.push(new Point(
                R * Math.cos(t),
                R * Math.sin(t),
                10 * z
            ));
            t += dt
        }
    }
    return new Subject(points);
}