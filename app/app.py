import requests
import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Fetch a random quote from the API
    try:
        response = requests.get('https://api.quotable.io/random')
        response.raise_for_status()
        data = response.json()
        quote = data['content']  # Get the actual quote text
        author = data['author']  # Get the author of the quote
    except ValueError:
        quote = "Error: Could not retrieve quote"
        author = "Unknown"
    except requests.exceptions.RequestException as e:
        quote = "Could not fetch quote at this time."
        author = ""
        print(f"Error fetching quote: {e}")

    return render_template('index.html', quote=quote, author=author)

if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_DEBUG', 'False').lower() in ['true', '1', 't']
    app.run(debug=debug_mode)
