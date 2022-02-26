class Graph3DComponent extends Component {
    constructor(options) {
        super(options);

        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
            CAMERA: new Point(0, 0, -50),
            DISPLAY: new Point(0, 0, -30)
        };
        this.canvas = new Canvas({
            WIN: this.WIN,
            id: 'graphics',
            callbacks: { 
                wheel: event => this.wheel(event),
                mouseMove: event => this.mouseMove(event),
                mouseDown: () => this.mouseDown(), 
            }
        });

        this.graph3D = new Graph3D({
            WIN: this.WIN,
        });

        this.figure = (new Figure).cube();
        this.dx = 0;
        this.dy = 0;
        this.render();
    }

    mouseDown(event) {
        this.dx = event.offsetX;
        this.dy = event.offsetY;
        this.canRotate = true;
    }

    mouseUp() {
        this.canRotate = false;
    }

    mouseMove(event) {
        const gradus = Math.PI / 180 / 4;
        this.figure.points.forEach (point => {
            this.graph3D.rotateOy((-this.dy + event.offsetY) * gradus, point);
            this.graph3D.rotateOx((-this.dx + event.offsetX) * gradus, point);
        });
        this.dx = event.offsetX; 
        this.dy = event.offsetY;
        this.render();
    }
    
    _addEventListeners() {
        document.addEventListener('keydown', event => this.keyDownHanler(event));
    }

    keyDownHanler(event) {
        switch (event.keyCode) {
            case 65: //a
                this.figure.points.forEach(point => this.graph3D.move(-1, 0, 0, point));
                this.render();
                break;
            case 68: //d
                this.figure.points.forEach(point => this.graph3D.move(1, 0, 0, point));
                this.render();
                break;
            case 83: //s
                this.figure.points.forEach(point => this.graph3D.move(0, -1, 0, point));
                this.render();
                break;
            case 87: //w
                this.figure.points.forEach(point => this.graph3D.move(0, 1, 0, point));
                this.render();
                break;
        }
    }

    wheel(event) {
        const delta = (event.wheelDelta > 0) ? 0.9 : 1.1;
        this.figure.points.forEach(point => this.graph3D.zoom(delta, point));
        this.render();
    }

    render() {
        this.canvas.clear();
        this.graph3D.calcDistance (this.figure);
        this.graph3D.sartByAtristAlgoritm (this.figure);
        this.figure.polygons.forEach(polygon => {
            const points = [];
            polygon.points.forEach(point => points.push({
                x: this.graph3D.xs(this.figure.points[point]),
                y: this.graph3D.ys(this.figure.points[point])
            })
            );
            this.canvas.polygon(points, polygon.color);
        });
        
        this.figure.edges.forEach(edge => {
            const point1 = this.figure.points[edge.p1];
            const point2 = this.figure.points[edge.p2];
            this.canvas.line(
                this.graph3D.xs(point1), this.graph3D.ys(point1),
                this.graph3D.xs(point2), this.graph3D.ys(point2)
            );
        });
        this.figure.points.forEach(el => {
            this.canvas.point(this.graph3D.xs(el), this.graph3D.ys(el));
        });
    };
}