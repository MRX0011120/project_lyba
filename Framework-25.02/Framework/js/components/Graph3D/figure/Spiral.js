Figure.prototype.spiral = (a = 10, count = 10) => {
    const points = [];
    let t = 0;
    const dt = 2 * Math.PI / count;
    while (t < 2 * Math.PI) {
        points.push(new Point(
            a * Math.cos(t) / t,
            a * Math.sin(t) / t,
            0
        ));
        t+= dt;
    }
    edges=[];
    for(let i=0; i<points.length; i++){
        if(i+1<points.length){
            edges.push(new Edge(i, i+1));
        }  
    }
    return new Subject(points, edges);
}