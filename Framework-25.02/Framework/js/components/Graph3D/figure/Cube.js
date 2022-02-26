Figure.prototype.cube = () => {
    return new Subject([
        new Point(-10, 10, -10), new Point(10, 10, -10), 
        new Point(10, -10, -10), new Point(-10, -10, -10),
        new Point(-10, 10, 10), new Point(10, 10, 10), 
        new Point(10, -10, 10), new Point (-10, -10, 10)
    ],
        [new Edge(0, 1), new Edge(0, 3), new Edge(0, 4), new Edge(3, 2),
        new Edge(2, 1), new Edge(3, 7), new Edge(7, 6), new Edge(7, 4),
        new Edge(4, 5), new Edge(2, 6), new Edge(6, 5), new Edge(1, 5)
        ],
        [new Polygon([0, 1, 2, 3], "white"), new Polygon([4, 5, 6, 7], "red"),
        new Polygon([0, 1, 5, 4], 'blue'), new Polygon([1, 2, 6, 5], 'yellow'),
        new Polygon([2, 3, 7, 6], 'green'), new Polygon([0, 3, 7, 4], 'black')
        ])
}