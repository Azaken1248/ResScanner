from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os


app = Flask(__name__)


app.config['UPLOAD_FOLDER'] = 'uploads'


if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

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
    
    details = [name,email,phone_no,edu_qualifications,year_of_passing,position,experience,resume]
    
    print(details)
    
    uploaded_files = request.files.getlist('file')
    
    for file in uploaded_files:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        

        file.save(file_path)

    return jsonify({'message': 'Form submitted successfully!'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
