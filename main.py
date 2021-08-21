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
    return render_template('play.html')

app.run(host = "0.0.0.0", port = 25565)