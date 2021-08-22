from flask import *

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/aboutus")
def aboutus():
    return render_template('aboutus.html')

@app.route("/watch")
def watch():
    id = request.args.get('id', default = "", type = str)
    return render_template('watch.html', id=id)

@app.route("/404")
def notFound():
    error = request.args.get('error', default = "", type = str)
    return render_template('404.html', error=error)

@app.route("/play")
def play():
    return render_template('play.html')

@app.route("/parse")
def parse():
    url = request.args.get('url', default = "", type = str)
    return render_template('parse.html', url=url)

app.run(host = "0.0.0.0", port = 25565)