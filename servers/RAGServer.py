from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import logging

app = Flask(__name__)

CORS(app)

app.config['UPLOAD_FOLDER'] = 'uploads'
ALLOWED_EXTENSIONS = {'pdf', 'docx', 'doc'}

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def allowed_file(filename):
    """Check if the file extension is allowed."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/submit_form', methods=['POST'])
def submit_form():

    name = request.form.get('name')
    email = request.form.get('vit_email')
    phone_no = request.form.get('phone_no')
    edu_qualifications = request.form.get('degree')
    year_of_passing = request.form.get('cgpa')
    position = request.form.get('department')
    experience = request.form.get('experience')
    resume = request.form.get('link')
    
    logger.info(f"Received form submission: {name}, {email}, {phone_no}, {edu_qualifications}, {year_of_passing}, {position}, {experience}, {resume}")

    uploaded_files = request.files.getlist('file')
    firebase_links = []
    
    for file in uploaded_files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            firebase_links.append(file_path)
        else:

            return jsonify({'message': 'Invalid file type or file not found.'}), 400

    logger.info("Form submitted successfully")
    return jsonify({'message': 'Form submitted successfully!'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
