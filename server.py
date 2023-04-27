from flask import Flask, render_template, request
import flask
from flask_socketio import SocketIO

app = flask.Flask(__name__)
app.config['SECRET_KEY'] = 'secret!123'
sio = SocketIO(app)

@app.route("/")
def index():
    return flask.render_template("Canvas.html")

@app.route("/static/<path>")
def staticPath(path):
    return flask.Response(response=open(f"./static/{path}", "r", encoding="utf-8").read(), mimetype="application/javascript")

players = []

@sio.on('connect')
def sioConnect():
    print(request.sid)
    players.append({"sid": request.sid})

@sio.on('disconnect')
def sioDisconnect():
    for i in range(len(players)):
        if players[i]['sid'] == request.sid:
            players.pop(i)
            print(players)
    
@sio.on("playerData")
def sioData(pData):
    pData['sid'] = request.sid
    for i in range(len(players)):
        if players[i]['sid'] == request.sid:
            players[i] = pData
    sio.emit("updatePlayers", players)



if __name__ == "__main__":
    #app.run('0.0.0.0', 80, debug=True)
    sio.run(app=app, host='0.0.0.0', port=80, debug=True)