from flask import Flask, request, jsonify
import base64
import cv2
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Load the pre-trained face detection model from OpenCV
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

images = [
    {
        'name': 'Meyli',
        'image': 'Okay.jpg'
    }
]

references = []
for image in images:
    # Load the reference image
    reference_image = cv2.imread(image['image'])

    scale_factor = 0.2  # You can adjust this factor according to your needs
    resized_image = cv2.resize(reference_image, None, fx=scale_factor, fy=scale_factor)
    gray = cv2.cvtColor(resized_image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

    # Extract the face region from the reference image
    if len(faces) > 0:
        x_ref, y_ref, w_ref, h_ref = faces[0]
        face_reference = reference_image[y_ref:y_ref+h_ref, x_ref:x_ref+w_ref]
        references.append({
            'name': image['name'],
            'image': face_reference
        })
    else:
        print("No faces detected in the reference image.")
        exit()

# # Load the reference image
# reference_image = cv2.imread('hayden.jpg')

# scale_factor = 0.2  # You can adjust this factor according to your needs
# resized_image = cv2.resize(reference_image, None, fx=scale_factor, fy=scale_factor)
# gray = cv2.cvtColor(resized_image, cv2.COLOR_BGR2GRAY)
# faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

# # Extract the face region from the reference image
# if len(faces) > 0:
#     x_ref, y_ref, w_ref, h_ref = faces[0]
#     face_reference = reference_image[y_ref:y_ref+h_ref, x_ref:x_ref+w_ref]
# else:
#     print("No faces detected in the reference image.")
#     exit()


@app.route('/api/face-recognition', methods=['POST'])
@cross_origin(origin='*')
def face_recognition():
    try:
        if 'frameData' in request.files:
            frame_data = request.files['frameData'].read()

            # Convert the image data to a NumPy array
            image_array = np.frombuffer(frame_data, np.uint8)

            # Decode the image
            image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

            # Convert the frame to grayscale for face detection
            gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

            # Detect faces using OpenCV
            faces_video = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

            result = {'match': False, 'similarity': 0.0}
            highest_similarity = 0.0
            for (x, y, w, h) in faces_video:
                face_video = image[y:y+h, x:x+w]

                for reference in references:
                    face_reference = reference['image']
                    face_reference_resized = cv2.resize(face_reference, (w, h))

                    similarity = cosine_similarity(
                        face_reference_resized.flatten().reshape(1, -1),
                        face_video.flatten().reshape(1, -1)
                    )[0][0]

                    threshold = 0.8
                    match = bool(similarity > threshold)

                    # Convert the NumPy boolean to a regular Python boolean
                    if similarity > highest_similarity and match:
                        highest_similarity = similarity
                        result = {'match': match, 'similarity': float(similarity), 'name': images[references.index(reference)]['name']}

                if result['match']:
                    break;

            return jsonify(result)

        else:
            return jsonify({'error': 'Missing frameData parameter'})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
