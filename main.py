from flask import *

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/aboutus")
def aboutus():
    return render_template('aboutus.html')

@app.route("/play")
def play():
    id = request.args.get('id', default = "", type = str)
    return render_template('play.html', id=id)

app.run(host = "0.0.0.0", port = 25565)