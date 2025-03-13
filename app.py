from flask import Flask, render_template, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

#Set the target countdown time (adjust this as needed)
COUNTDOWN_TARGET = datetime.now() + timedelta(minutes=5) #5-minute countdown

@app.route('/')
def index():
    return ('index.html')

@app.route('/countdown')
def countdown():
    """Returns the remaining time in seconds"""
    now = datetime.now()
    remaining = (COUNTDOWN_TARGET - now).total_seconds()
    return jsonify({'remianing_seconds': max(0, int(remaining))})

if __name__ == '__main__':
    app.run(debug=True)
